import React from 'react';
import {Image,View ,StyleSheet} from 'react-native';



const Header = () => {
     return(
         <View style ={styles.header}>
             <Image style={styles.align} source={require('../assets/img.png')} />
         </View>

     )


}

const styles = StyleSheet.create({
       header:{
        justifyContent:"center",
           height:60,
           padding:25,
           backgroundColor:"#100010",
           alignItems:"center"
           
       },
       align:{
         
    },


})


export default Header;