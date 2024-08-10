import { envVariables } from "../config/envVariables";

export const getLegacyApiEndpoint = (route: string) =>
  envVariables.NEXT_PUBLIC_LEGACY_API_BASE_URL + route;
