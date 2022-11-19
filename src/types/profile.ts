
export interface Profile {
    id: number,
    name: string,
    role: string
    password: string,
    email: string,
    avatar: string[]
}
export interface ProfileReducerState{
    profileList: Profile[]
}