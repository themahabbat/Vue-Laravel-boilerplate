export default {
      
   replacedTitle: state => state.title.replaceAll(':]', '(computed)'),

   auth: state => state.token !== null,
   
}