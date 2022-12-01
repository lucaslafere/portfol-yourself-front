/* eslint-disable indent */
import styled from "styled-components";

// const lightCorkboard = 'https://c1.wallpaperflare.com/preview/907/581/284/backdrop-background-blank-board.jpg';
const darkCorkboard =
  "https://cdn.cssauthor.com/wp-content/uploads/2012/12/Corkboard-Wood-Cork-Composite.jpg?strip=all&lossy=1&ssl=1";

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  height: 70px;
  display: flex;
  z-index: 2;
`;
const Header = styled.div`
  width: 100%;
  padding: 2rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: ${({ layout }) =>
    (layout === "modern" && "#1976d2") ||
    (layout === "handwritten" && "#fff") ||
    (layout === "altcursive" && "#fff")};
  color: ${({ layout }) =>
    (layout === "modern" && "#fff") ||
    (layout === "handwritten" && "rgba(0, 0, 0, 0.87)") ||
    (layout === "altcursive" && "rgba(0, 0, 0, 0.87)")};
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
  background-image: ${({ layout }) =>
    (layout === "modern" && "") ||
    (layout === "handwritten" && `url(${darkCorkboard})`) ||
    (layout === "altcursive" && `url(${darkCorkboard})`)};
  background-color: ${({ layout }) =>
    (layout === "modern" && "#f5f5f5") ||
    (layout === "handwritten" && "#fff") ||
    (layout === "altcursive" && "#fff")};
  font-family: ${({ layout }) =>
    (layout === "modern" && "Roboto") ||
    (layout === "handwritten" && "Cedarville Cursive") ||
    (layout === "altcursive" && "The Girl Next Door")};
  height: ${({ boxSize }) =>
    (boxSize === "small" && "100vh") ||
    (boxSize === "medium" && "auto") ||
    (boxSize === "large" && "auto")};
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
  font-size: 3.75rem;
  text-align: center;
  font-weight: 300;
  margin-top: 80px;
  color: ${({ layout }) =>
    (layout === "modern" && "rgba(0, 0, 0, 1)") ||
    (layout === "handwritten" && "#fff") ||
    (layout === "altcursive" && "#fff")};
  text-shadow: 1px 1px black;
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
const ItemBox = styled.div`
  border-radius: ${({ layout }) =>
    (layout === "modern" && "6px") ||
    (layout === "handwritten" && "0px") ||
    (layout === "altcursive" && "0px")};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  width: ${({ boxSize }) =>
    (boxSize === "medium" && "250px") ||
    (boxSize === "small" && "200px") ||
    (boxSize === "large" && "400px")};
  height: ${({ boxSize }) =>
    (boxSize === "medium" && "250px") ||
    (boxSize === "small" && "200px") ||
    (boxSize === "large" && "400px")};
  gap: ${({ boxSize }) =>
    (boxSize === "medium" && "0.5rem") ||
    (boxSize === "small" && "0.3rem") ||
    (boxSize === "large" && "0.6rem")};
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
    width: ${({ boxSize }) =>
      (boxSize === "medium" && "40px") ||
      (boxSize === "small" && "36px") ||
      (boxSize === "large" && "60px")};
    height: ${({ boxSize }) =>
      (boxSize === "medium" && "40px") ||
      (boxSize === "small" && "36px") ||
      (boxSize === "large" && "60px")};
  }
`;

const ItemImage = styled.div`
  img {
    width: ${({ boxSize }) =>
      (boxSize === "medium" && "250px") ||
      (boxSize === "small" && "200px") ||
      (boxSize === "large" && "400px")};
    height: ${({ boxSize }) =>
      (boxSize === "medium" && "175px") ||
      (boxSize === "small" && "150px") ||
      (boxSize === "large" && "300px")};
    padding: ${({ layout }) =>
      (layout === "modern" && "0px") ||
      (layout === "handwritten" && "1rem 0.75rem") ||
      (layout === "altcursive" && "1rem 0.75rem")};
    object-fit: cover;
    border-radius: 6px;
  }
`;
const ItemTitle = styled.div`
  font-weight: 400;
  font-size: ${({ boxSize }) =>
    (boxSize === "medium" && "1.5rem") ||
    (boxSize === "small" && "0.75rem") ||
    (boxSize === "large" && "1.75rem")};
  text-overflow: ellipsis;
`;
const ItemDescription = styled.div`
  font-weight: 400;
  font-size: ${({ boxSize }) =>
    (boxSize === "medium" && "1rem") ||
    (boxSize === "small" && "0.8rem") ||
    (boxSize === "large" && "1.75rem")};
  text-overflow: ellipsis;
`;
const ItemPriceTag = styled.span`
  font-weight: 400;
  font-size: ${({ boxSize }) =>
    (boxSize === "medium" && "1rem") ||
    (boxSize === "small" && "0.5rem") ||
    (boxSize === "large" && "1rem")};
  text-overflow: ellipsis;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
`;
const Copyright = styled.div`
  margin-top: 40px;
  color: ${({ layout }) =>
    (layout === "modern" && "rgba(0, 0, 0, 0.6)") ||
    (layout === "handwritten" && "#fff") ||
    (layout === "altcursive" && "#fff")};
  text-shadow: 1px 1px black;
  font-size: ${({ layout }) =>
    (layout === "modern" && "0.9rem") ||
    (layout === "handwritten" && "2rem") ||
    (layout === "altcursive" && "2rem")};
  font-weight: 400;
`;

export {
  HeaderContainer,
  Header,
  Logo,
  Container,
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
