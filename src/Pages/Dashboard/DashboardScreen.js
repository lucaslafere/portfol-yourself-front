import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TokenContext from "../../Contexts/TokenContext";
import * as S from "./Style";
import pin from "../../Assets/pin.png";
import SuccessModal from "../../Components/SuccessModal/SuccessModal";
import FailureModal from "../../Components/FailureModal/Failuremodal";
import IncompleteFeatureModal from "../../Components/IncompleteFeatureModal/IncompleteFeature";
/* eslint-env browser */

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
  const [modal, setModal] = useState(false);
  const [failureModal, setFailureModal] = useState(false);
  const [incompleteModal, setIncompleteModal] = useState(false);
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState("");
  const userURL = `https://portfol-yourself-front.vercel.app/portfolio/${portfolioId}`;
  const { token } = useContext(TokenContext);
  const dashboardURL = "https://portfol-yourself.onrender.com/dashboard";
  const portfoliosURL = `https://portfol-yourself.onrender.com/portfolios/${portfolioId}`;
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
      .then(() => {
        setModal(true);
      })
      .catch((err) => {
        console.log(err);
        setFailureModal(true);
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
        setError(true);
      });
  }

  function openErrorModal() {
    if (error)
      return (
        <S.Modal onClick={() => navigate("/")}>
          <h5>You don't have a portfolio, so you can't open your dashboard</h5>
          <h5>Click anywhere inside the box to go back</h5>
        </S.Modal>
      );
  }
  function deleteItem(title, imageUrl, description, id) {
    const itemsURL = `https://portfol-yourself.onrender.com/items/${id}`;
    const data = {
      title,
      imageUrl,
      description,
    };
    axios
      .delete(itemsURL, config, data)
      .then(() => {
        getLoggedUserPortfolioByToken();
        setModal(true);
      })
      .catch((err) => {
        console.log(err);
        setFailureModal(true);
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
          <ion-icon
            name="close-circle"
            onClick={() =>
              deleteItem(el.title, el.imageUrl, el.description, el.id)
            }
          ></ion-icon>
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
          <S.BlueButton onClick={() => callIncomplete()}>Blue</S.BlueButton>
          <S.GreenButton onClick={() => callIncomplete()}>Green</S.GreenButton>
          <S.YellowButton onClick={() => callIncomplete()}>
            Yellow
          </S.YellowButton>
        </S.ButtonsContainer>
      );
    }
    if (edit === "layouts") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton
            onClick={() => setLayout({ ...layout, style: "modern" })}
          >
            Modern
          </S.BlueButton>
          <S.WhiteButton
            onClick={() => setLayout({ ...layout, style: "handwritten" })}
          >
            Handwritten Board
          </S.WhiteButton>
          <S.BlueButton
            onClick={() => setLayout({ ...layout, style: "altcursive" })}
          >
            Alt.Cursive Board
          </S.BlueButton>
        </S.ButtonsContainer>
      );
    }
    if (edit === "store-options") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton onClick={() => callIncomplete()}>
            Switch to non-store
          </S.BlueButton>
          <S.WhiteButton onClick={() => callIncomplete()}>
            Switch to store
          </S.WhiteButton>
        </S.ButtonsContainer>
      );
    }
    if (edit === "link") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton onClick={() => navigate(`/portfolio/${portfolioId}`)}>
            Visit your page
          </S.BlueButton>
          <S.WhiteButton onClick={() => copyLinkOnClick()}>
            Click to copy your link
          </S.WhiteButton>
        </S.ButtonsContainer>
      );
    }
    if (edit === "delete") {
      return (
        <S.ButtonsContainer>
          <S.BlueButton onClick={() => deletePortfolio()}>
            Confirm deletion
          </S.BlueButton>
          <S.WhiteButton onClick={() => setEdit("")}>Cancel</S.WhiteButton>
        </S.ButtonsContainer>
      );
    }
  }
  function deletePortfolio() {
    axios
      .delete(portfoliosURL, config)
      .then(() => {
        setModal(true);
        setTimeout(() => navigate("/", 2000));
      })
      .catch((err) => {
        console.log(err);
        setFailureModal(true);
      });
  }
  function copyLinkOnClick() {
    navigator.clipboard.writeText(userURL);
    setModal(true);
  }
  function mountLayout() {
    return (
      <>
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
        <S.MobileNavContainer />
      </>
    );
  }
  function openSuccessModal() {
    if (modal) {
      setTimeout(() => setModal(false), 2000);
      return <SuccessModal />;
    }
  }
  function openFailureModal() {
    if (failureModal) {
      setTimeout(() => setFailureModal(false), 2000);
      return <FailureModal />;
    }
  }
  function openIncompleteFeatureModal() {
    if (incompleteModal) {
      setTimeout(() => setIncompleteModal(false), 2000);
      return <IncompleteFeatureModal />;
    }
  }

  function callIncomplete() {
    setIncompleteModal(true);
  }

  useEffect(() => getLoggedUserPortfolioByToken(), []);
  const renderItems = mountItems();
  const renderEditting = mountEditting();
  const renderLayout = mountLayout();
  const renderSucessModal = openSuccessModal();
  const renderFailureModal = openFailureModal();
  const renderIncompleteModal = openIncompleteFeatureModal();
  const renderError = openErrorModal();
  return (
    <>
      <S.HeaderContainer>
        <S.SideBar>
          <S.SideBarTopBox>
            {renderSucessModal}
            {renderFailureModal}
            {renderIncompleteModal}
          </S.SideBarTopBox>
          <S.SideBarItem
            onClick={() => navigate("/add")}
            title={"Add a new item"}
          >
            <ion-icon name="add-circle-outline"></ion-icon>
            Add New Item
          </S.SideBarItem>
          <S.SideBarItem
            onClick={() => setEdit("box")}
            title={"Change products sizes"}
          >
            <ion-icon name="cube-outline"></ion-icon>
            Box Sizes
          </S.SideBarItem>
          <S.SideBarItem
            onClick={() => setEdit("color")}
            title={"Change color palette (WIP)"}
          >
            <ion-icon name="color-palette-outline"></ion-icon>
            Color Scheme
          </S.SideBarItem>
          <S.SideBarItem
            onClick={() => setEdit("link")}
            title={"Get your portfolio link"}
          >
            <ion-icon name="at-outline"></ion-icon>
            Get Your Link
          </S.SideBarItem>
          <S.SideBarItem
            onClick={() => setEdit("layouts")}
            title={"Select a layout"}
          >
            <ion-icon name="image-outline"></ion-icon>
            Layouts
          </S.SideBarItem>
          <S.SideBarItem
            onClick={() => setEdit("store-options")}
            title={"Change to Store mode"}
          >
            <ion-icon name="storefront-outline"></ion-icon>
            Store Options
          </S.SideBarItem>
          <S.SideBarItem
            onClick={() => putSaveChanges()}
            title={"Save your changes"}
          >
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            Save Changes
          </S.SideBarItem>
          <S.SideBarItem
            onClick={() => setEdit("delete")}
            title={"Delete your page"}
          >
            <ion-icon name="close-circle-outline"></ion-icon>
            Delete Page
          </S.SideBarItem>
          {renderEditting}
        </S.SideBar>
        <S.Header layout={layout.style}>
          <p onClick={() => navigate("/")}>Portfol-Yourself</p>
          <S.Logo>
            <img src={layout.logo} alt="" />
          </S.Logo>
        </S.Header>
      </S.HeaderContainer>
      {renderLayout}
      {renderError}
    </>
  );
}
