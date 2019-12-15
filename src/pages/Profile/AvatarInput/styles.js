import styled from 'styled-components'

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    flex-direction: column;
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    &:hover {
      opacity: 0.7;
      &::before {
        content: 'Editar';
        box-sizing: border-box;
        display: block;
        width: 100%;
        font-size: 12px;
        text-align: center;
        padding: 5px;
        background: #eee;
        opacity: 0.7;
        color: #7159c1;
        position: absolute;
        bottom: 0px;
      }
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
    }

    input {
      display: none;
    }
  }
`
