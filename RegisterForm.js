import React, { useState } from "react";
import { Text,TextInput, View, StyleSheet,TouchableOpacity,Alert} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from "./Header";




const RegisterForm = () => {
     const [text,setText] = useState('');
     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');
     const [cpass,setCpass] = useState('');
     const [mobNum,setMobNum] = useState()
     const [gender,setGender] = useState('');
     const [nationality,setNationality] = useState('');



const alertFunction =() =>{
     Alert.alert(
        'Hey There!',
        'Two button alert dialog',
        [
          {text: 'Yes', onPress: () => console.log('Yes button clicked')},
          {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},
        ],
        { 
          cancelable: true 
        }
      );
}
  return (
      <KeyboardAwareScrollView>
    <View  style={{flex:1,justifyContent:"center"}} >
      <Header />
      <View style={{flex:0.4}}></View>
        
      <View style={styles.form}> 
      <Text style={styles.text}>Register Form </Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="Full Name"
        value={text}
      />
      
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Email"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
      />
      <TextInput
        style={styles.input}
        onChangeText={setCpass}
        placeholder="Confirm Password"
        value={cpass}
      />
      <TextInput
        style={styles.input}
        onChangeText={setMobNum}
        placeholder="Mobile Number"
        value={mobNum}
      />
      </View>
      <View style={styles.radiorow}>
      
          <Text>Gender</Text>
        
    <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
      <View style={styles.viewradio} >
        <RadioButton value="male" />
         <Text>Male</Text>
         <RadioButton value="female" />
         <Text>Female</Text>
      </View>
      
    </RadioButton.Group>
    </View>
    
    <View style={styles.radiorow}>
    <Text>Nationality</Text>
    <RadioButton.Group onValueChange={newVal => setNationality(newVal)} value={nationality}>
      <View style={styles.viewradio} >
        <RadioButton  value="indian" />
         <Text>Indian</Text>
         <RadioButton value="others" />
         <Text>Others</Text>
      </View>
      
    </RadioButton.Group>
   </View>
   <TouchableOpacity style={styles.button}>
       <Text style={styles.text} onPress={()=>{alertFunction}}>Register</Text>
   </TouchableOpacity>

      </View>
      
      </KeyboardAwareScrollView>


    

  )

}
const styles = StyleSheet.create({
    text :{
        color:"#000",
        fontWeight:"bold",
        fontSize:22,
        fontFamily:'san serif',
        padding:10
        
      },
    
   form:{
       paddingLeft:60,
       paddingRight:60
   },
  input:{
      alignSelf:"stretch",
      borderBottomColor:"#414",
      paddingBottom:5,
      borderBottomWidth:2
},
//----- radio group style----//
  radiorow :
    {
    paddingHorizontal:60,
    marginTop:8,
    flex:0.07,
    justifyContent:'space-between',
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center"
},
viewradio:{
    flexDirection:"row",
    alignItems:"center"
},
//------register-.......// 
button:{
    marginVertical:48,
    padding:4,
    fontFamily: 'Arial',
    fontWeight:'bold',
    alignSelf:"center",
    borderRadius:14,
    backgroundColor:'#3eb4e4',
    

}

})



export default RegisterForm;

