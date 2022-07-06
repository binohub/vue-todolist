const list = new Vue(
    {
        el: '#root',
        data: {
            // nuovo item da aggiungere
            newToDo: "",
            todos: [
                {
                    text: 'fare i compiti',
                },
                {
                    text: 'fare la spesa',
                },
                {
                    text: 'fare il bucato',
                }
            ],

        },
        methods: {
            addNewToDo: function () {
                if (this.newToDo.length > 0) {
                    this.todos.push(
                        {
                            text: this.newToDo,
                        },
                    )
                    console.log(this.todos);
                }
                this.newToDo = "";
            },
            
        },
    },
);