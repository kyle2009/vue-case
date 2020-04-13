<template>
	<div id="app">
		<el-row class="tac">
			<el-col :span="24">
				<el-menu
						default-active="2"
						class="el-menu-vertical-demo"
						@open="handleOpen"
						@close="handleClose">
					<el-menu-item @click="toHome"><i class="el-icon-s-home"></i>主页</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>项目</span>
						</template>
						<el-menu-item-group>
							<template slot="title">康师傅</template>
							<el-menu-item index="1-1">和平精英</el-menu-item>
							<el-menu-item index="1-2">新斗罗SP</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">数据统计</span>
					</el-menu-item>

				</el-menu>
			</el-col>
		</el-row>

<!--		<router-link to="/login">登录页</router-link>-->

	</div>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			toHome:function () {
				this.$router.push('home');
			}
		}
	}
</script>

<style scoped>
	#app {
		position: fixed;
		left: 0;
		top: 0;
		padding-top: 60px;
		width: 260px;
		height: 100vh;
		box-sizing: border-box;
		border-right: 1px solid #e7e7eb;
		background: #ffffff;
	}
</style>
