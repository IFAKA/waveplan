import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Life Waveplan",
    short_name: "Waveplan",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "fullscreen",
    orientation: "portrait",
    scope: "/",
    description: "App to plan your life",
    icons: [
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
