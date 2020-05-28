import styled from 'styled-components'

/* component */
export const FooterContainer = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  border-top: 1px solid #faf2e8;
  max-width: 768px;
  left: 50%;
  transform: translateX(-50%);
`

export const FooterListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  grid-column-gap: 5px;
`

export const FooterItemWrapper = styled.li`
  font-size: .875em;
  display: grid;
  justify-items: center;
  & > a, & > div {
    justify-items: center;
    display: grid;
  }
`

export const NotificationIcon = styled.i`
  position: absolute;
  top: -4px;
  margin-left: 15px;
  background-color: #ffa883;
  border: 1px solid #ffa883;
  padding: 8px 6px 8px 4px;
  line-height: 0;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  font-size: .875em;
`

