import {View,Text,Image,StyleSheet} from 'react-native';


const Info= ({route})=>{
    const it=route.params.item;

    return(
        <View style={styles.container}>
        <View style={styles.card}>
         <View style={{alignItems:'center'}}>
         <Image
         source={{uri:it.artworkUrl30}}
         style={{resizeMode:'contain',width:80,height:80,borderRadius:40,borderWidth:2}}
        />  
        </View>   
          
        <Text style={styles.text}>ArtistName: {it.artistName}</Text>
        <Text style={styles.text}>Collection Name: {it.collectionName}</Text>
        <Text style={styles.text}>Price: {it.trackPrice}</Text>
        <Text style={styles.text}>TrackCount: {it.trackCount}</Text>
        <Text style={styles.text}>Country: {it.country}</Text>
        <Text style={styles.text}>Currency: {it.currency}</Text>
        </View>
        
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        
    },
    card: {
        marginTop: 18,
        backgroundColor: '#7ad128',
        borderRadius: 60,
        width: '90%',
        height:'90%',
        padding: 14,
        alignContent:'center',
        justifyContent:'space-evenly',
        elevation:6
      },
      text:{
        color:'#000',
        fontSize:18
      }
});

export default Info;
