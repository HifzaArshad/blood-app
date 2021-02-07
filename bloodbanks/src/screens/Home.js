import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {Button,Text,Icon,} from 'native-base';

 function Home (props)  {

   
        return (
         
                <View style={styles.container} >
           

           <View>
         <Image 
           style={styles.img} 
         source={{uri:'https://3.imimg.com/data3/ON/OO/MY-195690/blood-bank-250x250.png'}} 
         />
    
         </View>
  
        <View style={styles.footer}>
              <Button onPress={()=>props.navigation.navigate('Login')}  style={styles.btn} rounded   >
              <Icon style={styles.txt} name='people' />
                <Text style={styles.txt}>Login!</Text>
              </Button>



              {/* <Button onPress={()=>props.navigation.navigate('Registration')}  style={styles.btn} rounded >
              <Icon style={styles.txt} name='people' />
                <Text style={styles.txt}>Registeration</Text>
              </Button> */}
             
              </View>


          </View>
        );
      }
    
      
  
       
          
    


const styles = StyleSheet.create({
    container: {
        flex:1,
     backgroundColor:'white'
    
    },
    img:{
        width: 200,
    height: 200,
    resizeMode:'contain',
  margin:75,
  
    },
footer:{
    flex:1,
    backgroundColor:'#B22222',
},
btn:{
   marginLeft:70,
   marginTop:80,
  marginBottom:-30,
  backgroundColor:'white',
  width:230,
  height:35,
  opacity:0.9
},
txt:{
    color:'#B22222',
     marginLeft:20
}
  
});


export default Home