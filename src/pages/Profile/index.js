import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import { Container } from './styles'
import { updateProfileRequest } from '~/store/modules/user/actions'
import { signOut } from '~/store/modules/auth/actions'
import AvatarInput from './AvatarInput'

export default function Profile() {
  const { profile } = useSelector(state => state.user)
  const dispatch = useDispatch()

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }
  function handleLogout() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereco de email" />

        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <div className="buttons">
          <button type="submit">Atualizar perfil</button>
          <button type="button" onClick={handleLogout}>
            Sair do GoBarber
          </button>
        </div>
      </Form>
    </Container>
  )
}
