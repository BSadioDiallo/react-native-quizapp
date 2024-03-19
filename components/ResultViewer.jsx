import { View, Text, TouchableOpacity} from "react-native";

export default function ResultPanel({children, isGood, onPress}) {
    const color = isGood ? 'bg-violet-500 ' : 'bg-neutral-400 opacity-60'
    const style = color + " shadow-black shadow-md rounded-md w-12 h-12 flex justify-center items-center border border-white shadow-2xl m-2"
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View className={style}>
                <Text className="text-white text-3xl font-semibold">{children}</Text>
            </View>
        </TouchableOpacity>
    )
}