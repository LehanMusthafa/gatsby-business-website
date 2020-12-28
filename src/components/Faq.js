import React, { useState } from "react"
import { Data } from "../Data/faq"
import styled from "styled-components"
import { IconContext } from "react-icons"
import { FiPlus, FiMinus } from "react-icons/fi"

const Faq = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {

      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <IconContext.Provider value={{ color: "#3368FA", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            )
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  )
}

export default Faq

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 90vh;
  background: #fff;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 75vh;
  }
`

const Container = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
`

const Wrap = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #f1f1f1;
  h1 {
    padding: 2rem;
    font-size: 20px;
  }
  span {
    margin-right: 1.5rem;
  }
`

const Dropdown = styled.div`
  background: #fff;
  color: #2d2d2d;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
  p {
    font-size: 17px;
    padding: 2rem;
    font-weight: 400;
  }
`
