export interface IUser {
    _id: string;
    githubID: number;
    accessToken?: string;
}

export interface IRepo {
    name: string;
}

export type passportCallback = (err: string, user: IUser) => any 

export {}