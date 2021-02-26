import React from 'react'

// Cd
import { Money } from '~/utils'
import { Section, Title, ContainerAccordions } from './styles'
import { CdAccordion } from '~/components'
import { CdTableDollarValues, CdTableDollarExchangeRate } from './components'

export function CdInfo(props) {
  const { currency, items } = props
  const currentValue = Money.formatMoney({ value: currency.ask })

  const accordionItems = [
    {
      title: 'Valor do Dólar Hoje',
      content: `
        <p>
          A cotação do dolar hoje está R$ ${currentValue}. Cotação do dólar comercial americano atualizada sempre para
          que você fique informado sobre o dólar e tome as melhores decisões.
        </p>
      `
    },
    {
      title: 'Sobre o dólar',
      content: `
        <p>
          O dólar dos Estados Unidos (US Dollar, USD, US$) é a moeda emitida pelos Estados Unidos através da Reserva Federal dos Estados Unidos.
        </p>
        <p>
          Ele também é a moeda oficial do Timor-Leste, Equador, El Salvador, Panamá e Porto Rico. Também é usado não-oficialmente
          nas Ilhas Virgens Britânicas, Ilhas Marshall, Estados Federados da Micronésia, Palau, Turks e Cacos e Zimbabwe.
        </p>
        <p>
          Ele possui moedas de 1, 5, 10, 25, 50 cents e 1 dólar. As notas que circulam hoje são de 1, 5, 10, 20, 50 e 100 dólares.
        </p>
      `
    },
    {
      title: 'Como a cotação do dólar hoje é influenciada?',
      content: `
        <p>
          A cotação do dólar hoje é um reflexo da economia dos principais países do mundo e também é influenciada pela situação de cada
          país. A economia de grandes países como a China influenciam na cotação do dólar, reservas internacionais de dólar americano mantidas
          pelo Banco Central, as operações do Banco Central para lidar com a alta ou baixa da moeda americana, notícias sobre a economia e política
          americanas e contratos de importação e exportação.
        </p>
      `
    },
    {
      title:
        'Como o dólar pode influenciar suas viagens e compras de produtos importados?',
      content: `
        <p>
          O preço do dólar é procurado principalmente por pessoas que estão planejando uma viagem de turismo ou negócios,
          que querem comprar produtos importados (como roupas, smartphones Android, iPhones, iPads), trabalham com exportação
          para o exterior e investidores.
        </p>
        <p>
          Pequenas alterações no dólar podem tornar preços de produtos mais caros ou baratos tanto em lojas físicas como online. Essas alterações
          também podem influenciar no orçamento de viagens principalmente aos Estados Unidos.
        </p>
        <p>
          Se estiver interessado em comprar produtos ou viajar, adquira o hábito de acessar sempre o ConverterDolar.compara estar sempre bem
          informado sobre o preço do dólar do dia.
        </p>
      `
    }
  ]

  return (
    <Section>
      <Title>Informações</Title>

      <ContainerAccordions>
        <CdAccordion items={accordionItems} />
      </ContainerAccordions>

      <CdTableDollarValues currency={currency} />
      <CdTableDollarExchangeRate items={items} />
    </Section>
  )
}
