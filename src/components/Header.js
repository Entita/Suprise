import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NAV = styled.nav`
    display: flex;
    flex-flow: row;
    margin: 1.5rem;
    justify-content: center;
    align-items: center;
`

const LightMenuItem = styled.span`
    font-family: var(--text--wght900-font-family);
    font-weight: 100;
    color: var(--text--color--white-color);
`

const LI = styled.li`
    list-style-type: none;
    display: flex;
    flex-flow: column;
`

const UL = styled.ul`
    display: flex;
    gap: 1.5rem;
    font-family: var(--text--wght900-font-family);
    font-weight: 900;

    a {
      text-decoration: none;
      color: black;
      &:hover ${LightMenuItem}, &:last-child:hover ${LI} {
        transition: .6s;
        color: var(--text--color--light_orange-color);
      }

      &:last-child ${LI} {
        padding-top: .5rem;
        border-bottom: 1px solid;
        border-color: var(--color--light_orange-color);
      }
    }
`

function Header() {
  return (
    <NAV>
      <UL>
        <Link to="/people#author">
          <LI>Autoři, <LightMenuItem>kteří mě ovlivnili</LightMenuItem></LI>
        </Link>
        <Link to="/books">
          <LI>Všechny knížky, <LightMenuItem>které jsem přečetl</LightMenuItem></LI>
        </Link>
        <Link to="/people#personalities">
          <LI>Osobnosti, <LightMenuItem>ke kterém vzhlížím</LightMenuItem></LI>
        </Link>
        <Link to="/">
          <LI>Menu</LI>
        </Link>
      </UL>
    </NAV>
  )
}

export default Header