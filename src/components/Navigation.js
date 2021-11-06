import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav>
    <ul className="navigationList">
      <li className="navigationListItem">
        <NavLink
          exact
          to="/"
          className="navigationlink"
          activeClassName="navigationActiveLink"
        >
          Home
        </NavLink>
      </li>
      <li className="navigationListItem">
        <NavLink
          to="/movies"
          className="navigationlink"
          activeClassName="navigationActiveLink"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
