import 'react-native-gesture-handler';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary',
  'NativeBase: SSRProvider' 
]);
console.reportErrorsAsExceptions = false;

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, extendTheme } from 'native-base';

import { HomeScreen, PatientScreen, AddPatientScreen } from './screens';


// Create a theme that forces outlineWidth to 0 for ALL components
const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        outlineWidth: 0, // Add this
        focusOutlineWidth: 0, // And this
        _focus: {
          outlineWidth: 0,
          shadow: 0,
          borderBottomColor: '#2A86FF',
        },
      },
      defaultProps: {
        focusOutlineWidth: 0,
      },
    },
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StatusBar style="dark" />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Patient" component={PatientScreen} />
              <Stack.Screen name="AddPatient" component={AddPatientScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}
