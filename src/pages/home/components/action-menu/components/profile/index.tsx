import {FunctionComponent, ReactElement, useEffect, useState} from 'react'

import { ProfilePhoto } from './styles'
import {getMe} from "../../../../../../services/getMe";
import _ from 'lodash'

const Profile: FunctionComponent = (): ReactElement => {
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMe()

        setUser(data)
      } catch (error) {
        if (error) {
          window.localStorage.removeItem('token')
          window.localStorage.removeItem('user')
          window.location.replace('/')
        }
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {!_.isEmpty(user) ? (
        <>
          <ProfilePhoto>
            {user?.images[0].url ? <img alt={user.display_name} src={user?.images[0].url} /> : null}
          </ProfilePhoto>
          <p style={{ fontSize: '14px', marginLeft: '10px' }}>{user.display_name}</p>
        </>
      ) : null}
    </>
  )
}

export default Profile