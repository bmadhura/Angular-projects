export interface ILoginData{
    email:string,
    password:string,
}

export interface ITypes{
    id:number,
    name:string
}

export interface IPokemon{
    id?:string | undefined,
    name:string | null |undefined,
    level:number | null |undefined,
    type: ITypes,
    isSelected: boolean | null | undefined,
    createdOn?:string | undefined,
    updatedOn?:string | undefined,
}

export interface IPokeData{
    id:number,
    pokemon:IPokemon
}