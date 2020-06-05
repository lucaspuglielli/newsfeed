const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "9870a1d4cecb4ba0a8b5ce29767aee1f";
let categoria = "";
let main = document.querySelector("#listaDeNoticias");

function refresh() {
	fetch(`${BASE_URL}/top-headlines?country=br${categoria}&apiKey=${API_KEY}`)
		.then((resposta) => resposta.json())
		.then((dados) => {
			main.innerHTML = "";
			dados.articles.forEach((noticia) => {
				main.innerHTML += `<div class="col-4">
                <div class="card"><img class="card-img-top" src="${noticia.urlToImage}">
                    <div class="card-body">
                        <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text">${noticia.content}</p><a class="btn btn-primary"
                        href="${noticia.url}">Ir para noticia</a>
                    </div>
                </div>
            </div>`;
			});
		});
}

refresh();

function home() {
	categoria = "";
	refresh();
}

function tecnologia() {
	categoria = "&category=technology";
	refresh();
}

// async function getNoticias() {
// 	let resposta = await fetch(
// 		`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`
// 	);
//     let dados = await resposta.json();
//     return dados
// }
