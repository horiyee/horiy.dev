"use client";

import { useCallback, useEffect, useState } from "react";
import { LegacyBookmark } from "../../types/legacy";
import {
  fetchLegacyBookmarksApiClient,
  migrateLegacyBookmarksApiClient,
} from "../../api/client/legacy";

const LegacyBookmarksPage: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<LegacyBookmark[]>(
    process.env.NODE_ENV === "development"
      ? [
          {
            id: 1,
            url: "https://example.com",
            description: "コメント",
            createdAt: new Date(),
            updatedAt: new Date(),
            categoryId: 1,
            categoryName: "カテゴリ1",
          },
        ]
      : [],
  );

  useEffect(() => {
    fetchLegacyBookmarksApiClient().then(setBookmarks).catch(console.error);
  }, []);

  const onClickMigrate = useCallback(
    async () =>
      await fetchLegacyBookmarksApiClient()
        .then(async (bookmarks) => {
          await migrateLegacyBookmarksApiClient({ bookmarks })
            .then(console.log)
            .catch(console.error);
        })
        .catch(console.error),
    [],
  );

  return (
    <main className="container">
      <h1>ブックマーク</h1>

      <button onClick={onClickMigrate}>migrate</button>
      <section>
        {bookmarks.map((bookmark) => (
          <article key={bookmark.id}>
            <form>
              <fieldset>
                <label>
                  createdAt
                  <input
                    type="text"
                    value={bookmark.createdAt.toLocaleDateString()}
                  />
                </label>

                <label>
                  updatedAt
                  <input
                    type="text"
                    value={bookmark.updatedAt.toLocaleDateString()}
                  />
                </label>

                <label>
                  URL
                  <input type="text" value={bookmark.url} />
                </label>

                <label>
                  コメント
                  <textarea value={bookmark.description} />
                </label>
              </fieldset>
            </form>
          </article>
        ))}
      </section>
    </main>
  );
};

export default LegacyBookmarksPage;
