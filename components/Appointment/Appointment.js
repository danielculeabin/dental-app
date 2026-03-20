import React from 'react';
import { Text } from 'react-native';
import getAvatarColor from '../../utils/getAvatarColor.js';

import {
  GroupItem,
  Avatar,
  AvatarImage,
  Content,
  FullName,
  GrayText,
  AvatarLetter,
  TimeBadge,
} from './Appointment.styles.js';

import Badge from '../Badge';

const Appointment = ({ patient, diagnosis, active, time, onPress }) => {
  if (!patient) return null;

  const avatarName = patient.fullname ? patient.fullname[0].toUpperCase() : '?';

  // 🎨 Different colors for patient's avatars
  const avatarBgColor = getAvatarColor(patient.fullname || '');

  return (
    <>
      <GroupItem onPress={onPress} activeOpacity={0.5}>
        {/* If patient.avatar exists, we show the image. If not, we show the initials.*/}
        <Avatar style={{ backgroundColor: patient.avatar ? 'transparent' : avatarBgColor }}>
          {patient.avatar ? (
            <AvatarImage source={{ uri: patient.avatar }} />
          ) : (
            <AvatarLetter>{avatarName}</AvatarLetter>
          )}
        </Avatar>

        <Content>
          <FullName>{patient.fullname}</FullName>
          <GrayText>{diagnosis}</GrayText>
        </Content>

        <Badge active={active}>{time}</Badge>
      </GroupItem>
    </>
  );
};

export default Appointment;
