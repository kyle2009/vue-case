<template>
    <div id="app">
        <div class="logoBox">
            <img alt="上海高鼎数据分析平台" class="logo" src="../assets/logo.png">
            <h1>上海高鼎数据分析平台</h1>
        </div>

        <div class="gongneng">
            <ul>
                <li><i class="el-icon-message-solid"></i>消息</li>
                <li><i class="el-icon-s-tools"></i>设置</li>
                <li><i class="el-icon-user-solid"></i>kyle</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        box-sizing: border-box;
        color: #333;
    }
	#app {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: space-between;
		width: 100%;
		height: 60px;
		padding: 0 40px;
		background: #fff;
		box-shadow: 0 1px 2px rgba(150, 150, 150, 0.3);
	}
    img {
        width: 100%;
    }
    .logoBox{
        display: flex;
        height: 40px;
    }
    .logoBox h1 {
        font-size: 24px;
        margin: 0;
        padding: 0;
    }

    .logo {
        width: 40px;
        height: 40px;
    }

    .gongneng ul{
        display: flex;
    }
    .gongneng ul li {
        margin-left: 40px;
    }
</style>
