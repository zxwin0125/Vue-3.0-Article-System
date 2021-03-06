<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">数据</span>
          <span class="badge badge-secondary badge-pill">{{
            getResourcesLength
          }}</span>
        </h4>
        <ResourceSearch />

        <!-- 将数据传入列表组件 -->
        <ResourceList
          @handleItemClick="selectResource"
          :resources="resources"
          :activeId="activeResource?._id"
        />

        <!-- 添加按钮 -->
        <!-- <button @click="addResource" class="btn btn-sm btn-primary">
          添加数据
        </button> -->
      </div>
      <!-- {/* 更新数据 Starts */} -->
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">
          数据 {{ activeResource?._id }}
          <!-- 当有数据的时候，显示 -->
          <template v-if="getResourcesLength">
            <button
              @click="isDetailView = !isDetailView"
              :class="`btn btn-sm ${togglesBtnClass} mr-2`"
            >
              {{ !isDetailView ? "更新" : "详情" }}
            </button>
            <!-- 删除数据 -->
            <ResourceDelete 
              @onResourceDelete="handleResourceDelete($event)"
              :activeId="activeResource?._id"
              />
          </template>
        </h4>
        <ResourceUpdate 
          @onUpdateResource="handleUpdateResource($event)" 
          :resource="activeResource" 
          v-if="isDetailView" />
        <!-- 数据详情 -->
        <ResourceDetail :resource="activeResource" v-else></ResourceDetail>
      </div>
      <!-- 更新数据 Ends  -->
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, computed, ref, onMounted } from "vue";

import ResourceSearch from "@/components/ResourceSearch.vue";
import ResourceList from "@/components/ResourceList.vue";
import ResourceUpdate from "@/components/ResourceUpdate.vue";
import ResourceDetail from "@/components/ResourceDetail.vue";
import ResourceDelete from "@/components/ResourceDelete.vue";
import { fetchResources } from "@/actions";

export default {
  name: "ResourceHome",
  components: {
    ResourceSearch,
    ResourceList,
    ResourceUpdate,
    ResourceDetail,
    ResourceDelete
  },
  setup() {
    // =================================================================
    // data
    // 1. 模拟列表数据
    const data = reactive({
      resources: [],
    });

    // 3. 定义视图切换属性
    const isDetailView = ref(false);

    // 6. 定义选中的数据
    const selectedResource = ref(null);

    // =================================================================
    // 生命周期钩子函数
    onMounted(async () => {
      const resources = await fetchResources()
      data.resources = resources
    });

    // onMounted(() => {
    //   fetchResources().then((res) => {
    //     console.log(res.data);
    //   })
    // });
    // =================================================================
    // computed
    // 2. 列表数量统计
    // 列表数量统计（方法实现）
    // const getResourcesLength = () => {
    //   return data.resources.length
    // }

    // 列表数量统计（计算属性实现）
    const getResourcesLength = computed(() => {
      return data.resources.length;
    });

    // 5. 切换按钮样式
    const togglesBtnClass = computed(() => {
      return isDetailView.value ? "btn-primary" : "btn-warning";
    });

    // 7. 调用数据
    const activeResource = computed(() => {
      return (
        selectedResource.value ||
        (getResourcesLength > 0 && data.resources[0]) ||
        null
      );
    });
    // =================================================================
    // methods
    // 4. 添加数据事件
    const addResource = () => {
      // debugger
      // 随机获取id
      const _id = "_" + Math.random().toString(36).slice(2);
      // 随机获取列表内容类型
      const type = ["book", "blog", "video"][Math.floor(Math.random() * 3)];
      // 新的列表内容
      const newResource = {
        _id,
        title: `${_id} title`,
        description: `${_id} description`,
        link: "",
        type,
      };
      // 添加到数据列表前列
      data.resources.unshift(newResource);
    };

    // 6. 选中列表显示数据事件
    const selectResource = (resource) => {
      // console.log(resource);
      selectedResource.value = resource;
      // console.log(selectedResource.value);
    };
    
    // 8. 获取更新数据
    const handleUpdateResource = (newResource) => {
      // 拿到原先存储数据的数组下标
      const index = data.resources.findIndex(
        (resource) => resource._id === newResource._id
      )
      data.resources[index] = newResource

      selectResource(newResource)
    }

    // 删除数据
    const handleResourceDelete = (newResource) => {
      const index = data.resources.findIndex(
        (resource) => resource._id === newResource._id
      )
      // 删除
      data.resources.splice(index, 1)
      selectResource(data.resources[0] || null)
    }


    // 导出数据
    return {
      // 解包
      ...toRefs(data),
      getResourcesLength,
      isDetailView,
      addResource,
      togglesBtnClass,
      selectResource,
      selectedResource,
      activeResource,
      handleUpdateResource,
      handleResourceDelete
    };
  },
};
</script>

<style>
</style>
