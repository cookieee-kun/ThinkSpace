import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
	try {
		const notes = await Note.find();
		res.status(200).json({ success: true, data: notes });
	} catch (error) {
		res.status(500).json({ success: false, message: "Failed to fetch notes", error: error.message });
	}
};

export const createNote = (req, res) => {
	res.status(201).json({message: "Note created successfully"})
}

export const updateNote = (req, res) => {
	const { id } = req.params;
	res.status(200).json({message: `Note with id: ${id} updated successfully`})
}

export const deleteNote = (req, res) => {
	const { id } = req.params;
	res.status(200).json({message: `Note with id: ${id} deleted successfully`})
}
