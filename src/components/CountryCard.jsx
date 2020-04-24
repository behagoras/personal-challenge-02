import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.ui};
`;

const CountryCard = ({ data = {} }) => {
  const country = data ? data[0] : {};
  return (
    <Card>
      {country.name}
    </Card>
  );
};

export default CountryCard;
