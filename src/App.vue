<template>
  <div v-if="inputStatus == null && this.$userList.length < 1">
    <input type="button" @click="fetchData()" value="값 불러오기" />
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
    fetchData: function () {
      this.inputStatus = "input";
    },
  },

  mounted() {
    let self = this;

    console.log(this.$userList);

    this.$axios
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
      this.inputStatus = "input";
    }, 1);
  },
};
</script>

<style></style>