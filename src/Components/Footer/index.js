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
                            <SpaAddress><b>Dirección:</b> Miguel E. Schultz 6, San Rafael, Alcaldía Cuauhtémoc, C.P 06470,
                                CDMX</SpaAddress>
                            <SpaWhatsApp><b>WhatsApp:</b> 5523797688</SpaWhatsApp>
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
                                <SocialIconLink
                                    href="https://wa.me/5523797688?text=Hola%20quisiera%20más%20información%20sobre%20los%20servicios"
                                    target="_blank" aria-label="WhatsApp">
                                    <WhatsAppIcon/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                    <FacebookIcon/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                    <InstagramIcon/>
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