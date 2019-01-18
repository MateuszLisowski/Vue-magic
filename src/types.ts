export interface userData {
  firstname: string,
  lastname: string,
  username: string,
  password: string,
  funds: number,
  isPremium: boolean,
  id?: any
}

export interface loginData {
  password: string,
  email: string,
}

export interface premium {
  (isPremium: boolean): void,
}

export interface panesData {
  className: string,
  title: string,
  firstLine: string,
  secondLine: string,
}

export interface cardsDataTypes {
  img: string,
  title: string,
  text: string,
  link: string,
}

export interface updatedAccountData {
  firstname: string,
  lastname: string,
  funds: number,
  id: string,
}