import React, { useState, useEffect, useMemo } from 'react'
import { parseISO, formatDistance } from 'date-fns'
import pt_BR from 'date-fns/locale/pt-BR'
import { MdNotifications } from 'react-icons/md'

import api from '~/services/api'

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from './styles'

export default function Notifications() {
  const [visible, setVisible] = useState(false)
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('/notifications')
      const data = response.data.map(n => ({
        ...n,
        timeDistance: formatDistance(parseISO(n.createdAt), new Date(), {
          addSuffix: true,
          locale: pt_BR
        })
      }))
      setNotifications(data)
    }
    loadNotifications()
  }, [])

  // useEffect(() => {
  //   window.addEventListener('click', e => {
  //     if (e.target.tagName !== 'path' && e.target.tagName !== 'svg') {
  //       setVisible(false)
  //     }
  //   })
  //   return () => {
  //     window.removeEventListener('click')
  //   }
  // }, [])

  const hasUnread = useMemo(() => !!notifications.find(n => !n.read), [
    notifications
  ])
  function handleToggleVisible() {
    setVisible(!visible)
  }

  async function handleMarkAsRead(id) {
    await api.put(`/notifications/${id}`)
    setNotifications(
      notifications.map(n => (n._id === id ? { ...n, read: true } : { ...n }))
    )
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(n => (
            <Notification key={n._id} unread={!n.read}>
              <p>
                {n.content}
                <time>{n.timeDistance}</time>
              </p>
              <button
                type="button"
                hidden={n.read}
                onClick={() => handleMarkAsRead(n._id)}>
                Marcar como lida
              </button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  )
}
