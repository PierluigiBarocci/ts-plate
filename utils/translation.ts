import { IntlFormatters } from '@formatjs/intl/src/types';

export const translation = {
  home: (intl: IntlFormatters) => ({
    title: intl.formatMessage({
      defaultMessage: 'This is an English Title',
      description: 'placeholder text',
    }),
  }),
};
