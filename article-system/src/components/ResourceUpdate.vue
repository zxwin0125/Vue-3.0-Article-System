<template>
  <form>
    <div class="mb-3">
      <label htmlFor="title">标题</label>
      <input
        v-model="uResource.title"
        type="text"
        class="form-control"
        id="title"
        placeholder="title...."
      />
    </div>
    <div class="mb-3">
      <label for="description">描述</label>
      <textarea
        v-model="uResource.description"
        class="form-control"
        id="description"
        placeholder="描述"
      ></textarea>
    </div>
    <div class="mb-3">
      <label htmlFor="type">类型</label>
      <select class="form-control" id="type" v-model="uResource.type">
        <option v-for="(resourceType, index) in types" 
                :key="index" 
                :value="resourceType">{{resourceType}}</option>
        
      </select>

    </div>
    <div class="mb-3">
      <label htmlFor="link">链接</label>
      <div class="input-group">
        <input
          v-model="uResource.link"
          type="text"
          class="form-control"
          id="link"
          placeholder="链接...."
        />
      </div>
    </div>
    <hr class="mb-4" />
    <button class="btn btn-primary btn-lg btn-block" type="submit">提交</button>
  </form>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    resource: Object
  },
  setup(props, context) {
    // 接收数据
    const uResource = ref(props.resource)
    // 类型选项
    const types = ["blog","video","book"]
    
    // 监听数据切换
    watch(
      () => props.resource,
      (resource, prevResource) => {
        uResource.value = resource
      }
    )

    return { uResource, types }
  }
}
</script>

<style>
</style>
