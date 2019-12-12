import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signUpRequest } from '~/store/modules/auth/actions'
import logo from '~/assets/logo.svg'
// import { Container } from './styles';

export default function SignUp() {
  const dispatch = useDispatch()
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'Digite uma senha com no mínimo 6 caracteres')
      .required('A senha é obrigatória')
  })

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password))
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="text" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho cadastro</Link>
      </Form>
    </>
  )
}
