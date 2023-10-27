import React from 'react';
import './UserProfile.scss';
import userIMG from './../../assets/user.png';

const UserProfile = props => {

  const { displayName } = "Jeff";

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} />
          </div>
        </li>
        <li>
          <span className="displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;