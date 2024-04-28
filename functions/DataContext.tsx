import React, { createContext, useContext, useState, useEffect } from "react";
import { Audio } from "expo-av";
import { Text } from "react-native";

interface DataContextProps {
  SongData: any;
  playing: boolean;
  togglePlay: () => void;
  loop: () => void;
  position: number;
  Buffer: boolean;
  setIsSeeking: (value: boolean) => void;
  handleSeek: (value: any) => void;
  duration: number;
  remaining: number;
  setLyrics: (value: any) => void;
  highlightLine: any;
  lyrics: any;

}

export const DataContext: any = createContext<DataContextProps | null>(null);

export function DataProvider({
  children,
  initialData,
}: {
  children: any;
  initialData: any;
}) {
  const [SongData, setSongData] = useState<any>(initialData.songData);
  const [playing, setPlaying] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [status, setStatus] = useState<any>();

  const [position, setPosition] = useState<number>(0);
  const [duration, setDuration] = useState<any>(0);
  const [remaining, setRemainingDuration] = useState<number>(0);

  const [isSeeking, setIsSeeking] = useState<boolean>(false);
  const [Buffer, setBuffer] = useState<boolean>(true);

  const [lyrics, setLyrics]: any = useState("");
  const [highlightLine, setHighlightLine] = useState("");

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri: initialData.uri },
        { shouldPlay: true }
      );
      setSound(sound);
      const initState = await sound.getStatusAsync();
      setStatus(initState);
      if (initState.isLoaded && initState.isBuffering) {
        setBuffer(false);
        setPlaying(true);
      }
    };

    loadSound();

    return () => {
      if (sound) {
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded && status.didJustFinish) {
            setPlaying(false);
            sound.unloadAsync();
          }
        });
      }
    };
  }, [initialData.uri]);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setDuration(status.durationMillis);
          setPosition(status.positionMillis);
        }
      });
    }
  }, [sound]);

  useEffect(() => {
    if (sound) {
      if (playing) {
        sound.playFromPositionAsync(position);
      }
      if (!playing) {
        sound.pauseAsync();
      }
    }
  }, [playing, sound]);

  useEffect(() => {
    const calculateRemainingDuration = () => {
      if (duration > 0) {
        const remaining = duration - position;
        setRemainingDuration(remaining > 0 ? remaining : 0);
      } else {
        setRemainingDuration(0);
      }
    };

    calculateRemainingDuration();
  }, [position, duration]);

  useEffect(() => {
    const lines = lyrics.split("\n");
    let currentLineIndex: any = -5;
    for (let i = 0; i < lines.length; i++) {
      const lineStartTime = (i / lines.length) * duration;
      if (lineStartTime <= position) {
        currentLineIndex = i;
      }
    }
    setHighlightLine(currentLineIndex);
  }, [position, lyrics, duration]);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const loop = () => {
    if (sound) {
      status.isLooping = !status.isLooping;
      sound.setIsLoopingAsync(status.isLooping);
    }
  };
  function handleSeek(value: any) {
    if (sound && isSeeking) {
      sound.setPositionAsync(value);
    }
  }

  return (
    <DataContext.Provider
      value={
{        SongData,
        playing,
        togglePlay,
        loop,
        position,
        Buffer,
        setIsSeeking,
        handleSeek,
        duration,
        remaining,
        setLyrics,
        highlightLine,
        lyrics,
      }
      }
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
}
