import { View } from "react-native";
import Question from './Question';
import Response from './Response';
import { useState } from 'react';

export default function QuizContainer () {
    const [seletectResponse, setSelectedResponse] = useState(null)
  
    const hadleSelection = (index) => {
        setSelectedResponse(index)
    }

    const response = [
        'Hello world', "There is no death", "Only change of world"
    ]
    const responseText = 'Something went wrong, there is no death only change of world.';

    return (
        <View className="flex-1 justify-between items-center">
            <Question/>
            <View className="flex justify-between items-center">
                {response.map((question, index) => 
                <Response key={index} response={question} style={{
                    backgroundColor: seletectResponse === index ? 'lightblue' : 'red'
                }}/>
                )}
            </View>
        </View>
    )
}