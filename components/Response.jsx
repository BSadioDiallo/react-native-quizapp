import { View, Text, TouchableOpacity  } from "react-native";

export default function Response({response}) {
    return (
        <View className='shadow-x mx-5 mb-2 rounded-md w-[80vw] bg-neutral-100 h-[10vh]'>
            <TouchableOpacity className="flex-row justify-between items-center">
                <Text className="text-wrap text-base mx-2">{response}</Text>
                <View className={`relative bg-${'slate'}-800 w-1/6 py-2 rounded-r-md h-[10vh]`} >
                </View>
            </TouchableOpacity>
        </View>
    )
}
