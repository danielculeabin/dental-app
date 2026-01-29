import styled from 'styled-components/native';

// Styles for "Appointment.jsx"
export const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

export const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

export const Content = styled.View`
  flex: 1;
`;

export const TimeBadge = styled.Text`
  background-color: ${({ active }) => (active ? '#2A86FF' : '#E9F5FF')};
  color: ${({ active }) => (active ? '#fff' : '#4294ff')};
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  padding: 6px 12px;
`;
