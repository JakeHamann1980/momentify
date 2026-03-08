import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Momentify",
    short_name: "Momentify",
    description:
      "Stop paying for moments you cannot measure. Momentify captures engagement at trade shows, recruiting events, field sales, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#061341",
    theme_color: "#00BBA5",
    icons: [
      {
        src: "/Momentify-Icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
