export default {
	increment (state) {
	  state.count++
	},
	changeName (state,payload){
	  Object.assign(state,payload)
	}
  }
