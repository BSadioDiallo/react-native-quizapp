import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';
import QuizSelectionScreen from "./screens/QuizSelectionScreen";
import ResultScreen from './screens/ResultScreen';
import BackButton from './components/BackButton';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="dark"></StatusBar>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>   
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "à propos",
            headerStyle: { backgroundColor: "#ddd6fe" },
            animation: "slide_from_left",
          }}
        />
        <Stack.Screen
          name="Options"
          component={OptionsScreen}
          options={{
            animation: "slide_from_right",
            headerStyle: { backgroundColor: "#ddd6fe" },
          }}
        />
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "#f5f5f5" },
            animation: "fade_from_bottom",
            headerLeft: () => <BackButton />,
          }}
        >
          <Stack.Screen
            component={QuizSelectionScreen}
            name="QuizSelection"
            options={{
              headerTitle: "Quiz Selection",
            }}
          />
          <Stack.Screen
            component={QuizScreen}
            name="QuizScreen"
            options={{
              headerTitleStyle: { fontSize: 25 },
              title: "Quiz in progress",
            }}
          />
          <Stack.Screen
            component={ResultScreen}
            name="ResultScreen"
            options={{ title: "Results" }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}