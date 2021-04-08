export interface IArtist {
    id: number;
    name: string;
    albums?: IAlbum[]
}

export interface IAlbum {
    id: number;
    title: string;
    artist?: number
}