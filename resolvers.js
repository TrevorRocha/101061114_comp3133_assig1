const Booking = require('./models/Booking');
const Listing = require('./models/Listing');
const User = require('./models/User');

exports.resolvers = {
    Query:{
        getAllListings: async (parent, args) => {
            return await Listing.find({})
        },
        getListingsByName: async (parent, args) =>{
            return await Listing.find({ listing_title: { $regex: args.name, $options: 'i'}})
        },
        getListingsByCity: async (parent, args) =>{
            return await Listing.find({ city: { $regex: args.city }})
        },
        getListingsByPostalCode: async (parent, args) =>{
            return await Listing.find({ postal_code: { $regex: args.postal_code, $options: 'i'}})
        },
        getAllAdminListings: async(parent, args) => {
            if(!args.userId) {
                return
            }
            const user = await User.findById(args.userId)
            if(!user){
                return
            }
            if(user.type != 'admin'){
                return
            }
            return await Listing.find({ username: user.username })
        },
        getAllUserBookings: async(parents, args) => {
            if(!args.userId) {
                return
            }
            const user = await User.findById(args.userId)
            if(!user){
                return
            }
            return await Booking.find({ username: user.username })
        },
    },

    Mutation:{
        createNewUser: async (parent, args) => {
            console.log(args)
            let newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            })
            return newUser.save()
        },
        login: async (parent, args) => {
            const userFind = await User.findOne({username: args.username})
            if (!userFind) {
                return
            }
            if (userFind.password != args.password) {
                return
            }
            return userFind._id
        },
        createNewListing: async (parent, args) => {
            console.log(args)
            let newListing = new Listing({
                listing_id : args.listing_id,
                listing_title : args.listing_title,
                description : args.description,
                street : args.street,
                city : args.city,
                postal_code : args.postal_code,
                price : args.price,
                email : args.email,
                username : args.username,
            });
            return newListing.save();
        },
        createNewBooking: async (parent, args) => {
            console.log(args)
            let newBooking = new Booking({
                listing_id : args.listing_id,
                booking_id : args.booking_id,
                booking_date : args.booking_date,
                booking_start : args.booking_start,
                booking_end : args.booking_end,
                username : args.username
            });
            return newBooking.save();
        }
    }
}