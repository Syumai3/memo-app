export default class NotesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
    <! -- サイドバー -- >
    <div class="notesSidebar">
    <button class="notesAdd" type="button">ノートを追加</button>
    <div class="notesList">
      <div class="notesList-item">

      </div>
    </div>
  </div>
  <! -- ノートプレビュー -- >
  <div class="notesPreview">
    <input type="text" class="notesTitle" placeholder="タイトルを記入" />
    <textarea class="notesBody" placeholder="ここに本文を追加"></textarea>
  </div>
    `;

    // 各要素を取ってきている
    const btnAddNote = this.root.querySelector(".notesAdd");
    const inputTitle = this.root.querySelector(".notesTitle");
    const inputBody = this.root.querySelector(".notesBody");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });
    // blurは要素がフォーカスを失ったときに発生
    // trim は両端の空欄を取り除く
    [inputTitle, inputBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const updatedTitle = inputTitle.value.trim();
        const updatedBody = inputBody.value.trim();

        this.onNoteEdit(updatedTitle, updatedBody);
      });
    });
  }

  // privateメソット (このclassの中でしか使わない)場合は _を使う
  _createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 60;

    return `
    <div class="notesList-item" data-note-id=${id}>
     <div class="notesSmall-title">
      ${title}
     </div>
     <div class="notesSmall-body">
      ${body.substring(0, MAX_BODY_LENGTH)}
      ${body.length > MAX_BODY_LENGTH ? "..." : ""}
     </div>
     <div class="noteSmall-updated">
      ${updated}
     </div>
    </div>
    `;
  }

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector(".notesList");

    for (const note of notes) {
      const html = this._createListItemHTML(
        note.id,
        note.title,
        note.body,
        new Date(note.updated)
      );
    }
  }
}
