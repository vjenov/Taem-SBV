<template>
<div>
  <header>
    <slot name="header" :hello="childData" :close="close">
      <strong>기본 타이틀</strong>
      <button>기본 버튼</button>
    </slot>
  </header>
  <div>
    <slot name="content">
      <p>자식 콘텐츠</p>
    </slot>
  </div>
</div>
</template>
<script>
export default {
	name: "baseModal",
	data() {
		return {
			childData : "Hello",
			active : false
		}
	},
	methods : {
		close() {
			this.active = false
		}
	}
}
</script>
<style scoped>

</style>