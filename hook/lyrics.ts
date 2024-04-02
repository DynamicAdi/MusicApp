import useSavan from "@/hook/savan";
export const Lyrics =  (songId:string) => {

    const {data, Loading, error} = useSavan("songs", songId, "lyrics");

    let formattedLyrics
    try {  
        const lyricsResponse:string = (data as any).lyrics;
        formattedLyrics = lyricsResponse.replace(/<br\s*\/?>/gi, '\n');
    }
    catch (e) {
           formattedLyrics = 'error';
    }
        return {formattedLyrics, Loading, error}
        
        }
