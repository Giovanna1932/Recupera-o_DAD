const plus = document.querySelector(".postadd"); // botão adicionar
const post = document.querySelector(".post-modal"); // aside
const btnpostar = document.querySelector(".postar"); // botão de postar 
const feed = document.querySelector(".secao-posts"); // section 
var inputFile = document.querySelector("#campo-foto"); // area da imagem 
const pictureImage = document.querySelector(".campo-foto"); // sapn da imagem
var pictureImageTxt = "Choose en image"; // escrita da imagem
    pictureImage.innerHTML = pictureImageTxt; 
    
// hora do post
var dataAtual = new Date();
var hora = dataAtual.getHours();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth( + 1));
var min = dataAtual.getMinutes();

// mostrar post 
plus.addEventListener("click", ()=> {
    post.style.display = "flex";
})

// esconder post 
plus.addEventListener("click", (e)=> {
    if (e.target == post) {
        post.style.display = "flex";
    }
})

// add postagem 
btnpostar.addEventListener("click", postar);
function postar(e) {
    e.preventDefault();
    let textoComent = document.querySelector(".comentario-form");
    let comentario = textoComent.value;

    let img = inputFile.value;
    const newPost = document.createElement("article");
    newPost.className = "post"

    feed.insertAdjacentHTML('afterbegin'), `<div class="post-info">
    <div class="usuario-info">
      <div class="avatar"></div>
      <div class="nome-hora">
        <p class="nome">Joana da Silva Peixoto</p>
        <p class="hora">00 horas atrás</p>
      </div>
    </div>
    <p class="comentario">
      ${comentario}
    </p>
  </div>
  <img class="post-imagem" src="pordosol.jpg" alt="" />
  <div class="post-interacoes">
    <div class="container-like">
      <img class="like-btn" src="like.svg" alt="like" />
      <p class="descricao-like">Curtir</p>
    </div>
    <div class="container-coment">
      <img class="coment-btn" src="comentario.svg" alt="like" />
      <p class="descricao-comentario">Comentários</p>
    </div>
  </div>`

  textoComent.value = " ";
  telaInicial.appendChild(newPost) 
    Post.style.display = 'none'
    e.preventDefault();
}
newPost = " "



// botao aside quando postar 
btnpostar.addEventListener("click", (e) => {
    if (e.target == btnpostar) {
        post.style.display = "none";
    }
})

// mostrar imagem dentro do input
const inputImagem = document.querySelector("#campo-foto");
inputImagem.addEventListener("change", apareceImagem);
function apareceImagem(e) {

    let urlImagem = e.target.files[0].name;
    console.log(urlImagem);

    const imagem = document.createElement("img");
    imagem.setAttribute("src", `${urlImagem}`);
    imagem.classList.add("imagem-form");

    const containerImage = document.querySelector(".container-imagem");
    inputImagem.style.display = "none";
    containerImage.appendChild(imagem);
}