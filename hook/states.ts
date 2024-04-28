import { setPlaying } from "@/context/Audio"
import React, {useMemo, useState} from "react"
import {useDispatch, useSelector} from "react-redux"

export const States = () => {
    const [isLyricsVisible, setIsLyricsVisible] = useState<boolean>(false)
    const [songId, setSongId] = useState<string>("")

    return {isLyricsVisible, setIsLyricsVisible, setSongId, songId}
}

// export const handlePress = () => {
//     const dispatch = useDispatch()
//     const playing = useSelector((state: any) => state.audio.playing);
//     // const isPlaying = useMemo(() => playing, [playing]);
//     dispatch(setPlaying(!playing))
//     return playing
// }