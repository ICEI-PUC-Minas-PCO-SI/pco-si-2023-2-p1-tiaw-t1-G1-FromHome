# Especificações do Projeto

Essa seção tem como objetivo apresentar o projeto(definição do problema e ideia de solução) a partir da perspectiva do usuário. Dessa maneira, analisar o perfil e as possiveis exigências de cada necessidade de modo indivídual, bem como as funcionalidades específicas que o sistema deverá ter, assim como as utilidades, características e qualidades relacionadas ao projeto, como desempenho, segurança e outros.


É composta por:
-  Ferramentas de Desenvolvimento;
-  Linguaguens e Tecnologias;
-  Diagrama de personas;
-  Histórias de usuários;
-  Requisitos funcionais e não funcionais
-  Restrições do projeto.







## Ferramentas de Desenvolvimento:

- IDE/Editor : VSCode
- Versionador: GIT
- Repositório: GIT Hub Classroom

## Linguaguens e Tecnologias
**Front-end**  
- HTML e CSS
- Bootstrap
- JQuery(editor)
- API'S: MapBox e Bcrypt
  

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


### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado | Criador                          |
|------|------------------------|------------|-----------------|----------------------------------|
|RF-001| O sistema deve exibir o perfil do usuário | ALTA | lista de perfil.html | Gustavo |
|RF-002| O sistema deve exibir uma lista dos profissionais | ALTA | lista de perfil.html | Gustavo |
|RF-003| Usuários podem realizar o cadastro de serviço na plataforma | ALTA | registro de serviços.html | Wanessa |
|RF-004| Usuários podem realizar o seu registro na plataforma | ALTA | index.html | Gustavo |
|RF-005| O sistema deve exibir uma tela de apresentação | ALTA | index.html |  Gustavo |
|RF-006|  O sistema deve exibir uma tela de configuração | ALTA | index.html |  Gustavo |
|RF-007|  O sistema deve exibir uma tela de login | ALTA | cadastro-noticia.html |  Gustavo |
|RF-008| Usuários prestadores de serviço podem visualizar e se candidatar a vagas | ALTA | listademandacandidato.html | Wanessa |
|RF-009| Usuários contratantes de serviço podem visualizar e postar a vaga| ALTA | listademandacliente.html| Wanessa | Miriam
|RF-010| Usuários prestadores de serviço podem realizar a avaliação do contratante | ALTA | telaAvaliacaoCliente.html | Miriam |
|RF-011| Usuários contratantes de serviço podem realizar a avaliação do prestador | ALTA | telaAvaliacaoPrestador.html | Miriam |
|RF-012| O sistema deve exibir uma tela de confirmar pagamentos | ALTA | confirmar pagamento.html |
|RF-013| O sistema deve estar hospedado em um servidor web | ALTA |  | João Pedro |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade | Artefato Criado | Criador            |
|-------|-------------------------|-----------|-----------------|--------------------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | |Gustavo Miriam Wanessa 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Definir o tempo que o sistema ficará no ar |  ALTA | 
|RNF-004| O sistema deve conter criptografia de senhas |  ALTA | login.Html | Gustavo
|RNF-005| O sistema deve conter "banco de dados" |  ALTA | DB.json | Gustavo
|RNF-006| O sistema deve informar aos usuários os termos de uso |  ALTA | modais.js | Miriam
|RNF-007| O sistema deve mostrar ao usuário as políticas de privacidade |  ALTA | modais.js | Miriam

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não contará com banco de dados real                   |
|04| Não divulgará clientes                                |
|05| Não terá monetização                                  |
|06| Não será possível realizar pagamentos na plataforma   |
