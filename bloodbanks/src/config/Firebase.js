import React, { useState, useEffect } from 'react';
import { View, Text,TextInput,Button,SafeAreaView,TouchableHighlight } from 'react-native';
import auth from '@react-native-firebase/auth';

// import * as firebase from 'firebase';
// import 'firebase/database';




// var firebaseConfig = {
//   apiKey: "AIzaSyDe8wo2DZiNhNm8Otn9Uh3GKzgQTGjmKF8",
//   authDomain: "blood-bank-ce84c.firebaseapp.com",
//   projectId: "blood-bank-ce84c",
//   storageBucket: "blood-bank-ce84c.appspot.com",
//   messagingSenderId: "387313389373",
//   appId: "1:387313389373:web:2af9eb4cb7eb6e50077f54",
//   measurementId: "G-987P0GJN0Z"
// };
// // Initialize Firebase
// export default firebase.initializeApp(firebaseConfig);


function Auth(){
  const SigInComponent = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fetching, setFetching] = useState(false)
    const [error, setError] = useState("")
    const [isValid, setValid] = useState(true)
    const __doSignUp = () => {
      if (!email) {
        setError("Email required *")
        setValid(false)
        return
      } else if (!password && password.trim() && password.length > 6) {
        setError("Weak password, minimum 5 chars")
        setValid(false)
        return
      } else if (!__isValidEmail(email)) {
        setError("Invalid Email")
        setValid(false)
        return
      }
  
      __doCreateUser(email, password)
    }
  
    const __doCreateUser = async (email, password) => {
      try {
        let response = await auth().createUserWithEmailAndPassword(
          email,
          password
        )
        if (response && response.user) {
          Alert.alert("Success ✅", "Account created successfully")
        }
      } catch (e) {
        console.error(e.message)
      }
    }
  
    return (
      <SafeAreaView style={styles.containerStyle}>
        <View style={{ flex: 0.2 }}>
          {!!fetching && <ActivityIndicator color={blue} />}
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}> Sign Up </Text>
        </View>
        <View style={styles.formContainerStyle}>
          <TextInput
            label={"Email"}
            autoCapitalize={false}
            keyboardType="email-address"
            style={styles.textInputStyle}
            placeholder="Mail address"
            onChangeText={text => {
              setError
              setEmail(text)
            }}
            error={isValid}
          />
  
          <TextInput
            label={"Password"}
            secureTextEntry
            autoCapitalize={false}
            style={styles.textInputStyle}
            selectionColor={blue}
            placeholder="Password"
            error={isValid}
            onChangeText={text => setPassword(text)}
          />
        </View>
        {error ? (
          <View style={styles.errorLabelContainerStyle}>
            <Text style={styles.errorTextStyle}>{error}</Text>
          </View>
        ) : null}
        <View style={styles.signInButtonContainerStyle}>
          <TouchableHighlight
            style={styles.signInButtonStyle}
            onPress={__doSignUp}
            underlayColor={blue}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={styles.signInButtonTextStyle}>Continue</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    )
  }
}

export default Auth;