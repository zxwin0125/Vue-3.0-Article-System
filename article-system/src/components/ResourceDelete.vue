<template>
  <button @click="handleDeleteResource()" class="btn btn-sm btn-danger">
    删除
  </button>
</template>

<script>
import { deleteResource } from "@/actions";
export default {
  props: {
    activeId: String,
  },
  setup(props, context) {
    const handleDeleteResource = async () => {
      // 请求数据接口
      // 拿到要删除的内容
      const deleteData = await deleteResource(props.activeId);
      // 传递给父组件
      context.emit("onResourceDelete", deleteData);
      
    };
    return { handleDeleteResource };
  },
};
</script>

<style scoped></style>
