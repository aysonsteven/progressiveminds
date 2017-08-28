import axios from 'axios';
export default {
    name: 'login',
    data () {
      
      return {
        datas: [],
        msg: 'Welcome to Our Website'
      }
    },
    methods:{
      getdata(){
        axios.post(`http://localhost/slimbackend/public/hello/worldghfghf`)
        .then( res =>{
          console.log( res.data );
        })
      }
    }
}