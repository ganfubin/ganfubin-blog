<template>
  <div class="pd-all">
  	<div @click="testToast">home</div> 
  	
  </div>
</template>

<script>
    export default {
    	name: 'home',
	    data() {
	        return {
	          
	        }
	    },
	    methods:{
	    	testToast(){
	    		this.$toast('test');
	    	}
	    }
    }
</script>