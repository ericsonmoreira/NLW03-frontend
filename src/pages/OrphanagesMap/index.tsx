import React from 'react';

import {
  Container,
  SideBar,
  Title,
  SubTitle,
  Footer,
  Map,
  AddOrphanageButton,
} from './styles';

import mapMarkerImg from '../../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <Title>Escolhar um organato no mapa</Title>
          <SubTitle>Muitas crianças estão esperando a sua visita :)</SubTitle>
        </header>
        <Footer>
          <strong>Tabuleiro do norte</strong>
          <span>Ceará</span>
        </Footer>
      </SideBar>
      <Map></Map>
      <AddOrphanageButton to="/">
        <FiPlus size={32} color="#FFF" />
      </AddOrphanageButton>
    </Container>
  );
};

export default OrphanagesMap;
