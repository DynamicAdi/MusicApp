import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { COLORS, SIZES, THEME } from '@/constants'

const Title = ({title, iconName, color}:{
    title: string,
    iconName?: any,
    color?: string,  
}) => {
  return (
    <>
    <Text style={{
            color: THEME[useColorScheme() ?? 'light'].text,
            fontSize: SIZES.xxxl,
            fontFamily: "pop-semi",
            }}>{title} <Feather name={iconName} style={{
                fontSize: 26,
                color: `${color===undefined ? THEME[useColorScheme() ?? 'light'].text : color}`
            }}/></Text>
    </>
  )
}

export default Title