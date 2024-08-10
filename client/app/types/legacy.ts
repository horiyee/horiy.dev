export type LegacyMarkdownPost = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  categoryName: string;
  publish: boolean;
};

export type LegacyCategory = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type LegacyBookmark = {
  id: number;
  url: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  categoryName: string;
};
