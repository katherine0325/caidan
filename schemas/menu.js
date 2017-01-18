var mongoose = require('mongoose')

var MenuSchema = new mongoose.Schema({
	name:String,
})

MenuSchema.pre('save',function(next){
	next()
})

MenuSchema.statics = {
	fetch:function(cb){
		return this
			.find({})
			.exec(cb)
	},
	findById:function(id,cb){
		return this
			.findOne({_id:id})
			.exec(cb)
	}
}

module.exports = MenuSchema