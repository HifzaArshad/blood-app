import React,{useState} from 'react';
import {View,StyleSheet,Image,TextInput} from 'react-native';
import {Button,Text,Icon,Textarea} from 'native-base';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

function Donor (){

    const[a_name,setName]=useState('');
    const[b_blood,setBlood]=useState('');
    const[c_gender,setGender]=useState('');  
    const[d_number,setNumber]=useState('');
    const[e_address,setAddress]=useState('');
    const set_item=()=>{
        let user={
           a_name,
           b_blood,
           c_gender,
           d_number,
           e_address
        }
        database().ref('donors').push(user)
        alert('you have registered successfully!')
      
      
    }
    return(

            <View>
     <Text style={{ marginLeft:28, color:'#B22222',fontSize:19,marginTop:20,fontWeight:'700'}} >DONOR DETAILS</Text>
      <View style={{justifyContent:'center',alignItems:'center'}}> 
        <TextInput  value={a_name} onChangeText={(e)=>setName(e)}   style={styles.input} placeholder=' Enter Name'/>
         </View> 


       <View style={{justifyContent:'center',alignItems:'center'}}> 
        <TextInput  value={b_blood} onChangeText={(e)=>setBlood(e)}   style={styles.input}  placeholder=' Enter Your Blood Group'/>
        </View> 

        <View style={{justifyContent:'center',alignItems:'center'}}> 
        <TextInput value={c_gender} onChangeText={(e)=>setGender(e)} style={styles.input} placeholder=' Enter Your Gender'/>
         </View>
         
         <View style={{justifyContent:'center',alignItems:'center'}}> 
        <TextInput value={d_number} onChangeText={(e)=>setNumber(e)} style={styles.input} placeholder=' Enter Your Contact Number'/>
         </View>
         <Textarea value={e_address} onChangeText={(e)=>setAddress(e)} rowSpan={5}  bordered rounded placeholder="Enter Address" />

            <Button onPress={set_item} style={styles.btn} rounded >
          <Text style={styles.txt}>Submit</Text>
         </Button>

            </View>

 )}


 
const styles = StyleSheet.create({
    container: {
        flex:1,
     backgroundColor:'white'
    
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
}

})

 export default Donor;