<template>
	<div id="app">
		<el-menu @close="handleClose" @open="handleOpen" background-color="Transparent">
			<el-menu-item index="1" @click="toHome">
				<i class="el-icon-menu"></i>
				<span slot="title">主页</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>项目</span>
				</template>
				<el-menu-item-group>
					<template slot="title">康师傅</template>
					<el-menu-item index="1-1">和平精英</el-menu-item>
					<el-menu-item index="1-2">斗罗大陆</el-menu-item>
				</el-menu-item-group>

			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
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
		width: 100%;
	}

</style>
