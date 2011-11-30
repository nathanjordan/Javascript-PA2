

function parseFile( file ) {
	
	var reader = new FileReader();
	
	reader.readAsBinaryString( file );
	
	var textContents = reader.result;
	
	var v1Data = parseV1( textContents );
	
	var v2Data = parseV2( textContents );
	
	printResults( v1Data , v2Data );
	
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
	
	var data = new Object();
	
	data.title = title;
	
	data.artist = artist;
	
	data.album = album;
	
	data.year = year;
	
	data.comment = comment;
	
	data.track = track;
	
	data.genre = genre;
	
	return data;
	}
	
function parseV2( text ) {
	
	var count = 0;
	
	var indexArray = new Array();
	
	var iCareTags = myTags.clone();
	
	//tag count & indices
	for( var i = 0 ; i < tags.length ; i++ ) {
	
		var j = text.indexOf( tags[i] );
		
		if( j != -1 ) {
			
			count += 1;
			
			var tagArr = [ tags[i] , j ];
			
			indexArray.push( tagArr );
			
			}
		
		}
	
	//sort array
	
	indexArray.sort(sortNumber);
	
	for( var k = 0 ; k < iCareTags.length ; k++ ) {
		
		for( var l = 0 ; l < indexArray.length ; l++ ) {
			
			if( iCareTags[k][1] == indexArray[l][0]) {
				
				try {
					iCareTags[k][2] = trimFat( text.slice( indexArray[l][1] + 4 , indexArray[l+1][1] ) );
					
					}
					
				catch( e ) {
					
					iCareTags[k][2] = trimFat( text.slice( indexArray[l][1] + 4, indexArray[l][1] + 10 ) );
					
					}
				
				}
			
			}
		
		}
		
	return iCareTags;
	
	}

function trimFat( str ) {
	
	var tempStr = ""
	
	for( var i = 0 ; i < str.length ; i++ ) {
		
		if( str.charCodeAt(i) > 31)
			tempStr = tempStr + str.charAt(i);
			
		}
		
	return tempStr;
	
	}
	
function sortNumber( a , b ) {

	return a[1] - b[1];
	
	}

Object.prototype.clone = function() {
  var newObj = (this instanceof Array) ? [] : {};
  for (i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObj[i] = this[i].clone();
    } else newObj[i] = this[i]
  } return newObj;
};

var myTags = [["Album","TALB"],["Artist","TPE1"],["Title","TIT2"],["Year","TYER"],["Track","TRCK"],["Genre","TCON"],["Comments","COMM"]]

var tags =  ["UFID","TIT1","TIT2","TIT3","TALB","TOAL","TRCK","TPOS","TSST","TSRC","TPE1","TPE2","TPE3","TPE4","TOPE","TEXT","TOLY","TCOM","TMCL","TIPL","TENC","TBPM","TLEN","TKEY","TLAN","TCON","TFLT","TMED","TMOO","TCOP","TPRO","TPUB","TOWN","TRSN","TRSO","TOFN","TDLY","TDEN","TDOR","TDRC","TDRL","TDTG","TSSE","TSOA","TSOP","TSOT","TXXX","TXXX","WCOM","WCOP","WOAF","WOAR","WOAS","WORS","WPAY","WPUB","WXXX","MCDI","ETCO","MLLT","SYTC","USLT","SYLT","COMM","RVA2","EQU2","RVRB","APIC","GEOB","PCNT","POPM","RBUF","AENC","LINK","POSS","OWNE","COMR","ENCR","GRID","PRIV","SIGN","SEEK","ASPI","TYER","EQUA","IPLS","RVAD","TDAT","TIME","TORY","TRDA","TSIZ"]
