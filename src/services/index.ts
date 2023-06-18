import axios from "axios";
import { Buffer } from "buffer";

const clientId: string = 'd93203dab933473f85121f9ffa16ace8'
const clientSecret: string = 'dec43740c736452a82bc1042dc597161'
const authToken: string = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64')
const authApiUrl: string = 'https://accounts.spotify.com/api/'
const authEndpoint: string = 'https://accounts.spotify.com/authorize?'
const redirectUri: string = 'http://localhost:3000/home'
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-follow-read",
];
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const apiUrl = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
})

export const setClientToken = (token: any) => {
  // @ts-ignore
  apiUrl.interceptors.request.use(async function (config: any){
    config.headers.Authorization = 'Bearer ' + token

    return config
  })

  // @ts-ignore
  apiUrl.interceptors.response.use((response: any) => {
    return response
  })
}

export const auth = async () => {
  const data = 'grant_type=client_credentials'

  const response = await axios.post(`${authApiUrl}token`, data, {
    headers: {
      'Authorization': `Basic ${authToken}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  return response.data.access_token
}