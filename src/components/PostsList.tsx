import PostItem from "./PostItem";
function PostsList() {
  return (
    <section className="flex gap-5 flex-wrap justify-center py-[20px] px-[5%]  ">
      <PostItem />
      <PostItem />
      <PostItem />
    </section>
  );
}

export default PostsList;
