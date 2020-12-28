import styled from "styled-components"
import { AiFillCode } from "react-icons/ai"
import { Link } from "gatsby"
import { Container } from "../../globalStyles"

export const Nav = styled.nav`
  background: #ffffffcc;
  backdrop-filter: saturate(180%) blur(5px);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (min-width: 960px) {
    font-size: 16px;
  }
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 90px;
  ${Container}
`

export const NavLogo = styled(Link)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 25px;
  display: flex;
  align-items: center;
`

export const NavIcon = styled(AiFillCode)`
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
    border-top: 1px solid #ececec;
  }
`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 4px solid transparent;
  &:hover {
    border-bottom: 4px solid #3368fa;
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-weight: 500;
  &:hover {
    color: #3368fa;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`
