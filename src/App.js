import { useEffect, useState } from 'react';
import style from'./App.module.css';
import UserInfo from './components/UserInfo';

function App() {
const [users, setUsers] = useState([])
useEffect(() => {
  dataUsers()
}, [])

const dataUsers = async () => {
  await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  .then((response) => response.json())
  .then((data) => {
    setUsers(data)
  })
  .catch((error) => new Error(error))
} 

  return (
    <div className={style.content}>
      {users.map(user => {
      return  <UserInfo
         id={user.id}
         key={user.id}
         title={user.title}
         thumbnailUrl={user.thumbnailUrl}
         albumId={user.albumId}
         />
      })}
    </div>
  );
}

export default App;
