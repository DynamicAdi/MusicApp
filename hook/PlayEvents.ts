import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { useLyrics } from "./fetchLyrics";

const usePlay = (uri: string) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [status, setStatus] = useState<any>();

  const [position, setPosition] = useState<number>(0);
  const [duration, setDuration] = useState<any>(0);
  const [remaining, setRemainingDuration] = useState<number>(0);

  const [isSeeking, setIsSeeking] = useState<boolean>(false);
  const [Buffer, setBuffer] = useState<boolean>(true);

  const [lyrics, setLyrics]:any = useState('');
  const [highlightLine, setHighlightLine] = useState('');  

  



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
    // Split lyrics string into lines
    const lines = lyrics.split('\n');
    // Determine which line to highlight based on positionMillis
    let currentLineIndex:any = -1;
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
    highlightLine,
    lyrics
  };
};

export default usePlay;
