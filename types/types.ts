import { Session } from "next-auth";

export interface ExtendedSession extends Session {
  accessToken: any;
}
