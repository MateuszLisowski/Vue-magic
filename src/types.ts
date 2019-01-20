export interface userData {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  funds: number;
  isPremium: boolean;
  id?: any;
}

export interface loginData {
  password: string;
  email: string;
}

export interface premium {
  (isPremium: boolean): void;
}

export interface panesData {
  className: string;
  title: string;
  firstLine: string;
  secondLine: string;
}

export interface cardsDataTypes {
  img: string;
  title: string;
  text: string;
  link: string;
}

export interface updatedAccountInformations {
  updatedUserData: updatedAccountData | userData;
}

export interface updatedAccountData {
  firstname: string;
  lastname: string;
  funds: number;
  id: string;
}

export interface rootState {
  notifications: notificationsTypes;
  authentication: authenticationTypes;
  user: userTypes;
}

export interface notificationsTypes {
  errorMessage: string;
  isError: boolean;
  isSuccess: boolean;
  successMessage: string;
}

export interface authenticationTypes {
  idToken: string | null;
  isLogged: boolean | false;
  userId: string | null;
}

export interface userTypes {
  user: userData | {};
}

export interface userGetters extends userTypes {
  userFunds: number;
  isPremium: boolean;
  user: userData;
}

export interface authenticationGetters {
  isAuthenticated: boolean;
  idToken: string;
  isLogged: boolean;
}
