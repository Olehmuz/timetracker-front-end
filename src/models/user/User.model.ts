import { IAccessTokenPayload } from "models/token/Token.model";


export type User = Omit<AuthUser, 'id'>

export type AuthUser = Omit<IAccessTokenPayload, "iat" | "exp">