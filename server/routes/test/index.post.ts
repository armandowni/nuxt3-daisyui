import { useApi } from "../../serverHandlerApi";

export default defineEventHandler(async (event) => {
  const env = useRuntimeConfig();
  const api = useApi(env.API_URL + env.API_PATHNAME);
  const body = await readBody(event);

  try {
    const data = await api.post("/test", body);
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});
