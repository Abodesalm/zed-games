const apiDomain = "https://zed-games-api.onrender.com";
//const apiDomain = "http://127.0.0.1:8000";
//https://zed-games-api.onrender.com
//http://127.0.0.1:8000

const api = `${apiDomain}/api/v1`;
const imagesAPI = `${apiDomain}/img/games`;

const links = {
  accounts: {
    whatsapp: "https://wa.me/963997203291",
    instagram: "https://www.instagram.com/3abod_sa",
    telegram: "https://te.me/aboud_zed",
    facebook: "https://www.facebook.com/3abod.sa/",
    discord: "https://discord.gg",
  },
};
const allGenres = [
  "action",
  "fps",
  "open world",
  "battle royal",
  "stealth",
  "rpg",
  "indie",
  "platform",
  "survival",
  "horror",
  "adventure",
  "simulation",
];

export { api, imagesAPI, apiDomain, links, allGenres };
