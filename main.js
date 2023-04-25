import "@jokay03j-v2/sasslib";
import "./style.css";
import { datas } from "./datas";

const postsContainer = document.getElementById("posts");

for (let index = 0; index < datas.length; index++) {
  const post = datas[index];
  postsContainer.innerHTML += `
        <article class="w--full sm--pl--1">
        <a href="post.html?id=${post.id}">
        <h3 class="text--md first--letter--transform--uppercase align--center sm--align--left">${
          post.title
        }</h3>
        <p class="text--gray--dark--6 first--letter--transform--uppercase pl--1 sm--pl--0">${post.content.slice(
          0,
          50
        )}${
    post.content.length > 50
      ? `<span class="text--blue ml--1">Voir Plus...</span>`
      : ""
  }</p>
        </a>
        <adress class="w--full h--fit d--flex justify--end items--center gap--1 ">
          <img src="${
            post.author.avatar
          }" alt="avatar profile" class="rounded--full h--auto w--2"/>
          <a class="d--block transform--capitalize mr--1" href="#" rel="author">${
            post.author.username
          }</a>
        </adress>
      </article`;
}

