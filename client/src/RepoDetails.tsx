import React from 'react';
import { IRepo, RepoDetailProps } from './react-app-env'

// React.FC is a generic type... give it a type representing the shape of its data
// add decleration of type 

const RepoDetails: React.FC<RepoDetailProps> = (props) => {  
     var content;
     if (Object.keys(props.repo).length) {
        //   if repo has keys we have detail
         content = (
             <>
                 <h1>{props.repo.name}</h1>
                 <h3>by: {props.repo.owner.login}</h3>
                 <img src={`${props.repo.owner.avatar}`} alt=""/>
             </>
         );
     } else {
         content = (
             <>
                 <p>No selected Repo</p>
             </>
         )
    }

    return content;
}

export default RepoDetails;