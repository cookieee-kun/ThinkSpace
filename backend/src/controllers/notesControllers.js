import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
	try {
		const notes = await Note.find().sort({ createdAt: 1});
		res.status(200).json({ success: true, data: notes });
	} catch (error) {
		res.status(500).json({ success: false, message: "Failed to fetch notes", error: error.message });
	}
}; 

export const getNoteById = async (req, res) => {
	try {
		const note = await Note.findById(req.params.id);
		if(!note) return res.status(404).json({message: "user does not exist!"});
		res.status(200).json(note);
	} catch (error){
	res.status(500).json({ success: false, message: "Error in getNoteById controller", error: error.message})
	}
};

export const createNote = async (req, res) => {
	try {
		const { title, content } = req.body
		const newNote = new Note({ title, content })
		const savedNote = await newNote.save();
		res.status(201).send(savedNote)
	} catch (error) {
		res.status(500).json({ success: false, message: "Failed to create note, error in createNote controller", error: error.message });
	}
}

export const updateNote = async (req, res) => {
	try {
		const { title, content} = req.body
		const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, {new: true})
	if(!updatedNote) return res.status(404).json({message: "user not found"})
		res.status(200).json(updatedNote)
	} catch (error){	
		res.status(500).json({ success: false, message: "Failed to create note, error in updateNote controller", error: error.message });
	}
}

export const deleteNote = async (req, res) => {	
	try {
		const note = await Note.findByIdAndDelete(req.params.id)
		if(!note) return res.status(404).json({message: "user not found"})
		res.status(200).json({message: `user deleted successfully`})
	} catch (error){
			res.status(500).json({ success: false, message: "Failed to delete note, error in updateNote controller", error: error.message });
	}
}
