import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../Main.css"
import Button from "./Button/Button"
import styled from "styled-components"
import { ButtonInner, ButtonIcon, ProjectsSectionHeading } from "../globalStyles"

const ProjectSection = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            title
            link
            alt
            img {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  function getProjects(data) {
    const projectsArray = []
    data.allProjectsJson.edges.forEach((item, index) => {
      projectsArray.push(
        <CardsItem key={index}>
          <CardsItemLink to={item.node.link}>
            <CardsItemPicWrap>
              <ProjectImg
                style={{ position: "absolute" }}
                src={item.node.img.childImageSharp.fluid.src}
                fluid={item.node.img.childImageSharp.fluid}
                alt={item.node.alt}
              />
            </CardsItemPicWrap>
            <CardsItemInfo>
              <CardsItemText>{item.node.title}</CardsItemText>
              <Link to={item.node.link}>
                <Button buttonStyle="btn--secondary">
                  <ButtonInner>
                    Visit{" "}
                    <ButtonIcon>
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </ButtonIcon>
                  </ButtonInner>
                </Button>
              </Link>
            </CardsItemInfo>
          </CardsItemLink>
        </CardsItem>
      )
    })
    return projectsArray
  }

  return (
    <Projects>
      <div className="projectsHeader">
        <ProjectsSectionHeading>
          Explore Our Past Projects & Works
        </ProjectsSectionHeading>
      </div>

      <CardsContainer>
        <CardsWrapper>
          <CardsItems>{getProjects(data)}</CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Projects>
  )
}

export default ProjectSection

const Projects = styled.section``

const ProjectImg = styled(Img)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`

const CardsContainer = styled.div``

const CardsWrapper = styled.div`
padding: 30px;
`

const CardsItems = styled.ul`
display: grid;
      grid-template-columns: 1fr;
      gap: 55px;
      list-style: none;

      @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
`

const CardsItem = styled.li`
 background: #fff;
`

const CardsItemLink = styled(Link)`
 display: flex;
      flex-flow: column;
      width: 100%;
      box-shadow:0 20px 32px -8px #ebf2ff, 0 0 1px 0 #a8b9d5;
      -webkit-filter: drop-shadow(0 20px 32px -8px #ebf2ff, 0 0 1px 0 #a8b9d5);
      filter: drop-shadow(0 20px 32px -8px #ebf2ff, 0 0 1px 0 #a8b9d5);
      border-radius: 10px;
      overflow: hidden;
      text-decoration: none;

      @media only screen and (min-width: 1024px) {
        width: 90%;
    }
`

const CardsItemPicWrap = styled.figure`
position: relative;
      width: 100%;
      padding-top: 67%;
      overflow: hidden;
`

const CardsItemInfo = styled.div`
padding: 20px 30px 30px;
`

const CardsItemText = styled.h5`
 color: #252e48;
      font-size: 18px;
      line-height: 24px;
`