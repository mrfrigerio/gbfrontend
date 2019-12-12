import React from 'react'
import { persistor } from '~/store'
import api from '~/services/api'

// import { Container } from './styles';

export default function Dashboard() {
  api.get('/appointments')
  function handleSubmit(event) {
    event.preventDefault()
    persistor.purge()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">purge</button>
      </form>
    </>
  )
}
