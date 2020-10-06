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
        <!-- {/* <div class="col-md-8 order-md-1">
            <h4 class="mb-3">更新数据</h4>
            <form>
              <div class="mb-3">
                <label htmlFor="firstName">用户名</label>
                <input type="text" class="form-control" id="firstName" placeholder="用户名...." />
              </div>
              <div class="mb-3">
                <label htmlFor="email">邮箱<span class="text-muted">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="邮箱..." />
              </div>
              <div class="mb-3">
                <label for="description">描述</label>
                <textarea class="form-control" id="description" placeholder="描述"></textarea>
              </div>
              <div class="mb-3">
                <label htmlFor="username">用户信息</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="username" placeholder="用户信息...." />
                </div>
              </div>
              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="submit">提交</button>
            </form>
          </div> */}
          {/* 更新数据 Ends */} -->
        <!-- {/* 数据详情 Starts */} -->
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">更新的数据内容</h4>
          <div class="card">
            <div class="card-header">数据名称</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>描述...</p>
                <footer class="text-muted mb-2">类型</footer>
              </blockquote>
              <a href="#" class="btn btn-primary">编辑</a>
            </div>
          </div>
        </div>
        <!-- {/* 数据详情 Ends */} -->
      </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ResourceSearch from "@/components/ResourceSearch.vue";
import ResourceList from "@/components/ResourceList.vue";

export default {
  name: "ResourceHome",
  components: {
    Header,
    ResourceSearch,
    ResourceList,
  },
}
</script>

<style>

</style>
