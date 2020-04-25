import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { card } from '../styled/mixins';

const Container = styled.div`
  margin-top: 40px;
`;

const Dropdown = styled.ul`
  ${card};
  padding: 15px;
  padding-left: 50px;
  width: 150px;
  position: absolute;
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin-top: 5px;
`;

const Button = styled.div`
  ${card};
  padding: 15px;
  padding-left: 50px;
  width: 150px;
  display: grid;
  grid-template-columns: 1fr 15px;
  cursor: pointer;
`;

const Element = styled.li`
  max-width: 300px;
  list-style-type:none;
  padding:5px 0;
`;

const Anchor = styled.a`
  color: ${(props) => props.theme.colors.textSoft};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.hoverLink};
  }
`;

const Filters = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleFilter = (region) => {
    props.dispatch({
      type: 'SET_FILTERED',
      payload: region,
    });
    setShow(false);
  };
  const handleSearch = (query) => {};
  return (
    <Container>
      <Button onClick={handleShow}>
        <span>Filter by Region</span>
        <i className="fa fa-sort-desc" aria-hidden="true" />
      </Button>
      <Dropdown onClick={handleSearch} show={show}>
        <Element><Anchor onClick={() => { handleFilter('') ; }}>Worldwide</Anchor></Element>
        <Element><Anchor onClick={() => { handleFilter('Africa') ; }}>Africa</Anchor></Element>
        <Element><Anchor onClick={() => { handleFilter('America') ; }}>America</Anchor></Element>
        <Element><Anchor onClick={() => { handleFilter('Asia') ; }}>Asia</Anchor></Element>
        <Element><Anchor onClick={() => { handleFilter('Europe') ; }}>Europe</Anchor></Element>
        <Element><Anchor onClick={() => { handleFilter('Oceania') ; }}>Oceania</Anchor></Element>
      </Dropdown>
    </Container>
  );
};

export default connect()(Filters);
