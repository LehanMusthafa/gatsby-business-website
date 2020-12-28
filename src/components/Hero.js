import React from "react"
import Button from "./Button/Button"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import '../Main.css'
import {
  Section,
  HomeContainer,
  Col,
  HomeText,
  HomeHeading,
  HomeDesc,
  ButtonInner,
  ButtonIcon,
  HomeImgWrapper,
} from "../globalStyles"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "components.png" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <HomeSection>
        <Section>
          <HomeContainer>
            <div className="row img-last">
              <Col>
                <HomeText>
                  <HomeHeading>Grow Your Business Online With Us</HomeHeading>
                  <HomeDesc>
                    Boost your business perfomance with our services like, Email
                    Marketing, Website App creation and so on. With our
                    advanced analytics you can grow your business 10x more.
                  </HomeDesc>
                  <Link to="/">
                    <Button>
                      <ButtonInner>
                        Hire Us{" "}
                        <ButtonIcon>
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                        </ButtonIcon>
                      </ButtonInner>
                    </Button>
                  </Link>
                </HomeText>
              </Col>
              <Col>
                <HomeImgWrapper style={{ marginBottom: `1.45rem` }}>
                  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </HomeImgWrapper>
              </Col>
            </div>
          </HomeContainer>
        </Section>
      </HomeSection>
    </>
  )
}

export default Home

const HomeSection = styled.section``
