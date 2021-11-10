import UserDropdown from './UserDropdown'
import { Menu } from 'react-feather'
import { NavItem, NavLink } from 'reactstrap'
import { useLocation } from 'react-router-dom'

const NavbarUser = props => {
  const { setMenuVisibility } = props
  const location = useLocation();
  console.log(location);

  return (
    <>
      <ul className='navbar-nav d-xl-none d-flex align-items-center'>
        <NavItem className='mobile-menu mr-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
      <ul className='nav navbar-nav align-items-center ml-auto'>
        <UserDropdown />
      </ul>
    </>
  )
}
export default NavbarUser
