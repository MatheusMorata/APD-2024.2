// Realiza uma requisição na API fogo cruzado, com os parâmetros url, método HTTP e o payload
function req(url, metodo, payload = '') {

  var opcoes = {
    'method': metodo,
    'contentType': 'application/json'
  };

  // Caso, a requisição tenha payload, ele adiciona a lista de opções 
  if (payload !== '') {
    opcoes.payload = JSON.stringify(payload);
  }

  try {
    var response = UrlFetchApp.fetch(url, opcoes);
    var respostaTexto = response.getContentText();
    var respostaJSON = JSON.parse(respostaTexto);
    return respostaJSON;
  } catch (e) {
    console.log('Erro: ' + e.message);
  }
}

// Busca o token usado para fazer as requisições
function buscarToken(){

  var url = 'https://api-service.fogocruzado.org.br/api/v2/auth/login';
  var metodo = 'post';
  var payload = {
    'email': 'eumatheus09@gmail.com',
    'password': 'M@theus2508'
  };
  var resposta = req(url, metodo, payload);
  return resposta.data.accessToken;
}

// Renova o token quando o tempo expirar
function renovarToken(){

  var token = buscarToken(); 
  var url = 'https://api-service.fogocruzado.org.br/api/v2/auth/refresh';
  var metodo = 'post';
  var payload = {
    'email': 'eumatheus09@gmail.com',
    'senha': 'M@theus2508',
    'accessToken': token
  };

  req(url, metodo, payload);
}

function ocorrencias(){
  var url = 'https://api-service.fogocruzado.org.br/api/v2/occurrences?initialdate=2023-01-01&finaldate=2023-07-13&idState=b112ffbe-17b3-4ad0-8f2a-2038745d1d14&typeOccurrence=withVictim';
}
