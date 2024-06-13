import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { StyleSheet } from "react-native";

import { config } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";

const tamaguiConfig = createTamagui(config);

// you usually export this from a tamagui.config.ts file:

// import tamaguiConfig from '../tamagui.config'
export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage();
    // @ts-ignore RN doesn't have this type

    const rnwStyle = StyleSheet.getSheet();
    return {
      ...page,

      styles: (
        <>
          <style
            id={rnwStyle.id}
            dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          />

          <style
            dangerouslySetInnerHTML={{
              __html: tamaguiConfig.getCSS(),
            }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta id="theme-color" name="theme-color" />

          <meta name="color-scheme" content="light dark" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
