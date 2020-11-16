import React from 'react';
import {Admin,Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import PostList from './components/Post/PostList';
import PostCreate from './components/Post/PostCreate';
import PostEdit from './components/Post/PostEdit';

import UserList from './components/User/UserList';
import UserCreate from './components/User/UserCreate';
import UserEdit from './components/User/UserEdit';


function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name="posts"
        create={PostCreate}
        edit={PostEdit}
        list={PostList}
      />
      <Resource
        name="Users"
        create={UserCreate}
        edit={UserEdit}
        list={UserList}
      />
    </Admin>
  );
}

export default App;
