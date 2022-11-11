export interface Iuser {
  name: string;
  email: string;
  senha: string;
}

export interface IuserResponse extends Iuser {
  id: number | string;
}
