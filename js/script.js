const list = new Vue(
    {
        el: '#root',
        data: {
            // nuovo item da aggiungere
            newToDo: "",
            todos: [
            ],

        },
        methods: {
            addNewToDo: function (newText) {
                if (this.newToDo.length > 0 && this.newToDo.length < 40) {
                    this.todos.push(
                        {
                            text: newText,
                            done: false,
                        },
                    )
                    console.log(this.todos);
                }else{
                    console.warn(`il To Do deve essere superiore a 0 e inferiore ai 40 caratteri`);
                }
                this.newToDo = "";
            },
            removeNewToDo: function (indexToRemove) {
                this.todos.splice(indexToRemove, 1);
            },
            
        },
    },
);
