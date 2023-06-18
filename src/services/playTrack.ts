import { apiUrl } from './index'

export const playTrack = async ({ trackUri, token }: any) => {
  return apiUrl.put(`me/player/play`, {
    context_uri: trackUri,
    offset: {
      uri: trackUri
    },
    position_ms: 0
  }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}
