import React from 'react'
import Head from 'next/head'

// Cd
import {
  CdHeader,
  CdBoxCurrentDate,
  CdFooter,
  CdCookiesBanner
} from '~/components'
import {
  Section,
  Container,
  H1,
  Text,
  H2,
  H3,
  Ul,
  Li
} from '~/styles/pages/terms-of-use.js'

export default function Terms() {
  function renderHead() {
    return (
      <Head>
        <title>Política de Privacidade - Converter Dólar</title>

        <link rel="canonical" href="https://converterdolar.com/privacidade" />
      </Head>
    )
  }

  function renderContent() {
    return (
      <Section>
        <Container>
          <H1>Termos de uso</H1>

          <H2>1. Termos</H2>

          <Text>
            Ao acessar o site{' '}
            <a href="https://converterdolar.com/">ConverterDolar.com</a>,
            concorda em cumprir estes termos de serviço, todas as leis e
            regulamentos aplicáveis e concorda que é responsável pelo
            cumprimento de todas as leis locais aplicáveis. Se você não
            concordar com algum desses termos, está proibido de usar ou acessar
            este site. Os materiais contidos neste site são protegidos pelas
            leis de direitos autorais e marcas comerciais aplicáveis.
          </Text>

          <H2>2. Uso de Licença</H2>

          <Text>
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site <b>Converter Dólar</b>,
            apenas para visualização transitória pessoal e não comercial. Esta é
            a concessão de uma licença, não uma transferência de título e, sob
            esta licença, você não pode:
          </Text>

          <Ul>
            <Li>
              <b>1</b>. Modificar ou copiar os materiais;
            </Li>
            <Li>
              <b>2</b>. Usar os materiais para qualquer finalidade comercial ou
              para exibição pública (comercial ou não comercial);
            </Li>
            <Li>
              <b>3</b>. Tentar descompilar ou fazer engenharia reversa de
              qualquer software contido no site <b>Converter Dólar</b>;
            </Li>
            <Li>
              <b>4</b>. Remover quaisquer direitos autorais ou outras notações
              de propriedade dos materiais; ou
            </Li>
            <Li>
              <b>5</b>. Transferir os materiais para outra pessoa ou espelhar os
              materiais em qualquer outro servidor.
            </Li>
          </Ul>

          <Text>
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por <b>Converter Dólar</b>{' '}
            a qualquer momento. Ao encerrar a visualização desses materiais ou
            após o término desta licença, você deve apagar todos os materiais
            baixados em sua posse, seja em formato eletrónico ou impresso.
          </Text>

          <H2>3. Isenção de Responsabilidade</H2>

          <Ul>
            <Li>
              <b>1</b>. Os materiais no site do <b>Converter Dólar</b> são
              fornecidos como estão. <b>Converter Dólar</b> não oferece
              garantias, expressas ou implícitas, e, por este meio, isenta e
              nega todas as outras garantias, incluindo, sem limitação,
              garantias implícitas ou condições de comercialização, adequação a
              um fim específico ou não violação de propriedade intelectual ou
              outra violação de direitos.
            </Li>
            <Li>
              <b>2</b>. Além disso, o <b>Converter Dólar</b> não garante ou faz
              qualquer representação relativa à precisão, aos resultados
              prováveis ou à confiabilidade do uso dos materiais em seu site ou
              de outra forma relacionado a esses materiais ou em sites
              vinculados a este site.
            </Li>
          </Ul>

          <H2>4. Limitações</H2>

          <Text>
            Em nenhum caso o <b>Converter Dólar</b> ou seus fornecedores serão
            responsáveis por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais em
            <b>Converter Dólar</b>, mesmo que <b>Converter Dólar</b> ou um
            representante autorizado do <b>Converter Dólar</b> tenha sido
            notificado oralmente ou por escrito da possibilidade de tais danos.
            Como algumas jurisdições não permitem limitações em garantias
            implícitas, ou limitações de responsabilidade por danos consequentes
            ou incidentais, essas limitações podem não se aplicar a você.
          </Text>

          <H2>5. Precisão dos Materiais</H2>

          <Text>
            Os materiais exibidos no site do <b>Converter Dólar</b> podem
            incluir erros técnicos, tipográficos ou fotográficos.{' '}
            <b>Converter Dólar</b> não garante que qualquer material em seu site
            seja preciso, completo ou atual.
            <b>Converter Dólar</b> pode fazer alterações nos materiais contidos
            em seu site a qualquer momento, sem aviso prévio. No entanto,{' '}
            <b>Converter Dólar</b> não se compromete a atualizar os materiais.
          </Text>

          <H2>6. Links</H2>

          <Text>
            O <b>Converter Dólar</b> não analisou todos os sites vinculados ao
            seu site e não é responsável pelo conteúdo de nenhum site vinculado.
            A inclusão de qualquer link não implica endosso por{' '}
            <b>Converter Dólar</b> do site. O uso de qualquer site vinculado é
            por conta e risco do usuário.
          </Text>

          <H3>Modificações</H3>

          <Text>
            O <b>Converter Dólar</b> pode revisar estes termos de serviço do
            site a qualquer momento, sem aviso prévio. Ao usar este site, você
            concorda em ficar vinculado à versão atual desses termos de serviço.
          </Text>

          <H3>Lei aplicável</H3>

          <Text>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do <b>Converter Dólar</b> e você se submete irrevogavelmente
            à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </Text>
        </Container>
      </Section>
    )
  }

  return (
    <>
      {renderHead()}

      <CdHeader />
      <CdBoxCurrentDate />

      {renderContent()}

      <CdFooter />
      <CdCookiesBanner />
    </>
  )
}
