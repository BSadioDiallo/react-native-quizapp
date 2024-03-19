import { Text, TouchableOpacity, View, Image } from "react-native";

export default function Card({ children, logoImg, onPress }) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View className="bg-violet-200 w-36 rounded-xl h-36 flex justify-center items-center mx-2 my-2">
                <Image source={logoImg}></Image>
                <Text className="text-base">{children ? children : 'Default'}</Text>
            </View>
        </TouchableOpacity>
    );
}
