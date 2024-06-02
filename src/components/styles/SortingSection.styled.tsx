import styled from 'styled-components';
import { MAX_WIDTH_TABLET } from '../../lib/constants';

export const StyledSortingSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 1rem;
  @media (max-width: ${MAX_WIDTH_TABLET}) {
    flex-direction: column;
    button {
      height: 3rem;
      width: 80dvw;
      margin: auto;
    }
  }
`;
