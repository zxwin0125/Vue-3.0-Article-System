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
      <label htmlFor="type">类型<span class="text-muted">(可选)</span></label>
      <input v-model="uResource.type" type="text" class="form-control" id="type" placeholder="类型..."/>
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
import { ref } from 'vue'
export default {
  props: {
    resource: Object
  },
  setup(props, context) {
    const uResource = ref(props.resource)
    
    return { uResource }
  }
}
</script>

<style>
</style>
