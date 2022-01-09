<template>
  <router-view />
</template>

<style>
@import url("./assets/css/base.css");
@import url("./assets/css/search.css");
@import url("./assets/css/page.css");
@import url("./assets/css/table.css");
::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #409eff;
  /* background-color: rgb(175, 74, 240); */
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 5px;
}
</style>
