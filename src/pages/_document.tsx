import { Html, Head, Main, NextScript } from "next/document";

const IS_ANALYTICS_DISABLED =
  process.env.NEXT_PUBLIC_IS_ANALYTICS_DISABLED === "true";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {!IS_ANALYTICS_DISABLED ? (
          <script
            async
            src="https://analytics.umami.is/script.js"
            data-website-id="51c95383-1da6-4018-97b0-074a2006e6ed"
          ></script>
        ) : null}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
