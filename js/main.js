import App from "./App.js";
import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

// dom の中身を取得して app に渡す
const root = document.getElementById("app");
const app = new App(root);
