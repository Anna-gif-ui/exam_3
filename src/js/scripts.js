
let app = new Vue({
    el: '#app',

    // data: {
    //     // like: false,
    //     a: 0,
    //     b:0
    //   },
    //   methods: {
    //     addLike(){
    //         if (this.like = true) {
    //             return a++
    //         }
    //         return a--
    //     }
       
            
        
    //   }


    data: {
        a: 0,
        b: 0
    },
    methods: {
        addA() {
            console.log('addA');
            this.a++;
        },

        addB() {
            console.log('addToB');
            this.b++;
        },

       
  
    },

})

// var mySlider = new Slider("input.slider", {

// });





