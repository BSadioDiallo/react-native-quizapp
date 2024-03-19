import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from 'react';

import Question from '../components/Question';
import Response from '../components/Response';

export default function QuizContainer ({route}) {
    const quizData = route.params.quiz;
    const questions = quizData.map((element) => element.question) 
    
    const navigation = useNavigation()
    const [currentQuestion, setCurrentQuestion] = useState(questions.indexOf(questions[0]))
    const [choices, setChoices] = useState(quizData[questions.indexOf(questions[0])].choices)
    const [seletectedResponse, setSelectedResponse] = useState(null)
    const [givenChoices, setGivenChoices] = useState([])

    const handleSelect = (index) => {
        setSelectedResponse(index)
    }
    const setAllData = () => {
        setSelectedResponse(null)
        setCurrentQuestion(currentQuestion + 1)
        setChoices(quizData[currentQuestion + 1].choices)
    }
    const handleGivenChoices = (choice) => {
        const givens = givenChoices
        givens.push(choice)
        setGivenChoices(givens)
    }
    const closeQuiz = () => {
        const expectedChoices = quizData.map(({response}) => response)
        const descriptions = quizData.map(({description}) => description)
        
        navigation.navigate("ResultScreen", {
            givenChoices,
            expectedChoices,
            descriptions,
            questions,
        })
    }
    const handleNext = (currentQuestion) => {
        if(seletectedResponse === null){
            return
        }
        else if(currentQuestion !== (questions.length - 1)) {
            handleGivenChoices(seletectedResponse)
            setAllData()
        }
        else {  
            handleGivenChoices(seletectedResponse)
            closeQuiz()
        }
    }

    return (
        <View style={styles.container}>
            <Question currentQuestion={currentQuestion + 1} quizLength={quizData.length}>{questions[currentQuestion]}</Question>
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
            <TouchableOpacity onPress={() => handleNext(currentQuestion)} 
                className="my-4 max-w-sm rounded-md bg-violet-500 py-4 w-[90vw]">
                <Text className="text-center text-xl text-white">SUIVANT</Text>
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