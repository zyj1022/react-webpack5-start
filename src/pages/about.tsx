import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const About: React.FC<IProps> = () => {
  return <Container>About</Container>;
};

export default inject('store')(observer(About));
