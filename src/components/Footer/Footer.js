import styled from "styled-components/macro";

const Footer = () => {
  return (
    <Wrapper>
      <FooterHeader>Gotta Catch &apos;Em All</FooterHeader>
      <FooterText>You teach me and I&apos;ll teach you Pokémon!</FooterText>
      <FooterText>Made with ☕ and 🖤</FooterText>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: center;
  padding: 32px;
  background-color: lightgray;
`;

const FooterHeader = styled.h2``;

const FooterText = styled.p``;

export default Footer;
