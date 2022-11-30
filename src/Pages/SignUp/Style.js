import styled from "styled-components";

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 40%;
  background-color: #1976d2;
  border-radius: 12px;
  z-index: 1;
  position: fixed;
  top: 25vh;
  left: 35vw;
  h5 {
    font-weight: 700;
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  background-color: #fff;
  max-width: 600px;
  padding: 1rem;
  margin: 0 auto;
`;
const Title = styled.div`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  ion-icon {
    font-size: 2.5rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 6px;
  padding: 16px;
  border: 1px solid #afafaf;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  font-weight: 500;
  font-size: 1rem;
  color: #000;
  ::placeholder {
    font-size: 1rem;
    color: #afafaf;
  }
  :focus {
    outline-color: #1976d2;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 6px;
  border: 1px solid #1976d2;
  background-color: #1976d2;
  line-height: 1.75;
  padding: 6px 16px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  :hover {
    filter: brightness(120%);
  }
`;
const TextLink = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
  color: rgba(25, 118, 210, 0.7);
`;
const ContainerLinks = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

const Copyright = styled.div`
  margin-top: 40px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  font-weight: 400;
`;

export {
  Modal,
  Container,
  Title,
  Form,
  Input,
  Button,
  TextLink,
  ContainerLinks,
  Copyright,
};
