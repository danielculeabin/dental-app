import React from 'react'
import styled from 'styled-components/native';

const statusColors = {
    green: {
      background: '#C6F6D5',
      color: '#38A169',
    },
    active: {
      background: '#2A86FF',
      color: '#fff',
    },
    default: {
      background: '#E9F5FF',
      color: '#4294FF',
    },
  };

const getBadgeColors = ({ active, color }) => {
  if (active) {
    return statusColors.active;
  }

  if (color && statusColors[color]) {
    return statusColors[color];
  }

  return statusColors.default;
};

const Badge = styled.Text`
  background-color: ${(props) => getBadgeColors(props).background};
  color: ${(props) => getBadgeColors(props).color};

  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  padding: 6px 12px;
  text-align: center;
  overflow: hidden;
`;

export default Badge;