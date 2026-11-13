import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A+ Digital Solutions",
    short_name: "A+ DS",
    description:
      "A creative digital partner shaping strategy, brand identity, product design, and custom software for ambitious teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#091A14",
    theme_color: "#091A14",
    icons: [
      {
        src: "/assets/logos/aplus_mark_dark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

