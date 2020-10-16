import React from 'react';
import { Container, GoBackButton } from './styles';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';
import { useHistory } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <GoBackButton type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </GoBackButton>
      </footer>
    </Container>
  );
};

export default Sidebar;
