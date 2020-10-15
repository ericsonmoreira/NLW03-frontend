import { Popup, PopupProps } from 'react-leaflet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`;

export const SideBar = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const SubTitle = styled.p`
  line-height: 28px;
  margin-top: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const AddOrphanageButton = styled(Link)`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  right: 40px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #15c3d6;
  transition: background-color 0.2s;
  :hover {
    background: #17d6eb;
  }
`;

export const MapPopup = styled(Popup)<PopupProps>`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content {
    color: #0089a5;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    margin: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;

export const MapPopupButton = styled(Link)`
  width: 40px;
  height: 40px;
  background: #15C3D6;
  box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
  border-radius: 12px;
  display:flex;
  align-items: center;
  justify-content: center;
`;
