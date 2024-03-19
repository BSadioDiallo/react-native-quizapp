import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';

const pythonLogo = require('../assets/icons/4375050_logo_python_icon.png');
const javascriptLogo = require('../assets/icons/4373213_js_logo_logos_icon.png');
const javaLogo = require('../assets/icons/4373217_java_logo_logos_icon.png');
const html5Logo = require('../assets/icons/4373229_html5_logo_logos_icon.png');

export default function HomeScreen() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container} className="bg-violet-100">
            <View className="flex flex-row gap-8">
                <Text className="fr text-2xl text-gray-900">Train Yourself</Text>
                <Text className="text-5xl self-center text-violet-500">Quiz</Text>
            </View>
            <View style={styles.cardsContainer}>
                <Card logoImg={pythonLogo} onPress={() => navigation.navigate('QuizSelection', {name: 'python'})}>Python</Card>
                <Card logoImg={javascriptLogo} onPress={() => navigation.navigate('QuizSelection', {name: "javascript"})}>Javascript</Card>
                <Card logoImg={javaLogo} onPress={() => navigation.navigate('QuizSelection', {name: "java"})}>Java</Card>
                <Card logoImg={html5Logo} onPress={() => navigation.navigate('QuizSelection', {name: "html"})}>Html 5</Card>
            </View>
            <View className="flex flex-row gap-36" >
                <Pressable onPress={() => navigation.navigate('About')}>
                    <Text className="text-xl text-center">{'< about'}</Text>  
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
});