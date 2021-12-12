export default {
  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  css: ["~/assets/scss/styles.scss"],
};
