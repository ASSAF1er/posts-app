import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function SinglePost() {
  const params = useParams();
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="px-[15%] mb-10">
      <div className="font-bold text-[35px] text-gray-900 text-center">
        {post?.title}
      </div>
      <div className="py-5 text-xl font-medium">{post?.body} </div>
      <img
        src={`https://source.unsplash.com/600x300?image-nature`}
        alt=""
        className=" w-full h-[400px]  rounded-xl object-cover "
      />
    </section>
  );
}

export default SinglePost;
