import React from "react"
import Button from "./Button/Button"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
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

const Code = () => {
  const data = useStaticQuery(graphql`
    query {
      newImage: file(relativePath: { eq: "code.png" }) {
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
      <Coding>
        <Section>
          <HomeContainer>
            <div className="row img-first">
              <Col>
                <HomeText>
                  <HomeHeading>Coding The Past 10 Years</HomeHeading>
                  <HomeDesc>
                    As a professional company we've now reached ten years of
                    coding These ten years have been a great oppotunity to
                    showcase our work and projects. Thanking you all for the
                    great support!
                  </HomeDesc>
                  <Link to="/">
                    <Button>
                      <ButtonInner>
                        Web & App
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
                  <Img fluid={data.newImage.childImageSharp.fluid} />
                </HomeImgWrapper>
              </Col>
            </div>
          </HomeContainer>
        </Section>
      </Coding>
    </>
  )
}

export default Code

const Coding = styled.section`
  margin-top: 50px;
  border-radius: 4px;
`
