import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {Button,Text,Icon,} from 'native-base';


function Pick (props){
    return(
        <View style={styles.container}>

            <View>
         <Image 
           style={styles.img} 
         source={{uri:'https://3.imimg.com/data3/ON/OO/MY-195690/blood-bank-250x250.png'}} 
         />
    
         </View>

            <View  style={{justifyContent:'center',alignItems:'center'}} >
             <View style={styles.button}>
            <Button style={styles.btn} iconLeft light rounded onPress={()=>props.navigation.navigate('Donor')}>
            <Icon  style={{color:'#B22222'}} name='people' />
            <Text style={{color:'#B22222',fontWeight:'700'}}>Become Donor?</Text>
          </Button>
         </View>
            </View>
            
            <View  style={{justifyContent:'center',alignItems:'center'}} >
                <View style={styles.button}>
                <Button style={styles.btn} rounded onPress={()=>props.navigation.navigate('Acceptor')}   >
              <Icon style={{color:'#B22222'}} name='people' />
                <Text  style={{color:'#B22222',fontWeight:'700'}} >Become Acceptor!</Text>
              </Button>
         </View>
         </View>



         
        </View>
    )
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
    button:{
    
        margin:10,
        marginLeft:20
    },
    btn:{
     backgroundColor:'white',
     width:200
     
    }

})

export default Pick