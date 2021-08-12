<template>
  <div class="root">
    <label>
      Введите еmail:
      <input type="email"
             :value="email"
             @input="emailInput($event.target.value)"
      />
    </label>
    <label>
      Введите пароль:
      <input type="password"
             :value="password"
             @input="passwordInput($event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      email: 'example@mail.ru',
      password: '12345'
    }
  },
  methods: {
    emailInput(value) {
      this.email = value
    },
    passwordInput(value) {
      console.log(value)
      this.password = value
    }
  }
}
</script>

<style scoped>

</style>