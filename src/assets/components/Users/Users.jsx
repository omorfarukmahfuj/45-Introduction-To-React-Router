import { useLoaderData } from "react-router-dom";
import User from '../User/User';

const Users = () => {

  const users = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 container mx-auto px-4 my-10">
      {
        users.map(user => <User key={user.id} user={user}></User>)
      }
    </div>
  );
};

export default Users;