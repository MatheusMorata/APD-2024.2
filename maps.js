/* Usa a API do google maps para verificar se um bairro
pertence ao Rio de Janeiro - RJ */ 
function bairroExiste(bairro) {
    var tam_bairro = bairro.length;
    var busca = bairro+', Rio de Janeiro , RJ';
    var response = Maps.newGeocoder().geocode(busca);
    var endereco = response.results[0].formatted_address;
  
  
    if(bairro === endereco.substring(0, tam_bairro)){
      return true
    }else{
      return false
    }
  
  }