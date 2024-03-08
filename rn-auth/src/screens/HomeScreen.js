import { View,Text,StyleSheet, Button } from "react-native"
import React, { useContext } from "react"
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = ()=>{
    const {userInfo,isLoading,logout} = useContext(AuthContext)
    return (
        <View style={styles.container}>
           <Spinner visible={isLoading}/>
           <Text style={styles.welcome}>welcome : {userInfo.user.name}</Text>
           <Button title="Logout" color='red' onPress={logout}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
      fontSize:18,
      marginBottom:8
    },
  });

export default HomeScreen