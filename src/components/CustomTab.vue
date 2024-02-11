<script setup lang="ts">
import {type TextEditor, useWorkspaceStore} from "../stores/workspace-store";

const props = defineProps<{
  textEditor: TextEditor
}>()

const workspaceStore = useWorkspaceStore();

function activate() {
  workspaceStore.setActiveEditor(props.textEditor.id)
}
</script>

<template>
  <div style="background-color: black; padding: 10px; flex-grow: 1;" @click="activate">
    <div style="padding-bottom: 10px;"><em>Click me! I'm a tab!</em></div>
    <div>
      Id: {{ textEditor.id }}
    </div>
    <div>
      Active: {{ textEditor.id == workspaceStore.activeEditorId }}
    </div>
    <div>
      Change: {{ textEditor.changesMade ? "*" : "-" }}
    </div>
  </div>
</template>

<style scoped>

</style>