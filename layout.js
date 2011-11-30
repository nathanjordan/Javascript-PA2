function printResults( v1Data , v2Data) {
	
	$(".hidden").removeClass("hidden");
	
	//v1 Stuff
	$("#v1Title").html( v1Data.title );
	
	$("#v1Artist").html( v1Data.artist );
	
	$("#v1Album").html( v1Data.album );
	
	$("#v1Year").html( v1Data.year );
	
	$("#v1Comment").html( v1Data.comment );
	
	$("#v1Track").html( v1Data.track );
	
	$("#v1Genre").html( v1Data.genre );
	
	//v2 stuff
	
	$("#v2Title").html( v2Data[2][2] );
	
	$("#v2Artist").html( v2Data[1][2] );
	
	$("#v2Album").html( v2Data[0][2] );
	
	$("#v2Year").html( v2Data[3][2] );
	
	$("#v2Comment").html( v2Data[6][2] );
	
	$("#v2Track").html( v2Data[4][2] );
	
	$("#v2Genre").html( v2Data[5][2] );
	
	}
