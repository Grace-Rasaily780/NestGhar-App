import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

function Loading() {
    return (
    	<View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator animating={true} size={58} color="#51130190" />
            <View style={{ position: 'absolute', top: '49.5%', left: '48.5%' }}>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    // #51130190
  },
  logo: {
    height: 25,
    width: 30
}
})

export default Loading;
