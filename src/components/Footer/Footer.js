// src/components/Footer.js
import React from 'react';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcon, SocialIcons, SocialIconLink } from './Footer.elements';
import { FaFacebook } from 'react-icons/fa6';
import ContactForm from './ContactForm'; 

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          ¡Contáctanos y obtén tu primera orientación gratis!
        </FooterSubHeading>
        <FooterSubText>
          Horario: Lun-Vie 9:00 AM - 5:00 PM
        </FooterSubText>
      </FooterSubscription>
      <ContactForm />
      <SocialMedia>
        <SocialMediaWrap>
            <SocialLogo to="/" >
              <SocialIcon/>
                Cortes Accouting
              
            </SocialLogo>
            <WebsiteRights>Gustavo A. Cortes Medina © 2024</WebsiteRights>
            <SocialIcons>
            <SocialIconLink href={'https://www.facebook.com/profile.php?id=61563869588304'} target="_blank"
            aria-label="Facebook" rel='noopener noreferrer'>
                <FaFacebook/>
            </SocialIconLink>
            </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
