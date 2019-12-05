/// <reference types="react-scripts" />

export interface IUser {
    _id: string;
    githubID: number;
    accessToken?: string;
}

export interface IRepo {
    name: string;
    owner: IRepoOwner;
    dexcription: string;
}

export interface IRepoOwner {
    login: string;
    avatar: string;
}

export interface RepoDetailProps {
    repo: IRepo;
}


