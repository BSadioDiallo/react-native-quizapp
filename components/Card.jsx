import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, Image } from "react-native";

export default function Card({ children, logoImg }) {
    const navigation = useNavigation();
    // comportement

    // rendu
    return (
        <TouchableOpacity onPress={() => navigation.navigate("QuizScreen", {name : children})}>
            <View className="bg-violet-200 w-36 rounded-xl h-36 flex justify-center items-center mx-2 my-2">
                <Image source={logoImg || null}></Image>
                <Text>{children ? children : 'Default'}</Text>
            </View>
        </TouchableOpacity>
    );
}
