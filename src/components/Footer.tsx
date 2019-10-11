import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.palette.background.paper};
  margin-top: ${props => props.theme.spacing(8)};
  padding: ${props => props.theme.spacing(6, 0)};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Copyright (c) 2019 nekochans
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
