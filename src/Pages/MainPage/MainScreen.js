import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import * as S from "./Style";
import TokenContext from "../../Contexts/TokenContext";
import coala from "../../Assets/coala.jpg";

export default function MainScreen() {
  const navigate = useNavigate();
  const [portfoliosData, setPortfoliosData] = useState([]);
  const portfoliosURL = "http://localhost:5000/portfolios";

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
        <S.PortfolioBox key={index} title={el.title} logo={el.logo}>
          <S.PortfolioLogo>
            <img src={el.logo} alt="" />
          </S.PortfolioLogo>
          <S.PortfolioTitle>{el.title}</S.PortfolioTitle>
          <S.ViewLink onClick={() => navigate(`/portfolios/${el.userId}`)}>
            Link
          </S.ViewLink>
        </S.PortfolioBox>
      ));
    }
  }
  useEffect(() => getPortfolios(), []);
  const renderPortfolios = mountPortfolios();

  return (
    <>
      <S.Header>Portfol-Yourself</S.Header>
      <S.Container>
        <S.TopSection>
          <S.Title>Portfol-yourself</S.Title>
          <S.Description>
            Here you can create your own portfolio, for free, by just clicking a
            few buttons. Start now by creating an account and logging in, and
            become a portfol-yowner
          </S.Description>
          <S.TopButtonsContainer>
            <S.BlueButton onClick={() => navigate("/login")}>
              Login
            </S.BlueButton>
            <S.WhiteButton onClick={() => navigate("/sign-up")}>
              Sign Up
            </S.WhiteButton>
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
