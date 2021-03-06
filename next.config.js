const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: "HSBLOG",
    API_DEVELOPMENT: "http://localhost:8000/api",
    API_PRODUCTION: "https://hsblog.com/api",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "http://localhost:3000",
    DOMAIN_PRODUCTION: "https://hsblog.com",
    FB_APP_ID: "",
    DISQUS_SHORTNAME: "thehomeschoolpath",
    GOOGLE_CLIENT_ID:
      "237375236120-h1cn63oko25pd57ognarcvld8dld907v.apps.googleusercontent.com",
  },
});
