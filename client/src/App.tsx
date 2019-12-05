import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { IUser, IRepo } from './react-app-env';
import openNewAuthWindow from './openWindow';
import RepoDetail from './RepoDetails';

const App: React.FC = () => {
  // need to type the use state function to the interface described earlier
  const [user, setUser] = useState<IUser>({} as IUser);
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [repoId, setRepoId] = useState<number>(0);

  useEffect( () => {
    if ( Object.keys(user).length ) {
      axios.get(`/api/${user.githubID}/repos`)
      .then((response) => {
        setRepos(response.data)
      })
    }
  }, [user])

  function handleLogin(event: React.MouseEvent): void {
    event.preventDefault();
    const message: Promise<IUser> = openNewAuthWindow('/auth/github')
    message.then( ghUser => {
      setUser(ghUser)
    }).catch(err => console.log(err))
  }

  const userData = Object.keys(user).length === 0 ? <p>no user</p> : <p>{user.githubID}</p>
  const repoData = repos.map((repo, id) => (
    <p onClick={() => setRepoId(id)} key={id}>{repo.name}</p>
    ))

    var repoDetail: IRepo;
      if (repos.length) {
        repoDetail = repos[repoId]
      } else {
        repoDetail = {} as IRepo
      }

  return (
    <div className="App">
    <a href='/auth/github' onClick={handleLogin}>Login to Github</a>
      {userData}
      {repoData}
      <RepoDetail repo={repoDetail}/>
    </div>
  );
}

export default App;
