import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Sidebar from '../../components/Sidebar';

import {
  Container,
  OrphanageDetails,
  OrphanageImages,
  ImagesButton,
  OrphanageDetailsContent,
  MapContainer,
  OpenDetails,
  Hour,
  OpenOnWeekends,
  ContactButton,
} from './styles';

import happyMapIcon from '../../utils/mapIcon';
import IOrphanage from '../../entities/IOrphanage';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

interface IOrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const { id } = useParams<IOrphanageParams>();

  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`/orphanages/${id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [id]);

  // TODO: Melhorar isso depois
  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <OrphanageImages>
            {orphanage.images.map((image, index) => (
              <ImagesButton
                key={image.id}
                active={activeImageIndex === index}
                type="button"
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.url} alt={orphanage.name} />
              </ImagesButton>
            ))}
          </OrphanageImages>

          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Hour>
              {orphanage.open_on_week ? (
                <OpenOnWeekends open_on_week>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  no fim de semana
                </OpenOnWeekends>
              ) : (
                <OpenOnWeekends>
                  <FiInfo size={32} color="#FF669D" />
                  Nãp atendemos <br />
                  no fim de semana
                </OpenOnWeekends>
              )}
            </OpenDetails>

            <ContactButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </main>
    </Container>
  );
};

export default Orphanage;
