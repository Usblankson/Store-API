const  mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
     name:{
         ttypr:String,
         required:[true,'product name must be provided']
     },
     price:{
         type:Number,
         required:[true, 'product price must be provided']
     },
     featured: {
         type: Boolean,
         default: false,
     },
     rating: {
         type: Number,
         default: 4.5,
     },
     createdAt: {
         type: Date,
         default: Date.now()
     },
     company: {
         type: String,
         ennum: {
             values:['Techgram', 'Vold', 'Maxim', 'EJ Digitech'],
             message: '{VALUE} is not supported',
            },
        // enum:['Techgram', 'Vold', 'Maxim', 'EJ Digitech']
     },
})

module.exports = mongoose.model('product', productSchema)

