import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Image,TextInput,} from 'react-native';
import {Button,Text,List} from 'native-base';
import database from '@react-native-firebase/database';
import auth, { firebase } from '@react-native-firebase/auth';
import { Card, ListItem, } from 'react-native-elements'

function Acceptor(props){
 
    const [data, setData] = useState([]);

  useEffect(() => {
   
    firebase.database().ref('donors').on('value',snapshot=> {
            const data1=snapshot.toJSON()
         
            setData(Object.values(data1))
            })
    
     
  }, []);
  console.log('setdata..',data)
   
    return(
        <View>



<Card>
  <Card.Title>DONORS</Card.Title>
  <Card.Divider/>
  {
    data.map((u, i) => {
      return (
        <View key={i} >
         
          <Text  >Name:{u.a_name}</Text>
          <Text >Blood group:{u.b_blood}</Text>
          <Text >Gender:{u.c_gender}</Text>
          <Text >Number:{u.d_number}</Text>  
          <Text>Address:{u.e_address}</Text>
          <Button onPress={(()=>props.navigation.navigate('Home'))}>Back</Button>
        </View>

         
      );
    })
  }
</Card>
         
        </View>

)}

export default Acceptor