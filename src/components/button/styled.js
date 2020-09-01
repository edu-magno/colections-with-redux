import styled from 'styled-components'

const StyledButton = styled.button`
  margin: 0.625rem;
  padding: 0.625rem;
  font-family: Red Hat Display;
  font-weight: 700;
  font-size: 20px;
  background-color: #ff6647;
  color: #f5f5f5;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;

  &:hover {
    background-color: #913421;
  }

  &:active {
    background-color: #ff6647;
    color: #913421;
  }
`

export default StyledButton