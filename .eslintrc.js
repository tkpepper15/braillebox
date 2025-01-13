const fs = require("fs");

module.exports = {
  extends: [
    "next",
    "prettier",
    "react-app",
    "react-app/jest",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "testing-library/prefer-screen-queries": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false
    }],
    "tailwindcss/classnames-order": "off",
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "pathGroups": [
        {
          "pattern": "next/*",
          "group": "external",
          "position": "before"
        }
      ]
    }],
    "react/no-unescaped-entities": ["error", {
      "forbid": [">", "}"]
    }]
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
function getDirectoriesToSort() {
  const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"];
  return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f));
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}
