import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text,Button , TextInput, TouchableWithoutFeedbackBase} from 'react-native';


const ResultScreen = ({navigation,route}) => {

    console.log("결과===="+route.params.weight);


    return(
        
        <View>
            <Text style={{marginTop:30}}> result</Text>
           
            <Button title='다시하기' onPress={()=>navigation.navigate('Main')}/>
        </View>
    )


}


export default ResultScreen;