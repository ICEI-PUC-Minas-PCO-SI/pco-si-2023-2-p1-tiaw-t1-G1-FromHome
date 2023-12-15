//termos de uso
document.addEventListener('DOMContentLoaded', function() {
 function createTermosDeUsoModal() {
 var modal = document.createElement('div');
 modal.className = 'modal fade';
 modal.id = 'termosDeUsoModal';
modal.tabIndex = -1;
 modal.role = 'dialog';
modal.setAttribute('aria-labelledby', 'termosDeUsoModalLabel');
modal.setAttribute('aria-hidden', 'true');
var modalDialog = document.createElement('div');
 modalDialog.className = 'modal-dialog';
modalDialog.role = 'document';
var modalContent = document.createElement('div');
modalContent.className = 'modal-content';
var modalHeader = document.createElement('div');
modalHeader.className = 'modal-header';
var closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.className = 'close';
closeButton.setAttribute('data-dismiss', 'modal');
closeButton.setAttribute('aria-label', 'Close');
var closeIcon = document.createElement('span');
closeIcon.setAttribute('aria-hidden', 'true');
closeIcon.innerHTML = '&times;';
closeButton.appendChild(closeIcon);
modalHeader.appendChild(closeButton);                      
var modalBody = document.createElement('div');
modalBody.className = 'modal-body';
var termosContent = document.createElement('p');
termosContent.innerHTML ="<h2>Termos de Uso </h2><br> <h6>Bem-vindo ao FromHome!</h6><br> Estes Termos de Uso regem o uso do site FromHome, que atua como intermediário para a conexão entre prestadores de serviço  e clientes.<br> Ao acessar ou utilizar nosso site, você concorda em cumprir e estar vinculado a estes Termos de Uso. Leia-os cuidadosamente antes de utilizar a plataforma.<br> <h6>1. Cadastro e Conta</h6> 1.1 Ao se cadastrar no FromHome, você concorda em fornecer informações precisas, completas e atualizadas.<br>1.2 Você é responsável por manter a confidencialidade de sua senha e conta. Qualquer atividade realizada através de sua conta é de sua responsabilidade.<br>1.3 O FromHome reserva-se o direito de recusar o registro ou cancelar uma conta a seu exclusivo critério.<br> <h6>2. Serviços</h2> 2.1 O FromHome atua como intermediário na conexão entre profissionais e clientes, facilitando a contratação de serviços.<br> 2.2 O FromHome não é responsável pela qualidade dos serviços prestados pelos profissionais. Recomendamos que os clientes avaliem as qualificações e experiências dos profissionais antes de contratá-los. <br>2.3 O FromHome reserva-se o direito de remover ou suspender a conta de qualquer profissional que viole estes Termos de Uso.<br> <h6>3. Responsabilidades do Usuário </h6>  3.1 Os usuários concordam em utilizar o FromHome de acordo com as leis aplicáveis e estes Termos de Uso. <br> 3.2 Os usuários concordam em fornecer informações verdadeiras e precisas em seus perfis. <br> 3.3 Os usuários concordam em não usar o FromHome para atividades ilegais, prejudiciais, difamatórias ou que violem os direitos de terceiros.<br> <h6> 4. Pagamentos</h6> 4.1 Não é possível realizar pagamentos através do FromHome. <br> <h6> 5. Privacidade</h6>  5.1 O FromHome trata as informações dos usuários de acordo com sua Política de Privacidade.<br> <h6>6. Alterações nos Termos de Uso</h6>  6.1 O FromHome reserva-se o direito de modificar estes Termos de Uso a qualquer momento. Alterações entrarão em vigor imediatamente após a publicação no site. <br> Ao continuar a usar o FromHome após a publicação de alterações nos Termos de Uso, você indica que aceita e concorda com as modificações. Se não concordar com as alterações, pare de usar o FromHome.<br> <h6>7. Encerramento de Conta</h6>  7.1 O FromHome reserva-se o direito de encerrar ou suspender contas de usuários que violem estes Termos de Uso ou a legislação aplicável. <br> 7.2 Os usuários podem encerrar suas contas a qualquer momento, seguindo as instruções disponíveis no site.<br> <h6>8. Contato</h6> Para entrar em contato conosco em relação a estes Termos de Uso, envie um e-mail para: <b>contato@fromhome.com.</b> <br> <h6>Obrigado por escolher o FromHome!</h6> <br> <h5>Estes termos são efetivos a partir de 09/12/2023 10:56</h5>";
modalBody.appendChild(termosContent);
var modalFooter = document.createElement('div');
 modalFooter.className = 'modal-footer';
 var closeButtonModal = document.createElement('button');
 closeButtonModal.type = 'button';
 closeButtonModal.className = 'btn-terms';
closeButtonModal.setAttribute('data-dismiss', 'modal');
 closeButtonModal.textContent = 'Fechar';
modalFooter.appendChild(closeButtonModal);
 modalContent.appendChild(modalHeader);
 modalContent.appendChild(modalBody);
modalContent.appendChild(modalFooter);
modalDialog.appendChild(modalContent);
 modal.appendChild(modalDialog);
document.body.appendChild(modal);
  }
 document.getElementById('termosDeUso').addEventListener('click', function() {
createTermosDeUsoModal();
$('#termosDeUsoModal').modal('show');
$('#termosDeUsoModal').on('shown.bs.modal', function () {
var closeButtonModal = document.querySelector('#termosDeUsoModal .modal-footer button'); 
if (closeButtonModal) {
  closeButtonModal.style.backgroundColor = '#801CEB';
  closeButtonModal.style.color = 'white';
 closeButtonModal.style.padding = '5px 10px';
  closeButtonModal.style.border = 'none';
  closeButtonModal.style.borderRadius = '5px';
   closeButtonModal.style.cursor = 'pointer';
             }
        });
    });
 });

 //politicas de privacidade:
document.addEventListener('DOMContentLoaded', function() {
function createPoliticasPrivacidadeModal() {
var modal = document.createElement('div');
 modal.className = 'modal fade';
 modal.id = 'politicasPrivacidadeModal';
 modal.tabIndex = -1;
modal.role = 'dialog';
 modal.setAttribute('aria-labelledby', 'politicasPrivacidadeModalLabel');
 modal.setAttribute('aria-hidden', 'true');
 var modalDialog = document.createElement('div');
modalDialog.className = 'modal-dialog';
modalDialog.role = 'document';
var modalContent = document.createElement('div');
modalContent.className = 'modal-content estilizar';
var modalHeader = document.createElement('div');
modalHeader.className = 'modal-header';
var closeButton = document.createElement('button');
closeButton.type = 'button';
 closeButton.className = 'close';
 closeButton.setAttribute('data-dismiss', 'modal');
 closeButton.setAttribute('aria-label', 'Close');
 var closeIcon = document.createElement('span');
 closeIcon.setAttribute('aria-hidden', 'true');
  closeIcon.innerHTML = '&times;';
 closeButton.appendChild(closeIcon);
  modalHeader.appendChild(closeButton);
   var modalBody = document.createElement('div');
modalBody.className = 'modal-body';
var politicaContent = document.createElement('p'); politicaContent.innerHTML = " <h2>Políticas de Privacidade</h2></br>A sua privacidade é importante para nós. É política da FromHome respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.<br>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.<br>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.<br>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.<br> <h6>Compromisso do Usuário</h6> O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a FromHome oferece no site e com caráter enunciativo, mas não limitativo:<br> A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;<br>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, Bet Nacional ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;<br> C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da FromHome, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.<h6>Mais informações</h6>Para quaisquer dúvidas, entre em contato conosco: <b>contato@fromhome, telefone: (11) 1234-5678</b><br> <h5>Esta política é efetiva a partir de 09/12/2023 10:56</h5>";
modalBody.appendChild(politicaContent);
var modalFooter = document.createElement('div');
 modalFooter.className = 'modal-footer';
var closeButtonModal = document.createElement('button');
 closeButtonModal.type = 'button';
 closeButtonModal.className = 'btn';
  closeButtonModal.setAttribute('data-dismiss', 'modal');
  closeButtonModal.textContent = 'Fechar';
  modalFooter.appendChild(closeButtonModal);
   modalContent.appendChild(modalHeader);
   modalContent.appendChild(modalBody);
   modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);
document.body.appendChild(modal);
        }
document.getElementById('politicasPrivacidade').addEventListener('click', function() {
createPoliticasPrivacidadeModal();
$('#politicasPrivacidadeModal').modal('show');
$('#politicasPrivacidadeModal').on('shown.bs.modal', function () {
var closeButtonModal = document.querySelector('#politicasPrivacidadeModal .modal-footer button'); 
if (closeButtonModal) {
 closeButtonModal.style.backgroundColor = '#801CEB';
  closeButtonModal.style.color = 'white';
  closeButtonModal.style.padding = '5px 10px';
  closeButtonModal.style.border = 'none';
   closeButtonModal.style.borderRadius = '5px';
    closeButtonModal.style.cursor = 'pointer';
            }
        });
    });
});
       