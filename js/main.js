import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

// NotesAPI.saveNote({
//   id: 123456,
//   title: "更新した2回目のメモです！",
//   body: "プログラム作成中・・・・",
// });

// dom の中身を取得して app に渡す
const app = document.getElementById("app");
const view = new NotesView(app, {
  onNoteSelect() {
    console.log("ノートが選択されました");
  },
  onNoteAdd() {
    console.log("ノートが追加されました");
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
});

console.log(NotesAPI.getAllNotes());

const notes = NotesAPI.getAllNotes();

// サイドバーにメモを全て表示
view.updateNoteList(notes);
