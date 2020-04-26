<template>
    <div id="app">
        <div class="logoBox">
            <img alt="上海高鼎数据分析平台" class="logo" src="../assets/logo.png">
            <h1>上海高鼎数据分析平台</h1>
        </div>

        <div class="menu">
            <el-link  ><i class="el-icon-message-solid xh-margin-right-6"></i>消息</el-link>
            <el-link class="xh-margin-left-20"><i class="el-icon-s-tools xh-margin-right-6"></i>设置</el-link>
            <el-dropdown class="xh-margin-left-20" 	>
                  <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon-user-solid xh-margin-right-6"></i>用户名称
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </div>
</template>

<script>

</script>

<style scoped>

	#app {
        display: flex;
        align-items: center;
        justify-content: space-between;
		width: 100%;
        height: 60px;
        overflow: hidden;
		padding: 0 40px;
		background: #fff;
		box-shadow: 0 1px 2px rgba(150, 150, 150, 0.3);
	}
    img {
        width: 100%;
    }
    .logoBox{
        display: flex;
    }
    .logoBox h1 {
        font-size: 24px;
        margin: 0;
        padding: 0;
    }

    .logo {
        width: 40px;
        margin-right: 20px;
    }

</style>
