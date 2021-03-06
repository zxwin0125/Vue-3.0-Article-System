<template>
  <ResourceForm
    @onFormSubmit="handleUpdate($event)"
    :resource="resource"
    :alert="alert"
  />
</template>

<script>
import { ref, watch, reactive, toRefs, onBeforeUnmount } from 'vue'
import { updateResource } from '@/actions'
export default {
  props: {
    resource: Object
  },
  setup(props, context) {
    // 接收数据
    const uResource = ref(props.resource)
    // 类型选项
    const types = ["blog","video","book"]

    // 弹窗信息
    const data = reactive({
      alert: { success: null, error: null },
      // 定义定时器
      timeoutId: null
    })
    
    // 监听数据切换
    watch(
      () => props.resource,
      (resource, prevResource) => {
        // 判断改变的值存不存在
        if(resource && (resource._id !== prevResource._id)){
          // 关闭定时器
          clearAlertTimeout()
          data.alert = initAlert()
        }
      }
    )

    // 封装方法
    // 初始化弹窗状态
    const initAlert = () => {
      return { success: null, error: null }
    }

    // 钩子函数
    // 离开组件之前调用
    onBeforeUnmount(() => {
      // 清除定时器方法
      clearAlertTimeout()
    })

    // 清除定时器方法
    const clearAlertTimeout = () => {
      data.timeoutId && clearTimeout(data.timeoutId)
    }

    // 弹窗状态
    const setAlert = (type, message) => {
      data.alert = initAlert()
      data.alert[type] = message

      // 设置定时器
      data.timeoutId = setTimeout(() => {
        data.alert = initAlert()
      },3000)
    }

    // 提交事件(异步)
    const handleUpdate = async () => {
      // 抛出异常
      try {
        // 传入对应id和新内容
        const updatedResource = await updateResource(
          uResource.value._id, 
          uResource.value
        )

        // 将更新的数据传给父组件
        context.emit("onUpdateResource", updatedResource)
        // 提交成功后弹窗信息
        setAlert("success","Resource was updated")
      } catch (errorMessage) {
        // console.log(errorMessage);
        setAlert("error", errorMessage)
      }
      
    }

    return { ...toRefs(data), handleUpdate }
  }
}
</script>

<style>
</style>
