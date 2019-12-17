import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"
import Cart from "@/components/Cart.vue"
import JumboTron from "@/components/JumboTron.vue"
import Footer from "@/components/Footer.vue"
import Calculator from "@/components/Calculator.vue"
import Account from "@/components/Account.vue"
import Seqsum from "@/components/Seqsum.vue"
import Todo from "@/components/Todo.vue"
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
		{path: '/todo', name: 'todo', component: Todo}
	]
})