import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text,Button , TextInput, StyleSheet} from 'react-native';
import { shouldUseActivityState } from 'react-native-screens';

getResult = (height,weight) => {

    let proc = weight / ((height*0.01) * (height*0.01)); 
    let temp;

    console.log(proc);

    console.log(proc>25.0);

    if(proc>=25.0){
        temp = '비만';
    }else if(proc>=23.0){
        temp = '과체중';
    }else if(proc>=18.5){
        temp = '정상';
    }else{
        temp = '저체중';
    }

    return temp;

}

const ResultScreen = ({navigation,route}) => {

    const weight = Number(route.params.weight);
    const height = Number(route.params.height);

    
    console.log("test"+typeof(weight));

    return(
        
        <View style={styles.container}>
            <Text style={styles.input}>당신은 [{this.getResult(height,weight)}] 입니다.</Text>
           
            <Button title='다시하기' color='white'  onPress={()=>navigation.navigate('Main')}/>
        </View>
    )


}

const styles=StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#EB9E8B',
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


export default ResultScreen;