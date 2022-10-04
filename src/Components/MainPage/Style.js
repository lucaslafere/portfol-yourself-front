import styled from "styled-components";

const Header = styled.div`
width: 100%;
position: fixed;
top: 0;
left: 0;
height: 70px;
margin-bottom: 100px;
padding: 2rem;
display: flex;
align-items: center;
justify-content: flex-start;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
background-color: #1976d2;
color: #fff;
font-size: 1.25rem;
font-weight: 500;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`
const Container = styled.div`
max-width: 800px;
`
const TopSection = styled.div``
const Title = styled.div``
const Description = styled.div``
const BlueButton = styled.div``
const WhiteButton = styled.div``
const Content = styled.div``
const PortfolioBox = styled.div``
const PortfolioLogo = styled.div``
const PortfolioTitle = styled.div``
const ViewLink = styled.div``
const Footer = styled.div``
const Copyright = styled.div`

  margin-top: 40px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  font-weight: 400;
`;

export { Header, Container, TopSection, Title, Description, BlueButton, WhiteButton, Content, PortfolioBox, PortfolioLogo, PortfolioTitle, ViewLink, Footer, Copyright }