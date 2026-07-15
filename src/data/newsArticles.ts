export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string;
}

/**
 * No real news articles have been published yet. Add entries here (or wire
 * this to a CMS/admin panel) — NewsList and NewsArticle both render straight
 * from this array.
 */
export const newsArticles: NewsArticle[] = [];
