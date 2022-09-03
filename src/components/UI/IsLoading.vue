<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "IsLoading",
};
</script>

<style scoped lang="scss">
.loading {
  position: absolute;
  top: 50%;

  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 5px;
  align: center;

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ff650e;
  }
}

@for $i from 1 through 3 {
  .loading span:nth-child(#{$i}) {
    animation: loading 1s ease-in-out $i * 0.1s infinite;
  }
}

@keyframes loading {
  0% {
    transform: translateY(-10px);
    opacity: 1;
  }
  25% {
    transform: translateY(-5px);
    opacity: 0.5;
  }
  50% {
    transform: translateY(0);
    opacity: 0;
  }
  75% {
    transform: translateY(-5px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-10px);
    opacity: 1;
  }
}
</style>