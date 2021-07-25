const app = Vue.createApp({
    data() {
        return {
            foods: [
                { type: 'steak', calories: '679', img: 'assets/steak.png', isShowMore: false, ingredients: {
                    name: 'NY Strip Steak',
                    name2: '1/4 Stick Unsalted Butter',
                    name3: 'Salt',
                    name4: 'Pepper',
                    name5: 'Garlic',
                }
                },
                { type: 'fried rice', calories: '100', img: 'assets/friedrice.png', isShowMore: false, ingredients: {
                    name: 'White Rice',
                    name2: 'Salt',
                    name3: '1 Egg',
                    name4: 'Green Onion',
                    name5: 'Peas',
                    name6: 'Carrots'
                } 
                },
                { type: 'pizza', calories: '200', img: 'assets/pizza.png', isShowMore: false, ingredients: {
                    name: 'Tomato Sauce',
                    name2: 'Flour',
                    name3: 'Salt',
                    name4: 'Olive Oil',
                    name5: 'Cheese',
                    name6: 'Water'
                }
                },
                { type: 'samosa', calories: '262', img: 'assets/samosa.png', isShowMore: false, ingredients: {
                    name: 'Flour',
                    name2: 'Potato',
                    name3: 'Onions',
                    name4: 'Chicken',
                    name5: 'Oil',
                    name6: 'Butter'
                }},
            ]
        }
    },
    methods: {
        changeFood(food) {
            this.food = food
        },
        toggleShowMore(food) {
            food.isShowMore = !food.isShowMore
        },
    },
})

app.mount('#app')