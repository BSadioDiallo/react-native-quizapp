import { useNavigation } from "@react-navigation/native";
import { Alert, Pressable, Text } from "react-native";

export default function BackButton() {
    const navigation = useNavigation();

    return (
        <Pressable className="mr-4 p-2" onPress={() => 
            Alert.alert("Warning", "do you really want to go back to home ?", [
                {
                    text: "Ok",
                    onPress: () => navigation.navigate("Home"),
                },
                {
                    text: "Cancel",
                }
            ], 
            {cancelable: true}
        )}>
            <Text className="text-violet-500 text-3xl">{"<"}</Text>
        </Pressable>
    )
}