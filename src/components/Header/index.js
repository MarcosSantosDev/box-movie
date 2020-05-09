import React from 'react';

import { Container, Logo, BoxIcon, FaPlayIcon } from './styled';

const Header = () => (
    <Container>
      <Logo>
        <BoxIcon>
          <FaPlayIcon fontSize={20} />
        </BoxIcon>
        Box Movie
      </Logo>
    </Container>
);

export default Header;