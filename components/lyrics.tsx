import useSavan from "@/hook/savan";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";

export const Lyrics = ({songId}:{songId: any}) => {

    const {data, Loading, refetch} = useSavan("songs", songId, "lyrics");
    const [dataState, setDataState] = useState<boolean>(true);


    let formattedLyrics
    try {
    // setTimeout(() => {
        const lyricsResponse:string = (data as any).lyrics;
        formattedLyrics = lyricsResponse.replace(/<br\s*\/?>/gi, '\n');
    // }, 3000);
    // return formattedLyrics
    }
    catch {
       formattedLyrics = 'error'
    }
    
        return (
                <>
                   {Loading ? (<ActivityIndicator color={'white'} size={90}/>) : dataState ? (<>{formattedLyrics}</>) : <ActivityIndicator color={'white'} size={90}/>}
                </>
            )
        
        }
