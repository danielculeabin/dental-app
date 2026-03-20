import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

// 1. Change to a regular View
// We will use the 'SafeAreaView' ONLY in 'HomeScreen.js' to control 'edges' properly
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  /* padding: 0 20px;  //Optional */ 
`;

// 2. Tighten this up
// If you are using the Navigation Header (blue "Patients"), you might not even need this ScreenTitle on the page!
export const ScreenTitle = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #111;
  margin: 0 20px 10px 20px; /* Snug to the top, keeps side padding */
`;

export const SwipeView = styled.View`
  background-color: #F83939;
  justify-content: center;
  align-items: center;
  height: 90%; /* So it doesn't touch the borders */
  border-radius: 22px; 
  margin-left: 5px;
  margin-right: 5px;
`;

export const PlusButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;   /* Moved down from 55px to use the screen better */
  right: 20px;
  border-radius: 32px;
  overflow: hidden;
  elevation: 8;
  shadow-color: #2a86ff;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
`;

export const PlusButtonGradient = styled(LinearGradient).attrs({
  colors: ['#2a86ff', '#1d5fcc'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
`;
