"use client";

import "@picocss/pico";
import { AuthStateProvider } from "./AuthStateProvider";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <AuthStateProvider>
          <header className="container">
            <h1>horiylabs</h1>
          </header>

          <main className="container">{children}</main>
        </AuthStateProvider>
      </body>
    </html>
  );
};

export default RootLayout;
