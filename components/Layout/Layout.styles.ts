import { styled } from '@mui/system';
import {
  BoxTitleProps,
  FlexContainerProps,
  SectionContainerProps,
  SectionParagraphProps,
} from './Layout.types';
import { colors } from '@utils/constants';

export const FlexContainer = styled('div')<FlexContainerProps>(
  ({
    height = '100%',
    justifyContent = 'space-between',
    wrap = false,
    theme,
  }) => ({
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    maxWidth: 1630,
    width: '80%',
    margin: '0 auto',
    justifyContent: justifyContent,
    height: height,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    [theme.breakpoints.up('md')]: {
      width: '95%',
    },
  })
);

export const ChildrenContainer = styled('div')({
  paddingTop: 142,
});

export const SectionContainer = styled('div')<SectionContainerProps>(
  ({ backgroundColor = '#F5F5F7', marginTop = '200px' }) => ({
    width: '100%',
    textAlign: 'center',
    marginTop: marginTop,
    backgroundColor: backgroundColor,
    padding: '60px 0',
  })
);

export const ParagraphContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  maxWidth: 1630,
  width: '80%',
  margin: '0 auto',
  justifyContent: 'center',
});

export const SectionParagraph = styled('div')<SectionParagraphProps>(
  ({ marginBottom = '0px' }) => ({
    width: '100%',
    maxWidth: 783,
    marginTop: 42,
    marginBottom: marginBottom,
  })
);

export const BoxTitle = styled('div')<BoxTitleProps>(
  ({ width, marginBottom }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.BLACK,
    color: colors.WHITE,
    opacity: 1,
    padding: '8px 99px',
    textTransform: 'uppercase',
    width: width,
    borderRadius: 3,
    margin: '0 auto',
    letterSpacing: 3.6,
    marginBottom: marginBottom,
  })
);
