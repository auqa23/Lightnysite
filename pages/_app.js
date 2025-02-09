import Head from "next/head";
import { useRouter } from "next/router";
import config from "../config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const description = `${
    config.name
  } is a Discord bot with features like ${config.Features.map(
    (data) => data.name
  )}`;
  const title = config.name;
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_URL + router.asPath;
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* <!-- Schema.org markup for Google+ --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="/logo.png" />

        {/* <!-- Open Graph data --> */}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
