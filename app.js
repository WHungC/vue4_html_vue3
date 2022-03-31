const app = Vue.createApp({
    data: function () {
        return {
            primaryGoal: "have a happy life!",
            planLink:"https://trello.com/"
        }
    }
})
app.mount("#my-planner")