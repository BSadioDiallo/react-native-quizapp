import { View, Text } from "react-native";

export default function ResultRatio({children}) {

    return (
        <View className="border-violet-500 p-4 mt-2 rounded-sm border bg-neutral-50">
            <Text className="text-2xl font-semibold">{children}</Text>
        </View>
    )
}