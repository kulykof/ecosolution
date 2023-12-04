import {
  StyledBurgerArrow,
  Navigation,
  StyledCross,
  CloseButton,
  BurgerList,
  BurgerItem,
  BurgerText,
  Social,
  StyledFacebook,
  StyledInstagram,
  SocialLink,
} from './BurgerMenu.styled';

import { Link as ScrollLink } from 'react-scroll';

const BurgerMenu = ({ toggleMenu, open }) => {
  return (
    <>
      <Navigation style={{ display: open ? 'block' : 'none' }}>
        <CloseButton onClick={toggleMenu}>
          <StyledCross />
          close
        </CloseButton>
        <BurgerList>
          <BurgerItem>
            <ScrollLink
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <BurgerText href="#main">Main</BurgerText>
            </ScrollLink>
            <StyledBurgerArrow />
          </BurgerItem>
          <BurgerItem>
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <BurgerText href="#about">About</BurgerText>
            </ScrollLink>
            <StyledBurgerArrow />
          </BurgerItem>
          <BurgerItem>
            <ScrollLink
              activeClass="active"
              to="cases"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <BurgerText href="#cases">Cases</BurgerText>
            </ScrollLink>
            <StyledBurgerArrow />
          </BurgerItem>
          <BurgerItem>
            <ScrollLink
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <BurgerText href="#faq">FAQ</BurgerText>
            </ScrollLink>
            <StyledBurgerArrow />
          </BurgerItem>
          <BurgerItem>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <BurgerText href="#contact">Contact Us</BurgerText>
            </ScrollLink>
            <StyledBurgerArrow />
          </BurgerItem>
        </BurgerList>

        <Social>
          <SocialLink href="/#">
            <StyledFacebook />
          </SocialLink>
          <SocialLink href="/#">
            <StyledInstagram />
          </SocialLink>
        </Social>
      </Navigation>
    </>
  );
};

export default BurgerMenu;
