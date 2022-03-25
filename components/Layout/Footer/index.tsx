import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import {
  AboutUs,
  Address,
  AddressContainer,
  AddressName,
  CityName,
  ContactSection,
  CookiesParagraph,
  CopyrightContainer,
  CopyrightContainerMobile,
  CopyrightText,
  EmailWrapper,
  FooterAboutMobile,
  FooterCityMobile,
  FooterContainer,
  FooterCookiesMobile,
  FooterLogosMobile,
  InputEmail,
  LogoFooter,
  NewsLetter,
  NewsLetterContainer,
  ParagraphAbout,
  PolicyContainer,
  SeparatorCity,
  SocialContainer,
  SocialIcon,
  SocialIconsContainer,
  TitleNL,
} from './Footer.styles';

import { AboutUsProps } from './Footer.types';

const Footer = () => {
  const paragraphAbout: AboutUsProps[] = [
    {
      href: '/',
      text: 'About us',
    },
    {
      href: '/',
      text: 'Author membership',
    },
    {
      href: '/',
      text: 'Pavillions membership',
    },
    {
      href: '/',
      text: 'B2B Services',
    },
    {
      href: '/',
      text: 'Support Center',
    },
    {
      href: '/',
      text: 'Contact',
    },
  ];

  const cookiesData: AboutUsProps[] = [
    {
      href: '/',
      text: 'Cookies Policy',
    },
    {
      href: '/',
      text: 'Privacy Policy',
    },
    {
      href: '/',
      text: 'Terms and Conditions',
    },
  ];

  return (
    <>
      <NewsLetter>
        <NewsLetterContainer>
          <TitleNL>
            <Typography variant="px18Regular" color={'primary.dark'}>
              Iscriviti alla nostra{' '}
            </Typography>
            <Typography variant="px18Bold" color={'primary.dark'}>
              {' '}
              newsletter{' '}
            </Typography>{' '}
            <Typography variant="px18Regular" color={'primary.dark'}>
              {' '}
              rimani aggiornato su tutte le attività.
            </Typography>
          </TitleNL>
          <EmailWrapper>
            <InputEmail placeholder="E-mail" />
            <Button variant="outlined">iscriviti</Button>
          </EmailWrapper>
        </NewsLetterContainer>
      </NewsLetter>

      <ContactSection>
        <FooterLogosMobile>
          <LogoFooter src="/images/logos/logo_white.svg" />
          <SocialIconsContainer>
            <SocialIcon src="/images/icons/linkedin.svg" />
            <SocialIcon src="/images/icons/facebook.svg" />
            <SocialIcon src="/images/icons/instagram.svg" />
          </SocialIconsContainer>
        </FooterLogosMobile>
        <FooterCityMobile>
          <CityName>
            <Typography variant="px16Regular" color={'primary.main'}>
              Milano
            </Typography>
          </CityName>
          <AddressName>
            <Typography variant="px16Regular" color={'primary.main'}>
              Via Nino Bixio 19 - 20123
            </Typography>{' '}
          </AddressName>
          <CityName>
            <Typography variant="px16Regular" color={'primary.main'}>
              Trieste
            </Typography>
          </CityName>
          <AddressName>
            <Typography variant="px16Regular" color={'primary.main'}>
              Via Flavia 23/1 - 34148
            </Typography>
          </AddressName>
        </FooterCityMobile>
        <FooterAboutMobile>
          {paragraphAbout.map((paragraph, index) => (
            <Link passHref={true} key={index} href={paragraph.href}>
              <ParagraphAbout>
                <Typography variant="px16Regular" color={'primary.main'}>
                  {paragraph.text}
                </Typography>
              </ParagraphAbout>
            </Link>
          ))}
        </FooterAboutMobile>
        <FooterCookiesMobile>
          {cookiesData.map((data, index) => (
            <Link passHref={true} key={index} href={data.href}>
              <CookiesParagraph>
                <Typography variant="px16Regular" color={'primary.main'}>
                  {data.text}
                </Typography>
              </CookiesParagraph>
            </Link>
          ))}
        </FooterCookiesMobile>
        <CopyrightContainerMobile>
          <CopyrightText>
            <Typography variant="px16Regular" color={'primary.main'}>
              © 2021 POETRONICART
            </Typography>
          </CopyrightText>
          <CopyrightText>
            <Typography variant="px16Regular" color={'primary.main'}>
              P.IVA IT01282080322
            </Typography>
          </CopyrightText>
          <CopyrightText>
            <Typography variant="px16Regular" color={'primary.main'}>
              REA: TS-138237
            </Typography>
          </CopyrightText>
        </CopyrightContainerMobile>

        <FooterContainer height={'calc(100% - 90px)'}>
          <AddressContainer>
            <LogoFooter src="/images/logos/logo_white.svg" />
            <Address>
              <CityName>
                <Typography variant="px16Regular" color={'primary.main'}>
                  Milano
                </Typography>
              </CityName>
              <AddressName>
                <Typography variant="px16Regular" color={'primary.main'}>
                  Via Nino Bixio 19 - 20123
                </Typography>
              </AddressName>
              <SeparatorCity />
              <CityName>
                <Typography variant="px16Regular" color={'primary.main'}>
                  Trieste
                </Typography>
              </CityName>
              <AddressName>
                <Typography variant="px16Regular" color={'primary.main'}>
                  Via Flavia 23/1 - 34148
                </Typography>{' '}
              </AddressName>
            </Address>
            <AboutUs>
              {paragraphAbout.map((paragraph, index) => (
                <Link passHref={true} key={index} href={paragraph.href}>
                  <ParagraphAbout>
                    <Typography variant="px16Regular" color={'primary.main'}>
                      {paragraph.text}
                    </Typography>
                  </ParagraphAbout>
                </Link>
              ))}
            </AboutUs>
          </AddressContainer>
          <SocialContainer>
            <SocialIconsContainer>
              <SocialIcon src="/images/icons/linkedin.svg" />
              <SocialIcon src="/images/icons/facebook.svg" />
              <SocialIcon src="/images/icons/instagram.svg" />
            </SocialIconsContainer>
            <PolicyContainer>
              {cookiesData.map((data, index) => (
                <Link passHref={true} key={index} href={data.href}>
                  <CookiesParagraph>
                    <Typography variant="px16Regular" color={'primary.main'}>
                      {data.text}
                    </Typography>
                  </CookiesParagraph>
                </Link>
              ))}
            </PolicyContainer>
          </SocialContainer>
        </FooterContainer>
        <CopyrightContainer>
          <CopyrightText>
            <Typography variant="px16Regular" color={'primary.main'}>
              © 2021 POETRONICART — P.IVA IT01282080322 — REA: TS-138237
            </Typography>
          </CopyrightText>
        </CopyrightContainer>
      </ContactSection>
    </>
  );
};

export { Footer };
