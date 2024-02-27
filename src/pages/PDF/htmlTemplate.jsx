
const htmlTemplate = (
  name,
  phone,
  email,
  gender,
  cpf,
  birth,
  road,
  neighborhood,
  city,
  area,
  cultivation,
  problem,
  notification,
  goal,
  diagnosis,
  pest,
  product,
  observations,
  planting,
  status,
  date,
  arrival,
  exit
) => {
  return `
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <style>
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: linear-gradient(184deg, rgba(95,191,62,1) 0%, rgba(151,210,131,1) 100%);
    width: 100%;
    max-height: 100px;
    min-height: 100px;
    justify-content: space-around;
  }
  
  .titulo {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 4px;
    margin-top: 25px;
    font-family: arial;
  }
  
  .image {
    width: 55px;
    height: 55px;
    border-radius: 27.5px;
    margin-top: 25px;
    margin-right: 15px;
  }

  .signUpClient {
    align-items: center;
  }
  
  .textSignUpClient {
    font-size: 21px;
    font-weight: bold;
    margin-top: 40px;
    color: #696969;
    margin-bottom: 40px;
    font-family: arial;
  }
  
  .input {
    font-size: 16px;
    margin: 20px;
    padding: 13px;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 0;
    width: 180px;
    border:0;
  }

  .flexColuna {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .label {
    font-size: 16px;
    margin-bottom: 5px;
    margin-left: 20px;
    color: #000;
    font-weight: bold;
    font-family: arial;
  }

  .dropdown {
    font-size: 16px;
    margin: 20px;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 0;
  }

  .footer {
    align-items: center;
    font-size: 12px;
    margin-top: 50px;
  }
  </style>

  <body>
<div>
  <div class="header">
    <div>
      <p class="titulo">Exo Agro</p>
    </div>
    <div>
      <img class="image" src="../../img/boi.png"/>
    </div>
  </div>

  <div class="signUpClient">
    <p class="textSignUpClient">Relatório de Visita</p>
  </div>

  <div class="flexColuna">
    <div>
      <p class="label">Nome</p>
      <input class="input" type="text" value="${name}" />
    </div>

    <div>
      <p class="label">Telefone</p>
      <input class="input" type="text" value="${phone}" />
    </div>
  </div>

  <div class="flexColuna">
  <div>
    <p class="label">E-mail</p>
    <input class="input" type="email" value="${email}" />
  </div>

  <div>
    <p class="label">Gênero</p>
      <input class="input" type="gender" value="${gender}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">CPF</p>
    <input class="input" type="text" value="${cpf}" />
  </div>
  <div>
    <p class="label">Data de nascimento</p>
    <input class="input" type="date" value="${birth}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Endereço</p>
    <input class="input" type="text" value="${road}" />
  </div>
  <div>
    <p class="label">Bairro</p>
    <input class="input" type="text" value="${neighborhood}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Cidade</p>
    <input class="input" type="text" value="${city}" />
  </div>
  <div>
    <p class="label">Área</p>
    <input class="input" type="number" value="${area}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Cultivo</p>
    <input class="input" type="text" value="${cultivation}" />
  </div>
  <div>
    <p class="label">Problema</p>
    <input class="input" type="text" value="${problem}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Notificação</p>
    <input class="input" type="notification" value="${notification}" />          
  </div>

  <div>
    <p class="label">Objetivo da visita</p>
    <input class="input" type="text" value="${goal}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Diagnóstico</p>
    <input class="input" type="text" value="${diagnosis}" />
  </div>
  <div>
    <p class="label">Praga</p>
    <input class="input" type="text" value="${pest}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Produto</p>
    <input class="input" type="text" value="${product}" />
  </div>
  <div>
    <p class="label">Observações</p>
    <input class="input" type="text" value="${observations}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Plantio</p>
    <input class="input" type="text" value="${planting}" />
  </div>
  <div>
    <p class="label">Status</p>
    <input class="input" type="text" value="${status}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Data da visita</p>
    <input class="input" type="date" value="${date}" />
  </div>
  <div>
    <p class="label">Horário de chegada</p>
    <input class="input" type="time" value="${arrival}" />
  </div>
</div>

<div class="flexColuna">
  <div>
    <p class="label">Horário de saída</p>
    <input class="input" type="time" value="${exit}" />
  </div>
</div>

<div class="footer"><p>ExoAgro&copy todos os direitos reservados</p></div>

</div>
  </body>
</html>
  `;
};

export default htmlTemplate;
