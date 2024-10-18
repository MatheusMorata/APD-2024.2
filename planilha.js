// Captura e retorna todos os dados contidos na planilha
function capturarDados() {
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var aba = planilha.getActiveSheet();
    
    // Define o intervalo de colunas B e C começando da linha 2 até o final
    var dados = aba.getRange(2, 2, aba.getLastRow() - 1, 2).getValues();
    
    var lista = [];
    
    for (var i = 0; i < dados.length; i++) {
      // Se encontrar um campo vazio em qualquer coluna B ou C, interrompe o loop
      if (dados[i][0] === '' || dados[i][1] === '') {
        break;
      }
      
      // Adiciona os valores das colunas B e C na lista
      lista.push({
        colunaB: dados[i][0],
        colunaC: dados[i][1]
      });
    }
    
    return lista;
}
  