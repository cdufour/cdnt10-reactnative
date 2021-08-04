import React from 'react';
import { View } from 'react-native';

export const Square = ({bgColor}) => {
  return(
    <View style={{ 
      height:20, 
      width:20, 
      backgroundColor: bgColor
    }}></View>
  )
}