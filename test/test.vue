<template>
    <div class="test-page">
        <button ref="button"></button>
    </div>
</template>

<script>
  import DragActive from '../dist/index'

  export default {
    name: "test",
    mounted() {
      const dragActive = new DragActive({
        offset: 20,
        el: this.$refs.button,
        coordinateX: 100, // 初始化坐标
        coordinateY: 200, // 初始化坐标
        coordinateSave: true, // 自动保存拖拽位置
        // transition: '',
      })

      dragActive.run({
        onDragStart: el => {
          el.style.backgroundColor = 'orange'
        },

        onDragMove: el => {
          el.style.backgroundColor = 'yellow'
        },

        onDragEnd: (el, target) => {
          el.style.backgroundColor = 'green'
        }
      })
    }
  }
</script>

<style scoped lang="scss">
    .test-page {
        width: 100vw;
        height: 100vh;
        background: gray;

        button {
            width: 50px;
            height: 50px;
            background: red;
        }
    }
</style>