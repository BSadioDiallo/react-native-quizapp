import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';
import DifficultyScreen from "./screens/DifficultyScreen";
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DifficultyScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "à propos",
            headerStyle: { backgroundColor: "yellow" },
            animation: "slide_from_left",
          }}
        />
        <Stack.Screen
          name="Options"
          component={OptionsScreen}
          options={{ animation: "slide_from_right" }}
        />

        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "#f5f5f5" },
            animation: "fade_from_bottom",
          }}
        >
          <Stack.Screen component={DifficultyScreen} name="DifficultyScreen" />
          <Stack.Screen component={QuizScreen} name="QuizScreen" />
          <Stack.Screen component={ResultScreen} name="ResultScreen" />
        </Stack.Group>
        {/*<Stack.Screen name="QuizScreen" component={QuizScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = {
  
}
