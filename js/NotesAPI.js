export default class NotesAPI {
  // 全てのメモを取得するAP
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    return notes;
  }

  // メモを保存するAPI
  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();
    // すでに存在している場合にはメモを作成せず更新する
    const existingNote = notes.find((note) => note.id === noteToSave.id);

    // 編集 ot 更新の作業をする
    if (existingNote) {
      // 更新する
      existingNote.title = noteToSave.title;
      existingNote.body = noteToSave.body;
      existingNote.updated = new Date().toISOString();
    } else {
      // title、bodyの他に、idとupdatedを追加
      //   noteToSave.id = Math.floor(Math.random() * 1000000);
      //   noteToSave.updated = new Date().toISOString();
      //   notes.push(noteToSave);

      noteToSave.id = noteToSave.id;
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  // メモを削除するAPI
  static deleteNote() {}
}
