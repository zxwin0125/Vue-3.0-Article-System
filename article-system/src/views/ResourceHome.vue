<template>
    <div class="container">
      <Header/>
      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">数据</span>
            <span class="badge badge-secondary badge-pill">6</span>
          </h4>
          <ResourceSearch />
          <ResourceList />
        </div>
        <!-- {/* 更新数据 Starts */} -->
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">更新数据</h4>
            <ResourceUpdate />
          </div>
        <!-- 更新数据 Ends  -->
        <!-- 数据详情 -->
        <ResourceDetail />
      </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ResourceSearch from "@/components/ResourceSearch.vue";
import ResourceList from "@/components/ResourceList.vue";
import ResourceUpdate from "@/components/ResourceUpdate.vue";
import ResourceDetail from "@/components/ResourceDetail.vue";

export default {
  name: "ResourceHome",
  components: {
    Header,
    ResourceSearch,
    ResourceList,
    ResourceUpdate,
    ResourceDetail
  },
}
</script>

<style>

</style>
