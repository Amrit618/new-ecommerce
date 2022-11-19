export interface User {
    id: number,
    name: string,
    password: string,
    role: UserRole,
    email: string,
    avatar: string
}
export interface UserReducerState{
    userlist: User[],
     currentUser: User | undefined
}
export interface LoginType{
  email: string,
  password: string
}
export type UserRole = 'customer' | 'admin'