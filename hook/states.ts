import React, {useState} from "react"


export const States = () => {
    const [isLyricsVisible, setIsLyricsVisible] = useState<boolean>(false)
    const [songId, setSongId] = useState<string>("")

    return {isLyricsVisible, setIsLyricsVisible, setSongId, songId}
}