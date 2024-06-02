import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledSortingSection } from './styles/SortingSection.styled';

const Sorting: React.FC = () => {
  const history = useHistory();
  const [direction, setDirection] = useState<'asc' | 'desc'>('asc');

  const handleSorting = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;

    history.push({
      pathname: '/collection',
      search: `?sort=${target.name}&direction=${direction}`,
    });

    if (history.location.search.includes(target.name)) {
      setDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setDirection('asc');
    }
  };

  return (
    <StyledSortingSection>
      <button onClick={handleSorting} name="birthday">
        Birthday
      </button>
      <button onClick={handleSorting} name="firstname">
        First Name
      </button>
      <button onClick={handleSorting} name="lastname">
        Last Name
      </button>
    </StyledSortingSection>
  );
};

export default Sorting;
