module.exports = {
  siteMetadata: {
    title: `대성❤️승아의 모바일 청첩장`,
    description: '문대성 조승아 결홉합니다',
    siteUrl: `https://wedding-moon-and-jo.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/fabicon.png",
      },
    },
  ],
};

require("dotenv").config({
  path: `.env`,
});
