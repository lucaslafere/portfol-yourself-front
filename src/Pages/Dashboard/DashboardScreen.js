import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import TokenContext from "../../Contexts/TokenContext";
import * as S from "./Style";

export default function DashboardScreen() {
  const [itemsData, setItemsData] = useState([]);
  const [portfolioId, setPortfolioId] = useState(0);
  const [layout, setLayout] = useState({
    title: "",
    logo: "",
    boxSize: "medium",
    style: "modern",
    isStore: false,
  });
  const [edit, setEdit] = useState("");
  const { token } = useContext(TokenContext);
  const dashboardURL = `http://localhost:5000/dashboard`;
  const portfoliosURL = `http://localhost:5000/portfolios/${portfolioId}`;
  const body = {
    boxSize: layout.boxSize,
    style: layout.style,
    isStore: layout.isStore,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const navigate = useNavigate();

  function putSaveChanges() {
    axios
      .put(portfoliosURL, body, config)
      .then((res) => {
        console.log(`saved sucessful: ${res.data}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getLoggedUserPortfolioByToken() {
    axios
      .get(dashboardURL, config)
      .then((res) => {
        setLayout({
          title: res.data.portfolio.title,
          logo: res.data.portfolio.logo,
          boxSize: res.data.layout.boxSize,
          style: res.data.layout.style,
          isStore: res.data.layout.isStore,
        });
        setItemsData(res.data.items);
        setPortfolioId(res.data.portfolio.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function mountItems() {
    if (layout.isStore === false) {
      return itemsData.map((el, index) => (
        <S.ItemBox
          boxSize={layout.boxSize}
          key={index}
          title={el.title}
          imageUrl={el.imageUrl}
          description={el.description}
        >
          <S.ItemImage>
            <img src={el.imageUrl} alt="" />
          </S.ItemImage>
          <S.ItemTitle>{el.title}</S.ItemTitle>
          <S.ItemDescription>{el.description}</S.ItemDescription>
        </S.ItemBox>
      ));
    } else {
      return itemsData.map((el, index) => (
        <S.ItemBox
          boxSize={layout.boxSize}
          key={index}
          title={el.title}
          imageUrl={el.imageUrl}
          description={el.description}
          price={el.price}
        >
          <S.ItemImage>
            <img src={el.imageUrl} alt="" />
          </S.ItemImage>
          <S.ItemTitle>{el.title}</S.ItemTitle>
          <S.ItemDescription>{el.description}</S.ItemDescription>
          <S.ItemPriceTag>{el.price}</S.ItemPriceTag>
        </S.ItemBox>
      ));
    }
  }
  function mountEditting() {
    if (edit === "box") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton
            onClick={() => setLayout({ ...layout, boxSize: "small" })}
          >
            Small
          </S.BlueButton>
          <S.WhiteButton
            onClick={() => setLayout({ ...layout, boxSize: "medium" })}
          >
            Medium
          </S.WhiteButton>
          <S.BlueButton
            onClick={() => setLayout({ ...layout, boxSize: "large" })}
          >
            Large
          </S.BlueButton>
        </S.ButtonsContainer>
      );
    }
    if (edit === "color") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton>Blue</S.BlueButton>
          <S.GreenButton>Green</S.GreenButton>
          <S.YellowButton>Yellow</S.YellowButton>
        </S.ButtonsContainer>
      );
    }
    if (edit === "font-size") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton>Small</S.BlueButton>
          <S.WhiteButton>Medium</S.WhiteButton>
          <S.BlueButton>Large</S.BlueButton>
        </S.ButtonsContainer>
      );
    }
    if (edit === "layouts") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton>Cursive</S.BlueButton>
          <S.WhiteButton>Modern</S.WhiteButton>
        </S.ButtonsContainer>
      );
    }
    if (edit === "store-options") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton>Switch to non-store</S.BlueButton>
          <S.WhiteButton>Switch to store</S.WhiteButton>
        </S.ButtonsContainer>
      );
    }
  }
  useEffect(() => getLoggedUserPortfolioByToken(), []);
  const renderItems = mountItems();
  const renderEditting = mountEditting();

  return (
    <>
      <S.HeaderContainer>
        <S.SideBar>
          <S.SideBarTopBox />
          <S.SideBarItem>
            <ion-icon name="add-circle-outline"></ion-icon>
            Add New Item
          </S.SideBarItem>
          <S.SideBarItem onClick={() => setEdit("box")}>
            <ion-icon name="cube-outline"></ion-icon>
            Box Sizes
          </S.SideBarItem>
          <S.SideBarItem onClick={() => setEdit("color")}>
            <ion-icon name="color-palette-outline"></ion-icon>
            Color Scheme
          </S.SideBarItem>
          <S.SideBarItem onClick={() => setEdit("font-size")}>
            <ion-icon name="color-wand-outline"></ion-icon>
            Font Size
          </S.SideBarItem>
          <S.SideBarItem onClick={() => setEdit("layouts")}>
            <ion-icon name="image-outline"></ion-icon>
            Layouts
          </S.SideBarItem>
          <S.SideBarItem onClick={() => setEdit("store-options")}>
            <ion-icon name="storefront-outline"></ion-icon>
            Store Options
          </S.SideBarItem>
          <S.SideBarItem onClick={() => putSaveChanges()}>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            Save Changes
          </S.SideBarItem>
        </S.SideBar>
        <S.Header>
          <p onClick={() => navigate("/")}>Portfol-Yourself</p>
          <S.Logo>
            <img src={layout.logo} alt="" />
          </S.Logo>
        </S.Header>
      </S.HeaderContainer>
      <S.Container>
        {renderEditting}
        <S.TopSection>
          <S.Title>{layout.title}</S.Title>
        </S.TopSection>
        <S.Content>{renderItems}</S.Content>
        <S.Footer>
          <h5>Footer</h5>
          <S.Copyright>
            <p>Copyright © Portfol-Yourself 2022.</p>
          </S.Copyright>
        </S.Footer>
      </S.Container>
    </>
  );
}
