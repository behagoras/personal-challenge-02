import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

const Flag = styled.img`
  width:100%;
  object-fit: cover;
  max-height: 160px;
`;

const Container = styled.div``;
const Main = styled.div``;
const Title = styled.h1``;
const Properties = styled.ul``;

const Borders = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(50px,1fr));
`;

const card = (props) => css`
  background-color: ${props.theme.colors.ui};
  box-shadow: 0 0 16px -8px rgba(0,0,0,0.25);
  border-radius: 5px;
  padding: 15px;
  padding-left: 50px;
`;

const Border = styled.div`
  ${card};
`;

const Property = styled.li`
  b {
    color: ${(props) => props.theme.colors.text};
  }
  span {
    color: ${(props) => props.theme.colors.textSoft};
  }
`;

const Country = ({ countries = [] }) => {
  const [country, setCountry] = useState([{}]);
  const { country: countryName } = useParams();
  useEffect(() => {
    const localCountries = countries.filter((c) => c[0].name === countryName)[0];
    setCountry(localCountries && localCountries[0]);
  }, [countries]);
  console.log(useParams());
  console.log('my country', country);
  return (
    <Container>
      {
        country && (
          <Main>
            <Flag src={country.flag} alt={country.name} />
            <Title>{country.name}</Title>
            <Properties>
              <Property>
                <b>nativeName: </b>
                <span>
                  {country.nativeName}
                </span>
              </Property>
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
                <b>subregion: </b>
                <span>
                  {country.subregion}
                </span>
              </Property>
              <Property>
                <b>capital: </b>
                <span>
                  {country.capital}
                </span>
              </Property>

            </Properties>
            <Properties>
              <Property>
                <b>topLevelDomain: </b>
                <span>
                  {country.topLevelDomain}
                </span>
              </Property>
              <Property>
                <b>currencies: </b>
                <span>
                  {
                    country.currencies && country.currencies.map((currency) => `${currency.name},`)
                  }
                </span>
                <span>
                  {
                    country.languages && country.languages.map((currency) => `${currency.name},`)
                  }
                </span>
              </Property>
            </Properties>
            <Borders>
              {
                country.borders &&
                country.borders.map((border) => <Border>{border}</Border>)
              }
            </Borders>
          </Main>
        )
      }
    </Container>
  );
};

const mapStateToProps = ({ countries }) => {
  return {
    countries,
  };
};

export default connect(mapStateToProps)(Country);
