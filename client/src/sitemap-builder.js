require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./App').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
    new Sitemap(router)
        .build('https://timesofcollege.com')
        .save('./public/sitemap.xml')
  );