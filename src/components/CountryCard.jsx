import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.ui};
  box-shadow: 10px 10px 16px -8px rgba(0,0,0,0.25);
  width:calc(100% - 100px);
  margin:auto;
  @media screen and (min-width: 700px) {
    width:100%;
  }
`;

const Flag = styled.img`
  width:100%;
  object-fit: cover;
  max-height: 160px;
`;

const Title = styled.p``;

const Properties = styled.ul``;

const Property = styled.li`
  b {
    color: ${(props) => props.theme.colors.text};
  }
  span {
    color: ${(props) => props.theme.colors.textSoft};
  }
`;

const CountryCard = ({ data = {} }) => {
  const country = data ? data[0] : {};
  return (
    <Card>
      <Flag src={country.flag} alt={country.name} />
      <Title>{country.name}</Title>
      <Properties>
        <Property>
          <b>population: </b>
          <span>
            {country.population}
          </span>
        </Property>
        <Property>
          <b>region: </b>
          <span>
            {country.region}
          </span>
        </Property>
        <Property>
          <b>capital: </b>
          <span>
            {country.capital}
          </span>
        </Property>
      </Properties>
    </Card>
  );
};

export default CountryCard;
