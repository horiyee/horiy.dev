"use client";

import { useEffect, useState } from "react";
import { fetchLegacyMarkdownPostsApiClient } from "../../api/client/legacy";
import { LegacyMarkdownPost } from "../../types/legacy";

const LegacyMarkdownPostsPage: React.FC = () => {
  const [markdownPosts, setMarkdownPosts] = useState<LegacyMarkdownPost[]>(
    process.env.NODE_ENV === "development"
      ? [
          {
            id: 1,
            title: "タイトル",
            body: "# 本文",
            createdAt: new Date(),
            updatedAt: new Date(),
            categoryId: 1,
            categoryName: "カテゴリ1",
            publish: true,
          },
          {
            id: 2,
            title: "タイトル",
            body: "# 本文",
            createdAt: new Date(),
            updatedAt: new Date(),
            categoryId: 2,
            categoryName: "カテゴリ2",
            publish: false,
          },
        ]
      : [],
  );

  useEffect(() => {
    fetchLegacyMarkdownPostsApiClient()
      .then(setMarkdownPosts)
      .catch(console.error);
  }, []);

  return (
    <main className="container">
      <h1>マークダウン記事</h1>

      <section>
        {markdownPosts.map((markdownPost) => (
          <article key={markdownPost.id}>
            <form>
              <fieldset>
                <label>
                  タイトル
                  <input type="text" value={markdownPost.title} />
                </label>

                <label>
                  本文
                  <textarea value={markdownPost.body} />
                </label>
              </fieldset>
            </form>
          </article>
        ))}
      </section>
    </main>
  );
};

export default LegacyMarkdownPostsPage;
