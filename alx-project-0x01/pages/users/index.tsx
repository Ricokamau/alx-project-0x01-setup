import { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage = ({ users }: UsersPageProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserProps) => {
    console.log("Submitted User:", newUser);
    setModalOpen(false); // Close modal
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <UserModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: { users },
  };
}

export default UsersPage;
