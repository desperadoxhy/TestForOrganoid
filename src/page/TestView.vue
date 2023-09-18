<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <div style="height:60px"></div>
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>脑类器官</template>
              <el-menu-item index="1-1">培养方案1</el-menu-item>
              <el-menu-item index="1-2">培养方案1</el-menu-item>
              <el-menu-item index="1-3">培养方案1</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>心脏类器官</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>

        </el-menu>

      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
          <div style="margin-left: 100px; display: flex; gap: 100px">
            <div>实验前准备</div>
            <div>细胞培养阶段</div>
            <div>分化阶段</div>
            <div>Organoid culture</div>
          </div>
        </div>
        </el-header>
        <el-main>
          <div class="header">内容主体区域</div>
          <div class="conent">
            <div class="layui-card-header">
              这部分用来展示某个阶段的详细信息，可用文字或者表格的形式展示
            </div>
            <div class="layui-card-body">
              充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>充数内容<br>你还真滑到了底部呀
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "TestView"
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
