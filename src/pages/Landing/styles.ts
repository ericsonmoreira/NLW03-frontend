import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContentProps {
  bgImg: string;
}

export const Container = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main<ContentProps>`
  width: 100%;
  height: 100%;
  max-height: 600px;
  max-width: 900px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: url(${(props) => props.bgImg}) no-repeat 80% center;

  section {
    max-width: 350px;
  }
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900px;
  line-height: 70px;
`;

export const SubTitle = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const City = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 34px;
  flex-direction: column;
  position: absolute;
  text-align: right;
  right: 0;
  top: 0;

  strong {
    font-weight: 800;
  }
`;

export const EnterAppButton = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  :hover {
    background: #96feff;
  }
`;
