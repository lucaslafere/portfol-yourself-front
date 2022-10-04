import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import * as S from "./Style";
import TokenContext from "../../Contexts/TokenContext";
import coala from '../../Assets/coala.jpg'

export default function MainScreen() {
  const navigate = useNavigate();

  return (
    <>
      <S.Header>Portfol-Yourself</S.Header>
      <S.Container>
        <S.TopSection>
          <S.Title>Portfol-yourself</S.Title>
          <S.Description>
            Here you can create your own portfolio, for free, by just clicking a
            few buttons. Start now by creating an account and logging in, and become a portfol-yowner
          </S.Description>
          <S.TopButtonsContainer>
            <S.BlueButton onClick={() => navigate("/login")}>Login</S.BlueButton>
            <S.WhiteButton onClick={() => navigate("/sign-up")}>Sign Up!</S.WhiteButton>
          </S.TopButtonsContainer>
        </S.TopSection>
        <S.Content>
          <S.PortfolioBox>
            <S.PortfolioLogo><img src={coala} alt="" /></S.PortfolioLogo>
            <S.PortfolioTitle>Titulo pequeno</S.PortfolioTitle>
            <S.ViewLink>Link</S.ViewLink>
          </S.PortfolioBox>
          <S.PortfolioBox>
            <S.PortfolioLogo><img src={coala} alt="" /></S.PortfolioLogo>
            <S.PortfolioTitle>Titulo 3 palavras kkk</S.PortfolioTitle>
            <S.ViewLink>Link</S.ViewLink>
          </S.PortfolioBox>
          <S.PortfolioBox>
            <S.PortfolioLogo><img src={coala} alt="" /></S.PortfolioLogo>
            <S.PortfolioTitle>Titulo 3 palavras kkk</S.PortfolioTitle>
            <S.ViewLink>Link</S.ViewLink>
          </S.PortfolioBox>
          <S.PortfolioBox>
            <S.PortfolioLogo><img src={coala} alt="" /></S.PortfolioLogo>
            <S.PortfolioTitle>Titulo 3 palavras kkk</S.PortfolioTitle>
            <S.ViewLink>Link</S.ViewLink>
          </S.PortfolioBox>
          <S.PortfolioBox>
            <S.PortfolioLogo><img src={coala} alt="" /></S.PortfolioLogo>
            <S.PortfolioTitle>Titulo 3 palavras kkk</S.PortfolioTitle>
            <S.ViewLink>Link</S.ViewLink>
          </S.PortfolioBox>
          <S.PortfolioBox>
            <S.PortfolioLogo><img src={coala} alt="" /></S.PortfolioLogo>
            <S.PortfolioTitle>Titulo 3 palavras kkk</S.PortfolioTitle>
            <S.ViewLink>Link</S.ViewLink>
          </S.PortfolioBox>
          <S.PortfolioBox>
            <S.PortfolioLogo><img src={coala} alt="" /></S.PortfolioLogo>
            <S.PortfolioTitle>Title enorme pra ver se quebra esse negocio</S.PortfolioTitle>
            <S.ViewLink>Link</S.ViewLink>
          </S.PortfolioBox>
        </S.Content>
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
