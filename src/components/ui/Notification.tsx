import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

type NotificationProps = { message: string };

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

export default Notification;

