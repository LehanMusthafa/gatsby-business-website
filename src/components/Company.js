import React from "react"
import "../Main.css"
import Button from "./Button/Button"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Company = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["codecademy", "firebase", "google", "nike"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <section
        id="companies"
        style={{
          background: "#f5f8fd",
          marginTop: "50px",
          borderRadius: "4px",
        }}
      >
        <Section>
          <HomeContainer>
            <div className="row img-last">
              <Col>
                <HomeText>
                  <HomeHeading>Hired By The Top Companies</HomeHeading>
                  <HomeDesc>
                    Our past 5 year websites have been a great success. We've
                    got hired by the top companies including Nike, Google,
                    Firebase and many more. Which have been a great inspiration
                    to us.
                  </HomeDesc>
                  <Link to="/">
                    <Button buttonStyle="btn--primary">
                      <ButtonInner>
                        Customers
                        <ButtonIcon>
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                        </ButtonIcon>
                      </ButtonInner>
                    </Button>
                  </Link>
                </HomeText>
              </Col>
              <Col>
                <CompanyImgWrapper>
                  {data.allFile.edges.map((image, key) => (
                    <Images
                      key={key}
                      fluid={image.node.childImageSharp.fluid}
                    />
                  ))}
                </CompanyImgWrapper>
              </Col>
            </div>
          </HomeContainer>
        </Section>
      </section>
    </>
  )
}

export default Company

const Images = styled(Img)`
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.07);
  padding: 20px;
  border-radius: 5px;
  width: 115px;
  background: #fff;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.07);
    transition: box-shadow 0.2s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`

const Section = styled.div`
  height: 100%;
  max-width: 100%;
  padding-top: 20px;

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`

const HomeContainer = styled.div`
  padding: 40px 5px;
`

const Col = styled.div``

const HomeText = styled.div`
  max-width: 240px;
  padding-top: 0px;
  padding-bottom: 60px;
  margin-top: -20px;
  margin-left: -20px;
`

const HomeHeading = styled.h1`
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

const HomeDesc = styled.p`
  max-width: 440px;
  font-size: 15px;
  line-height: 26px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #565656;
`

const ButtonInner = styled.span`
  font-family: "Poppins";
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
`

const ButtonIcon = styled.span`
  padding-left: 7px;
  padding-top: 5px;
`

const CompanyImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media screen and (min-width: 1024px) {
    padding: 50px;
  }
`
