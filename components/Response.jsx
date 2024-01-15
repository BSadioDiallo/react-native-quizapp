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
        <View className='mb-2 rounded-sm max-w-[82vw] w-[82vw] min-h-[10vh] max-h-[12vh] bg-neutral-100 shadow-slate-900 shadow-2xl border-spacing-1'>
            <TouchableOpacity className="flex-row justify-between items-center gap-x-1 ml-1 h-[100%]" onPress={() => handleClick(index)}>
                <Text textBreakStrategy="balanced" numberOfLines={3} className="text-wrap text-base font-semibold">{children}</Text>
                <View className={styles.selecteionMark}>
                </View>
            </TouchableOpacity>
        </View>
    )
}
