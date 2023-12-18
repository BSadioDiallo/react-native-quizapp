import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import tw from 'twrnc';

export default function Response({response}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftSide}></TouchableOpacity>
            <View style={styles.responseDiv}>
                <Text style={styles.responseTexte}>{response}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tw`flex-row mx-auto w-85 rounded text-violet-600 bg-white shadow-lg hover:bg-violet-600 hover:text-white mb-2`,
    leftSide: tw`flex-1 rounded bg-slate-800`,
    responseDiv: tw`ml-4 flex-7 py-4`,
    responseTexte: tw`text-base`,
})