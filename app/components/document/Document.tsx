import React from "react";
import {Links, Meta, Scripts, ScrollRestoration} from "@remix-run/react";
import {Global} from "@emotion/react";
import globalStyles from "~/theme/global.styles";

type DocumentProps = {
    children: React.ReactNode;
    title?: string;
};

const Document: React.FC<DocumentProps> = ({ children, title }) => (
  <html lang="en">
    <head>
      {title ? <title>{title}</title> : undefined}
      {/* All meta exports on all routes will go here */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      {/* All link exports on all routes will go here */}
      <Links />
    </head>
    <body>
      {/* Global emotion styles */}
      <Global styles={globalStyles} />

      {children}

      {/* Manages scroll position for client-side transitions */}
      {/* If you use a nonce-based content security policy for scripts,
    you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
      <ScrollRestoration />

      {/* Script tags go here */}
      {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop.
    Otherwise, omit the nonce prop as shown here. */}
      <Scripts />
    </body>
  </html>
);

export default Document;
