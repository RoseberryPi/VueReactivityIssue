<script setup lang="ts">

import {useWorkspaceStore} from "./stores/workspace-store";
import CustomTabs from "@/components/CustomTabs.vue";
import UpdateButton from "@/components/UpdateButton.vue";
import ClearButton from "@/components/ClearButton.vue";

const workspaceStore = useWorkspaceStore();

</script>

<template>
  <div>
    <dic>
      <div>- Click the square to change the active "tab"</div>
      <div>- Click the button to send an update that the active tab content has changed (like making changes to a file)</div>
      <div>- Notice that the 'Change' text does not change until the active tab is changed and the tabs rerender</div>
      <div>- Click save editors to reset change state of all editors, notice that this too doesn't cause a rerender</div>
    </dic>
    <CustomTabs/>
    <div style="display: flex;">
      <UpdateButton/>
      <ClearButton/>
    </div>
  </div>
</template>

<style scoped>
</style>
