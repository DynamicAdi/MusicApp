import React, {useState} from "react"


export const States = () => {
    const [isLyricsVisible, setIsLyricsVisible] = useState<boolean>(false)


    return {isLyricsVisible, setIsLyricsVisible}
}