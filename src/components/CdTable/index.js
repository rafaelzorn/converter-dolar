import React from 'react'

// Cd
import { Table, Td, Th } from './styles'

export function CdTable(props) {
  const { header, body } = props

  function renderHeader() {
    return (
      <thead>
        <tr>
          {header.map((title, index) => (
            <Th key={index}>{title}</Th>
          ))}
        </tr>
      </thead>
    )
  }

  function renderBody() {
    return (
      <tbody>
        {body.map((values, index) => (
          <tr key={index}>
            {values.map((value, index) => (
              <Td key={index}>{value}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }

  return (
    <Table>
      {renderHeader()}
      {renderBody()}
    </Table>
  )
}
