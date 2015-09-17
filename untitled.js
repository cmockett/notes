// var myArray= [1, 7, 15, 2]
// var result = myArray.map(function(el){
// 	// console.log(el)
// 	return el *2
// })
// console.log(myArray)
// console.log(result)



// var underscoreResult = _.map(myArray, function(el){
// 	return el*2
// })

// console.log(underscoreResult)

// var rtfdString = "Read the F'in Documentation"

// var rtfd = _.reduce(rtfdString, function(el){
// 	var myArray = rtfdString.split(" ")
// 	var newArray = []
// 	// var newArray = []
// 	// console.log (myArray)
// 	for(var i=0;i<myArray.length;i++){
// 		newArray = [i].split(" ")
// 	}
// })

// ANSWER:
// var myString = "Read the F'in Documentation"

// var reduceResult = _.reduce(
// 	myString.split(' '),

// 	function(acronymSoFar, word){

// 		// console.log(word, acronymSoFar)

// 		return acronymSoFar += word[0].toUpperCase() + "."

// 	},

// 	''

// 	)
// console.log(reduceResult)
// Start: "Read the F'in Documentation"
// Goal : 'R.T.F.D.'


// _.find

// var tubers= [
// 	{
// 		name : 'Sweet Potato', 
// 		color : 'Orange', 
// 	}, 
// 	{
// 		name : 'Peruvian Blue Potatoes', 
// 		color: 'Purple',
// 	},
// 	{
// 		name : 'Purple Fingerling Potatoes',
// 		color: 'Purple'
// 	}
// ]
// GOAL - find the tubers that are purple

// var purpleTubers = _.find(tubers, function(){
// 	return _.has(tubers.color === 'Purple')[0]

// })

// ANSWER
// var foundTuber = _.find(tubers, function(currentTuber){
// 	return currentTuber.color ==='Purple'

// })

// console.log(foundTuber)
// non-case-sensitive answer >>>>

// var foundTuber = _.find(tubers, function(currentTuber){
// 	return currentTuber.color.toLowerCase() ==='purple'

// })
// console.log(foundTuber)

//PLUCK

// console.log(_.pluck (tubers, 'color'))

// UNIQ

// console.log(_.uniq(_.pluck (tubers, 'color')))

//CHAIN

// _.uniq(_.pluck (tubers, 'color').join() )
// var chainResult = _.chain(tubers)
// 	.pluck('color')  //<<------this gets passed the tubers array
// 	.uniq()     // <<------this gets passed the array (actually not an array, its a special underscore value) of colors from .pluck('color')
// 	.value()   //<<-----.value ends the chain, chain/value is like the bread to the sandwich

// 	console.log(chainResult)	

var tubers= [
	{
		name : 'Sweet Potato', 
		colors : ['Orange', 'Navajowhite', 'Purple', 'Burlywood'] 
	}, 
	{
		name : 'Peruvian Blue Potatoes', 
		colors: ['Purple', 'Burlywood', 'Red', 'Peruvian Blue'],
	},
	{
		name : 'Purple Fingerling Potatoes',
		colors: ['Purple', 'Black', 'Hammock', 'Goldenrod']
	}
]

// var uniqueColors = _.chain(tubers)
// .pluck('colors')
// .flatten()
// .uniq()
// .value()

// console.log(uniqueColors)

// ROBS ANSWER
console.log(_.chain(tubers)
	.pluck('colors')
	.flatten()
	.uniq()
	.value()
	)