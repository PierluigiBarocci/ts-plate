import { createTheme } from '@mui/material';
import { colors } from 'utils/constants';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    px54Extrabold: React.CSSProperties; //h1
    px50Light: React.CSSProperties; //h2
    px46Extrabold: React.CSSProperties; //h3
    px40Light: React.CSSProperties; //number - card collection [Desktop: 18/19 - Mobile: 18/18]
    px35Extrabold: React.CSSProperties; //h4
    px33Bold: React.CSSProperties; //collection name - card title
    px28Bold: React.CSSProperties; //h5
    // px27Light: React.CSSProperties; //search
    // px26Bold: React.CSSProperties; //author PLP sponsorizzato - card title
    px25Light: React.CSSProperties; //author - tag author
    px25Bold: React.CSSProperties; //author - number of author
    // px24Bold: React.CSSProperties; //h6
    px24ExtraBold: React.CSSProperties; //about poetronicart - card title
    px22Bold: React.CSSProperties; //author PLP - tutte
    px22ExtraBold: React.CSSProperties; //pavillions - nome del padiglione (card title)
    px22Semibold: React.CSSProperties; //PDP - video title
    px22Light: React.CSSProperties; //magazine article - subtitle
    // px21Bold: React.CSSProperties; //author pdp - number of products
    // px21Light: React.CSSProperties; //author pdp - products label
    // px20Light: React.CSSProperties; //author PLP sponsorizzato - products label
    // px20Bold: React.CSSProperties; //author PLP sponsorizzato - num of products
    px19Regular: React.CSSProperties; //paragraph
    px19Bold: React.CSSProperties; //paragraph
    px18Regular: React.CSSProperties; //footer newsletter [@media query mobile : 12px] - magazine article body and bio author [@media query mobile : 14px] - subtitle author and pavillions page [@media query mobile : 16px]
    px18Bold: React.CSSProperties; //flat button
    px18Extrabold: React.CSSProperties; //title card p-magazine
    px16Light: React.CSSProperties; //footer contact
    px16Bold: React.CSSProperties; //pavillions label artwork - magazine article
    px16B: React.CSSProperties; //no @media query
    px16Regular: React.CSSProperties; //no @media query
    px14Reg: React.CSSProperties; //no @media query for mobile
    px14Regular: React.CSSProperties; //cards description
    px14Light: React.CSSProperties; //nav elements
    px14Semibold: React.CSSProperties; //nav elements
    px12Regular: React.CSSProperties; //no @media query
    px12Bold: React.CSSProperties; //no @media query
    px12Extrabold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    px54Extrabold?: React.CSSProperties;
    px50Light?: React.CSSProperties;
    px46Extrabold?: React.CSSProperties;
    px40Light?: React.CSSProperties;
    px35Extrabold?: React.CSSProperties;
    px33Bold?: React.CSSProperties;
    px28Bold?: React.CSSProperties;
    // px27Light: React.CSSProperties;
    // px26Bold: React.CSSProperties;
    px25Light?: React.CSSProperties;
    px25Bold?: React.CSSProperties;
    // px24Bold: React.CSSProperties;
    px24ExtraBold?: React.CSSProperties;
    px22Bold?: React.CSSProperties;
    px22ExtraBold?: React.CSSProperties;
    px22Semibold?: React.CSSProperties;
    px22Light?: React.CSSProperties;
    // px21Bold: React.CSSProperties;
    // px21Light: React.CSSProperties;
    // px20Light: React.CSSProperties;
    // px20Bold: React.CSSProperties;
    px19Regular?: React.CSSProperties;
    px19Bold?: React.CSSProperties;
    px18Regular?: React.CSSProperties;
    px18Bold?: React.CSSProperties;
    px18Extrabold?: React.CSSProperties;
    px16Light?: React.CSSProperties;
    px16Bold?: React.CSSProperties;
    px16B?: React.CSSProperties;
    px16Regular?: React.CSSProperties;
    px14Reg?: React.CSSProperties;
    px14Regular?: React.CSSProperties;
    px14Light?: React.CSSProperties;
    px14Semibold?: React.CSSProperties;
    px12Regular?: React.CSSProperties;
    px12Bold?: React.CSSProperties;
    px12Extrabold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    px54Extrabold: true;
    px50Light: true;
    px46Extrabold: true;
    px40Light: true;
    px35Extrabold: true;
    px33Bold: true;
    px28Bold: true;
    // px27Light: React.CSSProperties;
    // px26Bold: React.CSSProperties;
    px25Light: true;
    px25Bold: true;
    // px24Bold: React.CSSProperties;
    px24ExtraBold: true;
    px22Bold: true;
    px22ExtraBold: true;
    px22Semibold: true;
    px22Light: true;
    // px21Bold: React.CSSProperties;
    // px21Light: React.CSSProperties;
    // px20Light: React.CSSProperties;
    // px20Bold: React.CSSProperties;
    px19Regular: true;
    px19Bold: true;
    px18Regular: true;
    px18Bold: true;
    px18Extrabold: true;
    px16Light: true;
    px16Bold: true;
    px16B: true;
    px16Regular: true;
    px14Reg: true;
    px14Regular: true;
    px14Light: true;
    px14Semibold: true;
    px12Regular: true;
    px12Bold: true;
    px12Extrabold: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.WHITE,
      light: colors.LIGHTGREY,
      dark: colors.BLACK,
    },
    secondary: {
      main: colors.DARKGREY80,
      light: colors.GREY,
      dark: colors.DARKGREY,
    },
  },

  typography: {
    fontFamily: 'Open Sans',
    px16Regular: {
      fontSize: 16,
      fontWeight: 400,
    },
    px16B: {
      fontSize: 16,
      fontWeight: 700,
    },
    px14Reg: {
      fontSize: 14,
      fontWeight: 400,
    },
    px12Regular: {
      fontSize: 12,
      fontWeight: 400,
    },
    px12Bold: {
      fontSize: 12,
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {},
      },
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
theme!.components!.MuiButton!.styleOverrides!.outlined = {
  backgroundColor: '#F0F0F0',
  border: 'none',
  borderRadius: 29,
  fontSize: 14,
  width: 126,
  fontWeight: 'bold',
  padding: '7px 35px',
  // padding: "9px 34px",
  color: colors.BLACK,
  opacity: 1,
  letterSpacing: 1.4,
  [theme.breakpoints.up('md')]: {
    border: `1px solid ${colors.BLACK}`,
    backgroundColor: 'transparent',
    padding: '17px 90px',
  },
};

theme.typography.px54Extrabold = {
  fontSize: 50,
  fontWeight: 800,
  [theme.breakpoints.up('md')]: {
    fontSize: 54,
  },
};

theme.typography.px50Light = {
  fontWeight: 300,
  fontSize: 23,
  [theme.breakpoints.up('md')]: {
    fontSize: 50,
  },
};

theme.typography.px46Extrabold = {
  fontWeight: 800,
  fontSize: 24,
  [theme.breakpoints.up('md')]: {
    fontSize: 46,
  },
};

theme.typography.px40Light = {
  fontWeight: 300,
  fontSize: 23,
  [theme.breakpoints.up('md')]: {
    fontSize: 40,
  },
};

theme.typography.px35Extrabold = {
  fontWeight: 800,
  fontSize: 16,
  [theme.breakpoints.up('md')]: {
    fontSize: 35,
  },
};

theme.typography.px33Bold = {
  fontWeight: 700,
  fontSize: 15,
  [theme.breakpoints.up('md')]: {
    fontSize: 33,
  },
};

theme.typography.px28Bold = {
  fontWeight: 700,
  fontSize: 24,
  [theme.breakpoints.up('md')]: {
    fontSize: 28,
  },
};

// theme.typography.px27Light = {
//   fontWeight: 300,
//   fontSize: 20,
//   [theme.breakpoints.up("md")]: {
//     fontSize: 27,
//   },
// };

// theme.typography.px26Bold = {
//   fontWeight: 700,
//   fontSize: 18,
//   [theme.breakpoints.up("md")]: {
//     fontSize: 26,
//   },
// };

theme.typography.px25Light = {
  fontWeight: 300,
  fontSize: 20, //24
  [theme.breakpoints.up('md')]: {
    fontSize: 25,
  },
};

theme.typography.px25Bold = {
  fontWeight: 700,
  fontSize: 20, //24
  [theme.breakpoints.up('md')]: {
    fontSize: 25,
  },
};

// theme.typography.px24Bold = {
//   fontWeight: 700,
//   fontSize: 19,
//   [theme.breakpoints.up("md")]: {
//     fontSize: 24,
//   },
// };

theme.typography.px24ExtraBold = {
  fontWeight: 800,
  fontSize: 20,
  [theme.breakpoints.up('md')]: {
    fontSize: 24,
  },
};

theme.typography.px22Bold = {
  fontWeight: 700,
  fontSize: 15, //15
  [theme.breakpoints.up('md')]: {
    fontSize: 22,
  },
};

theme.typography.px22ExtraBold = {
  fontWeight: 800,
  fontSize: 20,
  [theme.breakpoints.up('md')]: {
    fontSize: 22,
  },
};

theme.typography.px22Semibold = {
  fontWeight: 500,
  fontSize: 17,
  [theme.breakpoints.up('md')]: {
    fontWeight: 600,
    fontSize: 22,
  },
};

theme.typography.px22Light = {
  fontWeight: 300,
  fontSize: 15, //18
  [theme.breakpoints.up('md')]: {
    fontWeight: 300,
    fontSize: 22,
  },
};

// theme.typography.px21Bold = {
//   fontWeight: 700,
//   fontSize: 17,
//   [theme.breakpoints.up("md")]: {
//     fontSize: 21,
//   },
// };

// theme.typography.px21Light = {
//   fontWeight: 300,
//   fontSize: 17,
//   [theme.breakpoints.up("md")]: {
//     fontSize: 21,
//   },
// };

// theme.typography.px20Light = {
//   fontWeight: 300,
//   fontSize: 11,
//   [theme.breakpoints.up("md")]: {
//     fontSize: 20,
//   },
// };

// theme.typography.px20Bold = {
//   fontWeight: 700,
//   fontSize: 11,
//   [theme.breakpoints.up("md")]: {
//     fontSize: 20,
//   },
// };

theme.typography.px19Regular = {
  fontWeight: 400,
  fontSize: 12,
  [theme.breakpoints.up('md')]: {
    fontSize: 19,
  },
};

theme.typography.px19Bold = {
  fontWeight: 700,
  fontSize: 12,
  [theme.breakpoints.up('md')]: {
    fontSize: 19,
  },
};

theme.typography.px18Regular = {
  fontWeight: 400,
  fontSize: 12,
  [theme.breakpoints.up('md')]: {
    fontSize: 18,
  },
};

theme.typography.px18Bold = {
  fontWeight: 700,
  fontSize: 12,
  [theme.breakpoints.up('md')]: {
    fontSize: 18,
  },
};

theme.typography.px18Extrabold = {
  fontWeight: 800,
  fontSize: 12,
  [theme.breakpoints.up('md')]: {
    fontSize: 18,
  },
};

theme.typography.px16Light = {
  fontWeight: 300,
  fontSize: 12,
  [theme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};

theme.typography.px16Bold = {
  fontWeight: 700,
  fontSize: 15,
  [theme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};

theme.typography.px14Regular = {
  fontWeight: 400,
  fontSize: 12,
  [theme.breakpoints.up('md')]: {
    fontSize: 14,
  },
};

theme.typography.px14Light = {
  fontWeight: 300,
  fontSize: 18,
  textTransform: 'uppercase',
  [theme.breakpoints.up('md')]: {
    fontSize: 14,
  },
};

theme.typography.px14Semibold = {
  fontWeight: 500,
  fontSize: 18,
  textTransform: 'uppercase',
  [theme.breakpoints.up('md')]: {
    fontSize: 14,
  },
};

theme.typography.px12Extrabold = {
  fontWeight: 800,
  fontSize: 11,
  [theme.breakpoints.up('md')]: {
    fontSize: 12,
  },
};

export default theme;
