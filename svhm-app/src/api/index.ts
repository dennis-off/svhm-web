import createClient from "openapi-fetch";
import qs from "qs";
import type { paths } from "./strapi";

const client = createClient<paths>({
  baseUrl: `${import.meta.env.VITE_NEXT_PUBLIC_API_URL}/api`,
  headers: {
    Accept: "application/json",
  },
  querySerializer(params) {
    console.log("querySerializer", params, qs.stringify(params));
    return qs.stringify(params, {
      encodeValuesOnly: true, // prettify URL
    });
  },
});
export { client };
