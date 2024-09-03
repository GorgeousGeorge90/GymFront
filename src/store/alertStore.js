import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', () => {
  // state
  const showAlert = ref(false);
  const alertType = ref(null);
  const alertMessage = ref('');
  // getters
  const getAlertState = computed(() => showAlert.value);
  const getAlertType = computed(() => alertType.value);
  // actions
function setAlert (type, message) {
    showAlert.value = true;
    alertType.value = type;
    alertMessage.value = message;
      setTimeout(() => {
        showAlert.value = false;
        alertType.value = null;
        alertMessage.value = '';
      }, 6000)
  }

  return {
    showAlert,
    alertType,
    alertMessage,
    setAlert
  }
});
