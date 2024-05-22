'use strict';

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'import-notation': 'string',
    'media-query-no-invalid': null,
    'no-descending-specificity': null,
  },
};
