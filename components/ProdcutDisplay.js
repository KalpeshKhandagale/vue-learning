app.component('prodcut-display', {
    props : {
        premium : {
            type : Boolean,
            required : true 
        }
    },

    template : 
    // html
    `<div class="prodcut">
                <div class="product_img">
                    <img :src="image" :class="{'out-of-class-img' : !inStock}" alt="">
                </div>
                <div class="prodcut_descr">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <div class="divider"></div>
                    <p v-if="inStock">In Stock</p>
                    <!-- <p v-else-if="inventry <= 10 && inventry > 0">Almost sold out!</p> -->
                    <p v-else>Out of Stock</p>
                    <p>Shipping : {{ shipping }}</p>
                    <div class="divider"></div>
                    <p v-if="onSale">{{ sale }}</p>
                    <p v-else>Ohh not on Sale</p>
                    <div class="divider"></div>
                    <ul>
                        <li v-for="detail in details" :key="detail">{{ detail }}</li>
                    </ul>
                    <div class="divider"></div>
                    <div class="product_color" v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" :style="{backgroundColor: variant.color}"></div>
                    <div class="divider"></div>
                    <div v-for="size in sizes">{{ size }}</div>
                    <div class="divider"></div>
                    <button @click="addToCart" :disabled="!inStock" :class="{disable : !inStock}">Add to Cart</button>
                    <button @click="removeCartValue">Remove from Cart</button>
                </div>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list> <br/><br/>
            <review-form @review-submitted="addReview"></review-form>
            `,

            data(){
                return {
                    product : 'Shoes',
                    brand : 'Vue Mastery',
                    description : 'Lightweight knit wraps foot, foam midsole, rubber outsole, plush lining, soft sockliner.',
                    selectedVariant : 0,
                    url : 'https://www.google.com',
                    inventry : 0,
                    onSale : true,
                    details : ['50% cotton', '30% wool', '20% polyester'],
                    variants : [
                        {id : 2234, color : 'Black', image : './images/black.jpg', quantity : 50},
                        {id : 2235, color : 'Red', image : './images/red.jpg', quantity : 0}
                    ],
                    sizes : ['XXL', 'XL', 'L', 'M', 'S'],
                    reviews: []
                }
    },

    methods : {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        removeCartValue(){
            this.$emit('remove-cart', this.variants[this.selectedVariant].id)
        },
        addReview(review){
            this.reviews.push(review)
        }
    },

    computed : {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        sale(){
            if(this.onSale === true){
                return this.brand + ' ' + this.product
            }
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 2.99
        }
    }
})