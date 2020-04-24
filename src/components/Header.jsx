import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div``;
const Title = styled.h1``;
const Button = styled.button``;

const Header = ({ dark, dispatch }) => {
  const handleClick = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_THEME',
      payload: !dark,
    });
  };
  return (
    <Container>
      <Title>Where in the World</Title>
      <Button onClick={handleClick} type="button">{dark ? 'Light Mode' : 'Dark Mode'}</Button>
    </Container>
  );
};

const mapStateToProps = ({ dark }) => {
  return {
    dark,
  };
};

export default connect(mapStateToProps)(Header);
