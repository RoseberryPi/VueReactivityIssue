import {ShallowRef, shallowRef} from 'vue'
import {defineStore} from 'pinia'

export type Workspace = {
    activeEditorId: string;
    textEditors: Array<ShallowRef<TextEditor>>;
}

export type TextEditor = {
    id: string;
    changesMade: boolean;
}
export const useWorkspaceStore = defineStore("Workspace Store", {
    state: (): Workspace => ({
        activeEditorId: "111",
        textEditors: [
            shallowRef<TextEditor>({
                id: "111",
                changesMade: false,
            }),
            shallowRef<TextEditor>({
                id: "222",
                changesMade: false,
            })
        ],
    }),
    actions: {
        getActiveEditor() {
            if (this.textEditors.length === 0) return;
            return this.textEditors.find(
                (x: ShallowRef<TextEditor>) => x.value.id == this.activeEditorId,
            );
        },

        getEditor(id: string) {
            if (this.textEditors.length === 0) return;
            return this.textEditors.find((x: ShallowRef<TextEditor>) => x.value.id === id);
        },

        setActiveEditor(id: string) {
            const textEditor = this.getEditor(id);
            if (textEditor) this.activeEditorId = textEditor.value.id;
        },

        editorUpdated(id: string) {
            const textEditor = this.getEditor(id);
            if (textEditor === undefined) return;
            if (textEditor === null) return;
            textEditor.value.changesMade = true;
        },

        saveEditors() {
            const editors = this.textEditors;
            for (const editor of editors) {
                editor.value.changesMade = false;
            }
        },
    },
});
