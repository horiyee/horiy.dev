import { envVariables } from "../config/envVariables";

export const getApiEndpoint = (route: string) =>
  envVariables.NEXT_PUBLIC_API_BASE_URL + route;
