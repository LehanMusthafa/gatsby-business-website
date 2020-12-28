import React from "react"
import "../Main.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { ProjectsSectionHeading } from "../globalStyles"

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "contact.jpg" }) {
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
      <div className="projectsHeader">
        <ProjectsSectionHeading>Lets Get In Touch</ProjectsSectionHeading>
      </div>
      <ContactWrapper>
        <ContactImgWrapper>
          <ContactImg fluid={data.contactImage.childImageSharp.fluid} />
        </ContactImgWrapper>
        <FormWrapper>
          <form
            method="post"
            netlify-honeypot="bot-field" data-netlify="true" name="contact"
            className="form"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              <Label>Name</Label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </label>
            <label>
              <Label>Email</Label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </label>
            <label>
              <Label>Message</Label>

              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message Here..."
              />
            </label>
            <SubmitButton type="submit">Send</SubmitButton>
          </form>
        </FormWrapper>
      </ContactWrapper>
    </>
  )
}

export default ContactSection

const ContactImg = styled(Img)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 400px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.07);
  }
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const ContactImgWrapper = styled.div``

const FormWrapper = styled.div``

const SubmitButton = styled.button`
  background: #3368fa;
  color: #fff;
  border: 2px solid #3368fa;
  border-radius: 3px;
  font-weight: 500;
  font-family: "Poppins";
  margin-top: 22px;
  box-shadow: 0 2px 4px 0 #c8d7ee;
  font-size: 20px;
  padding: 10px 30px;
  cursor: pointer;

  &:hover {
    background: #002ca6;
    border-color: #002ca6;
    transition: all 0.2s ease-in-out;
  }
`

const Label = styled.span`
  padding-bottom: 10px;
  color: #333;
  font-weight: 500;
  padding: 0px 5px;
  font-family: "Poppins";
  font-size: 13px;
`
