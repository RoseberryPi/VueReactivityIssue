<script setup lang="ts">

import {useWorkspaceStore} from "../stores/workspace-store";
import {toRefs} from "vue";
import CustomTab from "@/components/CustomTab.vue";

const workspaceStore = useWorkspaceStore();
const workplace = toRefs(workspaceStore);


</script>

<template>
  <div style="display: flex; gap: 5px;">
    <CustomTab v-for="textEditor in workspaceStore.textEditors"
               :key="textEditor.value.id"
               :text-editor="textEditor.value"/>
  </div>
</template>

<style scoped>
</style>
