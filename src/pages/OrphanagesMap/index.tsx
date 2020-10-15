import React from 'react';

import {
  Container,
  SideBar,
  Title,
  SubTitle,
  Footer,
  AddOrphanageButton,
  MapPopup,
  MapPopupButton,
} from './styles';

import Leaflet from 'leaflet';
import { Map, Marker, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

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
        center={[-5.2482906, -38.1303709]}
        zoom={17}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={mapIcon} position={[-5.2482906, -38.1303709]}>
          <MapPopup closeButton={false} minWidth={240} maxWidth={240}>
            Lar das meninas
            <MapPopupButton to="/">
              <FiArrowRight size={20} color="#FFF" />
            </MapPopupButton>
          </MapPopup>
        </Marker>
      </Map>

      <AddOrphanageButton to="/orphanage/create">
        <FiPlus size={32} color="#FFF" />
      </AddOrphanageButton>
    </Container>
  );
};

export default OrphanagesMap;
