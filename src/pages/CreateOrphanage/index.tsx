import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import { useHistory } from 'react-router-dom';

import {
  Container,
  SideBar,
  GoBackButton,
  InputBlock,
  CreateOrphanageForm,
  NewImageButton,
  ButtonSelect,
  ConfirmButton,
  OptionButton,
} from './styles';

import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const CreateOrphanage: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <SideBar>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <GoBackButton type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </GoBackButton>
        </footer>
      </SideBar>

      <main>
        <CreateOrphanageForm>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={'https://a.tile.openstreetmap.org/${z}/${x}/${y}.png'}
              />

              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <NewImageButton>
                <FiPlus size={24} color="#15b6d6" />
              </NewImageButton>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>
              <ButtonSelect>
                <OptionButton type="button" active>
                  Sim
                </OptionButton>
                <OptionButton type="button">Não</OptionButton>
              </ButtonSelect>
            </InputBlock>
          </fieldset>

          <ConfirmButton type="submit">Confirmar</ConfirmButton>
        </CreateOrphanageForm>
      </main>
    </Container>
  );
};

export default CreateOrphanage;
