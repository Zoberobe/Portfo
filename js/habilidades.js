const habilidades = document.querySelectorAll('.habilidades-js');
const descricao = document.querySelector('.descricao');
const habilidadesDescricao = [
    '<p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p> <br>',
    '<p>PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.</p> <br>',
    '<p>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface..</p> <br>',
    '<p>O Sass é um Pré-processador, o intuito dele é agilizar e facilitar a utilização do Css.</p> <br>',
    '<p>O Wordpress é um sistema livre e aberto de gestão de conteúdo para internet, baseado em PHP com banco de dados MySQL, executado em um servidor interpretador, voltado principalmente para a criação de páginas eletrônicas e blogs online.</p> <br>',
    '<p>O Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.</p> <br>'
]

habilidades.forEach(  (elemento, index) => {
    let index1 = index;
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `${habilidadesDescricao[index1]}` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Coloque o mouse sobre uma das imagens, para receber uma descritiva breve de cada componente.';
    } )
} );