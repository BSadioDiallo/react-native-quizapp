import { StyleSheet, Text, View } from "react-native";

export default function Card() {
    return (
        <View className={styles.container}>
            <View className={styles.group}>
                <Text>Python</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: `w-20 rounded-2xl bg-red-400`,
    group: `flex flex-col items-center justify-center py-10`,
    image: ``,
})