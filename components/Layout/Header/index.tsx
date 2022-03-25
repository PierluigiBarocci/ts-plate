import { Typography } from '@mui/material';
import Link from 'next/link';
import {
  DropdownLang,
  HeaderStyle,
  IconLikeShop,
  IconsContainer,
  IconUser,
  LanguageSelector,
  LinkContainer,
  LinkWrapper,
  LogoImg,
  NavElement,
  Separator,
  UserOptions,
} from './Header.styles';
import { MenuItemsObject } from './Header.types';
import { FlexContainer } from 'components/Layout/Layout.styles';

const Header = () => {
  const menuItemsLeft: MenuItemsObject[] = [
    {
      href: '#artwork',
      text: 'artwork',
    },
    { href: '#audio', text: 'audio' },
    { href: '#courses', text: 'courses' },
    { href: '#documents', text: 'documents' },
    { href: '#videos', text: 'videos' },
  ];

  const menuItemsRight: MenuItemsObject[] = [
    {
      href: '#authors',
      text: 'authors',
    },
    { href: '#pavillions', text: 'pavillions' },
    { href: '#pmagazine', text: 'p-magazine' },
  ];

  return (
    <HeaderStyle>
      <FlexContainer>
        <LogoImg src="/images/logos/logo.svg" />
        <LinkContainer>
          <LinkWrapper>
            {menuItemsLeft.map((item, index) => (
              <Link passHref={true} key={index} href={item.href}>
                <NavElement>
                  <Typography variant="px14Semibold" color={'primary.dark'}>
                    {item.text}
                  </Typography>
                </NavElement>
              </Link>
            ))}

            <Separator />

            {menuItemsRight.map((item, index) => (
              <Link passHref={true} key={index} href={item.href}>
                <NavElement>
                  <Typography variant="px14Light" color={'primary.dark'}>
                    {item.text}
                  </Typography>
                </NavElement>
              </Link>
            ))}
          </LinkWrapper>
        </LinkContainer>
        <IconsContainer>
          <UserOptions>
            <IconUser src="/images/icons/user.svg" />
            <IconLikeShop src="/images/icons/like.svg" />
            <IconLikeShop src="/images/icons/shop.svg" />
          </UserOptions>
          <LanguageSelector>
            <Typography variant="px14Light" color={'primary.dark'}>
              EN
            </Typography>
            <DropdownLang src="/images/Tracciato.svg" />
          </LanguageSelector>
        </IconsContainer>
      </FlexContainer>
    </HeaderStyle>
  );
};

export { Header };
