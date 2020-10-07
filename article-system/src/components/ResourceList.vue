<template>
  <!-- {/* 数据列表 Starts */} -->
          <ul class="list-group mb-3 resource-list">
            <li v-for="resource in resources" 
                :key="resource._id"
                class="list-group-item d-flex justify-content-between lh-condensed resource-list-item"
                @click="onItemClick(resource)"
            >
              <div>
                <h6 class="my-0">{{ resource.title }}</h6>
                <small class="text-muted">{{ resource.description }}</small>
              </div>
              <span class="text-muted">{{ resource.type }}</span>
            </li>
          
          </ul>
          <!-- {/* 数据列表 Ends */} -->
</template>

<script>
export default {
  props: {
    resources: {
      type: Array,
      default: () => [],

    }
  },
  setup(props, context) {
    // methods
    // 1. 选中列表事件
    const onItemClick = (resource) => {
      // 注册事件
      // 事件名、参数
      context.emit("handleItemClick",resource)
    }


    return { onItemClick }
  }

}
</script>

<style scope lang="scss">
.resource-list {
  max-height: 350px;
  overflow-y: auto;

  &-item {
    cursor: pointer;

    &:hover {
      background-color: #f3f3f3;
    }
  }

  .is-active {
    background-color: #f3f3f3;
  }
}

// css语法
// .resource-list {
//   max-height: 350px;
//   overflow-y: auto;
// }

// .resource-list-item {
//   cursor: pointer;
// }

// .resource-list:hover {
//   background-color: #f3f3f3;
// }
</style>
