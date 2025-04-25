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
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Users</h2>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1200px] bg-white shadow-xl rounded-xl overflow-hidden">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-100 text-xs font-semibold uppercase tracking-wider text-left">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Username</th>
                <th className="px-4 py-3">Password</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Street</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3">Number</th>
                <th className="px-4 py-3">Zipcode</th>
                <th className="px-4 py-3">Lat</th>
                <th className="px-4 py-3">Long</th>
                <th className="px-4 py-3">Version</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.username}</td>
                  <td className="px-4 py-3">{user.password}</td>
                  <td className="px-4 py-3">
                    {user?.name?.firstname} {user?.name?.lastname}
                  </td>
                  <td className="px-4 py-3">{user.phone}</td>
                  <td className="px-4 py-3">{user.address.street}</td>
                  <td className="px-4 py-3">{user.address.city}</td>
                  <td className="px-4 py-3">{user.address.number}</td>
                  <td className="px-4 py-3">{user.address.zipcode}</td>
                  <td className="px-4 py-3">{user.address.geolocation.lat}</td>
                  <td className="px-4 py-3">{user.address.geolocation.long}</td>
                  <td className="px-4 py-3">{user.__v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
