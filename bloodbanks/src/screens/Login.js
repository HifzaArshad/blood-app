import React,{useState } from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Button,Text,Icon, Form, Item, Input,Label} from 'native-base';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
function Login (props){
  const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
   
    const signin=()=> {
     
    let user={
          email,
          password,
        
      }
      console.log(user)
    
     
      auth()
     .signInWithEmailAndPassword(email,password)
   
     
  .then(() => {
    props.navigation.navigate('Pick')
    console.log('User account created & signed in!');
    
   
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);

 });

    }



   
  
    return(
        <View style={styles.container}>
            
           <View>
         {/* <Image 
           style={styles.img} 
         source={{uri:'https://3.imimg.com/data3/ON/OO/MY-195690/blood-bank-250x250.png'}} 
         /> */}
    
         </View>
      
        
    

        <Form>
            <Item fixedLabel last>
          
            
              <Input value={email} onChangeText={(e)=>setEmail(e)}  style={styles.in} placeholder="Email/Contact" />
            </Item>
            <Item fixedLabel last>
            
              <Input  value={password} onChangeText={(e)=>setPassword(e)} style={styles.in} placeholder="Password" secureTextEntry={true}/>
            </Item>

     
        <Button onPress={signin}  style={styles.btn} rounded >
          
                <Text style={styles.txt}>Submit</Text>
              </Button>

              <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            
         
              <Text style={styles.txt2}  >Not Registered?</Text>
              <Button transparent  onPress={()=>props.navigation.navigate('Registration')} >
                <Text style={styles.txt3}>Create an account</Text>
                  
                  </Button>
              </View>
     
          </Form>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
     backgroundColor:'white'
    
    },
    img:{
        width: 180,
    height: 220,
    resizeMode:'contain',
        marginLeft:80,
        
    },

    btn:{
       marginTop:30,
     
       backgroundColor:'#B22222',
       width:360,
       height:45,
       opacity:0.9,
     },
     txt:{
         marginLeft:135,
         fontWeight:'700'
       
     },
     txt1:{
        marginLeft:160,
        marginTop:30
      
    },
    up:{
        marginLeft:130,
      
      
    },
    txt2:{
        color:'#B22222',
       
    },txt3:{
      marginLeft:100,
      fontWeight:'bold'
    }
 

})

export default Login;