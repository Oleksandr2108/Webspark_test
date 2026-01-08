export type Post = {
  id: number;
  imageUpload: string;
  imageUrl: string;
  stats: Stats;
  today: Today;
};

type Stats = {
  date: string;
  likes: number;
  comments: number;
};

type Today = {
  likes: number;
  comments: number;
};
