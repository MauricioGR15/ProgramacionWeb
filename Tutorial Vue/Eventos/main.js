const app = new Vue({
    el:'#main',
    data:{
        tarea: null,
        tareas: [
            'Aprender ES6',
            'Aprender React',
            'Hacer tareas'
        ]
    },
    methods: {
        agregarTarea(){
            this.tareas.unshift(this.tarea)
        }
    }
})