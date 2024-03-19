import { View, Text, TouchableOpacity } from "react-native";

export default function Response({children, onPress, index, selected}) {
    const currentColor = selected ? 'bg-violet-600' : 'bg-slate-800'

    const handleClick = (index) => {
        onPress(index)
    }
    const styles = {
        selecteionMark: currentColor + " w-[10%] rounded-r-md h-[100%]"
    }
    
    return (
        <View className='mb-2 rounded-sm max-w-[82vw] w-[78vw] min-h-[10vh] max-h-[12vh] bg-neutral-100 shadow-violet-200 shadow-md border-spacing-1'>
            <TouchableOpacity className="flex-row justify-between items-center ml-1 h-[100%] w-fit" onPress={() => handleClick(index)}>
                <Text textBreakStrategy="balanced" numberOfLines={3} className="text-wrap text-xl font-medium pr-1">{children}</Text>
                <View className={styles.selecteionMark}>
                </View>
            </TouchableOpacity>
        </View>
    )
}
