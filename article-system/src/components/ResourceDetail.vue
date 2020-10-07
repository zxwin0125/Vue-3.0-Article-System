<template>
  <!-- {/* 数据详情 Starts */} -->
  <div class="card" v-if="!resource?._id">
    <div class="card-body">No Resource is selected :(</div>
  </div>
  <div class="card" v-else>
    <div class="card-header">{{ resource.title }}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>{{ resource.description }}</p>
        <footer class="text-muted mb-2">{{ resource.type }}</footer>
      </blockquote>
      <a href="#" class="btn btn-primary">编辑</a>
    </div>
  </div>
  <!-- {/* 数据详情 Ends */} -->
</template>

<script>
export default {
  props: {
    resource: {
      // type: Object,
      validator: (prop) => typeof prop === "object" || prop === null,
      required: true,
    },
  },
};
</script>

<style></style>
