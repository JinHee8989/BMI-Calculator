import React, { useState } from 'react';
import { View, Text,Button , TextInput} from 'react-native';


const MainScreen = ({navigation}) => {

    
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);

    return(
        <View>
            <Text style={{marginTop:30}}> 키를 입력하세요.</Text>
            <TextInput name='height' onChangeText={newNumber=>setHeight(newNumber)}></TextInput>

            <Text> 몸무게를 입력하세요.</Text>
            <TextInput name='weight' onChangeText={newNumber=>setWeight(newNumber)}></TextInput> 

            <Button title='결과보기' 
            onPress={() =>
                navigation.navigate('Result',{
                    weight:weight,
                    height:height,
                })
                
            }/>
        </View>
    )


}


export default MainScreen;