<template>
  <section class="login">
    <section class="login__email">
      <label for="email">Email</label>
      <input type="email">
    </section>
    <section class="login__password">
      <label for="password">Password</label>
      <input type="password">
    </section>
    <button
      class="login__button"
      @click="authenticate">
      Login
    </button>
  </section>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    authenticate() {
      const [username, password] = [this.username, this.password];

      this
        .$store
        .dispatch('USER_AUTHENTICATION', { username, password })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.login__email,
.login__password {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  text-transform: uppercase;
  font-size: 13px;
}

.login__password {
  margin-top: 30px;
}

.login__button {
  margin-top: 20px;
  padding: 10px;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

</style>
