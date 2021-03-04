export default interface User {
  login: string;
  password: string;
  readonly token: string;
  readonly network_id: number;
}
