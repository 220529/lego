<template>
  <div class="header">
    <img src="https://lagou-zhaopin-fe.lagou.com/fed/lg-app-fed/8.21/h5/logo.png" />
    <div class="userInfo">
      <a-button type="primary" v-if="userInfo.isLogin" @click="logout">退出登录</a-button>
      <a-button type="primary" v-else @click="login">登录</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";

export default defineComponent({
  name: "HeaderView",
  props: {
    msg: String,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const userInfo = computed(() => store.state.user);
    const login = () => {
      store.commit("login");
    };
    const logout = () => {
      store.commit("logout");
    };
    return {
      login,
      logout,
      userInfo,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50px;
  }
  .userInfo {
  }
}
</style>
