app.component('prodcut-details', {
    props : {
        details : {
            type : Boolean,
            required : true 
        }
    },

    template : 
    // html
    `<div class="prodcut">
               details : {{ des }}
                
            </div>`,

            data(){
                return {
                    
                }
    },

    methods : {
       
    },

    computed : {
        
        des(){
            if(this.details){
                return 'This prodcut are good'
            }
            return 2.99
        }
    }
})