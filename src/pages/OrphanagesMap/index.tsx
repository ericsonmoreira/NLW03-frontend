import React from 'react';

import {
  Container,
  SideBar,
  Title,
  SubTitle,
  Footer,
  AddOrphanageButton,
} from './styles';

import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';

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

      <Map
        center={[-5.2482906,-38.1303709]}
        zoom={17}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <AddOrphanageButton to="/">
        <FiPlus size={32} color="#FFF" />
      </AddOrphanageButton>
    </Container>
  );
};

export default OrphanagesMap;
