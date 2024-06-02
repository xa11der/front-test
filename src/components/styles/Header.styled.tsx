import styled from 'styled-components';

export const StyledNav = styled.nav`
  padding: 1rem 0;
  background-color: aliceblue;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: limegreen;
  }
`;
