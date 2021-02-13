const app = new Vue({
    el: '#main',
    data:{
        conectado: true,
        edad: 18,
        lista: ['Mauricio', 'Maurizio', 'Mauri'],
        listaPersonas: [
            {nombre: 'Mauricio', edad: 21},
            {nombre: 'Maurizio', edad: 22},
            {nombre: 'Mauri', edad: 23},
        ]
    }
})