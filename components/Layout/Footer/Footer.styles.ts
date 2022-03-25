import { styled } from '@mui/system';
import { FooterProps } from './Footer.types';

export const NewsLetter = styled('div')({
  background: '#C9C9C9',
  height: 257,
  textAlign: 'center',
});

export const NewsLetterContainer = styled('div')({
  width: '60%',
  margin: '0 auto',
});

// export const TitleNL = styled("p")(({ theme }) => ({
//   textTransform: "uppercase",
//   paddingTop: 31,
//   fontSize: 12,
//   [theme.breakpoints.up("sm")]: { paddingTop: 70, fontSize: 18 },
// }));

export const TitleNL = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  paddingTop: 31,
  [theme.breakpoints.up('sm')]: { paddingTop: 70 },
}));

export const Bold = styled('span')({
  fontWeight: 'bold',
});

export const EmailWrapper = styled('div')(({ theme }) => ({
  display: 'block',
  marginTop: 35,
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 66,
  },
}));

export const InputEmail = styled('input')(({ theme }) => ({
  fontFamily: 'Open Sans',
  border: 'none',
  background: 'none',
  borderBottom: '1px solid',
  width: '100%',
  marginBottom: 30,
  paddingBottom: 16,
  fontSize: 16,
  [theme.breakpoints.up('sm')]: { width: '60%', fontSize: 20, marginBottom: 0 },
}));

// export const InputEmail = styled("div")(({ theme }) => ({
//   border: "none",
//   background: "none",
//   borderBottom: "1px solid",
//   width: "100%",
//   marginBottom: 30,
//   paddingBottom: 16,
//   opacity: 0.65,
//   [theme.breakpoints.up("sm")]: { width: "60%", marginBottom: 0 },
// }));

export const ContactSection = styled('div')(({ theme }) => ({
  background: '#333333',
  height: '100%',
  [theme.breakpoints.up('md')]: {
    height: 449,
  },
}));

export const FooterLogosMobile = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '90%',
  margin: '0 auto',
  padding: '42px 0',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const LogoFooter = styled('img')({
  // backgroundColor: "green",
  width: 135,
  height: 103,
});

export const SocialIconsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  opacity: 0.5,
});

export const SocialIcon = styled('img')(({ theme }) => ({
  width: 26,
  height: 26,
  marginLeft: 50,
  // backgroundColor: "salmon",
  [theme.breakpoints.up('md')]: {
    margin: '0 5px',
  },
}));

export const FooterCityMobile = styled('div')(({ theme }) => ({
  display: 'block',
  borderTop: '1px solid rgba(255,255,255,0.2)',
  textAlign: 'center',
  padding: 40,
  // color: "rgba(255,255,255, 0.6)",
  opacity: 0.6,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

// export const AddressName = styled("p")(({ theme }) => ({
//   margin: "3px 0 0",
//   marginBottom: 20,
//   [theme.breakpoints.up("md")]: {
//     marginBottom: 0,
//   },
// }));

export const AddressName = styled('div')(({ theme }) => ({
  margin: '3px 0 0',
  marginBottom: 20,
  opacity: 0.6,
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
}));

export const CityName = styled('div')({
  opacity: 0.6,
});

export const FooterAboutMobile = styled('div')(({ theme }) => ({
  display: 'block',
  borderTop: '1px solid rgba(255,255,255,0.2)',
  textAlign: 'center',
  // color: "rgba(255,255,255, 0.6)",
  opacity: 0.6,
  padding: 40,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

// export const ParagraphAbout = styled("p")({
//   marginBottom: 10,
// });

export const ParagraphAbout = styled('div')({
  marginBottom: 10,
  opacity: 0.6,
});

export const FooterCookiesMobile = styled('div')(({ theme }) => ({
  borderTop: '1px solid rgba(255,255,255,0.2)',
  // color: "rgba(255,255,255, 0.6)",
  opacity: 0.6,
  padding: 40,
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

// export const CookiesParagraph = styled("p")(({ theme }) => ({
//   textTransform: "uppercase",
//   fontSize: 11,
//   [theme.breakpoints.up("md")]: {
//     textTransform: "capitalize",
//     fontSize: 16,
//   },
// }));

export const CookiesParagraph = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  opacity: 0.6,
  marginBottom: 10,
  [theme.breakpoints.up('md')]: {
    textTransform: 'capitalize',
  },
}));

export const CopyrightContainerMobile = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid rgba(255,255,255,0.2)',
  padding: 40,
  opacity: 0.6,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const CopyrightContainer = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    height: 90,
    borderTop: '1px solid rgba(255,255,255,0.2)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    opacity: 0.6,
  },
}));

// export const CopyrightText = styled("p")({
//   fontSize: 16,
//   color: "rgba(255,255,255, 0.6)",
//   opacity: 0.6,
//   margin: 0,
// });

export const CopyrightText = styled('div')({
  opacity: 0.6,
  margin: 0,
});

export const FooterContainer = styled('div')<FooterProps>(
  ({ height = '100%', theme }) => ({
    display: 'none',
    background: 'transparent',
    maxWidth: 1630,
    width: '80%',
    margin: '0 auto',
    height: height,
    [theme.breakpoints.up('md')]: {
      width: '95%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
);

export const AddressContainer = styled('div')(({ theme }) => ({
  width: 648,
  height: 158,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

// export const Address = styled("div")({
//   // color: "rgba(255,255,255, 0.6)",
//   opacity: 0.6,
//   fontSize: 16,
// });

export const Address = styled('div')({
  // color: "rgba(255,255,255, 0.6)",
  opacity: 0.6,
});

export const SeparatorCity = styled('div')({
  height: '20%',
});

// export const AboutUs = styled("div")({
//   // color: "rgba(255,255,255, 0.6)",
//   opacity: 0.6,
//   fontSize: 16,
// });

export const AboutUs = styled('div')({
  // color: "rgba(255,255,255, 0.6)",
  opacity: 0.6,
});

export const SocialContainer = styled('div')(({ theme }) => ({
  width: 158,
  height: 158,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const PolicyContainer = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
    width: '100%',
    textAlign: 'end',
    // color: "rgba(255,255,255, 0.6)",
    opacity: 0.6,
    marginTop: 70,
  },
}));
