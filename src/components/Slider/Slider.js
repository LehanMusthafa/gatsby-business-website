import React from "react"
import Glide from "@glidejs/glide"
import "./Slider.scss"
import "./Slider.css"
import "../../Main.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Slider = () => {
  const data = useStaticQuery(graphql`
    query SliderQuery {
      allSliderJson {
        edges {
          node {
            alt
            name
            post
            review
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

  function getSlider(data) {
    const sliderArray = []
    data.allSliderJson.edges.forEach((item, index) => {
      sliderArray.push(
        <li class="glide__slide" key={index}>
          <div className="sliderParent">
            <div className="customerReviewWrapper">
              <span>
                <p className="cutomerReview">{item.node.review}</p>
              </span>
            </div>
            <div className="personWrapper">
              <div className="personImgWrapper">
                <Img
                  src={item.node.img.childImageSharp.fluid.src}
                  fluid={item.node.img.childImageSharp.fluid}
                  alt={item.node.alt}
                  className="personImg"
                />
              </div>
              <div className="personDetails">
                <h3 className="personName">{item.node.name}</h3>
                <h6 className="personProfession">{item.node.post}</h6>
              </div>
            </div>
          </div>
        </li>
      )
    })
    return sliderArray
  }

  React.useEffect(() => {
    new Glide(".glide", {
      type: "slider",
      perView: 3,
      autoplay: 7000,
      hoverpause: true,
      bound: true,
      breakpoints: {
        1024: {
          startAt: 0,
          perView: 2,
        },
        600: {
          startAt: 0,
          perView: 1,
        },
      },
    }).mount()
  }, [])
  return (
    <>
      <Customers>
        <ReviewHeading>What Clients Say</ReviewHeading>
        <div className="sliderWrapper">
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">{getSlider(data)}</ul>
            </div>

            <div class="glide__arrows" data-glide-el="controls">
              <button
                class="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                &#60;
              </button>
              <button
                class="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
      </Customers>
    </>
  )
}

export default Slider

const Customers = styled.section`
  margin-top: 50px;
`

const ReviewHeading = styled.h2`
  font-size: 25px;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 15px;
`
