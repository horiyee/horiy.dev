"use client";

import { useEffect } from "react";
import { fetchLegacyMarkdownPostsApiClient } from "../../api/client/legacy";

const LegacyMarkdownPostsPage: React.FC = () => {
  useEffect(() => {
    fetchLegacyMarkdownPostsApiClient().then(console.log);
  }, []);

  return (
    <main className="container">
      <h1>マークダウン記事</h1>
    </main>
  );
};

export default LegacyMarkdownPostsPage;
