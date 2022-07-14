export interface ILoginData{
    email:string,
    password:string,
}

export interface IUser{
    id?:number,
    name?:string,
    domain?:string,
    email:string,
    password:string,
    role: string,
    report?:number | string,
    nurses?:number[]
}
