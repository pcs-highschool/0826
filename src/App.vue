<template>
  <div v-if="this.$userList.length < 1">
    loading
    {{inputStatus}}
  </div>

  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputStatus: null,
    };
  },

  methods: {
  },

  async mounted() {
    let self = this;

    console.log(this.$userList);

    await this.$axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (res) {
        if (res.status !== 200) {
          console.log("error");
        } else {
          self.$userList.push(res.data);
          console.log(self.$userList);
        }
      });
      
    setTimeout(() => {
      console.log("asd");
      this.inputStatus = "input"
    }, 100);
  },
};
</script>

<style></style>