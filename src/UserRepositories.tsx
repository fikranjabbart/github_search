// UserSearch.tsx
import React, { useState } from 'react';
import { searchUsers } from './githubApi';

interface User {
  login: string;
  id: number;
}

const UserSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const accessToken = "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"; // Replace with your actual GitHub access token

  const handleSearch = async () => {
    try {
      const users = await searchUsers(searchQuery, accessToken);
      setUsers(users);
    } catch (error:any) {
      console.error(error.message);
    }
  };

  return (
    <div>
         

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
