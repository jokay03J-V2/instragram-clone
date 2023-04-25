import "@jokay03j-v2/sasslib";
import { datas } from "./datas";

const postContainer = document.getElementById("post");
const params = new URLSearchParams(document.location.search);
const postId = params.get("id");
const post = datas.find((item) => item.id === parseInt(postId));
if (params.has("id") && typeof params.get("id") === "string" && post) {
  postContainer.innerHTML += `
    <h2 class="first--letter--transform--uppercase align--center sm--align--left text--xl">${post.title}</h2>
    <p class="text--gray--dark--6 first--letter--transform--uppercase pl--1 sm--pl--0">${post.content}</p>
    <adress class="w--full h--fit d--flex justify--end items--center gap--1 ">
        <img src="${post.author.avatar}" alt="avatar profile" class="rounded--full h--auto w--2"/>
        <a class="d--block transform--capitalize mr--1" href="#" rel="author">${post.author.username}</a>
    </adress>
  `;
} else {
  postContainer.innerHTML = `
  <h1>Une erreur est survenue</h1>
  <a href="/">Retourner à l'accueil</a>
  `;
}
