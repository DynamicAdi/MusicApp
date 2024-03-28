import { View, Text } from 'react-native'
import React from 'react'
import DetailsScreen from '@/components/common/Details';
import { Stack, useGlobalSearchParams } from 'expo-router';
import useSavan from '@/hook/savan';


const Details = () => {
  const route:any = useGlobalSearchParams()
  const {data, error, Loading} = useSavan('albums', route.id)
  return (
    <>
      <Stack.Screen 
  options={{headerShown: false}}
  />

      <DetailsScreen 
      data={data}
      error={error}
      Loading={Loading}
      />
    </>
  )
}
export default Details;