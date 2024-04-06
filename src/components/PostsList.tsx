import PostItem from "./PostItem";

function PostsList({ posts }: PostListProps) {
  return (
    <section className="flex gap-5 flex-wrap justify-center py-[20px] px-[5%]  ">
      {posts
        ? posts.map((item) => <PostItem key={item.id} title={item.title} />)
        : ""}
    </section>
  );
}

export default PostsList;
