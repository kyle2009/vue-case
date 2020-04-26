<template>
    <div id="app">
        <header id="header">
            <xh-header></xh-header>
        </header>

        <section id="container">
            <aside id="aside">
                <menu-left></menu-left>
            </aside>
            <main id="main">
                <router-view></router-view>
            </main>
        </section>

        <footer id="footer">

        </footer>
    </div>

</template>
<script>
    import xhHeader from '../../components/app-header.vue';
    import menuLeft from '../../components/menu-left';
    export default {
        data(){
            return{

            }
        },
        components: {
            xhHeader,
            menuLeft

        },
        beforeCreate() {
            // 查看本地是否有token，如果没有token返回登录页
            if(localStorage.token){
                console.log('已经登录')
            } else {
                console.log('没有登录')
                this.$router.push('/')
            }
        },
        created() {

        },

        methods:{

        }
    }
</script>

<style scoped>
    #header{
        height: 60px;
    }
#container{
    min-height: 500px;
    display: flex;
}
    #aside {
        width: 300px;
    }
    #main {
       width: 100%;
    }
</style>
