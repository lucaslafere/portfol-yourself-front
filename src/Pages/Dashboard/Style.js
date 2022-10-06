import styled from "styled-components";

const lightCorkboard = "https://c1.wallpaperflare.com/preview/907/581/284/backdrop-background-blank-board.jpg"
const darkCorkboard = 'https://cdn.cssauthor.com/wp-content/uploads/2012/12/Corkboard-Wood-Cork-Composite.jpg?strip=all&lossy=1&ssl=1'

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  height: 70px;
  display: flex;
  z-index: 2;
`;
const SideBar = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  gap: 8px;
`;
const SideBarTopBox = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px;
  margin-bottom: 8px;
`;
const SideBarItem = styled.div`
  width: 100%;
  height: 48px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  ion-icon {
    font-size: 2rem;
    margin-right: 2rem;
  }
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
  :nth-child(8) {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    color: #1976d2;
  }
`;
const Header = styled.div`
  width: 100%;
  padding: 2rem;
  height: 70px;
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
  p {
    cursor: pointer;
    padding: 2rem;
  }
`;
const Logo = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  background-image: ${(props) =>
    (props.layout === "modern" && "") ||
    (props.layout === "cursive" &&
      `url(${darkCorkboard})`) ||
    (props.layout === "altcursive" &&
      `url(${darkCorkboard})`)};
  background-color: ${(props) =>
    (props.layout === "modern" && "#f5f5f5") ||
    (props.layout === "cursive" && "#fff") ||
    (props.layout === "altcursive" && "#fff")};
  font-family: ${(props) =>
    (props.layout === "modern" && "Roboto") ||
    (props.layout === "cursive" && "Cedarville Cursive") ||
    (props.layout === "altcursive" && "The Girl Next Door")};
`;

const ButtonsContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  border-radius: 60px;
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
  border-radius: 60px;
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
  border-radius: 60px;
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
const GreenButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  min-width: 90px;
  padding: 6px 16px;
  border-radius: 60px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  background-color: green;
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  -webkit-tap-highlight-color: transparent;

  :hover {
    filter: brightness(120%);
  }
`;
const YellowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  min-width: 90px;
  padding: 6px 16px;
  border-radius: 60px;
  border: 1px solid yellow;
  background-color: yellow;
  color: black;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  -webkit-tap-highlight-color: transparent;

  :hover {
    filter: brightness(120%);
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  margin-bottom: 3rem;
  margin-left: 240px;
`;
const Title = styled.div`
  color: rgba(0, 0, 0, 1);
  font-size: 3.75rem;
  text-align: center;
  font-weight: 300;
  margin-top: 80px;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 240px;
  padding: 1rem;
`;
const ItemBox = styled.div`
  border-radius: ${(props) =>
    (props.layout === "modern" && "6px") ||
    (props.layout === "cursive" && "0px") ||
    (props.layout === "altcursive" && "0px")};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    (props.boxSize === "medium" && "250px") ||
    (props.boxSize === "small" && "200px") ||
    (props.boxSize === "large" && "400px")};
  height: ${(props) =>
    (props.boxSize === "medium" && "250px") ||
    (props.boxSize === "small" && "200px") ||
    (props.boxSize === "large" && "400px")};
  gap: ${(props) =>
    (props.boxSize === "medium" && "0.5rem") ||
    (props.boxSize === "small" && "0.3rem") ||
    (props.boxSize === "large" && "0.6rem")};
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 2rem;
  background-color: #fff;
  position: relative;
`;

const Pin = styled.div`
  justify-self: flex-start;
  align-self: center;
  z-index: 1;
  position: absolute;
  top: 0;
  img {
    width: ${(props) =>
    (props.boxSize === "medium" && "40px") ||
    (props.boxSize === "small" && "36px") ||
    (props.boxSize === "large" && "60px")};
    height: ${(props) =>
    (props.boxSize === "medium" && "40px") ||
    (props.boxSize === "small" && "36px") ||
    (props.boxSize === "large" && "60px")};
  }
`;

const ItemImage = styled.div`
  img {
    width: ${(props) =>
      (props.boxSize === "medium" && "250px") ||
      (props.boxSize === "small" && "200px") ||
      (props.boxSize === "large" && "400px")};
    height: ${(props) =>
      (props.boxSize === "medium" && "175px") ||
      (props.boxSize === "small" && "150px") ||
      (props.boxSize === "large" && "300px")};
    padding: ${(props) =>
      (props.layout === "modern" && "0px") ||
      (props.layout === "cursive" && "1rem 0.75rem") ||
      (props.layout === "altcursive" && "1rem 0.75rem")};
    object-fit: cover;
    border-radius: 6px;
  }
`;
const ItemTitle = styled.div`
  font-weight: 400;
  font-size: ${(props) =>
    (props.boxSize === "medium" && "1.5rem") ||
    (props.boxSize === "small" && "0.75rem") ||
    (props.boxSize === "large" && "1.75rem")};
  text-overflow: ellipsis;
`;
const ItemDescription = styled.div`
  font-weight: 400;
  font-size: ${(props) =>
    (props.boxSize === "medium" && "1rem") ||
    (props.boxSize === "small" && "0.8rem") ||
    (props.boxSize === "large" && "1.75rem")};
  text-overflow: ellipsis;
`;
const ItemPriceTag = styled.span`
  font-weight: 400;
  font-size: ${(props) =>
    (props.boxSize === "medium" && "1rem") ||
    (props.boxSize === "small" && "0.5rem") ||
    (props.boxSize === "large" && "1rem")};
  text-overflow: ellipsis;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  margin-left: 240px;
`;
const Copyright = styled.div`
  margin-top: 40px;
  color: ${(props) =>
    (props.layout === "modern" && "rgba(0, 0, 0, 0.6)") ||
    (props.layout === "cursive" && "rgba(0, 0, 0, 1)") ||
    (props.layout === "altcursive" && "rgba(0,0,0, 1)")};
  font-size: ${(props) =>
    (props.layout === "modern" && "0.9rem") ||
    (props.layout === "cursive" && "2rem") ||
    (props.layout === "altcursive" && "2rem")};
  font-weight: 400;
`;

export {
  HeaderContainer,
  SideBar,
  SideBarTopBox,
  SideBarItem,
  Header,
  Logo,
  Container,
  ButtonsContainer,
  BlueButton,
  WhiteButton,
  GreenButton,
  YellowButton,
  TopSection,
  Title,
  Content,
  ItemBox,
  Pin,
  ItemImage,
  ItemTitle,
  ItemDescription,
  ItemPriceTag,
  Footer,
  Copyright,
};
