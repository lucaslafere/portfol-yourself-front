import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  position: sticky;
  height: 70px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #1976d2;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3rem;
  p {
    cursor: pointer;
    padding: 2rem;
  }
`;

const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  margin-bottom: 3rem;
`;
const Title = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 3.75rem;
  text-align: center;
  font-weight: 300;
`;
const Description = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`;
const TopButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;
const BlueButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  min-width: 90px;
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid #1976d2;
  background-color: #1976d2;
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  -webkit-tap-highlight-color: transparent;

  :hover {
    filter: brightness(120%);
  }
`;
const WhiteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  min-width: 90px;
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  background-color: #fff;
  color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  -webkit-tap-highlight-color: transparent;

  :hover {
    filter: brightness(120%);
  }
`;
const Content = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
`;
const PortfolioBox = styled.div`
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  width: ${({ boxSize }) =>
    (boxSize === "medium" && "250px") ||
    (boxSize === "small" && "200px") ||
    (boxSize === "large" && "400px")};
  height: ${({ boxSize }) =>
    (boxSize === "medium" && "300px") ||
    (boxSize === "small" && "220px") ||
    (boxSize === "large" && "400px")};
  gap: ${({ boxSize }) =>
    (boxSize === "medium" && "1rem") ||
    (boxSize === "small" && "0.5rem") ||
    (boxSize === "large" && "1rem")};
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 2rem;
`;
const PortfolioLogo = styled.div`
  img {
    width: ${({ boxSize }) =>
      (boxSize === "medium" && "300px") ||
      (boxSize === "small" && "200px") ||
      (boxSize === "large" && "400px")};
    height: ${({ boxSize }) =>
      (boxSize === "medium" && "200px") ||
      (boxSize === "small" && "150px") ||
      (boxSize === "large" && "300px")};
    object-fit: cover;
    border-radius: 6px;
  }
`;
const PortfolioTitle = styled.div`
  font-weight: 400;
  font-size: ${({ boxSize }) =>
    (boxSize === "medium" && "1.25rem") ||
    (boxSize === "small" && "0.75rem") ||
    (boxSize === "large" && "1.5rem")};
  text-overflow: ellipsis;
`;
const ViewLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: ${({ boxSize }) =>
    (boxSize === "medium" && "0.875rem") ||
    (boxSize === "small" && "0.4rem") ||
    (boxSize === "large" && "0.875rem")};
  width: 30%;
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  background-color: #fff;
  color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  -webkit-tap-highlight-color: transparent;

  :hover {
    filter: brightness(120%);
  }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  font-weight: 500;
`;
const Copyright = styled.div`
  margin-top: 40px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  font-weight: 400;
`;

export {
  Header,
  HeaderButtonsContainer,
  Container,
  TopSection,
  Title,
  Description,
  TopButtonsContainer,
  BlueButton,
  WhiteButton,
  Content,
  PortfolioBox,
  PortfolioLogo,
  PortfolioTitle,
  ViewLink,
  Footer,
  Copyright,
};
