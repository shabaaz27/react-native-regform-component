import React from "react";
import {  View, StyleSheet } from 'react-native';
import RegisterForm from "./components/RegisterForm";

const App = () => {

  return (
    <View style={styles.container}>
     

     <RegisterForm/>




    </View>

  )

}
const styles = StyleSheet.create({
  container: {
    flex: 2,

  }
})

export default App;

