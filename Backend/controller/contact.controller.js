import Contacts from "../model/contact.schema.js";

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contacts.find();

        res.status(200).json(contacts)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
export const getContact = async (req, res) => {
    try {
        const contact = await Contacts.findOne({ _id: req.params.id });

        res.status(200).json(contact)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
export const addContact = async (req, res) => {

    const { name, email, message } = req.body;
    try {
        const createContact = new Contacts({ name, email, message })

        createContact.save()
        res.status(201).json({ message: "Application Successfully Send" })
    } catch (error) {
        req.status(400).json(error.message)
    }
}

