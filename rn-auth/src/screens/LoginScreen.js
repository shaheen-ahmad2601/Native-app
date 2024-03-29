import { View , Text, TextInput, Button, TouchableOpacity,StyleSheet} from "react-native"
import React, { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Spinner from "react-native-loading-spinner-overlay"

const LoginScreen = ({navigation})=>{
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const {isLoading,login} = useContext(AuthContext)

    // const val = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <Spinner visible={isLoading}/>
            <View style={styles.wrapper}>
                <TextInput
                 style={styles.input}
                  placeholder="enter email"
                  value={email}
                  onChangeText={text=>setEmail(text)}
                  />

                <TextInput 
                style={styles.input}
                 placeholder="enter password"
                  secureTextEntry
                  value={password}
                onChangeText={text=> setPassword(text)}

                  />
                <Button title="Login" onPress={() => login(email,password)}/>

                <View style={{flexDirection:'row',marginTop:20}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    wrapper:{
        width:"80%"
    },
    input:{
        marginBottom:12,
        borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14
    },
    link:{
        color:'blue'
    }
})

export default LoginScreen