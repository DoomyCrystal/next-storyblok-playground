import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import feature from "../components/bloks/feature";
import teaser from "../components/bloks/teaser";
import page from "../components/bloks/page";
import grid from "../components/bloks/grid"
import rich_text from "../components/bloks/rich_text"
import rich_text_highlight from "../components/bloks/rich_text_highlight"

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  // bridge: true,
  use: [apiPlugin],
  components: {
    page,
    teaser,
    feature,
    grid,
    rich_text,
    rich_text_highlight
  },
});

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
