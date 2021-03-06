import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }


  render() {
    const { visible } = this.state;
    return (
      <View style={styles.background}>
        <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255,0.0)"
          source={require("../assets/skull-loop.json")}
          animationStyle={styles.lottie}
          speed={1}
          loop={true}
        >
          <Text style={{fontSize:30, color:'white',fontWeight:'bold',fontFamily:'sans-serif-medium',}}>Loading...</Text>
        </AnimatedLoader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 400,
    height: 300,
  },
  background:{
    opacity:1,
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    zIndex:1
  }
});