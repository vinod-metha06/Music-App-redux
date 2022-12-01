import { useEffect, useState } from "react";
import { View,FlatList, Text,StyleSheet, ActivityIndicator, TextInput, Button} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getResponse } from "../rdr/api/api";
import { rredcuer,initialState } from "../rdr/reducers/reducer";
import { getFetch,errorOccur } from "../redux/action/action";

const NewHome = ({navigation}) =>{
    const dispatch=useDispatch();
    const [text,setText]=useState('');
    
    const list=useSelector(state=>state);
    
    const v=async()=>{
        const d=await getResponse(text);
        
        if(d!=='error' ){
            dispatch(getFetch(d));
            navigation.navigate("Details")
            
        }else{
            dispatch(errorOccur());
        }
    }

    const renderItem=({item})=>{
        return(
            <Text style={styles.text}>{item.trackName}</Text>
        );
    }
    if(list?.loading){
        return(
            <View style={styles.container}>
            <ActivityIndicator
            size={60}
            color='black'
            />

            </View>
        )}


    return(
        <View style={styles.container}>
            <TextInput
            placeholder="Search"
            onChangeText={t=>setText(t)}
            style={{
                width:'90%',
                borderWidth:2,
                borderRadius:40,
                marginVertical:16
                
            }}
            />
            <Button
            title="Search"
            onPress={v}
            />

            {/* <FlatList
            data={list?.data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            /> */}

        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        
    },
    text:{
        color:'black',
        fontSize:22
    }
})

export default NewHome;