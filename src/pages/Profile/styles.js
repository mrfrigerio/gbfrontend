import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 10px;

  form {
    width: 100%;
    max-width: 600px;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      font-size: 14px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #ffbaba;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      border: none;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      width: calc(50% - 1px);
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    button + button {
      width: calc(50% - 1px);
      background: #f64c75;

      &:hover {
        background: ${darken(0.06, '#f64c75')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      align-self: center;
      font-size: 12px;

      &:hover {
        opacity: 1;
      }
    }
  }
`
