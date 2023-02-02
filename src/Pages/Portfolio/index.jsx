import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import pin from "../../Assets/pin.png";
import api from "../../Services/api";

export default function PortfolioScreen() {
  const [itemsData, setItemsData] = useState([]);
  const [layout, setLayout] = useState({
    title: "",
    logo: "",
    boxSize: "medium",
    style: "modern",
    isStore: false,
  });
  const { portfolioId } = useParams();
  const navigate = useNavigate();

  function getPortfolioById() {
    api
      .get(`/portfolios/${portfolioId}`)

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
  function mountItems() {
    if (layout.isStore === false) {
      return itemsData.map((el, index) => (
        <S.ItemBox
          boxSize={layout.boxSize}
          key={index}
          title={el.title}
          imageUrl={el.imageUrl}
          description={el.description}
          layout={layout.style}
        >
          {layout.style === "modern" ? null : (
            <S.Pin boxSize={layout.boxSize}>
              <img src={pin} alt="" />
            </S.Pin>
          )}
          <S.ItemImage boxSize={layout.boxSize} layout={layout.style}>
            <img src={el.imageUrl} alt="" />
          </S.ItemImage>
          <S.ItemTitle boxSize={layout.boxSize}>{el.title}</S.ItemTitle>
          <S.ItemDescription boxSize={layout.boxSize}>
            {el.description}
          </S.ItemDescription>
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
  function mountLayout() {
    return (
      <S.Container layout={layout.style}>
        <S.TopSection>
          <S.Title layout={layout.style}>{layout.title}</S.Title>
        </S.TopSection>
        <S.Content>{renderItems}</S.Content>
        <S.Footer layout={layout.style}>
          <S.Copyright layout={layout.style}>
            <p>Copyright © Portfol-Yourself 2022.</p>
          </S.Copyright>
        </S.Footer>
      </S.Container>
    );
  }
  useEffect(() => getPortfolioById(), []);
  const renderItems = mountItems();
  const renderLayout = mountLayout();
  return (
    <>
      <S.HeaderContainer>
        <S.Header layout={layout.style}>
          <p onClick={() => navigate("/")}>Portfol-Yourself</p>
          <S.Logo>
            <img src={layout.logo} alt="" />
          </S.Logo>
        </S.Header>
      </S.HeaderContainer>
      {renderLayout}
    </>
  );
}
