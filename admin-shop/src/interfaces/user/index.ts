export interface Login {
  email: string;
  password: string;
}

export interface ResultUser {
  data: {
    user?: any;
    token: string;
  };
}

