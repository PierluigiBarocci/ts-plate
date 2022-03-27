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
import { useUser } from '@store';
import { FlexContainer } from 'components/Layout/Layout.styles';

const Header = () => {
  const user = useUser();
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
        <Link href="/" passHref>
          <LogoImg src="/images/logos/logo.svg" />
        </Link>
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
            {user ? (
              <IconUser src="/images/girl.jpg" />
            ) : (
              <Link href="/api/auth/login" locale="en" passHref>
                <IconUser src="/images/icons/user.svg" />
              </Link>
            )}
            <IconLikeShop src="/images/icons/like.svg" />
            <Link href="/cart" passHref>
              <IconLikeShop src="/images/icons/shop.svg" />
            </Link>
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
