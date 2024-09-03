<template>
  <v-alert v-if="state.showAlert"
           :type="state.alertType"
           title="Error"
           :text="state.alertMessage"
           class="alert"
  >
  </v-alert>
</template>

<script setup>
import { useAlertsStore } from "@/store/alertStore";

const state = useAlertsStore()
</script>

<style scoped>
.alert {
  position: absolute;
  top: 100px;
  left: calc(50vw - 150px);
  width: 300px;
  height: 150px;
}

</style>
