import PostsList from "../components/PostsList";
import axios from "axios";
import { useState, useEffect } from "react";
import GetPosts from "../components/GetPosts";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  //variable pour traquer le temps que les posts Chargent
  const [isFectching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    storedPosts && setPosts(JSON.parse(storedPosts));
  }, []);

  //fonction qui récupère les 5 premiers post
  const getPosts = async () => {
    setIsFetching(true);

    try {
      const requests = [];

      for (let i = 1; i <= 5; i++) {
        requests.push(
          axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`),
        );
      }

      const responses = await Promise.all(requests);
      const data = responses.map((response) => response.data);
      setPosts(data);

      localStorage.setItem("posts", JSON.stringify(data));
      setIsFetching(!isFectching);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {posts.length !== 0 ? (
        <PostsList posts={posts} />
      ) : (
        <GetPosts getPosts={getPosts} />
      )}
    </div>
  );
}

export default Home;
