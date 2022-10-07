const withTM = require("next-transpile-modules");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

const removeImports = require("next-remove-imports")();

module.exports = removeImports({});
const nextConfig = {
  future: { webpack5: true }
}

module.exports = withCss(
  withSass(
    withTM({
      transpileModules: ["react-bulma-components"],
      sassLoaderOptions: {
        includePaths: ["./components"]
      },
      exportPathMap: async function(
      ) {
        return {
          "/": { page: "/" },
          "/about": { page: "/sections/AboutSection.js" },
          "/work": { page: "/sections/WorkSection.js" },
          "/Contact": { page: "/sections/ContactSection.js" },
        };
      }
    })
  )
);
