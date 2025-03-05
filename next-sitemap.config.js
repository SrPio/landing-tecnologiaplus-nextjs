/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://landing-tecnologiaplus-nextjs.vercel.app/", // Cámbialo por tu dominio de prueba
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/" }, // Bloquea todo por defecto
            { userAgent: "*", allow: "/dispensador-de-tiquetes/" } // Permite solo esta URL
        ],
    },
};
