<template>
	<div id="app">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="Transparent"	>
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="2">实时数据</el-menu-item>
			<el-menu-item index="3">基础数据</el-menu-item>
			<el-menu-item index="4">行为数据</el-menu-item>
			<el-menu-item index="5">用户画像</el-menu-item>
			<el-menu-item index="6">业务分析</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key) {
				switch (key) {
						case '1':
							this.$router.push('indexMain')
							break;
					case '2':
						this.$router.push('shishishuju')
						break;
					case '3':
						this.$router.push('jichushuju')
						break;
					case '4':
						this.$router.push('xingweishuju')
						break;
					case '5':
						this.$router.push('yonghuhuaxiang')
						break;
					case '6':
						this.$router.push('yewufenxi')
						break;
					default:
						console.log('导航切换错误。')
				}
			}
		}
	}
</script>

<style scoped>
#app{
	max-width: 1280px;
	margin: 0 auto;
	background: initial;
}
</style>
