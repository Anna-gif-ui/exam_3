
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

var sliderB = new Slider("#ex18b", {
	min: 0,
	max: 50000,
	value: [3, 6],
	labelledby: ['ex18-label-2a', 'ex18-label-2b']
});

var slider = new Slider("#ex13", {
    ticks: [1, 3, 7, 10, 16],
    ticks_labels: [],
    ticks_snap_bounds: 30
});