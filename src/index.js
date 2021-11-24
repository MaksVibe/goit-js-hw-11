import "./sass/main.scss";
import Axios from "axios";
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";

const refs = {
  form: document.querySelector("#search-form"),
  input: document.querySelector("input[name$='searchQuery']"),
  submitBtn: document.querySelector("button[type$='submit']"),
};
