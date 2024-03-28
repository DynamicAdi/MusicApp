import React, {useState} from "react"


export const States = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isLyricsVisible, setIsLyricsVisible] = useState<boolean>(false)


    return {isPlaying, setIsPlaying, isLyricsVisible, setIsLyricsVisible}
}