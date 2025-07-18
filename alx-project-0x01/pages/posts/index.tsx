// pages/posts/index.tsx
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { PostProps, PostData } from "@/interfaces";
import { useState } from "react";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);

  const handleCreatePost = (newPost: PostData) => {
    console.log("Post submitted:", newPost);
    // You can later add this to a list or send to backend
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Posts</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 rounded bg-green-600 text-white"
          >
            Add Post
          </button>
        </div>

        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default PostsPage;
