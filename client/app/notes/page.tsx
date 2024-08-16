import Link from "next/link";
import { pageRoutes } from "../config/pageRoutes";

const NotesPage: React.FC = () => {
  return (
    <section>
      <hgroup>
        <h1>Notes</h1>
        <h2>技術メモ</h2>
      </hgroup>

      <article>
        <hgroup>
          <h3>
            <Link href={`${pageRoutes.notes}/next_mdx`}>
              Next.js の @next/mdx を導入してみた
            </Link>
          </h3>
          <h4>
            <time dateTime="2024/08/11">2024年8月11日</time>
          </h4>
        </hgroup>
      </article>
    </section>
  );
};

export default NotesPage;
