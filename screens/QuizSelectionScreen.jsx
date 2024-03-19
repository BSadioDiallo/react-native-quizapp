import { View,  Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const data = require('../data/ultime.json')

export default function QuizSelectionScreen({route}) {
    const navigation = useNavigation();
    
    const [selectedQuiz, setSelectedQuiz] = useState(null)
    const quizName = route.params.name;

    const quizList = []
    for (index in data[quizName]) {
        id = parseInt(index) + 1
        quizList.push({id: index, name: `${quizName} ${id}`})
    }

    const handleSelection = (id) => {
        setSelectedQuiz(id)
    }
    const handleNext = () => {
        if(selectedQuiz === null){
            return
        }
        else {  
            navigation.navigate("QuizScreen", { quiz : data[quizName][selectedQuiz] });
        }
    }
    const Item = ({children, id, isSelected}) => {
        const color = isSelected ? "bg-violet-600" : "bg-violet-300";
        return (
            <TouchableOpacity onPress={() => handleSelection(id)} 
                className={`${color} p-4 border-b-2 border-white`}>
                <Text className="text-white text-2xl font-bold">{children}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View className="flex-1 bg-violet-50 w-full justify-between items-center h-full">
            <View className="self-start w-full h-[50vh]">
                <FlatList data={quizList} 
                    renderItem={({item}) => <Item id={item.id} isSelected={selectedQuiz === item.id}>{item.name}</Item> }
                />
            </View>
            <Text className="text-2xl text-red-500">{selectedQuiz}</Text>
            <TouchableOpacity onPress={() => handleNext()} 
                className="my-1 max-w-sm rounded-md bg-violet-500 py-3 w-full absolute bottom-0">
                <Text className="text-center text-xl font-bold text-white">SUIVANT</Text>
            </TouchableOpacity>
        </View>

    )
}
