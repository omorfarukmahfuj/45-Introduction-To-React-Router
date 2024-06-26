import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { name, username, email, address, phone, website } = user;
  const handleGoBack = () => {
    navigate(-1);
  }
  return (

    <div className='flex flex-col items-center justify-center hero min-h-screen'>
      <div className="hero-content text-left">
        <div className="max-w-md flex flex-col gap-4">
          <h1 className="text-5xl font-bold">{name}</h1>
          <div className='text-xl flex flex-col gap-3 font-mono'>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>address: {address.street}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
          </div>
          <button onClick={handleGoBack} className="btn btn bg-[#4D6BF2] hover:bg-[#123dfc] text-white">Go back</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;