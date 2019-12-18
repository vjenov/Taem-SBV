import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"
import Cart from "@/components/contents/Cart.vue"
import JumboTron from "@/components/cmm/JumboTron.vue"
import Footer from "@/components/cmm/Footer.vue"
import Calculator from "@/components/contents/Calculator.vue"
import Account from "@/components/contents/Account.vue"
import Seqsum from "@/components/contents/Seqsum.vue"
import Todo2 from "@/components/Todo2.vue"
import Parent from "@/components/slot/Parent.vue"
Vue.use(Router)
export default new Router({
	mode: 'history',
	routes : [
		{path: '/', name : 'home', component: Home},
		{path: '/cart', name: 'cart', component: Cart},
		{path: '/jumboTron', name: 'jumboTron', component: JumboTron},
		{path: '/footer', name: 'footer', component: Footer},
		{path: '/calculator', name: 'calculator', component: Calculator},
		{path: '/account', name: 'account', component: Account},
		{path: '/seqsum', name: 'seqsum', component: Seqsum},
		{path: '/todo2', name: 'todo2', component: Todo2},
		{path: '/parent', name: 'parent', component: Parent}
	]
})