import * as React from 'react';
import HomeScreen from './screens/Home';
import InitialScreen from './screens/Initial';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;
