export default {
	incrementAsync (context) {
	  setTimeout(() => {
		context.commit('increment')
	  }, 1000)
	},
	changeName ({commit},payload){
	  setTimeout(() => {
		commit('changeName',payload)
	  }, 1000)
	}
  }