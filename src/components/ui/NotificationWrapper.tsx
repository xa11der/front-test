import React from 'react';

const NotificationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="u-wrapper-100">{children}</div>;
};

export default NotificationWrapper;

