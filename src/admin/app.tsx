import type { StrapiApp } from "@strapi/strapi/admin";
import AuthLogo from "./extensions/my-logo.png";
import MenuLogo from "./extensions/logo.png";
import favicon from "./extensions/favicon.png";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    head: {
      favicon: favicon,
    },
    translations: {
      en: {
        "Auth.form.welcome.subtitle": "Welcome to Strada Dashboard",
        "Auth.form.welcome.title": "Welcome to Strada !",
      },
    },
    locales: ["ar", "en"],
    tutorials: false,

    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    // if (window.location.pathname.includes("auth")) {
    //   document.title = "Strada CMS";
    // } else {
    //   document.title = "Strada Admin Dashboard";
    // }
    const updateTitle = () => {
      const path = window.location.pathname;

      let title = "Strada Admin Dashboard"; // Default title

      if (path.includes("/auth/login")) {
        title = "Login - Strada Admin";
      } else if (path.includes("/content-manager")) {
        title = "Content Manager - Strada Admin";
      } else if (path.includes("/settings")) {
        title = "Settings - Strada Admin";
      } else if (path.includes("/plugins")) {
        title = "Plugins - Strada Admin";
      } // Add more conditions as needed

      document.title = title;
    };

    // Run when the app loads
    updateTitle();

    // Listen for navigation events
    const observer = new MutationObserver(() => updateTitle());
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup observer when Strapi admin unmounts (optional)
    window.addEventListener("beforeunload", () => observer.disconnect());
    console.log(app);
  },
};
