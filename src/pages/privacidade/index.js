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
} from '~/styles/pages/privacy-policy.js'

export default function Privacy() {
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
          <H1>Política de Privacidade</H1>

          <Text>
            A sua privacidade é importante para nós. É política do{' '}
            <b>Converter Dólar</b> respeitar a sua privacidade em relação a
            qualquer informação sua que possamos coletar no site{' '}
            <a href="https://converterdolar.com/">ConverterDolar.com</a>, e de
            outros sites que possuímos e operamos.
          </Text>

          <Text>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemos por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </Text>

          <Text>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </Text>

          <Text>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </Text>

          <Text>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </Text>

          <Text>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </Text>

          <Text>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contato conosco.
          </Text>

          <H2>Política de Cookies do Converter Dólar</H2>

          <H3>O que são cookies?</H3>

          <Text>
            Como é prática comum em quase todos os sites profissionais, este
            site usa cookies, que são pequenos arquivos baixados no seu
            computador, para melhorar sua experiência. Esta página descreve
            quais informações eles coletam, como as usamos e por que às vezes
            precisamos armazenar esses cookies. Também compartilharemos como
            você pode impedir que esses cookies sejam armazenados, no entanto,
            isso pode fazer o downgrade ou quebrar certos elementos da
            funcionalidade do site.
          </Text>

          <H3>Como usamos os cookies?</H3>

          <Text>
            Utilizamos cookies por vários motivos, detalhados abaixo.
            Infelizmente, na maioria dos casos, não existem opções padrão do
            setor para desativar os cookies sem desativar completamente a
            funcionalidade e os recursos que eles adicionam a este site. É
            recomendável que você deixe todos os cookies se não tiver certeza se
            precisa ou não deles, caso sejam usados para fornecer um serviço que
            você usa.
          </Text>

          <H3>Desativar cookies</H3>

          <Text>
            Você pode impedir a configuração de cookies ajustando as
            configurações do seu navegador (consulte a Ajuda do navegador para
            saber como fazer isso). Esteja ciente de que a desativação de
            cookies afetará a funcionalidade deste e de muitos outros sites que
            você visita. A desativação de cookies geralmente resultará na
            desativação de determinadas funcionalidades e recursos deste site.
            Portanto, é recomendável que você não desative os cookies.
          </Text>

          <H3>Cookies de terceiros</H3>

          <Text>
            Em alguns casos especiais, também usamos cookies fornecidos por
            terceiros confiáveis. A seção a seguir detalha quais cookies de
            terceiros você pode encontrar através deste site.
          </Text>

          <Ul>
            <Li>
              Este site usa o Google Analytics , que é uma das soluções de
              análise mais difundidas e confiáveis da Web, para nos ajudar a
              entender como você usa o site e como podemos melhorar sua
              experiência. Esses cookies podem rastrear itens como quanto tempo
              você gasta no site e as páginas visitadas, para que possamos
              continuar produzindo conteúdo atraente.
            </Li>
          </Ul>

          <Text>
            Para mais informações sobre cookies do Google Analytics, consulte a
            página oficial do Google Analytics.
          </Text>

          <Ul>
            <Li>
              As análises de terceiros são usadas para rastrear e medir o uso
              deste site, para que possamos continuar produzindo conteúdo
              atrativo. Esses cookies podem rastrear itens como o tempo que você
              passa no site ou as páginas visitadas, o que nos ajuda a entender
              como podemos melhorar o site para você.
            </Li>
            <Li>
              Periodicamente, testamos novos recursos e fazemos alterações sutis
              na maneira como o site se apresenta. Quando ainda estamos testando
              novos recursos, esses cookies podem ser usados para garantir que
              você receba uma experiência consistente enquanto estiver no site,
              enquanto entendemos quais otimizações os nossos usuários mais
              apreciam.
            </Li>
            <Li>
              O serviço Google AdSense que usamos para veicular publicidade usa
              um cookie DoubleClick para veicular anúncios mais relevantes em
              toda a Web e limitar o número de vezes que um determinado anúncio
              é exibido para você. Para mais informações sobre o Google AdSense,
              consulte as FAQs oficiais sobre privacidade do Google AdSense.
            </Li>
            <Li>
              Utilizamos anúncios para compensar os custos de funcionamento
              deste site e fornecer financiamento para futuros desenvolvimentos.
              Os cookies de publicidade comportamental usados por este site
              foram projetados para garantir que você forneça os anúncios mais
              relevantes sempre que possível, rastreando anonimamente seus
              interesses e apresentando coisas semelhantes que possam ser do seu
              interesse.
            </Li>
          </Ul>

          <H3>Compromisso do usuário</H3>

          <Text>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o <b>Converter Dólar</b> oferece no site e com
            caráter enunciativo, mas não limitativo:
          </Text>

          <Ul>
            <Li>
              A) Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé e à ordem pública;
            </Li>
            <Li>
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, ou sobre cassinos, apostas online, jogos de sorte e
              azar, qualquer tipo de pornografia ilegal, de apologia ao
              terrorismo ou contra os direitos humanos;
            </Li>
            <Li>
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do <b>Converter Dólar</b>, de seus fornecedores ou
              terceiros, para introduzir ou disseminar vírus informáticos ou
              quaisquer outros sistemas de hardware ou software que sejam
              capazes de causar danos anteriormente mencionados.
            </Li>
          </Ul>

          <H3>Mais informações</H3>

          <Text>
            Esperemos que esteja esclarecido e como mencionado anteriormente, se
            houver algo que você não tem certeza se precisa ou não, geralmente é
            mais seguro deixar os cookies ativados, caso interaja com um dos
            recursos que você usa em nosso site.
          </Text>

          <Text>
            Esta política é efetiva a partir de <b>Dezembro/2020</b>.
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
