import styled, { css } from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

export const Container = styled.div`
  position: relative;
`
export const Badge = styled.button`
  background: none;
  border: none;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0px;
        top: 0px;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`
export const NotificationList = styled.div`
  position: absolute;
  z-index: 10;
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 360px;
  left: calc(50% - 180px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 15px 5px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    width: 0;
    height: 0;
    top: -20px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.8);
  }
`
export const Notification = styled.div`
  color: #fff;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
    margin-left: 5px;
  }

  button {
    font-size: 12px;
    border: none;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.9);
    color: #7159c1;
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::before {
        content: '';
        align-self: flex-start;
        margin: 5px;
        padding: 3px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`
export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`
