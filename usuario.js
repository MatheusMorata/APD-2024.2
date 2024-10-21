/* Envia um e-mail notificando o usuário, sobre a exclusão do cadastrado,
devido ao bairro não pertencer ao Rio de Janeiro - RJ */
function bairroNaoExiste(email, numLinha){
    const assunto = 'Bairro inexistente';
    const mensagem = 'Seu cadastro foi excluído, o bairro cadastrado não pertence ao Rio de Janeiro - RJ ';
  
  
    MailApp.sendEmail(email, assunto, mensagem);
    excluirLinha(numLinha);
  }
  
  
  function notifica(){
    var dados = capturarDados();
    let i = 2;
    let email, bairro;
  
    dados.forEach(elemento => {
      console.log(i);
      email = elemento.email;
      bairro = elemento.bairro;
      
      if(bairroExiste(bairro) === false){
        bairroNaoExiste(email, i);
      }
  
      i = i + 1;
    });
  
  }