<template>
  <v-container width="40%" fluid>
    <v-card color="primary">
      <v-card-title>Логин</v-card-title>
      <v-card-text>
        <v-row class="px-5">
          <v-col>
            <v-text-field v-model="userData.login" label="Логин"/>
          </v-col>
        </v-row>
        <v-row class="px-5">
          <v-col>
            <v-text-field v-model="userData.password" label="Пароль"/>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="logIn">Войти</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup >
// data

import router from "@/router";
import axios from "axios";
import { useAlertsStore } from "@/store/alertStore";

const state = useAlertsStore()

const userData = reactive({
  login: '',
  password: '',
})

let users = [];


//life hooks

onMounted(() => {
  fetchAllUsers();
})

// methods

const fetchAllUsers = async () => {
  try {
    const { data } = await axios.get('https://66c897ea8a477f50dc2ead39.mockapi.io/login');
    users = data;
  } catch (e) {
    console.log('error',e)
  }
}

const logIn = () => {
  state.setAlert('error', 'Произошла непредвиденная ошибка!');
  // if (userData.login && userData.password) {
  //   let currentUser = users.find(({ name }) => name === userData.login)
  //   if (currentUser && currentUser.password === userData.password) {
  //     router.push({
  //       name: 'Main'
  //     })
  //   }
  // } else {
  //   state.setAlert('Ошибка!');
  // }
};

</script>
