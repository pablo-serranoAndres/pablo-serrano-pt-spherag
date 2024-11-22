type AccessTokenType = {
  emailConfirmed: boolean;
  expiration: string;
  token: string;
};

type AuthType = {
  accessToken: AccessTokenType;
  refreshToken: AccessTokenType;
};

export default AuthType;
