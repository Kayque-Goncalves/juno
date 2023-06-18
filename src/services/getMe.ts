import { auth, apiUrl } from "./index";

export const getMe = async () => {
  return await apiUrl.get(`me`, {
    headers: {
      'Authorization': `Bearer ${await auth()}`
    }
  })
}