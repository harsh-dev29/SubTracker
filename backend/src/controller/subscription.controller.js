import subscriptionModel from "../models/subscription.model.js";
import cron from 'node-cron'

export async function addSubscription(req, res) {
    const { name, price, currency, startDate, status, category, billingCycle = 'monthly' } = req.body
    const userId = req.user.id
    let start = req.body.startDate
    let expiryDate = new Date(start)
    if (billingCycle == 'monthly') {
        expiryDate.setMonth(expiryDate.getMonth() + 1)
    } else if (billingCycle == 'yearly') {
        expiryDate.setFullYear(expiryDate.getFullYear() + 1)
    }

    const newSubscription = await subscriptionModel.create({
        user: userId,
        name,
        category,
        price,
        startDate,
        billingCycle,
        nextRenewal: expiryDate

    })

    res.status(201).json({
        message: "Subscription added successfully",
        newSubscription,
    })




}

export async function getAllSub(req, res) {
    const user = req.user

    const allSubscriptions = await subscriptionModel.find({
        user: req.user.id
    }).populate('user')
    res.status(200).json({
        message: 'all subs fetched successfully',
        allSubscriptions
    })

}

export async function updateSub(req, res) {

    const { name, price, currency, category, billingCycle, startDate, status } = req.body
    const { id } = req.params
    const subscription = await subscriptionModel.findByIdAndUpdate({ _id: id }, {
        name, price, currency, category, billingCycle, startDate, status
    }, { new: true })

    return res.status(200).json({
        message: 'Subscription updated successfully',
        subscription
    })

}

export async function deleteSub(req, res) {

    const { id } = req.params

    const deleteSub = await subscriptionModel.deleteOne({ _id: id })

    res.status(200).json({ message: "Subscription delted successfully", deleteSub })

}

export async function expiringSubs(req, res) {

    const today = new Date()

    const startOfTargetDay = new Date(today)
    startOfTargetDay.setDate(today.getDate() + 3);
    startOfTargetDay.setHours(0, 0, 0, 0); // Start of the day

    const endOfTargetDay = new Date(today)
    endOfTargetDay.setDate(today.getDate() + 3);
    endOfTargetDay.setHours(23, 59, 59, 999); // Start of the day

    const expiringSubs = await subscriptionModel.find({
        nextRenewal: {
            $gte: startOfTargetDay,
            $lte: endOfTargetDay
        }
    }).populate('user', 'email')



    res.status(200).json({ message: 'expiring subs are', expiringSubs })

}

export async function totalSpend(req, res) {

    const user = req.user

    try {

        const subscriptions = await subscriptionModel.find({ user: user.id })

        const monthlyPrice = subscriptions.reduce((acc, sub) => {
            const price = sub.billingCycle === 'yearly'
                ? Number(sub.price) / 12
                : Number(sub.price);
            return acc + price;
        }, 0);

        res.status(200).json({
            monthlyPrice
        })
    } catch (error) {
        console.log("Error while calculating the Sum", error)
    }
}

