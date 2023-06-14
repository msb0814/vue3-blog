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
}

export {};
