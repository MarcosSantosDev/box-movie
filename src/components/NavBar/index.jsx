import React from 'react';

import { languages } from '../../translate/languages.json';
import { Container, Logo, BoxIcon, FaPlayIcon, TranslateWrapper } from './styled';

import usePersistedState from '../../hooks/usePersistedState';

const Header = () => {
  const [language, setLanguage] = usePersistedState('language', 'pt-BR');

  const handleChange = (event) => {
    const prefixLanguage = event.target.value;
    if(language !== prefixLanguage) {
      setLanguage(prefixLanguage);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  };

  return (
      <Container>
        <Logo>
          <BoxIcon>
            <FaPlayIcon fontSize={20} />
          </BoxIcon>
          Box Movie
        </Logo>
        <TranslateWrapper>
          <select
            id='translate'
            name='tranlate'
            onChange={handleChange}
            value={language}
          >
            {
              languages.map((langOption, index) => (
                <option key={index} value={langOption.prefix}>{langOption.language}</option>
              ))
            }
          </select>
        </TranslateWrapper>
      </Container>
  );
};

export default Header;
