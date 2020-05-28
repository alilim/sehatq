import styled from 'styled-components'

export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-row-gap: 10px;
}
`

export const ItemWrapper = styled.li`
  background: #faf2e8;
  border-radius: 6px;
  border: 0;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 88px auto;
`

export const ImageWrapper = styled.div`
  width: 88px;
  height: 88px;
  overflow: hidden;
  background: #fff;
  display: grid;
  justify-content: center;
  align-content: center;
`

export const ItemDetailContainer = styled.article`
  padding: 10px 1em;
  & button {
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: .5em .75em;
  }
`

export const ItemDetailTitle = styled.div`
  font-size: 1em;
  font-weight: 500;
`

export const ItemDetailPrice = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  padding-top: 10px;
  color: #000;
`