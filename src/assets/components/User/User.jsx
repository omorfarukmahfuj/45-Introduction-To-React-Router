import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const User = ({ user }) => {
  const { id, name, username, email, address, phone, website } = user;
  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/user/${id}`)
  }
  return (
    <div className="card bg-[#4D6BF2] text-white w-96">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>username: {username}</p>
        <p>email: {email}</p>
        <p>address: {address.street}</p>
        <p>phone: {phone}</p>
        <p>website: {website}</p>
        <div className="card-actions justify-end">
          {/* <Link to={`/user/${id}`} className="btn">Details</Link> */}
          <button onClick={handleShowDetail} className="btn">Details</button>
        </div>
      </div>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object
}
export default User;
