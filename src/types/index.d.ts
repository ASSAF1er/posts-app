interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

interface getPostsProps {
  getPosts: () => void;
}
interface FavoritesProps {
  posts: Post[];
}
