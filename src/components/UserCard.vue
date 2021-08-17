<template>
  <div class="user-card">
    <h1>Card title</h1>
    <div class="main-info">
      <img src="../assets/logo.png">
      <div class="info">
        <h2>{{ getAuthorFullName }}</h2>
        <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
        <ul>
          <li>Adipisci aspernatur, beatae consectetur</li>
          <li>Consequatur dolorum eaque esse excepturi </li>
          <li>Xxercitationem illum laborum necessitatibus non perferendis</li>
        </ul>
      </div>
      <p>Участников: {{users.length}}</p>
      <ul>
        <li
          v-for="(user, index) in users"
          :key="index"
        >
          {{ `${index + 1} ${getFullName(user)}`}}
        </li>
      </ul>
      <button @click="currentPage--">пред</button>
      <button v-for="page in pages" :key="page" @click="currentPage = page">{{page}}</button>
      <button @click="currentPage++">след</button>
      <p>Страница {{ currentPage }} из {{ pages }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      firstName: 'Иван',
      secondName: 'Петрович',
      lastName: 'Васильев',
      users: [
          {
            firstName: 'Егор',
            secondName: 'Николаевич',
            lastName: 'Чеботарев',
        },
        {
          firstName: 'Петр',
          secondName: 'Васильевич',
          lastName: 'Думинский',
        },
        {
          firstName: 'Владимир',
          secondName: 'Сергеевич',
          lastName: 'Митяев',
        }
      ],
      pages: 3,
      currentPage: 1
    }
  },
  computed: {
    // useMemo !!!
    getAuthorFullName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase()
    }
  },
  methods: {
    getFullName(user) {
        return `${user.firstName} ${user.secondName} ${user.lastName}`.toUpperCase()
    },
    loadUsers(page) {
      console.log(`загрузка пользователей: страница ${page}`)
    }
  },
  // analog - React.useEffect
  watch: {
    currentPage(page) {
      this.loadUsers(page)
    }
  }

}
</script>

<style scoped>

</style>