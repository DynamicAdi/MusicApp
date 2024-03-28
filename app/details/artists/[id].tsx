import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DetailsScreen from '@/components/common/Details';
import { Stack, useGlobalSearchParams } from 'expo-router';
import useSavan from '@/hook/savan';
import ArtistDetails from '@/components/ArtistDetails';

const Details = () => {

  const route:any = useGlobalSearchParams(); 
  const [count, setcount] = useState(10);
   const {data, error, Loading, refetch} = useSavan("artists", route.id, count);
   

  return (
    <>
      <Stack.Screen 
  options={{headerShown: false}}
  />

      <ArtistDetails 
      data={data}
      error={error}
      Loading={Loading}
      count={count}
      refetch={refetch}
      setCount={setcount}
      />
    </>
  )
}
export default Details;