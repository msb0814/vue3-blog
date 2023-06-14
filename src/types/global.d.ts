declare global {
  type NavItem = {
    label: string;
    name: string;
  };

  type LoginData = {
    token: string;
  };

  interface Category {
    id: number;
    name: string;
    status: number;
    sort_order: number;
    parent_id: number;
  }

  interface ArticleListItem {
    created_at: string;
    id: number;
    title: string;
    author: string;
    description: string;
    cover: string;
    browse: number;
    category_id: number;
  }

  interface ArticleItem extends ArticleListItem {
    categoryName: string;
  }
}

interface ArticleCommentMeta {
  current_page: number;
  per_page: number;
  count: number;
  total: number;
  total_pages: number;
}

interface ArticleComment {
  data: any[]; // 请根据实际情况定义具体的类型
  meta: ArticleCommentMeta;
}

interface Article {
  created_at: string;
  id: number;
  title: string;
  author: string;
  description: string;
  content: string;
  cover: string;
  browse: number;
  updated_at: string;
  deleted_at: null | string;
  category_id: number;
  category: Category;
  article_comment: ArticleComment;
}

export { Article };
