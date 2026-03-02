import mongoose from "mongoose";


const subscriptionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,

    },
    currency: {
        type: String,
        enum: ['INR', 'USD',],
        default: "INR"
    },
    category: {
        type: String,
        required: true,
        enum: ['Entertainment', 'Software', 'Health', 'Other']
    },
    billingCycle: {
        type: String,
        enum: ['monthly', 'yearly'],
        default: "monthly",
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    nextRenewal: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Active', 'Cancelled'],
        default: 'Active'
    }
})


const subscriptionModel = mongoose.model('subscription', subscriptionSchema)

export default subscriptionModel