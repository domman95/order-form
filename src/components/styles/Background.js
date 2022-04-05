import styled from 'styled-components';
import background from '../../assets/background.png';

const Bgc = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 700px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Background = () => {
  return (
    <Bgc>
      <img src={background} alt="circle-background" />
    </Bgc>
  );
};

export default Background;
