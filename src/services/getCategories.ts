import { auth, apiUrl } from './index'

export const getCategories = async () => {
  const token = await auth()

  const response =  await apiUrl.get(`browse/categories?country=BR&locale=pt_BR&limit=6&offset=8`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return { data: response.data, status: response.status }
}