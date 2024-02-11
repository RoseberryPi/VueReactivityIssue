<script setup lang="ts">
import {useWorkspaceStore} from "../stores/workspace-store";

const workspaceStore = useWorkspaceStore();

function updateActiveEditor() {
  const editor = workspaceStore.getActiveEditor();
  if (!editor) return;
  workspaceStore.editorUpdated(editor.value.id)
}
</script>

<template>
  <button @click="updateActiveEditor" style="flex-grow: 1;">
    update Editor
  </button>
</template>

<style scoped>

</style>