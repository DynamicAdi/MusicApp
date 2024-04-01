import useSavan from "./savan";

export const useLyrics = (songId:any) => {
    const {data, Loading, refetch} = useSavan("songs", songId, "lyrics");
    let formattedLyrics:any
    try {  
        const lyricsResponse:string = (data as any).lyrics;
        formattedLyrics = lyricsResponse.replace(/<br\s*\/?>/gi, '\n');
    }
    catch {
       formattedLyrics = 'error'
    }
        return formattedLyrics;
}