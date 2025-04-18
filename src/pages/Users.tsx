import React, { useEffect, useState } from "react";
import { getAllUsers } from "../axios-instance/functions/users.api";
import { IUserResponse } from "../typescript/users.interface";

const Users = () => {
  const [users, setUsers] = useState<IUserResponse>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getAllUsers();
      setUsers(res);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-6 py-3">Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.password}</td>
                <td className="px-6 py-4">{user?.name?.firstname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
