import { styled } from '@mui/system';
import { NavElementProps } from './Header.types';

export const HeaderStyle = styled('header')({
  background: '#F5F5F7',
  height: 142,
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1,
});

export const IconsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  // width: 19,
  // height: 20,
  // backgroundColor: "red",
  [theme.breakpoints.up('md')]: {
    width: 188,
  },
}));

export const LinkContainer = styled('div')(({ theme }) => ({
  display: 'none',
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const LinkWrapper = styled('div')({
  width: '90%',
  height: '100%',
  maxWidth: 938,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const LogoImg = styled('img')(({ theme }) => ({
  width: 168,
  height: 30.5,
  // backgroundColor: "red",
  marginRight: '40%',
  [theme.breakpoints.up('md')]: {
    marginRight: 0,
  },
}));

export const Separator = styled('div')({
  width: 20,
  height: '100%',
});

// export const NavElement = styled("a")<NavElementProps>(
//   ({ fontWeight = "bold" }) => ({
//     margin: "0 5px",
//     fontSize: 14,
//     fontWeight: fontWeight,
//     textTransform: "uppercase",
//   })
// );

export const NavElement = styled('div')<NavElementProps>({
  margin: '0 5px',
});

export const UserOptions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '60%',
});

export const IconUser = styled('img')(() => ({
  width: 21,
  height: 21,
}));

export const IconLikeShop = styled('img')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const LanguageSelector = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
  },
}));

export const DropdownLang = styled('img')(({ theme }) => ({
  width: 15,
  height: 15,
  marginLeft: 4,
  [theme.breakpoints.up('md')]: {},
}));
