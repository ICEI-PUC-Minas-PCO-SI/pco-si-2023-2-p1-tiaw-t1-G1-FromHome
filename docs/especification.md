# Especificações do Projeto

Nessa parte do Definição do problema e ideia de solução a partir da perspectiva do usuário. 

É composta por:
- diagrama de personas;
-  Histórias de usuários;
-  Requisitos funcionais e não funcionais
-  Restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto



## Ferramentas de desenvolvimento:

- IDE/Editor : VSCode
- Versionador: GIT
- Repositório: GIT Hub Classroom

## Linguaguens e Tecnologias
**Front-end**  
- HTML e CSS
- Bootstrap
- JQuery(editor)
  

## Personas

- Maria tem 36 anos, é mãe solteira e não consegue adquirir um trabalho fixo. A sua fonte de renda basicamente vem através de auxílios do governo e de freelancer. Está em busca de algo que ajude a achar trabalho freelancer em casas de família assim conseguindo complementar sua renda.

- Augusto tem 22 anos, é estudante universitário e tem dificuldade em localizar alguém de confiança para limpar seu apartamento. Está em busca de um aplicativo que o ajude a achar pessoas com valores em conta onde ele consiga ter referencias sobre o profissional, já que ele não tem contatos na cidade onde estuda.

- Leticia tem 37 anos, é empresária, e tanto ela como o marido tem uma rotina de serviço muito corrida ficando pouco tempo em casa. Como ela tem uma filha pequena e nem sempre tem a disponibilidade de algum parente próximo poder ficar com sua filha ela está em busca de alguma solução pratica para pode localizar babas que possam passar o dia em sua casa, levando sua filha pra escola e limpar sua casa e ao mesmo tempo ter um preço que ela julga justo. Enumere e detalhe as personas da sua solução.

- Roberta, tem 26 anos, é estudante universitária e está buscando modos de ganhar dinheiro extra para custear seus estudos e as despesas do cotidiano. A jovem, possui como hobby a jardinagem, ao qual adora se conectar com a natureza. Dessa maneira, Roberta acredita que poderia transformar suas habilidades em fonte de renda.
  
- Flávio tem 60 anos, sofreu um AVC(Acidente Vascular Cerebral) e encontra-se incapacitado de realizar diversas atividades do cotidiano. Seu único filho Jobson, 24 anos, estava responsável por cuidar de seu pai no período em que estava de férias do serviço. Entretanto, logo retornará à sua jornada de trabalho. Dessa maneira, o jovem encontra-se em busca de um profissional disposto e de confiança para cuidar de seu pai.



## Histórias de Usuários

**Com base na análise das personas foram identificadas as seguintes histórias de usuários:**

|EU COMO... | QUERO/PRECISO ...  |PARA ... `MOTIVO/VALOR`                                                |
|--------------------|------------------------------------|----------------------------------------|                             
|Usuário Contratante | Encontrar um profissional para cuidar da minha casa                 | Ter a minha casa limpa e organizada  |
|Usuário Freelancer  | Encontrar trabalhos domésticos para atuar como freelancer           | Complementar minha renda             |




**História das personas mencionadas:**

|EU COMO...| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ...                                         |
|--------------------|------------------------------------|----------------------------------------|    
|  Maria         |  Encontrar trabalhos domésticos                                | Complementar minha renda             | 
|  Augusto       |  Encontrar alguém de confiança                                 | Limpar meu apartamento           |
|  Leticia       |  Encontrar solução prática para pode localizar babás            | Cuidar de minha filha          |
|  Roberta       |  Encontrar modos de ganhar dinheiro extra com meu hobby em jardinagem | Para custear meus estudos e as despesas do cotidiano|
|  Jobson        | Quero encontrar um profissional disposto e de confiança              | Para cuidar de meu pai              |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Cadastro de usuários | ALTA |  |
|RF-002| Menu de serviços ofertados   | MÉDIA| |
|RF-003| Geolocalização   | ALTA | |
|RF-004| Tela de buscas   | MÉDIA | |
|RF-005| Avaliações  | ALTA | |
|RF-006| Formas de pagamento  | ALTA | |
|RF-007| Geração de relatório de colaboradores | MÉDIA | |
|RF-008| Consulta e alterações de dados pessoais de clientes  | MÉDIA | |
|RF-009| Permitir que o usuário cadastre tarefa | ALTA |  |
|RF-010| Permitir que o usuário contrate um serviço   | ALTA | |
|RF-011| Permitir interação entre contratado e contratante   | MÉDIA | |
|RF-012| Notificar ao usuário novos serviços postados  | BAIXA | |
|RF-013| Emitir relatório de serviços prestados e notas   | MÉDIA | |
|RF-014| Emitir relatório de ganho mensal   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Ter um orçamento pronto em até 40 minutos |  BAIXA | 
|RNF-004| Definir o tempo que o sistema ficará no ar |  ALTA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não contará com banco de dados real                   |
|04| Não divulgará clientes                                |
|05| Será monetizado através de anúncios                   |
