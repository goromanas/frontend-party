import React from 'react'
import BaseContainer from './BaseContainer'
import { useSelector } from 'react-redux'
import Login from 'components/Login/Login'

const LoginContainer: React.FC = () => {
  const loading = useSelector(s => s.auth.loading)
  const content = <Login />
  return <BaseContainer content={content} loading={loading} />
}
export default LoginContainer
