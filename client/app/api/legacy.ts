import { envVariables } from "../config/envVariables";

export const getLegacyApiEndpoint = (route: string) =>
  envVariables.LEGACY_API_BASE_URL + route;
