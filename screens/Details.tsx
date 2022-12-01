import { useReducer ,useEffect,} from "react";
import { View,Text,FlatList, ActivityIndicator, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { getData } from "../Reducers/api/api";
import { initialState, reducer } from "../Reducers/reducers/reducers";

const Details=({navigation})=>{
    //const [state,dispatch]=useReducer(reducer,initialState);
// console.log(route.params.item +"Detail Screen");
const list=useSelector(state=>state);

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
    const renderItem=({item})=>{
        return(
        <TouchableOpacity
        style={styles.items}
        onPress={()=>navigation.navigate("Info",{item:item})}
        >

          <Text style={styles.text}>{item.trackName}</Text>
        </TouchableOpacity>
            
        );
    }    
    return(
        
        <View style={styles.container}>
        <FlatList
                    data={list?.data}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                    />
        
        </View>

       
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
   
    text:{
        color:'white',
        fontSize:22
    },
    items:{
        width:'98%',
        borderRadius:40,
        padding:16,
        backgroundColor:'blue',
        marginVertical:2
    }
});

export default Details;