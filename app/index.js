Vue.component('app', {
   props: ['datos'],
   template:
   `<div class="ui container">
      <slot><h1></h1></slot>
      <movies></movies>
   </div>`,
})

Vue.component('movies', {
   props: ['datos'],
   template:
      `<div class="ui three column grid">
         <div class="row">
            <div class="column" v-for="movie in movies"><br>
               <div>
                  <div class="ui card">
                     <div class="content">
                        <titulo-movie class="header" :titulo="movie"></titulo-movie>
                     </div>
                     <div class="content">
                        <descripcion-movie :descripcion="movie"></descripcion-movie>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>`,
   created(){
      var self = this;
      axios.get('https://ghibliapi.herokuapp.com/films')
         .then(function (response){
            self.movies = response.data;
         })
         .catch(function (error){
            console.error(error);
         });
   },
   data(){
      return {
      movies: [],
      }
   }
});

Vue.component('titulo-movie', {
   props: ['titulo'],
   template:
      `<h3>{{titulo.title}}</h3>`,
})

;Vue.component('descripcion-movie', {
   props: ['descripcion'],
   template:
      `<h3>{{descripcion.description}}</h3>`,
});




new Vue({
   el: 'main',
});
