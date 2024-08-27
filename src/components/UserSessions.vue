<template>
  <v-container>
    <v-list>
      <v-row>
        <v-col>
          <v-list-item v-for="session in userSessions" :key="session.id">
            <v-list-item-title>{{ `Session №${session.id}! from ${session.date}!` }}</v-list-item-title>
            <exercises-list :exercises="session.exercises" :type="session.type" />
          </v-list-item>
        </v-col>
        <v-col>
          <v-dialog max-width="600">
            <template #activator="{ props:activatorProps}">
              <v-btn v-bind="activatorProps">+</v-btn>
            </template>
            <template #default="{ isActive }">
              <v-card title=" Add new session">
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-select v-model="currentExercise.type" :items="exerciseTypes" label="Exercise Type" />
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="numberOfSets"
                        label="Enter sets"
                        :rules="[
                          () => numberOfSets > 0
                        ]"
                        type="number"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-btn text="add session" @click="addNewSession" />
                  <v-btn text="add" @click="addNewExercise" />
                  <v-btn text="Close" @click="isActive.value = false" />
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </v-list>
  </v-container>
</template>

<script setup>

  import ExercisesList from '@/components/ExercisesList.vue'

  const userSessions = reactive([
    {
      userId: 1,
      id: 1,
      date: new Date().toISOString().substr(0, 10),
      exercises: [
        {
          id: 1,
          type: 'bench press',
          sets: [
            {
              id: 1,
              weight: 100,
              reps: 10,
            },
            {
              id: 2,
              weight: 100,
              reps: 5,
            },
          ],
        },
        {
          id: 2,
          type: 'squat',
          sets: [
            {
              id: 1,
              weight: 100,
              reps: 10,
            },
            {
              id: 2,
              weight: 100,
              reps: 5,
            },
          ],
        },
      ],
    },
  ])

  const exerciseTypes = [
    'Bench press',
    'Squat',
  ]

  let currentExercise = reactive({
    type: null,
    sets: [],
  })

  const numberOfSets = ref(0)

  const addNewSession = () => {
    userSessions.push({
      userId: 1,
      id: userSessions.length + 1,
      date: new Date().toISOString().substr(0, 10),
      exercises: [],
    })
  }

  const addNewExercise = () => {
    if (currentExercise.type && currentExercise.sets.length) {
      currentExercise.id = Math.random() * 10
      userSessions[0].exercises.push(currentExercise)
      currentExercise = {
        type: null,
        sets: [],
      }
    }
  }

  watch(numberOfSets, () => {
    currentExercise.sets.push({
      id: Math.random() * 10,
      weight: null,
      reps: null,
    })
  })
</script>

<style scoped lang="sass">

</style>
