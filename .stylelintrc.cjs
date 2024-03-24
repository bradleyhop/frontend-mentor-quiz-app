"use strict";

module.exports = {
  overrides: [
    {
      files: ["*.vue", "*.scss"],
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue/scss",
      ],
    },
  ],
};
