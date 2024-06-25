import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-[#3b5fff] px-6 py-2 rounded-full"><NavLink to={route.path}>{route.name}</NavLink></li>
  );
};

Link.propTypes = {
  route: PropTypes.object
}
export default Link;