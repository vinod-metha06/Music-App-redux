import { useReducer ,useEffect,} from "react";
import { View,Text,TextInput, ActivityIndicator, StyleSheet, Button } from "react-native";
import { getData } from "../Reducers/api/api";
import { initialState, reducer } from "../Reducers/reducers/reducers";

const Home=({navigation})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    // useEffect(()=>{
        
    // },[]);
    const fetchData=async()=>{
        const data=[]= await getData();
        console.log(data)
        
        if(data!=='error'){
            dispatch({type:'FETCH_SUCCESS',payload:data});
        }else{
            dispatch({type:'FETCH_ERROR'})
        }
    }
    // fetchData();
    const Loading=()=>{
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator
                size={60}
                color='black'
                />
            </View>
        );
    }
    if(!state?.loading){
        return navigation.navigate("Details",{item:state?.data})
    }

    return(
        
<View style={styles.container}>

    <TextInput
    placeholder="Search here..."
    onChangeText={(t)=>{}}
    style={styles.input}
    
    /> 
 
    <Button
    title="search"
    onPress={fetchData}
    />
    {state?.loading?<ActivityIndicator/>:
    console.log(state?.data +"data  from reducer")
}
</View>

       
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    input:{
        borderWidth:2,
        borderRadius:40,
        marginVertical:12,
        width:'90%'
        
    }
});

export default Home;