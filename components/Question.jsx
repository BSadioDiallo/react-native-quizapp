import { View, Text } from "react-native";

export default function Question( {children, currentQuestion} ) {

    return (
        <View className={styles.container}>
            <Text className={styles.questionStatus}>Question {currentQuestion}/10</Text>
            <Text className={styles.questionText}>{children}</Text>
        </View>
    )
}

const styles = {
    container: 'mx-auto my-4 max-w-sm rounded-xl bg-violet-500 px-4 py-4 w-[95vw] h-[22vh]',
    questionStatus: "text-yellow-200 pb-1 text-base font-bold",
    questionText: "text-white py-2 text-lg font-bold",
};
