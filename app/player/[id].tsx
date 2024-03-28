import { View, Text, ActivityIndicator, useColorScheme } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ControlPlayer from '@/components/common/ControlPlayer'
import useSavan from '@/hook/savan';
import { Stack, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { THEME } from '@/constants';
// import MiniPlayer from '@/components/common/MiniPlayer';


const Player = () => {
  const scheme = useColorScheme();
  const route:any = useGlobalSearchParams(); 
   const { data, error, Loading, refetch }:{
    data: any,
        error: boolean,
        Loading: boolean,
        refetch: () => void,
      } = useSavan("songs", route.id);
    

  return (
  
    <>
           <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
    {
      data[0] === undefined ? (
      <View style={{
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME[scheme ?? 'light'].background
      }}>
        <ActivityIndicator size="large" color={THEME[scheme ?? 'light'].text} />
      </View>
      ) : (
      <>
        <ControlPlayer 
        data={data}
        error={error}
        Loading={Loading}
        refetch={refetch}
        />
      <View style={{display: 'flex'}}>
      {/* <MiniPlayer id={route.id}  /> */}
      </View>
        {/* <Text style={{margin: 40, color: 'white'}}>{`${route.id}`}</Text> */}
        </>
      )
    }
    </>
  )
}

export default Player