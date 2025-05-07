import express from 'express';
import { contactCreate, contactDelete, getAllContactDetails, getSingleDetailByID } from '../controlls/contact.js';

const contactrouter = express.Router();
contactrouter.post("/contactCreate", contactCreate)
contactrouter.get("/getAllContactDetails", getAllContactDetails)
contactrouter.post("/getSingleDetailByID", getSingleDetailByID)
contactrouter.delete("/contactDelete/:id", contactDelete)

export default contactrouter;
