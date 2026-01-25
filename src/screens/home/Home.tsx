import { useUserSession } from "@store/userSession";
import { Button, Text, View } from "react-native";

export default function Home(){
    const logoutHandle = ()=>{
        useUserSession.setState({
            isLoggedIn: false,
        })
        useUserSession.persist.clearStorage();
    }
    return(
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
            <Text>HOME SCREEN</Text>
            <Button title="Logout" onPress={logoutHandle}/>
        </View>
    );
}