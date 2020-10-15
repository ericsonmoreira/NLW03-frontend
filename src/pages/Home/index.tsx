import React from 'react';
import {
  Container,
  Content,
  Title,
  SubTitle,
  City,
  EnterAppButton,
} from './styles';

import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../images/logo.svg';
import bgContentImg from '../../images/landing.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Content bgImg={bgContentImg}>
        <img src={logoImg} alt="Happy" />
        <section>
          <Title>Leve Felicidade para o mundo</Title>
          <SubTitle>Visite orfanatos e mude o dia de muitas crianças.</SubTitle>
        </section>
        <City>
          <strong>Tabuleiro do norte</strong>
          <span>Ceará</span>
        </City>
        <EnterAppButton href="">
          <FiArrowRight size={26} color="rgba(0,0,0, 0.8)" />
        </EnterAppButton>
      </Content>
    </Container>
  );
};

export default Home;
