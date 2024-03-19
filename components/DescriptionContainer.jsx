import { View, Text } from "react-native";

export default function DescriptionContainer({children,}) {
    return (
        <View className="bg-neutral-200 w-[85vw] h-fit rounded-md p-2">
            <Text className="text-lg">{children}</Text>
        </View>
    )
}
