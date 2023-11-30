import React, { useState } from "react";
import styles from "./style";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Header2 from "../../components/Header2";
import { CheckBox } from "react-native-elements";

export default function PoliticaPrivacidade() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Header2 />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.name}>Política de Privacidade</Text>
          <Text style={styles.text}>
            Nesta Política de Privacidade, vamos explicar aos nossos visitantes
            e usuários, todas as formas e meios que protegemos e tratamos os
            dados coletados em nossa plataforma. Nós levamos extremamente a
            sério a proteção dos dados pessoais coletados e armazenados, e neste
            documento, vamos te explicar detalhadamente como e porque fazemos
            esta coleta, e como você pode pedir para retirar, alterar ou excluir
            seus dados de nossos servidores. Em caso de dúvidas de quaisquer
            tipos, você pode entrar em contato diretamente com nossa equipe pela
            aba de contato. Este documento foi criado pelo Advogado Diego Castro
            (OAB/PI 15.613), e adaptado para utilização neste website.
          </Text>

          <Text style={styles.text}>
            1 – Sobre a Origem dos seus dados Pessoais Nosso site pode coletar
            alguns dados pessoais seus para diferentes objetivos. Para
            coletarmos estes dados, usamos as seguintes tecnologias: Website:
            Dentro do nosso site você poderá preencher formulários, enviar
            comentários e dúvidas, entrar em contato com nossa equipe ou se
            cadastrar na nossa plataforma, e seus dados serão salvos para
            posterior atendimento. Mensagens e comunicações: Quando você se
            comunica com nossa equipe, seja pelo Whatsapp, por SMS, por E-mail
            ou quaisquer outros tipos de chat, alguns dados podem ficar salvos
            para futura conferência e facilitar a comunicação com nossos
            clientes e usuários. De Modo Offline: Alguns dados podem ser
            coletados offline, como, por exemplo, em eventos e organizações,
            onde podemos coletar seu e-mail ou outros dados, para manter
            comunicação e informações necessárias que você precisa ter
            conhecimento. Dados de Terceiros: Algumas vezes, terceiros podem
            enviar para nossa empresa alguns dados seus, como, por exemplo,
            dados recebidos por mídias sociais (Como Facebook, instagram, Tiktok
            ou outras redes sociais), do governo ou intermediadoras de
            pagamentos.
          </Text>

          <Text style={styles.text}>
            2 – Como e porque coletamos seus dados: É importante que você, nosso
            usuário ou visitante, saiba como e quais dados pessoais coletamos e
            utilizamos quando você visita nosso site. Destacamos que sempre
            tentamos coletar o mínimo de dados possíveis para sua maior
            segurança, porém, alguns dados são essenciais para podermos entregar
            o melhor serviço possível e até para o funcionamento do site,
            conforme descrevemos abaixo: Marketing: Quando você preenche
            formulários e se cadastra no site, você poderá receber e-mails com
            promoções e novidades do site. Podemos coletar nome, e-mail e
            telefone. Navegação ao Site: quando você navega pelo nosso site,
            coletamos automaticamente dados como o seu endereço IP, tipo de
            navegador, páginas acessadas, tempo gasto em cada página e outras
            informações. Informações de contato: quando você entra em contato
            conosco, seja por e-mail, telefone ou chat, coletamos as suas
            informações de contato, como o seu nome, e-mail, número de telefone
            e a mensagem que você nos enviou. Informações de uso dos serviços:
            quando você usa os nossos serviços, coletamos dados sobre as suas
            atividades, como as pesquisas que você realiza, os vídeos que você
            assiste, as páginas que você visita e as compras que você faz e
            quando você compartilha conosco fotos, comentários, sugestões,
            perguntas, respostas, informações, textos, arquivos, gráficos,
            vídeos ou outros materiais, coletamos as informações que você nos
            enviar. Informações de localização: quando você usa os nossos
            serviços, coletamos dados de localização precisos para fornecer os
            serviços que você solicitou. Por exemplo, quando você solicita um
            serviço de entrega, coletamos seu endereço para enviar a entrega
            para o local certo.
          </Text>

          <Text style={styles.text}>
            3 – Sobre o uso de Cookies Usamos cookies no nosso website e
            aplicativos para melhorar a sua experiência de navegação no nosso
            website. Um cookie é um pequeno arquivo de texto que um site
            armazena no seu computador ou dispositivo móvel quando você visita o
            site. Os cookies nos permitem reconhecer o seu navegador e
            fornecer-lhe a melhor experiência ao navegar no nosso site. Além
            disso, os cookies nos ajudam a compreender quais seções do site são
            mais interessantes para você e quais conteúdos podem ser
            recomendados para você, site com o google, bing ou
            https://gpabrasil.com.br/, utilizam cookies, e ao visitar cada um,
            você deve verificar a politica referente a eles. Você pode a
            qualquer momento bloquear os cookies no seu navegador, ou limpar o
            cache para retirar os mesmos. É importante destacar que tentamos
            minimizar o uso de cookies não essenciais, mas utilizamos os
            necessários para entregar um melhor serviço, conforme a previsão de
            legítimo interesse na LGPD. Você pode a qualquer momento desativar
            os mesmos em seu navegador.
          </Text>

          <Text style={styles.text}>
            4 – Com quem compartilhamos os seus dados pessoais: Prestadores de
            Serviços: compartilhamos os seus dados pessoais com os nossos
            prestadores de serviços, que prestam serviços de marketing, análise
            de dados, pagamentos, envio de e-mails e outros serviços para nós.
            Esses prestadores de serviços só podem usar os seus dados pessoais
            para realizar esses serviços para nós e conforme as nossas
            instruções. Anunciantes e Parceiros Comerciais: também é possível
            que compartilhemos os seus dados pessoais com empresas que realizem
            anuncio, ou parceiros comerciais. No entanto, só compartilhamos os
            seus dados pessoais conforme as suas instruções. Comunidades Online:
            quando você se junta a uma das nossas comunidades online, os seus
            dados pessoais podem ser vistos por outros membros dessa comunidade.
            Investidores: podemos compartilhar os seus dados pessoais com os
            nossos investidores. No entanto, só compartilhamos os seus dados
            pessoais conforme as suas instruções. Filiais e Subsidiárias:
            podemos compartilhar os seus dados pessoais com as nossas filiais e
            subsidiárias. No entanto, só compartilhamos os seus dados pessoais
            conforme as suas instruções. Autoridades Governamentais e outras
            Partes: às vezes, podemos ser obrigados judicialmente a liberar ou
            divulgar os seus dados às autoridades governamentais, ou outras
            partes, conforme exigido por lei. Ou por outros motivos, como: (i)
            Cumprir uma obrigação legal; (ii) Proteger os direitos, a
            propriedade ou a segurança da Página; (iii) Evitar um dano real ou
            potencial aos bens, ou à segurança das pessoas; (iv) De outra forma,
            conforme permitido por lei.
          </Text>

          <Text style={styles.text}>
            5- Sobre seus Direitos em relação aos Dados coletados O presente
            texto tem por objetivo esclarecer os nossos leitores e visitantes
            sobre quais são os seus direitos em relação aos dados pessoais. De
            acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD), toda
            pessoa tem o direito à informação, à transparência, à liberdade e à
            autonomia na tomada de decisões. Com relação aos dados pessoais, a
            pessoa tem o direito ao acesso, à correção, à eliminação, à
            portabilidade, à limitação do tratamento e à oposição. A pessoa
            também tem o direito de negas a qualquer momento que seus dados
            pessoais sejam utilizados para fins de marketing e ao recebimento de
            comunicações comerciais. Para exercer os seus direitos, basta entrar
            em contato com a nossa equipe. Esclarecemos que os dados pessoais
            são tratados de forma confidencial e que tomamos todas e quaisquer
            medidas de segurança necessárias para garantir a proteção dos dados.
          </Text>

          <Text style={styles.text}>
            6 – Sobre a segurança que aplicamos no tratamento dos seus dados A
            segurança é um dos pilares fundamentais da nossa política de
            privacidade. Todos os dados pessoais que você fornecer ao site serão
            tratados com total confidencialidade e segurança, de acordo com as
            normas legais aplicáveis. Para garantir a proteção dos seus dados
            pessoais, o site utiliza diversas medidas de segurança, como por
            exemplo: Criptografia SSL (Secure Socket Layer); Firewalls; Sistemas
            de detecção de invasões; Monitoramento constante das redes; Uso de
            senhas seguras; Verificação periódica da segurança dos sistemas.
            Todas as informações pessoais são armazenadas em servidores seguros,
            protegidos contra acessos não autorizados, utilizando os mais
            modernos e avançados sistemas de segurança. Nossa equipe de
            segurança está constantemente monitorando os sistemas e atualizando
            as medidas de proteção, para garantir que seus dados estejam sempre
            seguros. Caso você tenha alguma dúvida ou preocupação em relação à
            segurança dos seus dados pessoais, entre em contato conosco.
          </Text>

          <Text style={styles.text}>
            7 – Pedido de modificação, remoção ou alteração Entendemos que você
            possa, eventualmente, querer modificar, remover ou alterar seus
            dados pessoais. Se você deseja fazer uma alteração, uma remoção ou
            uma modificação, entre em contato conosco e nós faremos o possível
            para atender à sua solicitação. No entanto, tenha em mente que, em
            alguns casos, pode não ser possível atender à sua solicitação,
            especialmente se for necessária para cumprir nossas obrigações
            legais ou contratuais. Além disso, lembre-se de que, se você
            solicitar a remoção de seus dados pessoais do nossos banco de dados,
            isso pode afetar o uso de nosso site e serviços. Se você não puder
            fazer uma alteração ou uma modificação, ou se desejar excluir seus
            dados pessoais, entre em contato conosco para podermos discutir
            outras opções, clicando na aba contato.
          </Text>

          <CheckBox
            title="Concordo com os termos acima."
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
          />

          <View style={styles.flexButtons}>
            <TouchableOpacity style={[styles.button, styles.buttonColorCancel]}>
              <Text style={styles.buttonText}>Cancelar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonColorSave]}>
              <Text style={styles.buttonText}>Salvar </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
