import * as S from "./styled";

{/*import NavStyle from './styled';*/}

export const NavBar = () => {
  return (
    <nav className="navbarItems">
      <div className="navbar-logo">Tribute</div>
      <div className="menu-icon">
        <ul className="nav-ul">
          <li className="nav-link">
            <a href="#footer">About</a>
          </li>
          <li className="nav-link">
            <a href="#tribute-info">Info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};  

export default NavBar;