// App.tsx
import React, { useState } from 'react';
import UserSearch from './UserSearch';
import UserRepositories from './UserRepositories';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <div>
      
      <UserSearch />
      {selectedUser && <UserRepositories />}
    </div>
  );
};

export default App;
