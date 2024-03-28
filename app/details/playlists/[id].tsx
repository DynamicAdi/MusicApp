import DetailsScreen from "@/components/common/Details";
import useSavan from "@/hook/savan";
import { Stack, useGlobalSearchParams } from "expo-router";
import { useState } from "react";

const Playlist = () => {
    const [limit, setLimit] = useState(10);
    const route:any = useGlobalSearchParams(); 
    const {data, error, Loading, refetch} = useSavan("playlists", route.id, limit);
  
    return (
        <>
        <Stack.Screen 
        options={{headerShown: false}}
        />
        <DetailsScreen
        data={data}
        error={error}
        Loading={Loading}
        limit={limit}
        setLimit={setLimit}
        refetch={refetch}
        />
      </>
    )
  }
  
export default Playlist;