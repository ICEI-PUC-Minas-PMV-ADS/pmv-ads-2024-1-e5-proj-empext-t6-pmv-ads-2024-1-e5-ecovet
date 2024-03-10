# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

|    `Nome`: Joana Santos Cardoso  | `Profissão`: Gerente de Clínica Veterinária     |     `Idade`: 64 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-proj-bibliosync/assets/103579574/49cfcc5e-e06d-407f-a916-0c261cf68869">| `Motivações`:<br> Encontrar veterinários qualificados para sua clínica. <br> <br> Simplificar o processo de contratação. <br> <br> Melhorar a eficiência operacional da clínica. |  `Frustrações`:: <br> Dificuldade em encontrar veterinários disponíveis. <br> <br> Processo de contratação demorado e ineficiente. <br><br>                  
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Gosta de ler livros de ficção <br><br> Adora viajar e conhecer novos lugares <br><br> Pratica yoga para relaxar <br> <br>    | Joana é uma gerente dedicada que está sempre procurando maneiras de melhorar a eficiência e a qualidade dos serviços em sua clínica veterinária. <br>| Organizada <br><br> Determinada <br><br> Prática<br>|


|    `Nome`: Pedro Henrique  | `Profissão`: Estudante de Veterinária   |     `Idade`: 23 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-proj-bibliosync/assets/103579574/aea66113-9f26-45c4-bc7e-e5af89014a0a">| `Motivações`: <br> Ganhar experiência prática na área veterinária. <br> <br> Encontrar oportunidades de estágio ou trabalho em clínicas. <br> <br> Aprender com profissionais experientes.|  `Frustrações`:<br> Dificuldade em encontrar oportunidades de estágio ou trabalho. <br> <br> Falta de uma plataforma centralizada para procurar oportunidades. <br><br>
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
|<br> Gosta de passar tempo com seus animais de estimação <br><br> Adora assistir a filmes e séries <br><br> Gosta de jogar futebol com os amigos <br> <br> | Pedro Henrique é um estudante de veterinária apaixonado que está ansioso para aplicar o que aprendeu na sala de aula em um ambiente prático. <br>	| Ambicioso <br><br> Curioso <br><br> Amigável<br>|


|    `Nome`: Marcelo de Lima Henrique | `Profissão`: Veterinário         |     `Idade`: 54 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://user-images.githubusercontent.com/100283917/189008834-552789bd-d695-44eb-80f3-22b56fe5610e.jpg">| `Motivações`: <br> Procurar oportunidades de trabalho em diferentes clínicas. <br> <br> Expandir sua rede de contatos profissionais. <br> <br> Flexibilidade para escolher os locais e horários de trabalho.|  `Frustrações`: <br> Dificuldade em encontrar clínicas que precisam de seus serviços. <br> <br> Falta de uma plataforma centralizada para procurar oportunidades. <br><br>    
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
|<br> Gosta de ler sobre novos avanços na medicina veterinária <br><br> Adora passar tempo ao ar livre com seu cachorro <br><br> Gosta de assistir a documentários sobre animais <br> <br> | Marcelo é um veterinário dedicado que está sempre procurando expandir suas habilidades e conhecimentos. Ele adora animais e está sempre procurando maneiras de melhorar seus cuidados. <br>| Proativo <br><br> Empático <br><br> Dedicado<br>|

## Arquitetura e Tecnologias

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas

Colocar a imagem do modelo construído apresentando a proposta de solução.

> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

Sugestão de ferramentas para geração deste artefato: LucidChart e Draw.io.

A referência abaixo irá auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
