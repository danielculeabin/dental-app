import React from 'react';

import {
  GroupItem,
  Avatar,
  Content,
  FullName,
  GrayText,
  TimeBadge,
} from '../Appointment/Appointment.styles';

import Badge from '../Badge';

const Appointment = ({ user, diagnosis, active, time, onPress }) => {
  return (
    <>
      <GroupItem onPress={onPress} activeOpacity={0.5}>
        <Avatar source={{ uri: user.avatar }} />

        <Content>
          <FullName>{user.fullname}</FullName>
          <GrayText>{diagnosis}</GrayText>
        </Content>

        <Badge active={active}>{time}</Badge>
      </GroupItem>
    </>
  );
};

export default Appointment;
