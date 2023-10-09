# Template padrão do site

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

Explique as guias de estilo utilizadas no seu projeto.

## Design

**Logo do site:** Localizado na parte superior a esquerda, ao lado do nome da empresa "FromHome".

**Menu de navegação principal:** Localizado na parte superior da tela. Contém links para as principais seções do sistema, como login, "Sobre" e contatos.

**Menus de ação:** Aparecem em pop-up, para realizar determinadas tarefas(Realizar denuncia, solicitar suporte etc).

**Layout: (Posição dos elementos na tela):**
* Cabeçalhos na parte superior da tela;
* Menus ao centro e/ou pop-up;
* Conteúdo principal ao centro;
* Rodapé com informações sobre privacidade, endereço, termos e condições, redes sociais e outros;
* Tamanho dos elementos: Titulo 36px e paragrafo 17px;
* Espaçamento dos elementos textuais: 1,5; 
* Cores de fundo e fontes: Azul, rosa, roxo
* Fonte: Poppins;
* Design: Moderno.




## Cores


| #AF05B5 | #A00BD6 | #801CEB | #5252FA | #3D0FD4 |
![CORES](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-G1-FromHome/assets/139433754/1d063125-9f35-4590-bfff-91fd6eb6b248)


## Tipografia

* Título de página: Poppins; Negrito; (H1; 24 a 36 px);
* Título de Seção: Poppins; (H2, H3; 18 a 28px...);
* Rótulos de componentes: Poppins (12 a 14px);
* Corpo de Texto: Poppins (17px)




## Iconografia


**Ícone de ação:** Botão, estrelas e menu(tela menor), irão facilitar a interação do usuário com o projeto.<br>

**Ícone de estado:** “X”, irá indicar que o usuário pode fechar uma página, caso ele queira.



**Botão:**

<button class="button" role="button">Button</button><br>

/* CSS */<br>
.button {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

.button-4:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

.button-4:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

.button-4:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.button-4:focus {
  outline: 1px transparent;
}

.button-4:before {
  display: none;
}

.button-4:-webkit-details-marker {
  display: none;
}

**Estrela:**<br>
<i class="bi bi-star"></i>
/* CSS */<br>
#star {
  margin: 100px;
  position: relative;
  display: block;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid #000;
  border-left: 100px solid transparent;
  transform: rotate(35deg);
}

**Menu:**<br>
<i class="bi bi-list"></i>

/*CSS*/<br>
menu{
    display: flex;

  }
  .menu li {
    display: inline;
    margin: 0 0 0 15px;
  }
  .menu li a{
    display: flex;
    width: 100%;
    padding: 5px;
    color: white;
    text-decoration: none;
  }
  #menuToggle {
    display: none;
  }
  .menu-icon {
    display: none;
  }
@media  (max-width: 800px){
.menu-icon{
    width: 50px;
      height: inherit;
      display: block;
      position: absolute;
      top: 20px;
      right: 50px;
      line-height: 90px;
      color: white;
      z-index: 999;
  }
  #menuToggle:checked ~ label i:nth-child(2) {
    display: block;
  }
  #menuToggle:checked ~ label i:first-child {
    display: none;
  }
  #menuToggle:not(:checked) ~ label i:first-child {
    display: block;
  }
  #menuToggle:not(:checked) ~ label i:nth-child(2) {
    display: none;
  }

  #menuToggle:checked ~ ul {
      height: 100%;
  }
  .menu-icon i {
      font-size: 1.7em;
  }
}

**Fechar(X):**
<i class="bi bi-x"></i>
/*CSS*/
#close{
  position: fixed;
  float: right;
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 25px;
  border-radius: 50%;
  color: #EF5350;
  border:2px solid #EF9A9A;
}







