import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
      
        trim: true

    },
    email: {
        type: String,
       
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
       
        trim: true
    },
    subject: {
        type: String,

        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
