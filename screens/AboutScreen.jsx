import {View, Text} from 'react-native'

export default function AboutScreen() {
    return (
        <View className="bg-violet-50 h-full flex-1 px-2">
            <Text className="text-2xl my-8">
                Quiz application to learn useful stuff
            </Text>
            <Text className="text-xl self-end text-slate-500">
                Made with ❤️ by Sadio Diallo
            </Text>
        </View>
    )
}