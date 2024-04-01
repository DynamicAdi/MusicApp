import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { useLyrics } from "./fetchLyrics";
// import { useLyrics } from "./fetchLyrics";

const usePlay = (uri: string) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [status, setStatus] = useState<any>();

  const [position, setPosition] = useState<number>(0);
  const [duration, setDuration] = useState<any>(0);
  const [remaining, setRemainingDuration] = useState<number>(0);

  const [isSeeking, setIsSeeking] = useState<boolean>(false);
  const [Buffer, setBuffer] = useState<boolean>(true);
  
  const [lyricsIndex, setCurrentLyricIndex] = useState<number>(0);
  const [lyrics, setLyrics]:any = useState();
  // const [highlightedLine, setHighlightedLine] = useState<string>('');
  



  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri: uri },
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
  }, [uri]);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate((status) => {
        if(status.isLoaded) {
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
    const intervalId = setInterval(async () => {
      if (playing) {
        updateCurrentLyricIndex();
      }
    }, 100); // Adjust interval based on desired update frequency

    return () => clearInterval(intervalId);
  }, [playing]); // Only run when audio is playing

  const updateCurrentLyricIndex = () => {
    if (lyrics && position) {
      const totalLyricDuration = lyrics.split('\n').length * 1000000;
      const estimatedLyricIndex = Math.floor((position / status.durationMillis) * totalLyricDuration);
      const safeIndex = Math.min(lyrics.split('\n').length - 1, Math.max(0, estimatedLyricIndex));
      setCurrentLyricIndex(safeIndex);
    }
  };



  const togglePlay = () => {
    setPlaying(!playing);
  };


  const loop = () => {
    if (sound) {
      status.isLooping = !status.isLooping;
      sound.setIsLoopingAsync(status.isLooping);
    }
  };
  function handleSeek(value:any) {
    if (sound && isSeeking) {
      sound.setPositionAsync(value);
    }
  }

  return {
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
    lyricsIndex,
  };
};

export default usePlay;
