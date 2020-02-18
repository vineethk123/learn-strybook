import React from 'react';
import { action } from '@storybook/addon-actions';
import ActionButtons from './ActionButtons';

export default {
  title: 'Action Buttons',
  component: ActionButtons,
};

const showSettings = action('Show Settings');
const viewUsers = action('View Users');
const addUser = action('Add User');
const props = { showSettings, viewUsers, addUser };

export const NonAdminActions = () => (
  <ActionButtons isAdmin={false} {...props} />
);

export const AdminActions = () => <ActionButtons isAdmin={true} {...props} />;
