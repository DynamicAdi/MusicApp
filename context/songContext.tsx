// import React, {createContext, useState, useContext, ReactNode} from "react";

// interface songData {
//     id: string,
//     title: string,
//     image: any,
//     duration: any,
//     label: string,
//     name: string,
//     hasLyrics: boolean,
//     artists: any
// }

// interface songContextType {
//     songData: songData | null;
//     storeSongData: (data: songData) => void 
// }

// const songContext = createContext<songContextType | undefined>(undefined);

// export const useSongContext = ():songContextType => {
//     const context = useContext(songContext)
//     if(!context) {
//         alert('error')
//         throw new Error("useSong isn't used Properly")
//     }

//     return context;
// }

// interface Props {
//     children: ReactNode
// }

// export const SongProvider = ({children}:Props):JSX.Element => {
//     const [songData, setSongData] = useState<songData | null>(null);

//     const storeSongData = (data: songData): void => {
//         setSongData(data);
//     }

//     return (
//         <songContext.Provider value={{songData, storeSongData}}>
//             {children}
//         </songContext.Provider>
//     )
// }