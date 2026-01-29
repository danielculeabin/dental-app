import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

// Styles used in 'HomeScreen.js' - the main screen UI
export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 20px;
  background-color: #fff;
`;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #111;
  margin: 10px 0 16px;
`;

export const PlusButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 55px;
  right: 18px;
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
