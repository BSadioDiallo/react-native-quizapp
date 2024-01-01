import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Go to About' onPress={() => navigation.navigate("About")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})