import styled from 'styled-components/native';

export const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 16px 0;
  /* Slightly dark border so it's visible on all screens */
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export const Avatar = styled.View`
  border-radius: 25px; 
  width: 50px;
  height: 50px;
  margin-right: 15px;
  /* Centers the Initials/Text perfectly */
  align-items: center;
  justify-content: center;
`;

// Render the image if it exists
export const AvatarImage = styled.Image`
  border-radius: 25px;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const AvatarLetter = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #000;
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
  overflow: hidden; /* Required for border-radius on Text in iOS */
  font-weight: 600;
  font-size: 14px;
  padding: 6px 12px;
`;