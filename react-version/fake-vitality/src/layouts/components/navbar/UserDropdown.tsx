import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'src/components/avatar';
import { useDispatch } from 'react-redux';
import { handleLogout } from '@store/actions/auth';
import { useMsal } from "@azure/msal-react";

import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { User, Power } from 'react-feather';

import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'
import { callMsGraph, getMyPhoto } from '@src/utility/MsGraphApiCall';

interface UserDataType {
  displayName: string;
  jobTitle: string,
  mail: string;
  businessPhones: string[];
  officeLocation: string
}

const UserDropdown = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);
  const { instance, accounts, inProgress } = useMsal();


  useEffect(() => {
    if (inProgress === "none" && accounts.length > 0) {

      instance.acquireTokenSilent({
        account: accounts[0],
        scopes: ["User.Read"]
      }).then(response => {
        if (response.accessToken) {

          callMsGraph(response.accessToken)
            .then(response => {
              // console.log(response);
              setUserData(response);
            });

          getMyPhoto(response.accessToken)
            .then((response: string) => {
              // console.log(response);
              if (response) {
                setUserAvatar(response);
              }
            });

        }
        return null;
      });



    }
  }, [inProgress, accounts, instance]);

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{(userData && userData.displayName) || 'Anonymous'}</span>
          <span className='user-status'>{(userData && userData.officeLocation) || 'Anonymous Email'}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <User size={14} className='mr-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout(instance))}>
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
