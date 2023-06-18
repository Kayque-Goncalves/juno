import {FunctionComponent, ReactElement, useState} from 'react'
import {
  Container,
  LeftSection,
  LogoContainer,
  Logo,
  RightSection,
  RightSectionWrapper,
  GreetingsContent,
  FormContent,
  InputContainer,
  TextInput,
  Icon,
  ActionContainer
} from './styles'
import { AtEmail, LockOn } from '../../assets/icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login: FunctionComponent = (): ReactElement => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleCreateAccount = async (): Promise<void> => {
    try {
      if (password === confirmPassword) {
        const { data } = await axios.post('http://localhost:4000/users', {
          userName: user,
          password: password
        })

        if (data) {
          navigate('/home')
          localStorage.setItem('user', JSON.stringify(data))
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <LeftSection>
        <LogoContainer>
          <h1>Juno</h1>
          <Logo />
        </LogoContainer>
      </LeftSection>
      <RightSection>
        <RightSectionWrapper>
          <GreetingsContent>
            <h2>Crie a sua conta</h2>
            <h3>Crie a sua conta informando um nome de usuário e a sua senha</h3>
          </GreetingsContent>
          <FormContent>
            <InputContainer>
              <Icon>
                <AtEmail />
              </Icon>
              <TextInput
                placeholder={'Seu usuário'}
                value={user}
                onChange={(event: any) => setUser(event.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Icon>
                <LockOn />
              </Icon>
              <TextInput
                placeholder={'Sua senha'}
                type={'password'}
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Icon>
                <LockOn />
              </Icon>
              <TextInput
                placeholder={'Confirme sua senha'}
                type={'password'}
                value={confirmPassword}
                onChange={(event: any) => setConfirmPassword(event.target.value)}
              />
            </InputContainer>
          </FormContent>

          <ActionContainer>
            <button onClick={handleCreateAccount}>Criar conta</button>
          </ActionContainer>
        </RightSectionWrapper>
      </RightSection>
    </Container>
  )
}

export default Login
