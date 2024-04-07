Feature: Teste Automatizado EcoVet

  Background:Navega para a tela de login da aplicacao EcoVet
    Given faz login na aplicacao EcoVet

   Scenario:01 acessa a aplicacao EcoVet
    When acessa a aplicacao de monitoramento
    And clique no botão Novo Ponto de Medição
    And preencha todos os campos
    And clique em Salvar Ponto de Medição
    Then o registro deve ser salvo

  