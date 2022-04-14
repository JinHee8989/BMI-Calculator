import React, { useState } from 'react';
import { View, Text,Button , TextInput,StyleSheet} from 'react-native';


const MainScreen = ({navigation}) => {

    
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);

    return(
        <View style={styles.container}>
        
            <TextInput style={styles.input} name='height' onChangeText={newNumber=>setHeight(newNumber)} placeholder='키(cm)를 입력하세요.' placeholderTextColor='#E5D5CF'></TextInput>
  
            <TextInput style={styles.input} name='weight' onChangeText={newNumber=>setWeight(newNumber)} placeholder='몸무게(kg)를 입력하세요.' placeholderTextColor='#E5D5CF'></TextInput> 

            <Button title='결과보기' color='white' 
            onPress={() =>
                navigation.navigate('Result',{
                    weight:weight,
                    height:height,
                })
                
            }/>
        </View>
    )


}

const styles = StyleSheet.create({

    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#EB9E8B',
    },

    label:{
        padding:50,
        fontSize: 20,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        

    },
    input:{
        fontSize: 20,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:100,
        backgroundColor:'#EB9E8B',
        fontWeight:'bold',
        color:'white'
    }
})


export default MainScreen;