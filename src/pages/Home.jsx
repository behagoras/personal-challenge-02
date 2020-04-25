import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Countries from '../components/Countries';
import Search from '../components/Search';
import Filters from '../components/Filters';

const Container = styled.div`
  padding: 15px;
  font-size:14px;
`;

const Home = (props) => {

  return (
    <Container>
      <Search />
      <Filters />
      <Countries />
    </Container>
  );
};

export default connect()(Home);
