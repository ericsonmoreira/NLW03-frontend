import React, { ChangeEvent } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import {
  Container,
  InputBlock,
  FormikErrorMessage,
  CreateOrphanageForm,
  NewImageButton,
  ButtonSelect,
  ConfirmButton,
  OptionButton,
  ImagesContainer,
} from './styles';

import { FiPlus } from 'react-icons/fi';
import happyMapIcon from '../../utils/mapIcon';

import Sidebar from '../../components/Sidebar';

import { Field, Formik } from 'formik';
import schema from './schemaValidation';

interface MyFormValues {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_week: boolean;
  images: Array<{
    url: string;
  }>;
}

const initialValues: MyFormValues = {
  name: '',
  latitude: 0,
  longitude: 0,
  about: '',
  instructions: '',
  opening_hours: '',
  open_on_week: true,
  images: [],
};

const CreateOrphanage: React.FC = () => {
  function handleSubmit(values: MyFormValues) {
    console.log();
    alert(JSON.stringify(values, null, 2));
  }

  function handleSelectImages(
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: Function
  ) {
    if (!event.target.files) return;
    console.log(Array.from(event.target.files));

    // Muito lindo isso aqui
    setFieldValue(
      'images',
      Array.from(event.target.files).map((file) => ({
        url: URL.createObjectURL(file),
      }))
    );
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ setFieldValue, values }) => (
            <CreateOrphanageForm>
              <fieldset>
                <legend>Dados</legend>
                <Map
                  center={[-27.2092052, -49.6401092]}
                  style={{ width: '100%', height: 280 }}
                  zoom={15}
                  onclick={(event: LeafletMouseEvent) => {
                    const { lat, lng } = event.latlng;
                    setFieldValue('latitude', lat);
                    setFieldValue('longitude', lng);
                  }}
                >
                  <TileLayer
                    url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                  />

                  {values.latitude !== 0 && values.latitude !== 0 && (
                    <Marker
                      interactive={false}
                      icon={happyMapIcon}
                      position={[values.latitude, values.longitude]}
                    />
                  )}
                </Map>
                <InputBlock>
                  <label htmlFor="name">Nome</label>
                  <Field id="name" name="name" />
                  <FormikErrorMessage component="div" name="name" />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="about">
                    Sobre <span>Máximo de 300 caracteres</span>
                  </label>
                  <Field
                    id="about"
                    name="about"
                    as="textarea"
                    maxLength={300}
                  />
                  <FormikErrorMessage component="div" name="about" />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="images[]">Fotos</label>

                  <ImagesContainer>
                    {/* TODO: colocar as imagens aqui */}
                    {values.images.map((image, index) => (
                      <img key={index} src={image.url} alt={values.name} />
                    ))}

                    <NewImageButton htmlFor="images[]">
                      <FiPlus size={24} color="#15b6d6" />
                    </NewImageButton>
                  </ImagesContainer>

                  <input
                    multiple
                    type="file"
                    id="images[]"
                    style={{ display: 'none' }}
                    onChange={(event) =>
                      handleSelectImages(event, setFieldValue)
                    }
                  />
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
                  <FormikErrorMessage component="div" name="about" />
                </InputBlock>

                <InputBlock>
                  <label htmlFor="opening_hours">Horário das visitas</label>
                  <Field id="opening_hours" name="opening_hours" />
                  <FormikErrorMessage component="div" name="opening_hours" />
                </InputBlock>

                <InputBlock>
                  <label htmlFor="open_on_weekends">Atende fim de semana</label>
                  <ButtonSelect>
                    <OptionButton
                      type="button"
                      active={values.open_on_week}
                      onClick={() => {
                        setFieldValue('open_on_weekends', true);
                      }}
                    >
                      Sim
                    </OptionButton>
                    <OptionButton
                      type="button"
                      active={false}
                      onClick={() => {
                        setFieldValue('open_on_weekends', false);
                      }}
                    >
                      Não
                    </OptionButton>
                  </ButtonSelect>
                </InputBlock>
              </fieldset>

              <ConfirmButton type="submit">Confirmar</ConfirmButton>
            </CreateOrphanageForm>
          )}
        </Formik>
      </main>
    </Container>
  );
};

export default CreateOrphanage;
