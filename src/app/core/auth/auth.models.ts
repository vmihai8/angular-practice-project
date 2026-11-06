export interface LoginResponse {
  readonly id: number;
  readonly username: string;
  readonly email: string;
  readonly accessToken: string;
  readonly refreshToken: string;
}
