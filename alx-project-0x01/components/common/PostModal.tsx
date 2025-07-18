// components/common/PostModal.tsx
import { useState } from "react";
import { PostData, PostModalProps } from "@/interfaces";

const PostModal = ({ isOpen, onClose, onSubmit }: PostModalProps) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(post);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={post.title}
          onChange={handleChange}
          className="border w-full mb-3 p-2 rounded"
        />
        <textarea
          name="body"
          placeholder="Body"
          value={post.body}
          onChange={handleChange}
          className="border w-full mb-3 p-2 rounded"
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 rounded bg-blue-600 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
