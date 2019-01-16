<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "system-page",
        created() {
            this.$bread.splice(1);
            this.$bread.push({
                name: "系统管理"
            })
        }
    }
</script>

<style scoped>

</style>