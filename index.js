const botaoMais = document.querySelector(".postadd");
const Post = document.querySelector(".post-modal");

botaoMais.addEventListener("click", mostrarAreaAdd);
Post.addEventListener("click", escondeAreaAdd);

window.addEventListener("beforeunload", function(e){
    e.preventDefault();
})

function mostrarAreaAdd(){
    Post.style.display = "flex";
}
function escondeAreaAdd(e){
    if (e.target == Post) {
        Post.style.display = "none";
    }
}
const addPostagem = document.querySelector(".postar");
const telaInicial = document.querySelector(".secao-posts");
var Arquivo = document.querySelector("#campo-foto"); 
const campoImagem = document.querySelector(".campo-foto");

// hora do post
let dataAtual = new Date();
let hora = dataAtual.getHours();
let dia = dataAtual.getDate();
let mes = (dataAtual.getMonth( + 1));
let min = dataAtual.getMinutes();


addPostagem.addEventListener("click", postagem);
function postagem(e) {
    e.preventDefault();
   
    let Texto = document.querySelector(".comentario-form");
    let comentario = Texto.value;
    const newPost = document.createElement("article");
    newPost.className = "post"

newPost.innerHTML = ` <div class="post-info">
  <div class="usuario-info">
    <div class="avatar"></div>
    <div class="nome-hora">
      <p class="nome">Joana da Silva Peixoto</p>
      <p class="hora"> ${hora}:${min} no dia ${dia}/${mes} </p>
    </div>
  </div>
  <p class="comentario">
    ${comentario}
  </p>
</div>
<img class="post-imagem" src="" alt="" />
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

telaInicial.appendChild(newPost) 
Post.style.display = 'none'

    const curtido = document.querySelector(".like-btn");
    const palavraAzul = document.querySelector(".descricao-like")
    
    curtido.addEventListener("click", Curtir)
    palavraAzul.addEventListener("click", CurtirAzul)
}
newPost = " "

function Curtir(e) {
  if(e.target.classList.contains("Curtir")) {
      e.target.src = "like.svg";  
  } else {
      e.target.src = "like-solid.svg"; 
      e.target.textContent = "descurtir";
  }
  e.target.classList.toggle("Curtir");   
}


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

// botao aside quando postar 
addPostagem.addEventListener("click", (e) => {
  if (e.target == addPostagem) {
      Post.style.display = "none";
  }
})


var Comentario = document.getElementsByClassName("comentario-form")
var Foto = document.getElementById("campo-foto")

const existentComentario = []

function criarPost() {
    let comentario = Comentario.value

    if (existentComentario.includes(comentario)) {
        alert ("Ops! Você já disse isso.")
    } else {
        let confirm = window.confirm("Deseja publicar isso?")
        if(confirm) {
            existentComentario.push(comentario)
            if(addComentario.toLowerCase() === 'descricao-comentario')
            // let element = document.querySelector(`#pc${ListadePosts}`)
            element.innerText = `(${comentario})`
            existentComentario.push(comentario)

        } 
    }
}

