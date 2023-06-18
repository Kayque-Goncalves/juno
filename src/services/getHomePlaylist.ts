import { auth, apiUrl } from './index'

export const getHomePlaylist = async () => {
  const response = await apiUrl.get(`playlists/37i9dQZEVXbMDoHDwVN2tF`, {
    headers: {
      'Authorization': `Bearer ${await auth()}`
    }
  })

  return { data: response.data, status: response.status }
}
