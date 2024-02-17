import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.URI_DB_MONGO)
        console.log('DB Connection success ');

        mongoose.connection.on('error', (err) => {
            console.log('Error', err);
        })

        mongoose.connection.on('connecting', () => {
            console.log('Connecting....');
        })

        mongoose.connection.on('connected', () => {
            console.log('Connected');
        })


    } catch (error) {
        console.log(error);
    }
}


export default connectDb