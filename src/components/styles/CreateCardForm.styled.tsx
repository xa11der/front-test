import styled from 'styled-components';
import { MAX_WIDTH_TABLET } from '../../lib/constants';

export const StyledFormTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
`;

export const StyledCreateCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1rem;
  width: 500px;
  gap: 0.5rem;
  @media (max-width: ${MAX_WIDTH_TABLET}) {
    width: 80%;
    button {
      width: 100%;
    }
  }
`;

