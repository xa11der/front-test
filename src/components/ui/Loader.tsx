import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Loader: React.FC = () => {
  return <StyledLoader>Loading...</StyledLoader>;
};

export default Loader;