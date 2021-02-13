const app = new Vue({
    el: '#main',
    data :{
        tarea: null,
        tareas: [
            {titulo: 'Aprender ES6', completado: false},
            {titulo: 'Aprender React', completado: true},
            {titulo: 'Aprender JS', completado: false},
            {titulo: 'Aprender gatsby', completado: false},
        ]
    },
    methods: {
        agregarTarea(){
            this.tareas.unshift({titulo: this.tarea, completado: false})
        },
        completarTarea(tarea){
            tarea.completado = !tarea.completado
        }
    },
    computed: {
        mostrarCompletadas(){
            return this.tareas.filter(item => item.completado)
        },
        mostrarIncompletadas(){
            return this.tareas.filter(item => !item.completado)
        },
        mostrarPorTitulo(){
            return this.tareas.filter(item => item.titulo.includes(this.tarea))
        }

    },
})