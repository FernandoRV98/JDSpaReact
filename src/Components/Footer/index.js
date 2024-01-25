import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SpaName,
    SpaAddress,
    SpaWhatsApp,
    SpaEmail,
    ServicesTitle,
    ServiceItem
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <SpaName>JD SPA</SpaName>
                            <SpaAddress>Dirección del SPA</SpaAddress>
                            <SpaWhatsApp>WhatsApp del SPA</SpaWhatsApp>
                            <SpaEmail>Correo electrónico del SPA</SpaEmail>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <ServicesTitle>Servicios</ServicesTitle>
                            <ServiceItem>Masajes faciales</ServiceItem>
                            <ServiceItem>Masajes corporales</ServiceItem>
                            <ServiceItem>Productos</ServiceItem>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <ServicesTitle>Horario de atención</ServicesTitle>
                            <ServiceItem>Lunes a viernes: 9:00 a 19:00</ServiceItem>
                            <ServiceItem>Sábados: 9:00 a 14:00</ServiceItem>
                            <ServiceItem>Domingos: Cerrado</ServiceItem>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <WebsiteRights>JD SPA © 2024. Todos los derechos reservados.</WebsiteRights>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <SocialIcons>
                                <SocialIconLink href="//www.whatsapp.com" target="_blank" aria-label="WhatsApp">
                                    <WhatsAppIcon />
                                </SocialIconLink>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                    <FacebookIcon />
                                </SocialIconLink>
                                <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                    <InstagramIcon />
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;