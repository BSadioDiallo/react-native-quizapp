import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, TouchableOpacity, Text  } from "react-native";
import { useState } from "react";

import ResultWiewer from "../components/ResultViewer";
import DescriptionContainer from "../components/DescriptionContainer";
import ResultRatio from "../components/ResultRatio";

export default function ResultScreen({ route }) {
    const navigation = useNavigation()
    const { givenChoices, expectedChoices, descriptions, questions} = route.params;
    let goodChoiceNumber = 0
    givenChoices.forEach((element, index) => element === expectedChoices[index] ? goodChoiceNumber++ : null)
    
    const [currentDescription, setCurrentDescription] = useState(descriptions[0])
    const [currentQUestion, setCurrentQuestion] = useState(questions[0])

    const handleValueUpdate = (index) => {
        setCurrentDescription(descriptions[index])
        setCurrentQuestion(questions[index])
    }

    
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', rowGap: 20, height: "100%"}} className="bg-neutral-50">
            <ResultRatio>{goodChoiceNumber}/{expectedChoices.length}</ResultRatio>
            <View className="flex-row flex-wrap w-[90vw] border justify-center">
            {
                givenChoices.map((value, index) => 
                <ResultWiewer key={index} isGood={value === expectedChoices[index]}
                    onPress={() => handleValueUpdate(index)}
                >{index + 1}</ResultWiewer>
                )
            }
            </View>
            <DescriptionContainer>{currentQUestion}</DescriptionContainer>            
            <DescriptionContainer>{currentDescription}</DescriptionContainer>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} 
                className="my-2 max-w-sm rounded-md bg-violet-500 py-4 w-[90vw] absolute bottom-1 z-10">
                <Text className="text-center text-xl font-bold text-white" >TERMINER</Text>
            </TouchableOpacity>   
            
        </ScrollView>
    )
}