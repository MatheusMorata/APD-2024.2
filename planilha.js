// Captura e retorna todos os dados contidos na planilha
function capturarDados() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getActiveSheet();
  
  // Define o intervalo de colunas B e C começando da linha 2 até o final
  var dados = aba.getRange(2, 2, aba.getLastRow() - 1, 2).getValues();
  
  const json = dados.map(elemento => ({
    email: elemento[0],
    bairro: elemento[1]
  }));

  return json;
}

// Exclui uma linha da planilha
function excluirLinha(numLinha){
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const aba = planilha.getSheets()[0];

  aba.deleteRow(numLinha);
}

