import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Question from './components/Question';
import Response from './components/Response';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Question />
        <View>
          <Response response={responseText} />
          <Response response={responseText} />
          <Response response={responseText} />
        </View>
      </View>
    </NavigationContainer>
  );
}
const responseText = 'This is the response Text, wich one is little bit to long, damn working here waw';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});