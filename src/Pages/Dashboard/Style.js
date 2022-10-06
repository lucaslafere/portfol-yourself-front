import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  height: 70px;
  display: flex;
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
  gap: 0.5rem;
`;
const SideBarTopBox = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;
const SideBarItem = styled.div`
width: 240px;
height: 48px;
padding: 0.5rem 1rem;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
-webkit-tap-highlight-color: transparent;
cursor: pointer;
:hover {
    background-color: #f5f5f5;
}
`
const Header = styled.div`
  width: 80%;
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
  margin-bottom: 3rem;
  cursor: pointer;
`;
const Logo = styled.div`
  width: 200px;
  height: 100%;
  img {
    width: 200px;
    height: 100%;
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

const Content = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
`;
const ItemBox = styled.div`
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    (props.boxSize === "medium" && "300px") ||
    (props.boxSize === "small" && "200px") ||
    (props.boxSize === "large" && "400px")};
  height: ${(props) =>
    (props.boxSize === "medium" && "300px") ||
    (props.boxSize === "small" && "200px") ||
    (props.boxSize === "large" && "400px")};
  gap: ${(props) =>
    (props.boxSize === "medium" && "1rem") ||
    (props.boxSize === "small" && "0.5rem") ||
    (props.boxSize === "large" && "1rem")};
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 2rem;
`;
const ItemImage = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;
const ItemTitle = styled.div`
  font-weight: 400;
  font-size: ${(props) =>
    (props.boxSize === "medium" && "1.5rem") ||
    (props.boxSize === "small" && "0.75rem") ||
    (props.boxSize === "large" && "1.5rem")};
  text-overflow: ellipsis;
`;
const ItemDescription = styled.div`
  font-weight: 400;
  font-size: ${(props) =>
    (props.boxSize === "medium" && "1rem") ||
    (props.boxSize === "small" && "0.5rem") ||
    (props.boxSize === "large" && "1rem")};
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
  HeaderContainer,
  SideBar,
  SideBarTopBox,
  SideBarItem,
  Header,
  Logo,
  Container,
  TopSection,
  Title,
  Content,
  ItemBox,
  ItemImage,
  ItemTitle,
  ItemDescription,
  ItemPriceTag,
  Footer,
  Copyright,
};
