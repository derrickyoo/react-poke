import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Header = () => {
  return (
    <Wrapper>
      <Row>
        <Nav>
          <NavList>
            <li>
              <RouterLink to="/">React Pokédex</RouterLink>
            </li>
          </NavList>
        </Nav>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: #ef6351;
`;

const Row = styled(MaxWidthWrapper)`
  padding: 16px 32px;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavList = styled.ul`
  display: flex;
  gap: 32px;
`;

const RouterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
`;

export default Header;
