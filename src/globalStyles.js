import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Button = styled.button`
  border-radius: 3px;
  background: ${({ primary }) => (primary ? "#3368fa" : "#3368fa")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#002ca6" : "#002ca6")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const HomeContainer = styled.div`
  padding: 40px 5px;
`

export const Section = styled.div`
  height: 100%;
  max-width: 100%;
  padding-top: 20px;

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`

export const Col = styled.div``

export const HomeText = styled.div`
  max-width: 240px;
  padding-top: 0px;
  padding-bottom: 60px;
  margin-top: -20px;
  margin-left: -20px;
`

export const HomeHeading = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  margin-bottom: 25px;
  font-size: 31px;
  line-height: 1.6;
  letter-spacing: 3px;
  text-align: left;
  width: 231px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 60px;
    width: 305px;
  }

  @media screen and (min-width: 768px) and (max-width: 861px) {
    line-height: 4rem;
  }

  @media screen and (min-width: 768px) and (max-width: 950px) {
    width: 300px;
  }

  @media screen and (min-width: 1080px) {
    width: 380px;
  }
`

export const HomeDesc = styled.p`
  max-width: 440px;
  font-size: 15px;
  line-height: 26px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #565656;
`

export const ButtonInner = styled.span`
  font-family: "Poppins";
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
`

export const ButtonIcon = styled.span`
  padding-left: 7px;
  padding-top: 5px;
`

export const HomeImgWrapper = styled.div`
  margin-left: -17px;
  margin-top: -25px;
  min-width: 305px;

  @media only screen and (max-width: 280px) {
    min-width: 250px;
  }

  @media only screen and (max-width: 320px) {
    min-width: 310px;
  }

  @media screen and (min-width: 768px) {
    min-width: 480px;
  }

  @media screen and (min-width: 768px) and (max-width: 861px) {
    min-width: 365px;
  }
`

export const ProjectsSectionHeading = styled.h1`
  position: relative;
  padding-right: 32px;
  padding-left: 32px;
  margin-right: auto;
  margin-left: auto;
  font-family: "Ubuntu", sans-serif;
  color: #fff;
  font-weight: 600;
  line-height: 1.25;
  font-size: 33px;
  text-align: center;
  margin-bottom: 8px;
`


export default GlobalStyle
