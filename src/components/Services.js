import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { ProjectsSectionHeading } from "../globalStyles"

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allServiceJson {
        edges {
          node {
            description
            alt
            title
            link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getService(data) {
    const serviceArray = []
    data.allServiceJson.edges.forEach((item, index) => {
      serviceArray.push(
        <WhyUsData key={index}>
          <WhyUsInner>
            <WhyUsIcon>
              <ServiceImg
                src={item.node.img.childImageSharp.fluid.src}
                fluid={item.node.img.childImageSharp.fluid}
              />
            </WhyUsIcon>
            <IconText>
              <WhyUsText>{item.node.title}</WhyUsText>
              <WhyUsDesc>{item.node.description}</WhyUsDesc>
              <span>
                <Explore to={item.node.link}>Explore Now</Explore>
              </span>
            </IconText>
          </WhyUsInner>
        </WhyUsData>
      )
    })
    return serviceArray
  }

  return (
    <div>
      <WhyUs>
      <ProjectsSectionHeading style={{color: "#000"}}>
          We Provide
        </ProjectsSectionHeading>
        <WhyUsMain>{getService(data)}</WhyUsMain>
      </WhyUs>
    </div>
  )
}

export default Services

const WhyUs = styled.section`
  text-align: center;
  margin-top: 50px;
  padding: 50px 5px 30px 5px;
  background: #f5f8fd;
`

const WhyUsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
  }
`

const WhyUsData = styled.div`
  padding: 20px;
  margin: 25px 20px;
  background: #fff;
  color: black;
  width: 273px;
  cursor: pointer;
  line-height: 2rem;
  min-height: 380px;
  max-height: 430px;
  box-shadow: 0 0 1px 0 #a8b9d5, 0 20px 32px -8px #ebf2ff;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 319px;
    &:hover {
      transform: translateY(-10px);
      transition: all 0.2s ease-in-out;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 350px;
  }
`

const WhyUsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
`

const WhyUsIcon = styled.div``

const ServiceImg = styled(Img)`
  width: 150px;
  padding: 10px;
`

const IconText = styled.div``

const WhyUsText = styled.p`
  font-size: 18px;
  font-family: "Poppins";
  padding-top: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: #222;
  letter-spacing: 2px;
`

const WhyUsDesc = styled.p`
  font-family: "Poppins";
  line-height: 26px;
  margin-top: 17px;
  margin-bottom: 13px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #565656;
`

const Explore = styled(Link)`
  color: #3368fa;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-size: 15px;

  &::after {
    background: #baccff;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    width: 70px;
  }

  &:hover {
    color: rgb(0, 44, 166);
    transition: color 0.2s ease-in-out;
  }
`
