import React, { Component, useState }  from 'react';
import {View,StyleSheet,Image,Text,TextInput, useColorScheme} from 'react-native';
import {Button, Form,} from 'native-base';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
//  import Unorderedlist from 'react-native-unordered-list';
// import  {ListItem,Avatar}  from 'react-native-elements'

// import Icon from 'react-native-vector-icons/FontAwesome';

function Register(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[number,setNumber]=useState('');
const add_item=()=>{
  let user={
      email,
      password,
      number
  }
  database().ref('users').push(user)
  alert('you have registered successfully!')

  auth()
  .createUserWithEmailAndPassword(email,password)
  .then(() => {
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
<View>  
<Text style={{ marginLeft:28, color:'#B22222',fontSize:19,marginTop:20,fontWeight:'700'}} >PERSONAL DETAILS</Text>
      <View style={{justifyContent:'center',alignItems:'center'}}> 
        <TextInput   value={email} onChangeText={(e)=>setEmail(e)}   style={styles.input} placeholder=' Enter Username'/>
         </View> 


       <View style={{justifyContent:'center',alignItems:'center'}}> 
        <TextInput  value={password} onChangeText={(e)=>setPassword(e)}    style={styles.input} secureTextEntry={true} placeholder=' Enter Password'/>
        </View> 

        <View style={{justifyContent:'center',alignItems:'center'}}> 
        <TextInput value={number} onChangeText={(e)=>setNumber(e)} style={styles.input} placeholder=' Enter Contact Number'/>
         </View>  

            <Button  onPress={add_item} style={styles.btn} rounded >
          <Text style={styles.txt}>Register</Text>
         </Button>
          
     </View>


)}





//     // constructor(){
//     //     super()
//     //     this.state={
//     //         value:'',
           
//     //     }
//     // }
   
//     add_item=(value)=>{
      
      
//         // this.setState({
//         //     todos:[this.state.value],
//         //      value:''
//         //     })
          
//     //    firebase.database().ref('journal').child('todos').push(this.state.value)
//         console.log(value)   
       
//     }
//     onchangeHandle=(e)=>{
     
//         console.log(e)
        
        
//     }
    
//     //  }
  
// //    render(){
   
    // return(
       
    //   <View>
    //     {/* <List>
    //      {todos.map((v,i)=>{
    //             return  <ListItem key={i}><Text>{v}</Text></ListItem>
               
    //          onChangeText={(e)=>this.onchangeHandle(e)}   
    //      })}   
    //   </List> */}
    //       <Text style={{ marginLeft:28, color:'#B22222',fontSize:19,marginTop:20,fontWeight:'700'}} >PERSONAL DETAILS</Text>
    //       <View style={{justifyContent:'center',alignItems:'center'}}>  


      
    //  <TextInput  onChangeText={(e)=>this.onchangeHandle(e)}    style={styles.input} placeholder=' Enter Username'/>


    //          {/* <TextInput value={this.state.value} onChangeText={(e)=>this.onchangeHandle(e)}    style={styles.input} secureTextEntry={true} placeholder='Enter Password'/> */}
    //           <TextInput style={styles.input} placeholder=' Enter Contact Number'/> 

    //         <Button  onPress={add_item} style={styles.btn} rounded >
    //      <Text style={styles.txt}>Register</Text>
    //     </Button>
        
      
        
      
    //   </View>
     
  
                       
                     
                  
//        </View>  
    

//     )



const styles = StyleSheet.create({
    container: {
        flex:1,
       
    
    },
    input:{
        height: 40, 
        borderColor: 'gray',
         borderWidth: 1,
         width:320,
         marginTop:25,
         borderRadius: 20,
         fontSize:16
    },
    
    btn:{
        marginTop:30,
     
        backgroundColor:'#B22222',
        width:320,
        height:45,
        opacity:0.9,
        marginLeft:22

    },
    txt:{
        marginLeft:130,
        color:'white',
        fontWeight:'700'
    },
area:{
    height: 100, 
        borderColor: 'gray',
         borderWidth: 1,
         width:320,
         borderRadius:20

}
    
})


export default Register;

