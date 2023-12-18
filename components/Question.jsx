import { View, StyleSheet, Text } from "react-native";
import tw from 'twrnc';

export default function Question() {

    return (
        <View style={styles.container}>
            <Text style={styles.questionStatus}>Question 4/10</Text>
            <Text style={styles.questionText}>Lorem ipsum, dolor sit amet consectetur adipisicing nesciunt odio maiores repudiandae consequuntur velit ?</Text>
        </View>
    )
}
const textColor = 'yellow';

const styles = StyleSheet.create({
    container: tw`mx-auto my-4 box-border max-w-sm rounded-xl bg-violet-500 px-4 py-4`,
    questionStatus: tw`text-${textColor}-200 pb-1`,
    questionText: tw`text-white py-2 text-base`,
});
