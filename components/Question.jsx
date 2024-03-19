import { View, Text } from "react-native";

export default function Question( {children, currentQuestion, quizLength} ) {
    return (
        <View className={styles.container}>
            <Text className={styles.questionStatus}>Question {currentQuestion}/{quizLength}</Text>
            <Text className={styles.questionText}>{children}</Text>
        </View>
    )
}

const styles = {
    container: 'mx-auto my-4 max-w-sm rounded-xl bg-violet-500 px-4 py-2 w-[95vw] h-[22vh]',
    questionStatus: "text-yellow-200 text-lg",
    questionText: "text-white py-2 text-xl font-bold",
};
