import * as FileSystem from "expo-file-system";
import { useState } from "react";

export const downloadFile = async (uri: string, filename: string) => {
    const [done, setDone] = useState(false); 
  const fileUri = FileSystem.documentDirectory + filename;
  const downloadResumable = FileSystem.createDownloadResumable(
    uri,
    fileUri,
    {},
    (downloadProgress) => {
      const progress =
        downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite;
        
        return progress * 100;
    }
  );

  try {
    const { uri }:any = await downloadResumable.downloadAsync();
    setDone(true);
  } catch (e) {
    console.error(e);
  }

  return {done}
};


