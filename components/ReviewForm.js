app.component('review-form', {
    template :
    `
        <form class="review-form" @submit.prevent="onSubmit">
            <div class='fieldset'>
                <label for='text1'>Name: </label>
                <input type='text' id='name' placeholder='Name' v-model="name"/>
            </div>

            <br/><br/>

            <div class='fieldset'>
                <label for='text1'>Review: </label>
                <input type='text' id='review' placeholder='Please type review' v-model="review"/>
            </div>

            <br/><br/>

            <div class='fieldset'>
                <label for='select1'>Rating: </label>
                <select id='Rating' placeholder='Rating' v-model.number="rating">
                    <option value=''>Select</option>
                    <option value='One'>1</option>
                    <option value='Two'>2</option>
                    <option value='Three'>3</option>
                    <option value='Four'>4</option>
                    <option value='Five'>5</option>
                </select>
            </div>

            <br/><br/>

             <div class='fieldset'>
                <label for='text1'>Would you recommend this product? </label>
                <input type='text' id='prodcut' placeholder='Please type review' v-model="product"/>
            </div>

            <br/><br/>

            <div class='fieldset'>
                <input type='submit' id='submit' value='Submit'/>
            </div>
        </form>
    `,

    data(){
        return {
            name : '',
            review : '',
            rating : null,
            product: '' 
        }
    },

    methods: {
        onSubmit(){
            if(this.name === '' || this.review === '' || this.rating === null || this.product === ''){
                alert('Review is incomplete. Please fill out every field.')
                return
            }

            let prodcutReview = {
                 name : this.name,
                 review : this.review,
                 rating : this.rating,
                 product : this.product
            }

            this.$emit('review-submitted', prodcutReview)

            this.name = ''
            this.review = ''
            this.rating = null,
            this.product = ''
        }
    }
})