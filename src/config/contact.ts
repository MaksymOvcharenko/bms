const sharedHours = {
  weekdays: "08:00–18:00",
  saturday: "08:00–15:00",
} as const;

export const branches = {
  krakow: {
    city: "Kraków",
    name: "BLS Service Kraków",
    phoneDisplay: "+48 577 772 223",
    phoneHref: "tel:+48577772223",
    phoneGtm: "+48577772223",
    telegram: "https://t.me/+48577772223",
    whatsapp: "https://wa.me/48577772223",
    address: "Skręcona 9, 31-587 Kraków",
    maps: "https://maps.app.goo.gl/Fi2HuoBpcMQSGckf6",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2561.622087192098!2d20.001973757919323!3d50.05591033999641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716455f98ebc329%3A0x4db2e3ba60a61628!2sAuto%20Serwis%20BMW%20Krak%C3%B3w%20-%20BLS!5e0!3m2!1suk!2spl!4v1747139666844!5m2!1suk!2spl",
    socials: {
      facebook: "https://www.facebook.com/BLSserviceKrakow",
      instagram: "https://www.instagram.com/bls_service_krakow/",
      tiktok: "https://www.tiktok.com/@bls_service_krakow",
    },
    hours: sharedHours,
  },
  warsaw: {
    city: "Warszawa",
    name: "BLS Select Warszawa",
    phoneDisplay: "+48 575 772 223",
    phoneHref: "tel:+48575772223",
    phoneGtm: "+48575772223",
    address: "Sękocińska 38/B, 05-830 Wolica",
    maps: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x4719359f5ff85f13:0x85bdbd52fdeaadce?entry=s&sa=X&ved=2ahUKEwj9-szI4IqYAxXVLhAIHYXMHUMQ4kB6BAgbEAA&hl=pl",
    mapEmbed: "https://www.google.com/maps?q=S%C4%99koci%C5%84ska%2038%2FB%2C%2005-830%20Wolica&output=embed",
    socials: {
      instagram: "https://www.instagram.com/bls_select_warszawa",
      facebook: "https://www.facebook.com/profile.php?id=61596577741915",
      tiktok: "https://www.tiktok.com/@bls_select_warszawa",
    },
    hours: sharedHours,
  },
} as const;

export type BranchKey = keyof typeof branches;

// Kraków remains the primary contact used in the global header and footer.
export const contact = branches.krakow;
