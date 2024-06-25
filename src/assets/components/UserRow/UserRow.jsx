import { PropTypes } from 'prop-types';

const UserRow = ({ user }) => {
  const { id, name, username, email, address, phone, website } = user;

  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{address.street}</td>
      <td>{phone}</td>
      <td>{website}</td>
    </tr>
  );
};
UserRow.propTypes = {
  user: PropTypes.object
}
export default UserRow;
