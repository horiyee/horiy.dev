import "@picocss/pico";
import Link from "next/link";
import { pageRoutes } from "./config/pageRoutes";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <header className="container">
          <nav>
            <ul>
              <li>
                <strong>horiylabs</strong>
              </li>
            </ul>

            <ul>
              <li>
                <Link href={pageRoutes.notes}>Notes</Link>
              </li>
              <li>
                <Link href="https://www.horiy.me">About Me</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
