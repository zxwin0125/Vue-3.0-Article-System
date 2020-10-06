<template>
  <div class="container">
    {{resources}}
    <Header />
    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">数据</span>
          <span class="badge badge-secondary badge-pill">6</span>
        </h4>
        <ResourceSearch />

        <!-- 将数据传入列表组件 -->
        <ResourceList :resources="resources" />
      </div>
      <!-- {/* 更新数据 Starts */} -->
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">更新数据</h4>
        <ResourceUpdate />
      </div>
      <!-- 更新数据 Ends  -->
      <!-- 数据详情 -->
      <!-- <ResourceDetail /> -->
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue';
import Header from "@/components/Header.vue";
import ResourceSearch from "@/components/ResourceSearch.vue";
import ResourceList from "@/components/ResourceList.vue";
import ResourceUpdate from "@/components/ResourceUpdate.vue";
// import ResourceDetail from "@/components/ResourceDetail.vue";

export default {
  name: "ResourceHome",
  components: {
    Header,
    ResourceSearch,
    ResourceList,
    ResourceUpdate,
    // ResourceDetail,
  },
  setup(){
      const data = reactive({
          resources: [
            {
              _id: "1",
              title: "米修在线1",
              description: "何以解忧 唯有米修",
              type: "video",
              link: ""
            },
            {
              _id: "2",
              title: "米修在线2",
              description: "何以解忧 唯有米修",
              type: "book",
              link: ""
            },
            {
              _id: "3",
              title: "米修在线3",
              description: "何以解忧 唯有米修",
              type: "video",
              link: ""
            },
            {
              _id: "4",
              title: "米修在线4",
              description: "何以解忧 唯有米修",
              type: "book",
              link: ""
            },
            {
              _id: "5",
              title: "米修在线5",
              description: "何以解忧 唯有米修",
              type: "video",
              link: ""
            },
            {
              _id: "6",
              title: "米修在线6",
              description: "何以解忧 唯有米修",
              type: "book",
              link: ""
            },
          ]
      })
      return { 
        // 解包
        ...toRefs(data),
      }
  }
};
</script>

<style>
</style>
