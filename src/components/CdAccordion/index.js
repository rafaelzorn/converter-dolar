import React, { useState } from 'react'
// Cd
import { Container, Header, Content, Title } from './styles'

export function CdAccordion(props) {
  const { items } = props

  const [active, setActive] = useState(false)

  function open({ index }) {
    setActive(index === active ? false : index)
  }

  function renderContent({ content }) {
    return {
      __html: content
    }
  }

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index}>
          <Header
            onClick={() => open({ index })}
            border={items.length - 1 === index ? 0 : 2}
          >
            <Title>{item.title}</Title>
          </Header>
          <Content
            display={active === index ? 'block' : 'none'}
            dangerouslySetInnerHTML={renderContent({ content: item.content })}
          />
        </div>
      ))}
    </Container>
  )
}
