///////////////////////////////////////////////////////////
// Our schema and model for the book resource
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Import our dependencies
///////////////////////////////////////////////////////////
const mongoose = require('./connection')

///////////////////////////////////////////////////////////
// Import user model for populate
///////////////////////////////////////////////////////////
// Nit: remove unneeded import
const User = require('./user')

///////////////////////////////////////////////////////////
// Import commentSchema
//////////////////////////////////////////////////////////
const commentSchema = require('./comment')


///////////////////////////////////////////////////////////
// Destructure the schema and model constructors from mongoose
///////////////////////////////////////////////////////////
const { Schema, model } = mongoose


///////////////////////////////////////////////////////////
// Our schema and model for the craft resource
///////////////////////////////////////////////////////////
const craftSchema = new Schema({
	name: { type: String, required: true },
	materials: { type: String, required: true },
	inHand: { type: Boolean, required: false },
	stored: { type: String, required: true },
	time: { type: String, required: true },
	owner: {
		type: Schema.Types.ObjectID,
		ref: 'User',
	},
	comments: [commentSchema]
}, { timestamps: true })

const Craft = model('Craft', craftSchema)

/////////////////////////////////
// Export our Models
/////////////////////////////////
module.exports = Craft
