import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

function CustomText ({ style, children }) {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
    text: {
        // fontFamily: 'sf-regular'
    }
})
export default CustomText;