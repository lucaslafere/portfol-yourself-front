import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Style";
import TokenContext from "../../Contexts/TokenContext";

export default function MainScreen() {
  const navigate = useNavigate();
  const [portfoliosData, setPortfoliosData] = useState([]);
  const portfoliosURL = "http://localhost:5000/portfolios";
  const { token } = useContext(TokenContext);
  const [boxSize, setBoxSize] = useState("medium");
  function getPortfolios() {
    axios
      .get(portfoliosURL)
      .then((res) => {
        setPortfoliosData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function mountPortfolios() {
    if (portfoliosData.length === 0) {
      return <h2>No portfolios created yet</h2>;
    } else {
      return portfoliosData.map((el, index) => (
        <S.PortfolioBox boxSize={boxSize} key={index} title={el.title} logo={el.logo}>
          <S.PortfolioLogo boxSize={boxSize}>
            <img src={el.logo} alt="" />
          </S.PortfolioLogo>
          <S.PortfolioTitle boxSize={boxSize}>{el.title}</S.PortfolioTitle>
          <S.ViewLink onClick={() => navigate(`/portfolio/${el.id}`)}>
            Link
          </S.ViewLink>
        </S.PortfolioBox>
      ));
    }
  }
  useEffect(() => getPortfolios(), []);
  const renderPortfolios = mountPortfolios();
  const renderLogged = mountLogged();
  const renderDefault = mountDefault();
  function mountLogged() {
    return (
      <>
        <S.BlueButton onClick={() => navigate("/dashboard")}>
          Dashboard
        </S.BlueButton>
        <S.WhiteButton onClick={() => navigate("/create")}>Create now</S.WhiteButton>
      </>
    );
  }
  function mountDefault() {
    return (
      <>
        <S.BlueButton onClick={() => navigate("/login")}>Login</S.BlueButton>
        <S.WhiteButton onClick={() => navigate("/sign-up")}>
          Sign Up
        </S.WhiteButton>
      </>
    );
  }
  return (
    <>
      <S.Header onClick={() => navigate("/")}>
        Portfol-Yourself
        <S.HeaderButtonsContainer>
          Try it now:
          <S.WhiteButton onClick={() => setBoxSize("small") }>Small</S.WhiteButton>
          <S.WhiteButton onClick={() => setBoxSize("medium") }>Medium</S.WhiteButton>
          <S.WhiteButton onClick={() => setBoxSize("large") }>Large</S.WhiteButton>
        </S.HeaderButtonsContainer>
      </S.Header>
      <S.Container>
        <S.TopSection>
          <S.Title>Portfol-yourself</S.Title>
          <S.Description>
            Here you can create your own portfolio, for free, by just clicking a
            few buttons. Start now by creating an account and logging in, and
            become a portfol-yowner
          </S.Description>
          <S.TopButtonsContainer>
            {token.length > 0 ? renderLogged : renderDefault}
          </S.TopButtonsContainer>
        </S.TopSection>
        <S.Content>{renderPortfolios}</S.Content>
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
