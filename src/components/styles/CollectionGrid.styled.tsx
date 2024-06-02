import styled from 'styled-components';
import { MAX_WIDTH_MOBILE, MAX_WIDTH_TABLET } from '../../lib/constants';

export const StyledCollectionGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;
  margin: 2rem 0;
  @media (max-width: ${MAX_WIDTH_TABLET}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${MAX_WIDTH_MOBILE}) {
    grid-template-columns: 1fr;
  }
`;

