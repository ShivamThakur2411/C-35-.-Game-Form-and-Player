class Player{
	constructor(){

	}
	getCount(){
		var playerCountRef = database.ref('playerCount');
		playerCountRef.on("value", (data)=>{
			playerCount = data.val();
		})
	}
	update(name){
		var playerIndex = "player" + playerCount;

		database.ref(playerIndex).set({
			name: name
		})
	}
	updateCount(Count){
		database.ref('/').update({
			playerCount: Count
		})
	}
}