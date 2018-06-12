console.log('runner loaded')
MathJax.Hub.Config({
    tex2jax: {inlineMath: [["$&","&$"]]}
  });

Vue.component('equation', {
  props:['equation', 'id', 'bookPage','label','description'],
  template:`
  <div class='equation-block'>
    <h4>{{id}}</h4>
    <span>$&{{equation}}&$</span>
    <p>
      <span>page {{bookPage}}</span>
      <span>{{label}}</span><br>
      <span>{{description}}</span>
    </p>
  </div>
  `,
})

Vue.component('equation-list',{
  template:`
  <div class='equation-list'>
    <equation v-for='(equation, index) in equations'
      v-bind:equation='equation.equation'
      v-bind:id='equation.id'
      v-bind:bookPage='equation.bookPage'
      v-bind:description='equation.description'
      v-bind:label='equation.label'
      v-bind:key='equation.id'>
    </equation>
  </div>
  `,
  data:function(){ return {equations:equations}}
})
const list = new Vue({el:'#mainList'})
