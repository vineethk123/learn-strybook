import React from 'react';
import CustomButton from '../CustomButton';

export default function ActionButtons(props) {
  const { showSettings, viewUsers, addUser, isAdmin } = props;
  return (
    <div style={{ display: 'grid', gridAutoFlow: 'column' }}>
      <CustomButton onClick={showSettings}>Show Settings</CustomButton>
      <CustomButton onClick={viewUsers}>View Users</CustomButton>
      {isAdmin ? <CustomButton onClick={addUser}>Add User</CustomButton> : null}
    </div>
  );
}
