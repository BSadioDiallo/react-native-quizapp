import { StyleSheet, Text, View, Pressable, } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';
const pythonLogo = require('../assets/icons/logo_python_icon.png');
const jsLogo = require('../assets/icons/javascript_language_icon.png');
const javaLogo = require('../assets/icons/java_language_icon.png');
const phpLogo = require('../assets/icons/logo_php_icon.png');

export default function HomeScreen() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View className="flex flex-row gap-16">
                <View>
                    <Text className="text-4xl font-extrabold">Quiz</Text>
                    <Text className="text-2xl">Train yourself</Text>
                </View>
                <Text className="text-5xl self-center text-violet-500">Quiz</Text>
            </View>
            <View style={styles.cardsContainer}>
                <Card logoImg={pythonLogo}>python</Card>
                <Card logoImg={jsLogo}>javascript</Card>
                <Card logoImg={javaLogo}>java</Card>
                <Card logoImg={phpLogo}>php</Card>
            </View>
            <View className="flex flex-row justify-between gap-40" >
                <Pressable onPress={() => navigation.navigate('About')}>
                    <Text className="text-xl text-center">{'< à propos'}</Text>  
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Options')}>    
                    <Text className="text-xl text-center">{'options >'}</Text>    
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
})