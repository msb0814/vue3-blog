declare global {
  type NavItem = {
    label: string;
    name: string;
  };

  type LoginData = {
    token: string;
  };

  type Category = {
    id: number;
    name: string;
    key: string;
    parent_id?: number;
    article_nums: number;
  };
}

export {};
