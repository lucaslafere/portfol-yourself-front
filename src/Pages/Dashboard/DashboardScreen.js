import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import TokenContext from "../../Contexts/TokenContext";
import UserDataContext from "../../Contexts/UserDataContext";
import * as S from "./Style";

export default function DashboardScreen() {
  const [itemsData, setItemsData] = useState([]);
  const [layout, setLayout] = useState({
    title: "",
    logo: "",
    boxSize: "medium",
    style: "modern",
    isStore: false,
  });
  const { token } = useContext(TokenContext);
  const dashboardURL = `http://localhost:5000/dashboard`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const navigate = useNavigate();

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
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => getLoggedUserPortfolioByToken(), []);
  function mountItems() {
    console.log(layout.title);
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
  function mountEditBoxSize() {}
  const renderItems = mountItems();

  return (
    <>
      <S.HeaderContainer>
        <S.SideBar>
          <S.SideBarTopBox />
          <S.SideBarItem>
            <ion-icon name="cube-outline"></ion-icon>
            Box Sizes
          </S.SideBarItem>
          <S.SideBarItem>
            <ion-icon name="color-palette-outline"></ion-icon>
            Color Scheme
          </S.SideBarItem>
          <S.SideBarItem>
            <ion-icon name="image-outline"></ion-icon>
            Layouts
          </S.SideBarItem>

          <S.SideBarItem>
            <ion-icon name="storefront-outline"></ion-icon>
            Store Options
          </S.SideBarItem>
        </S.SideBar>
        <S.Header >
          <p onClick={() => navigate("/")}>Portfol-Yourself</p>
          <S.Logo>
            <img src={layout.logo} alt="" />
          </S.Logo>
        </S.Header>
      </S.HeaderContainer>
      <S.Container>
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
