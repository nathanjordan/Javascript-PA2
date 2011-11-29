

function parseFile( file ) {
	
	var reader = new FileReader();
	
	reader.readAsBinaryString( file );
	
	var textContents = reader.result;
	
	parseV1( textContents );
	
	//parseV2( textContents );
	
	}
	
function parseV1( text ) {
	
	var index = text.indexOf( "TAG" ) + 3;
	
	if( index == -1 )
		return;
	
	var title = trimFat( text.slice( index , index + 30 ) );
	
	index += 30;
	
	var artist = trimFat( text.slice( index , index + 30 ) );
	
	index += 30;
	
	var album = trimFat( text.slice( index , index + 30 ) );
	
	index += 30;
	
	var year = trimFat( text.slice( index , index + 4 ) );
	
	index += 4;
	
	var comment = trimFat( text.slice( index , index + 28 ) );
	
	index += 28;
	
	var track = text[ index ];
	
	index += 1;
	
	var genre = text[ index ];
	
	var jjj;
	
	}
	
function parseV2( text ) {
	
	var titleIndex = text.indexOf( "TIT2" );
	
	var titleSize = binary.charCodeAt( titleIndex + 4 );
	
	var jjj;
	}

function trimFat( str ) {
	
	var tempStr = ""
	
	for( var i = 0 ; i < str.length ; i++ ) {
		
		if( str.charCodeAt(i) > 31)
			tempStr = tempStr + str.charAt(i);
			
		}
		
	return tempStr;
	
	}
