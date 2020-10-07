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
        <button @click="addResource" class="btn btn-sm btn-primary">
          添加数据
        </button>
      </div>
      <!-- {/* 更新数据 Starts */} -->
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">
          数据 {{ activeResource?._id }}
          <button
            @click="isDetailView = !isDetailView"
            :class="`btn btn-sm ${togglesBtnClass} mr-2`"
          >
            {{ !isDetailView ? "更新" : "详情" }}
          </button>
        </h4>
        <ResourceUpdate v-if="isDetailView" />
        <!-- 数据详情 -->
        <ResourceDetail :resource="selectedResource" v-else></ResourceDetail>
      </div>
      <!-- 更新数据 Ends  -->
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, computed, ref, onMounted } from "vue";
import Header from "@/components/Header.vue";
import ResourceSearch from "@/components/ResourceSearch.vue";
import ResourceList from "@/components/ResourceList.vue";
import ResourceUpdate from "@/components/ResourceUpdate.vue";
import ResourceDetail from "@/components/ResourceDetail.vue";
import { fetchResources } from "@/actions";

export default {
  name: "ResourceHome",
  components: {
    Header,
    ResourceSearch,
    ResourceList,
    ResourceUpdate,
    ResourceDetail,
  },
  setup() {
    // =================================================================
    // data
    // 1. 模拟列表数据
    const data = reactive({
      resources: [
        {
          _id: "1",
          title: "2021 前端面试 | “HTML + CSS + JS”专题",
          description: "BAT面试1000题——数据结构（841~850题）",
          type: "video",
          link: "",
        },
        {
          _id: "2",
          title: "一篇搞定前端高频手撕算法题（36道）",
          description: "《JavaScript 20 年》中文在线版发布",
          type: "book",
          link: "",
        },
        {
          _id: "3",
          title: "32个手撕JS，彻底摆脱初级前端（面试高频）",
          description: "56 道高频 JavaScript 与 ES6+ 的面试题及答案",
          type: "video",
          link: "",
        },
        {
          _id: "4",
          title: "字节跳动2020届秋招提前批前端面经",
          description: "初入WEB前端的新手，掌握这些核心知识点，年薪冲破20W",
          type: "book",
          link: "",
        },
        {
          _id: "5",
          title: "前方预警！史上最全前端面试题来袭！（附答案）",
          description: "做一个数据可视化项目的难点在什么地方？",
          type: "video",
          link: "",
        },
        {
          _id: "6",
          title: "JavaScript数据类型详解",
          description: "nodejs的websocket的服务器端是如何实现的？",
          type: "book",
          link: "",
        },
      ],
    });

    // 3. 定义视图切换属性
    const isDetailView = ref(false);

    // 6. 定义选中的数据
    const selectedResource = ref(null);

    // =================================================================
    // 生命周期钩子函数
    onMounted(async () => {
      const resource = await fetchResources()
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
      return !isDetailView.value ? "btn-primary" : "btn-warning";
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
    };
  },
};
</script>

<style>
</style>
