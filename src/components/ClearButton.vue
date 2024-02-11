<script setup lang="ts">
import {useWorkspaceStore} from "../stores/workspace-store";

const workspaceStore = useWorkspaceStore();

function save() {
  workspaceStore.saveEditors()
}
</script>

<template>
  <button @click="save" style="flex-grow: 1;">
    save Editors
  </button>
</template>

<style scoped>

</style>