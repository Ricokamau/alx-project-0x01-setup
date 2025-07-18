import { useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { PostProps, PostData } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    console.log("Submitted Post:", newPost);
    setModalOpen(false); // Close modal
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Posts</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setModalOpen(true)}
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <PostModal
            post={post}
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddPost}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: { posts },
  };
}

export default PostsPage;
