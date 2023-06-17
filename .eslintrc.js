module.exports = {
  extends: ["airbnb-base", "alloy", "alloy/typescript"],
  rules: {
    "max-params": ["error", { max: 5 }],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
  env: {
    node: true,
    jest: true,
  },
  globals: {
    NodeJS: true,
  },
};
