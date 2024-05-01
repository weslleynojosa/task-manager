/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { CacheProvider } from "@emotion/react";
import { emotionCache } from "~/theme/styles.context";

hydrate(
  <CacheProvider value={emotionCache}>
    <RemixBrowser />
  </CacheProvider>,
  document
);
