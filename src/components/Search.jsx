import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.ui};
  box-shadow: 10px 10px 16px -8px rgba(0,0,0,0.25);
  max-width:500px;
  padding: 20px 50px;
  border-radius: 15px;
`;
const Main = styled.form`
  width:100%;
  display:grid;
  grid-template-columns:25px 1fr;
  grid-gap:15px;
  font-size: 18px;
`;

const SearchField = styled.input`
  max-width: 300px;
  border: none;
`;
const Icon = styled.i``;

const Search = (props) => {
  const [term, setTerm] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch({
      type: 'SEARCH_ITEM',
      payload: term,
    });
    console.log(term);
  };
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <Container>
      <Main onSubmit={handleSubmit}>
        <Icon className="fa fa-search" aria-hidden="true" />
        <SearchField value={term} onChange={handleTermChange} placeholder="Search for a Country..." />
      </Main>
    </Container>
  );
};

export default connect()(Search);
