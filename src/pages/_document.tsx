import { Html, Head, Main, NextScript } from "next/document";

const IS_ANALYTICS_DISABLED =
  process.env.NEXT_PUBLIC_IS_ANALYTICS_DISABLED === "true";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {!IS_ANALYTICS_DISABLED ? (
          <script
            defer
            src="https://riga.us.to/script.js"
            data-website-id="b64a0e88-45ec-4e91-8e0a-7628b0e411b4"
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
