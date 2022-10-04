import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import * as S from "./Style";
import TokenContext from "../../Contexts/TokenContext";

export default function MainScreen() {
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        Portfol-Yourself
      </S.Header>
      <S.Container>
        <S.TopSection>
          <S.Title>Portfol-yourself</S.Title>
          <S.Description>
            Here you can create your own portfolio, for free, by just clicking a
            few buttons
          </S.Description>
          <S.BlueButton>Do something</S.BlueButton>
          <S.WhiteButton>Do something else</S.WhiteButton>
        </S.TopSection>
        <S.Content>
          <S.PortfolioBox>
            <S.PortfolioLogo>PortfolioLogo</S.PortfolioLogo>
            <S.PortfolioTitle>Title</S.PortfolioTitle>
            <S.ViewLink>View</S.ViewLink>
          </S.PortfolioBox>
          <S.PortfolioBox>
            <S.PortfolioLogo>PortfolioLogo</S.PortfolioLogo>
            <S.PortfolioTitle>Title</S.PortfolioTitle>
            <S.ViewLink>View</S.ViewLink>
          </S.PortfolioBox>
          <S.PortfolioBox>
            <S.PortfolioLogo>PortfolioLogo</S.PortfolioLogo>
            <S.PortfolioTitle>Title</S.PortfolioTitle>
            <S.ViewLink>View</S.ViewLink>
          </S.PortfolioBox>
        </S.Content>
        <S.Footer>
          <S.Copyright>
            <p>Copyright © Portfol-Yourself 2022.</p>
          </S.Copyright>
        </S.Footer>
      </S.Container>
    </>
  );
}
