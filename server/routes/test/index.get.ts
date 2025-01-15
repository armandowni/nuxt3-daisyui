import { useApi } from "../../serverHandlerApi";

export default defineEventHandler(async () => {
  const env = useRuntimeConfig();
  const api = useApi(env.API_URL + env.API_PATHNAME);

  try {
    const data = await api.get("/test");
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});
