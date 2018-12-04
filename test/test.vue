<template>
    <div class="test-page">
        <button ref="button"></button>
    </div>
</template>

<script>
  // import DragActive from '../dist/index'
  import DragActive from '../index'

  export default {
    name: "test",
    mounted() {
      const dragActive = new DragActive({
        el: this.$refs.button, // 需要标记可拖拽的元素
        // transition: '', // 尚未启用，预留用于拖拽时的动画渐变,
        offset: 100, // 针对屏幕边缘的距离
        coordinateX: 100, // 初始化坐标
        coordinateY: 200, // 初始化坐标
        coordinateSave: true, // 自动保存拖拽位置
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
            width: 120px;
            height: 120px;
            background: red;
            border-radius: 50%;
        }
    }
</style>
