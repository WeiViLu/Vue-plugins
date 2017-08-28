<template>
	<div>
		介绍页
		<button @click="handleClick">跳转到 user</button>
	</div>
</template>
<script>
	export default{
		methods:{
			handleClick(){
				// this.$router.replace('/user/123');
				this.$router.go(-2);
			}
		}
	}
</script>
<style>
	
</style>