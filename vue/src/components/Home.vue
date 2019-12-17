<template>
	<div>
		<Nav></Nav>
		<JumboTron></JumboTron>
		<Footer></Footer>
	</div>
</template>	
<script>
import Nav from '@/components/Nav.vue'
import JumboTron from "@/components/JumboTron.vue"
import Footer from "@/components/Footer.vue"
export default{
	name: 'home',
	components : {
		Nav, JumboTron, Footer
	},
	data(){
		return {
			msg : '홈화면으로 들어옴 !!'
		}
	}
}
</script>
<style scoped></style>