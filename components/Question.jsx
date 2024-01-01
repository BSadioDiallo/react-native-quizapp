import { View, Text } from "react-native";

export default function Question() {

    return (
        <View className={styles.container}>
            <Text className={styles.questionStatus}>Question 4/10</Text>
            <Text className={styles.questionText}>Lorem ipsum, dolor sit amet consectetur adipisicing nesciunt odio maiores repudiandae consequuntur velit ?</Text>
        </View>
    )
}

const styles = {
    container: 'mx-auto my-4 max-w-sm rounded-xl bg-violet-500 px-4 py-4 w-[90vw]',
    questionStatus: "text-yellow-100 pb-1",
    questionText: "text-white py-2 text-base",
};
