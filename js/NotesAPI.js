export default class NotesAPI {
  // 全てのメモを取得するAP
  static getAllNotes() {}

  // メモを保存するAPI
  static saveNote(noteToSave) {
    const notes = [];

    // title、bodyの他に、idとupdatedを追加
    noteToSave.id = Math.floor(Math.random() * 1000000);
    noteToSave.updated = new Date().toISOString();
    notes.push(noteToSave);

    localStorage.setItem("notes", JSON.stringify(notes));
  }

  // メモを削除するAPI
  static deleteNote() {}
}
