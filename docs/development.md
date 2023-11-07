# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

**<h3>Tela de perfil do usúario:</h3>**
![perfil](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-G1-FromHome/assets/142696070/e2edd0ef-6fa8-4e1d-a329-2b81aa5a7680)


![perfil editar](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-G1-FromHome/assets/142696070/8b351f01-9903-495e-8390-4a74fb331a59)


**<h3>Tela lista de usúarios:</h3>**
![lista de perfil](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-G1-FromHome/assets/142696070/f656a894-04a6-4191-bfa3-efe314e70ccd)




**<h3>Tela de pesquisa prestador de serviço:</h3>**
![prestador](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-G1-FromHome/assets/139433754/6ebbc633-788b-49fb-99e6-ea30cb01e6ff)


**<h3>Tela de pesquisa cliente(contratante):</h3>**
![cliente](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-G1-FromHome/assets/139433754/4953c5bc-0fc9-485b-b8bf-26e23074abbf)

**<h3>Tela de registrar serviço:</h3>**
![registro de serviços](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-G1-FromHome/assets/142696070/1419f24c-cbcb-4bc1-9792-680d8f7423f7)


**<h3>Tela de confirmar pagamento:</h3>**
![confirmar pagamentos](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-G1-FromHome/assets/142696070/4159f1c3-8dc0-47ad-8356-4002d7f95a18)


## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir o perfil do usuário | ALTA | lista de perfil.html |
|RF-002| O sistema deve exibir uma lista dos profissionais | ALTA | lista de perfil.html |
|RF-003| Usuários podem realizar o cadastro de serviço na plataforma | ALTA | registro de serviços.html |
|RF-004| Usuários podem realizar o seu registro na plataforma | ALTA | index.html |
|RF-005| O sistema deve exibir uma tela de apresentação | ALTA | index.html |
|RF-006|  O sistema deve exibir uma tela de configuração | ALTA | index.html |
|RF-007|  O sistema deve exibir uma tela de login | ALTA | cadastro-noticia.html |
|RF-008| Usuários prestadores de serviço podem visualizar e se candidatar a vagas | ALTA | resultadopesquisa.html |
|RF-009| Usuários contratantes de serviço podem visualizar e candidatar a vaga| ALTA | resultadopesquisa2.html|
|RF-010| Usuários prestadores de serviço podem realizar a avaliação do contratante | ALTA | index.html |
|RF-011| Usuários contratantes de serviço podem realizar a avaliação do prestador | ALTA | index.html |
|RF-012| Comprovante de pagamento | ALTA | index.html |
|RF-013| O sistema deve exibir uma tela de confirmar pagamentos | ALTA | confirmar pagamento.html |


## Descrição das estruturas:


## Perfil do Usuário

|  **Nome**            | **Tipo**                | **Descrição**                             | **Exemplo**                |
|:--------------------:|-------------------------|-------------------------------------------|--------------------------|
| Foto de Capa         | Imagem                  | Foto de capa do perfil                    | Foto a gosto do usúario |
| Foto de Perfil       | Imagem                  | Foto de perfil do usuário                 | foto do usúario |
| Nome do Usuário      | Texto                   | Nome do usuário                           | Gleydsson                 |
| Avaliação Profissional | Número (Decimal)     | Avaliação profissional do usuário        | 4.7 (de 5.0)             |
| Sobre                | Texto                   | Descrição do usuário e suas habilidades profissionais | Cuidador de idosos com 2 anos de experiência. |
| Formação             | Texto                   | Detalhes da formação  do usuário | Curso cuidador de idosos |
| Idade                | Número (Inteiro)        | Idade do usuário                          | 27 anos                  |
| Endereço             | Texto                   | Endereço do usuário                       | Rua Seis, Mateus Leme, MG |
| Contato              | Texto                   | Informações de contato do usuário         | (31)XXXXX-XXXX exemplo@email.com         |
| Área       | Texto                   | Área de atuação do usuário               | Pedagogia |



## Lista de Profissionais

|  **Nome**             | **Tipo**               | **Descrição**                                | **Exemplo**                |
|:---------------------:|------------------------|----------------------------------------------|--------------------------|
| Título         | Texto             | Título da listagem                         | Selecione um profissional                                  |
| Nome do Profissional  | Texto                  | Nome do profissional                         | Roberto              |


## Registro de Serviço

|  **Nome**             | **Tipo**               | **Descrição**                                | **Exemplo**                |
|:---------------------:|------------------------|----------------------------------------------|--------------------------|
| Nome do Serviço       | Texto                  | Nome do serviço a ser registrado             | Motofretista   |
| Descrição do Serviço  | Texto                  | Descrição detalhada do serviço                | Realizar entregas para restaurantes |
| Fotos                 | Imagem                 | Fotos relacionadas ao serviço                | imagem X |
| Preço                 | Número (Decimal)       | Preço do serviço                             | R$ 100.00                 |
| Categoria             | Texto                  | Categoria do serviço                        | Transporte           |
| Localização           | Texto                  | Localização onde o serviço será prestado    | Belo Horizonte, MG            |
| Disponibilidade       | Texto                  | Horários de disponibilidade do serviço      | Sexta, Sábado e Domingo, das 19h às 2h |
| Datas Disponíveis     | Lista de datas         | Datas específicas em que o serviço está disponível | 17-11-2023, 18-11-2023, 19-11-2023 |


## Confirmação de Pagamento

|  **Nome**           | **Tipo**          | **Descrição**                                 | **Exemplo**                |
|:-------------------:|-------------------|-----------------------------------------------|--------------------------|
| Título              | Texto             | Título da tela de confirmação de pagamento    | Confirmar Pagamento       |
|  Confirmar     | Botão      | Opção para o usuário confirmar o pagamento    | "Confirmar"             |
|  Cancelar      | Botão     | Opção para o usuário cancelar o pagamento     | "Cancelar"           |
| Texto de Contato    | Texto             | Informações de contato com a empresa          | Entre em contato conosco em caso de dúvidas ou problemas. |












## Tela de pesquisa das demandas (Cliente e Prestador)
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Barra de Pesquisa  | Caixa de Texto      | Campo para pesquisar demandas             | "Campo para pesquisar"      |
| Título         | Texto             | Título da demanda                         | Jardineiro                                   |
| Nome do criador da demanda      | Texto             | Nome do usúario responsável por criar a demanda                      | Chico                           |
| Endereço  | Texto  | Endereço da demanda | Eldorado - Contagem - MG                                             |
| Status  | Texto  | Identificador da execução da demanda | Em execução / Divulgada / Encerrada                                              |
| Descrição  | Texto  | Conteúdo descritivo da demanda | Realizar a manutenção do jardim do condominio de modo a garantir o plantio de vegetação, irrigação, podas, controle de pragas e doenças, adubação, corte de grama e manutenção de sistemas de drenagem.                                              |
| Localização  | Texto  | Titulo para nomear o mapa  | Localização |
| Mapa  | Mapa interativo  | Identificar e localizar a posição exata da demanda, facilitando a navegação e orientação de informações de localização. | Representação geográfica visual que identifica a localização exata do local da demanda                                            |

