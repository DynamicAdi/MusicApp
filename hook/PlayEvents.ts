import { useState, useEffect, useMemo } from "react";
import { Audio } from "expo-av";
import {useDispatch, useSelector} from "react-redux";
import { setBuffer as load, setDuration as time, setHighlightLine, setPlaying, setPosition as currentPosition, setLyrics, setIsSeeking } from "@/context/Audio";


const usePlay = (uri: string) => {
  // OLD CODE
  // const [playing, setPlaying] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  
  // const [isSeeking, setIsSeeking] = useState<boolean>(false);
  const [Buffer, setBuffer] = useState<boolean>(true);

  // const [lyrics, setLyrics]:any = useState('');
  // const [highlightLine, setHighlightLine] = useState('');

  const [sound, setSound] = useState<Audio.Sound>();
  const [status, setStatus] = useState<any>();
  const [duration, setDuration] = useState<any>(0);
  const [remaining, setRemainingDuration] = useState<number>(0);

  // New Variables Code
  const dispatch = useDispatch();
  const {playing, position:pos, isSeeking, lyrics } = useSelector(
    (state: any) => state.audio
  );
  


  useEffect(() => {
    const loadSound = async () => {
          const { sound } = await Audio.Sound.createAsync(
            { uri: uri },
            { shouldPlay: true },
          );
          setSound(sound);
          const initState = await sound.getStatusAsync();
          setStatus(initState);
          
          if (initState.isLoaded && initState.isBuffering) {
            setBuffer(false);
            dispatch(load(false), setPlaying(true))
          }
    };
    
    loadSound();
    
    return () => {
      if (sound) {
        dispatch(setPlaying(false));
        sound.unloadAsync();
      }
    };
  }, [uri]);
  
  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate((status) => {
        if(status.isLoaded) {
          setDuration(status.durationMillis);
          setPosition(status.positionMillis);
          dispatch(currentPosition(status.positionMillis), time(status.durationMillis));
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
    if(lyrics !== undefined) {
     const lines = lyrics.split('\n');
      let currentLineIndex:any = -5;
      for (let i = 0; i < lines.length; i++) {
        const lineStartTime = (i / lines.length) * duration;
        if (lineStartTime <= position) {
          currentLineIndex = i;
        }
      }
      dispatch(setHighlightLine(currentLineIndex))
    }
  }, [position, lyrics, duration]);


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
    loop,
    Buffer,
    handleSeek,
    duration,
    remaining,
  };
};

export default usePlay;
