import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'

// import { SavanHomePage } from '@/hook/savan';
const Savan = () => {
  // const { data, error, Loading, refetch } = SavanHomePage();

  return (
    <View>
      <Text style={{color: "white"}}>hi</Text>
      <Text style={{color: "white"}}>Savan</Text>
      
      {/* {Loading ? (<ActivityIndicator size="large" color="#fff" />) : 
      error ? (<Text>Something went wrong</Text>) : 
      (
        <View>

         <FlatList
         horizontal
         data={data as any[]} // Provide the correct type for the 'data' variable
         keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View>
              <Text style={{color: "white"}}>{item}</Text>
            </View>
          )}
         >


         </FlatList>
        </View>
      )} */}
    </View>
  )
}

export default Savan