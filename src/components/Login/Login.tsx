import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import { useHistory } from 'react-router-dom'
import { isAuthenticated } from 'libs/auth'
import { Content, LoginWrapper, Overlay } from './Login.style'
import backgroundImage from '../../assets/surfer.jpg'
import Logo from 'components/Logo/Logo'
import { colors } from '../../styles/colors'

const Login: React.FC = () => {
  const history = useHistory()

  if (isAuthenticated()) history.push('/')
  return (
    <LoginWrapper backgroundImage={backgroundImage}>
      <Overlay />
      <Content>
        <Logo textColor={colors.white} size="large" />
        <LoginForm />
      </Content>
    </LoginWrapper>
  )
}

export default Login