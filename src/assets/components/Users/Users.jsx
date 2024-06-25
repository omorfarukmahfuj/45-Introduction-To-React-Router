import { useLoaderData } from "react-router-dom";
import UserRow from './../UserRow/UserRow';

const Users = () => {

  const users = useLoaderData();

  return (
    <div className="overflow-x-auto my-6">
      <h1 className="mb-4 text-center text-3xl font-bold text-[#4D6BF2]">Users Table List</h1>
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => <UserRow key={user.id} user={user}></UserRow>)
          }
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Users;