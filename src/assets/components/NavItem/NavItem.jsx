import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const NavItem = ({ route }) => {

  return (
    <li className="mr-10 px-6 py-2 rounded-full"><NavLink to={route.path}>{route.name}</NavLink></li>
  );
};

NavItem.propTypes = {
  route: PropTypes.object
}
export default NavItem;