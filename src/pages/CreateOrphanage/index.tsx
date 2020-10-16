import React, { useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import {
  Container,
  InputBlock,
  CreateOrphanageForm,
  NewImageButton,
  ButtonSelect,
  ConfirmButton,
  OptionButton,
} from './styles';

import { FiPlus } from 'react-icons/fi';
import happyMapIcon from '../../utils/mapIcon';

import Sidebar from '../../components/Sidebar';

import { Field, Formik } from 'formik';

interface MyFormValues {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_week: boolean;
}

const initialValues: MyFormValues = {
  name: '',
  latitude: 0,
  longitude: 0,
  about: '',
  instructions: '',
  opening_hours: '',
  open_on_week: false,
};

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <CreateOrphanageForm>
            <fieldset>
              <legend>Dados</legend>
              <Map
                center={[-27.2092052, -49.6401092]}
                style={{ width: '100%', height: 280 }}
                zoom={15}
                onclick={handleMapClick}
              >
                <TileLayer
                  url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                />

                {position.latitude !== 0 && position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={happyMapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </Map>
              <InputBlock>
                <label htmlFor="name">Nome</label>
                <Field id="name" name="name" />
              </InputBlock>
              <InputBlock>
                <label htmlFor="about">
                  Sobre <span>Máximo de 300 caracteres</span>
                </label>
                <Field id="about" name="about" as="textarea" maxLength={300} />
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
                <Field
                  id="instructions"
                  name="instructions"
                  as="textarea"
                  maxLength={300}
                />
              </InputBlock>

              <InputBlock>
                <label htmlFor="opening_hours">Horário das visitas</label>
                <Field id="opening_hours" name="opening_hours" />
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
        </Formik>
      </main>
    </Container>
  );
};

export default CreateOrphanage;
