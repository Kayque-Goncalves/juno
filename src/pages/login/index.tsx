import {FunctionComponent, ReactElement, useEffect, useState} from 'react'
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
  ForgotPasswordContainer,
  ActionContainer
} from './styles'
import { AtEmail, LockOn } from '../../assets/icons'
import axios from 'axios'
import {useNavigate} from "react-router-dom";


const Login: FunctionComponent = (): ReactElement => {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleGoToSignupPage = (): void => {
    navigate('/signup')
  }

  const handleLoginUser = async (): Promise<void> => {
    try {
      if (userName && password) {
        const { data } = await axios.get('http://localhost:4000/users?userName=' + userName)

        if (data[0]?.password === password) {
          navigate('/home')
          localStorage.setItem('user', JSON.stringify(data[0]))
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const user = window.localStorage.getItem('user')

    user && window.location.replace('/home')
  }, [])

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
            <h2>Bem vindo de volta ao juno</h2>
            <h3>Entre na sua conta</h3>
          </GreetingsContent>
          <FormContent>
            <InputContainer>
              <Icon>
                <AtEmail />
              </Icon>
              <TextInput
                placeholder={'Seu usuário'}
                value={userName}
                onChange={(event: any) => setUserName(event.target.value)}
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
          </FormContent>
          <ForgotPasswordContainer>
            <span>Esqueceu a senha?</span>
          </ForgotPasswordContainer>

          <ActionContainer>
            <button onClick={handleLoginUser}>Login</button>
            {/*@ts-ignore*/}
            <span>Não tem uma conta? <a onClick={handleGoToSignupPage}>Crie agora.</a></span>
          </ActionContainer>
        </RightSectionWrapper>
      </RightSection>
    </Container>
  )
}

export default Login
