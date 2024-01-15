import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Question from '../components/Question';
import Response from '../components/Response';
import { useState } from 'react';
import { basic_2 as guizData } from '../database/py_data';

export default function QuizContainer () {
    const questions = guizData.map(({question}) => question) 
    
    const navigation = useNavigation()
    const [currentQuestion, setCurrentQuestion] = useState(questions.indexOf(questions[0]))
    const [choices, setChoices] = useState(guizData[questions.indexOf(questions[0])].choices)
    const [seletectedResponse, setSelectedResponse] = useState(null)
    const [givenChoices, setGivenChoices] = useState([])

    // comportements
    const handleSelect = (index) => {
        setSelectedResponse(index)
    }
    const setAllData = () => {
        setSelectedResponse(null)
        setCurrentQuestion(currentQuestion + 1)
        setChoices(guizData[currentQuestion + 1].choices)
    }
    const handleGivenChoices = (choice) => {
        const givens = [givenChoices]
        givens.push(choice)
        setGivenChoices(givens)
    }
    const handleNext = (currentQuestion) => {
        if(seletectedResponse === null){
            
        }
        else if(currentQuestion !== (questions.length - 1)) {
            handleGivenChoices(seletectedResponse)
            setAllData()
        }
        else {
            navigation.navigate("ResultScreen", {
                givenChoices,
                expectedChoices: guizData.map((element) => element.response),
            })
        }
    }

    return (
        <View style={styles.container}>
            <Question currentQuestion={currentQuestion + 1}>{questions[currentQuestion]}</Question>
            <View className="flex justify-between items-center self-center">
                {
                choices.map((question, index) => 
                    <Response key={index} index={index} onPress={handleSelect}
                        selected={seletectedResponse === index ? true : false}
                    >
                        {question}
                    </Response>
                )
                }
            </View>
            <Text>{seletectedResponse}</Text>
            <TouchableOpacity onPress={() => handleNext(currentQuestion)} 
                className="my-4 max-w-sm rounded-md bg-violet-500 py-4 w-[90vw]">
                <Text className="text-center text-xl font-bold text-white">NEXT</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})