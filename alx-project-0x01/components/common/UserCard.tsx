import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2">{name} (@{username})</h2>
      <p className="text-sm text-gray-700 mb-1">Email: {email}</p>
      <p className="text-sm text-gray-700 mb-1">Phone: {phone}</p>
      <p className="text-sm text-gray-700 mb-1">Website: {website}</p>
      <p className="text-sm text-gray-700 mb-1">Company: {company.name}</p>
      <p className="text-sm text-gray-700 mb-1">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
      <p className="text-xs text-gray-400 mt-2">User ID: {id}</p>
    </div>
  );
};

export default UserCard;
