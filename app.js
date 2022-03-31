const app = Vue.createApp({
    data: function () {
		return {
			primaryGoal1: "have a <strong>happy life!</strong>",
			primaryGoal2: "make a lot of <strong>money</strong>",
			primaryGoal3: "have a <strong>strong mind</strong>",
			planLink: "https://trello.com/"
		}
	},
	methods: {
        outputMessage() {
			const number1 = Math.random()
			if (number1 < 0.3) {
				return this.primaryGoal1
			} else if (number1 < 0.6) {
				return this.primaryGoal2
			} else {
				return this.primaryGoal3
			}
		}
	}
})
app.mount("#my-planner")