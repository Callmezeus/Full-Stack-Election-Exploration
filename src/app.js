const css = require('./app.css');
import ReactDOM from 'react-dom';

$(document).ready(function() {
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var map = document.getElementById('map');
	try {
	map.setAttribute("height", windowHeight/1.6);
	map.setAttribute("width", windowWidth/1.4);
	}catch(err){
		console.log("At Add to Database");
	}
	var text = document.getElementById('textbox');
	var yearBox = document.getElementById('yearBox');
	var statSelection = document.getElementById('statsSelect');

	var winnerBox = document.getElementById('winnerBox');
	var winnerSelection = document.getElementById('winnerSelection');

	var stateBox = document.getElementById('stateBox');
	var stateSelection = document.getElementById('stateSelection');

	var percentInput = document.getElementById('percentInput');
	var percentInputText = document.getElementById('percentInputText');
	
	var realInput = document.getElementById('realInput');
	var realInputText = document.getElementById('realInputText');

	var yearBoxa = document.getElementById('yearBoxa');
	var yearBoxSelection = document.getElementById('yearBoxSelection');

	var statsSelectAdd = document.getElementById('statsSelectAdd');

	var yearBoxAdd = document.getElementById('yearBoxAdd');
	var yearBoxSelectionAdd = document.getElementById('yearBoxSelectionAdd');

	var stateBoxAdd = document.getElementById('stateBoxAdd');
	var stateSelectionAdd = document.getElementById('stateSelectionAdd');

	var holderPE = document.getElementById('holderPE');
	var holderD = document.getElementById('holderD');
	var holderW = document.getElementById('holderW');

	var submitPE = document.getElementById('submitPE');

	var State_Input = document.getElementById('State_Input');
	var Democratic_Percent_Input = document.getElementById('Democratic_Percent_Input');
	var Republican_Percent_Input = document.getElementById('Republican_Percent_Input');
	var Independent_Percent_Input = document.getElementById('Independent_Percent_Input');
	var Other_Percent_Input = document.getElementById('Other_Percent_Input');
	var Democratic_Votes_Input = document.getElementById('Democratic_Votes_Input');
	var Republican_Votes_Input = document.getElementById('Republican_Votes_Input');
	var Independent_Votes_Input = document.getElementById('Independent_Votes_Input');
	var Other_Votes_Input = document.getElementById('Other_Votes_Input');

	var submitD = document.getElementById('submitD');

	var State_InputD = document.getElementById('State_InputD');
	var White_Percent_Input=document.getElementById('White_Percent_Input');
	var Black_Percent_Input=document.getElementById('Black_Percent_Input');
	var Hispanic_Percent_Input=document.getElementById('Hispanic_Percent_Input');
	var Asian_Percent_Input=document.getElementById('Asian_Percent_Input');
	var AmericanIndian_Percent_Input=document.getElementById('AmericanIndian_Percent_Input');
	var NativeHawaiin_Percent_Input=document.getElementById('NativeHawaiin_Percent_Input');
	var With_Children_Percent_Input=document.getElementById('With_Children_Percent_Input');
	var Without_Children_Percent_Input=document.getElementById('Without_Children_Percent_Input');
	var Male_Percent_Input=document.getElementById('Male_Percent_Input');
	var Female_Percent_Input=document.getElementById('Female_Percent_Input');
	var Median_Income_Input=document.getElementById('Median_Income_Input');
	var Citizen_Percent_Input=document.getElementById('Citizen_Percent_Input');
	var Non_Citizen_Percent_Input=document.getElementById('Non_Citizen_Percent_Input');
	var AdultsUnder55_Input=document.getElementById('AdultsUnder55_Input');
	var AdultsOver55_Input=document.getElementById('AdultsOver55_Input');
	var FullTime_Percent_Input=document.getElementById('FullTime_Percent_Input');
	var PartTime_Percent_Input=document.getElementById('PartTime_Percent_Input');
	var Unemployed_Percent_Input=document.getElementById('Unemployed_Percent_Input');
	var Education_Rank_Input=document.getElementById('Education_Rank_Input');

	var submitW = document.getElementById('submitW');

	var Name_Input = document.getElementById('Name_Input');
	var VP_Input = document.getElementById('VP_Input');
	var Party_Input =document.getElementById('Party_Input');
	var Popular_Vote = document.getElementById('Popular_Vote');
	var Year_InputW = document.getElementById('Year_InputW');
	var textboxAdd = document.getElementById('textboxAdd');

	$('#goToAdd').click(function(){
		openInNewTab("/add.html");
	});
	$('#statsSelectAdd').change(function(){
		yearBoxAdd.style.display ="none";
		stateBoxAdd.style.display = "none";
		holderPE.style.display = "none";
		holderD.style.display = "none";
		holderW.style.display = "none";
		submitD.style.display = "none";
		submitPE.style.display = "none"; 
		submitW.style.display = "none";
		if(statsSelectAdd.value == "Previous_Elections"){
			yearBoxAdd.style.display = "block";
		}else if(statsSelectAdd.value == "Demographics"){
			holderD.style.display = "block";
			submitD.style.display = "block";
		}else if(statsSelectAdd.value == "Winners"){
			holderW.style.display = "block";
			submitW.style.display = "block";
		}
	});
	$('#yearBoxAdd').change(function(){
		if(statsSelectAdd.value == "Previous_Elections"){
			holderPE.style.display = "block";
			submitPE.style.display = "block";
		}else if(statsSelectAdd.value == "Winners"){
			holderW.style.display = "block";
			submitW.style.display = "block";
		}
	});

	$('#statsSelect').change(function(){
		winnerBox.style.display = "none";
		stateBox.style.display = "none";
		percentInput.style.display = "none";
		realInput.style.display = "none";
		yearBoxa.style.display = "none";
		realInputText.value="";
		percentInputText.value="";
		if(statSelection.value == "Winners of Elections"){
			winnerBox.style.display = "block";
			text.value = "select * from Winners";
		}else if(statSelection.value == "Demographics of a state"){
			stateBox.style.display = "block";
			text.value = "select * from Demographics";
		}else{
			yearBoxa.style.display = "block";
			if(statSelection.value.includes("Percent")){
				percentInput.style.display = "block";
				if(yearBoxSelection.value!="ALL YEARS"){
					text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year = " + yearBoxSelection.value ;
				}else{
					text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year >= 1912";
				}
			}else{
				realInput.style.display = "block";
				if(yearBoxSelection.value!="ALL YEARS"){
					text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year = " + yearBoxSelection.value ;
				}else{
					text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year >= 1912";
				}
			}
			
		}


	});
	$('#winnerBox').change(function(){
		text.value = "select * from Candidates where Name = '" + winnerSelection.value + "'";
	});
	$('#stateBox').change(function(){
		if(stateSelection.value == "ALL STATES"){
			text.value = "select * from Demographics";
		}else{
			text.value = "select * from Demographics where State = '" + stateSelection.value + "'";
		}
	});
	$('#yearBoxa').change(function(){
		if(yearBoxSelection.value!="ALL YEARS"){
			text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year = " + yearBoxSelection.value;
		}else{
			text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year >= 1912";
		}
	});
	$('#realInputText').keyup(function(){
		if(yearBoxSelection.value!="ALL YEARS"){
			text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year = " + yearBoxSelection.value + " AND " + statSelection.value + " >= " +realInputText.value;
		}else{
			text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year >= 1912" + " AND " + statSelection.value + " >= " +realInputText.value;
		}
	});
	$('#percentInputText').keyup(function(){
		if(yearBoxSelection.value!="ALL YEARS"){
			text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year = " + yearBoxSelection.value + " AND " + statSelection.value + " >= " +percentInputText.value;
		}else{
			text.value = "select Year, State, " + statSelection.value + " from Previous_Elections " + "where Year >= 1912" + " AND " + statSelection.value + " >= " +percentInputText.value;
		}
	});

	setInterval(function(){
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
	  	try {
	  		map.setAttribute("height", windowHeight/1.6);
	  		map.setAttribute("width", windowWidth/1.4);
	  	} catch (err){
	  		
	  	}
	  },100);
	var responseFeed;
	var tableHeaders=[];
	var dataTable=[[]];
	var statesData;
	try{
	var AL = document.getElementById('map_1');
	AL.name = "Alabama";
	AL.visited = false;
	var AK = document.getElementById('map_2');
	AK.name = "Alaska";
	AK.visited = false;
	var AZ = document.getElementById('map_3');
	AZ.name = "Arizona";
	AZ.visited = false;
	var AR = document.getElementById('map_4');
	AR.name = "Arkansas";
	AR.visited = false;
	var CA = document.getElementById('map_5');
	CA.name = "California";
	CA.visited = false;
	var CO = document.getElementById('map_6');
	CO.name = "Colorado";
	CO.visited = false;
	var CT = document.getElementById('map_7');
	CT.name = "Connecticut";
	CT.visited = false;
	var DE = document.getElementById('map_8');
	DE.name = "Delaware";
	DE.visited = false;
	var DC = document.getElementById('map_51');
	DC.name = "D.C.";
	DC.visited = false;
	var FL = document.getElementById('map_9');
	FL.name = "Florida";
	FL.visited = false;
	var GA = document.getElementById('map_10');
	GA.name = "Georgia";
	GA.visited = false;
	var HI = document.getElementById('map_11');
	HI.name = "Hawaii";
	HI.visited = false;
	var ID = document.getElementById('map_12');
	ID.name = "Idaho";
	ID.visited = false;
	var IL = document.getElementById('map_13');
	IL.name = "Illinois";
	IL.visited = false;
	var IN = document.getElementById('map_14');
	IN.name = "Indiana";
	IN.visited = false;
	var IA = document.getElementById('map_15');
	IA.name = "Iowa";
	IA.visited = false;
	var KS = document.getElementById('map_16');
	KS.name = "Kansas";
	KS.visited = false;
	var KY = document.getElementById('map_17');
	KY.name = "Kentucky";
	KY.visited = false;
	var LA = document.getElementById('map_18');
	LA.name = "Louisiana";
	LA.visited = false;
	var ME = document.getElementById('map_19');
	ME.name = "Maine";
	ME.visited = false;
	var MD = document.getElementById('map_20');
	MD.name = "Maryland";
	MD.visited = false;
	var MA = document.getElementById('map_21');
	MA.name = "Massachusetts";
	MA.visited = false;
	var MI = document.getElementById('map_22');
	MI.name = "Michigan";
	MI.visited = false;
	var MN = document.getElementById('map_23');
	MN.name = "Minnesota";
	MN.visited = false;
	var MS = document.getElementById('map_24');
	MS.name = "Mississippi";
	MS.visited = false;
	var MO = document.getElementById('map_25');
	MO.name = "Missouri";
	MO.visited = false;
	var MT = document.getElementById('map_26');
	MT.name = "Montana";
	MT.visited = false;
	var NE = document.getElementById('map_27');
	NE.name = "Nebraska";
	NE.visited = false;
	var NV = document.getElementById('map_28');
	NV.name = "Nevada";
	NV.visited = false;
	var NH = document.getElementById('map_29');
	NH.name = "NewHampshire";
	NH.visited = false;
	var NJ = document.getElementById('map_30');
	NJ.name = "NewJersey";
	NJ.visited = false;
	var NM = document.getElementById('map_31');
	NM.name = "NewMexico";
	NM.visited = false;
	var NY = document.getElementById('map_32');
	NY.name = "NewYork";
	NY.visited = false;
	var NC = document.getElementById('map_33');
	NC.name = "NorthCarolina";
	NC.visited = false;
	var ND = document.getElementById('map_34');
	ND.name = "NorthDakota";
	ND.visited = false;
	var OH = document.getElementById('map_35');
	OH.name = "Ohio";
	OH.visited = false;
	var OK = document.getElementById('map_36');
	OK.name = "Oklahoma";
	OK.visited = false;
	var OR = document.getElementById('map_37');
	OR.name = "Oregon";
	OR.visited = false;
	var PA = document.getElementById('map_38');
	PA.name = "Pennsylvania";
	PA.visited = false;
	var RI = document.getElementById('map_39');
	RI.name = "RhodeIsland";
	RI.visited = false;
	var SC = document.getElementById('map_40');
	SC.name = "SouthCarolina";
	SC.visited = false;
	var SD = document.getElementById('map_41');
	SD.name = "SouthDakota";
	SD.visited = false;
	var TN = document.getElementById('map_42');
	TN.name = "Tennessee";
	TN.visited = false;
	var TX = document.getElementById('map_43');
	TX.name = "Texas";
	TX.visited = false;
	var UT = document.getElementById('map_44');
	UT.name = "Utah";
	UT.visited = false;
	var VT = document.getElementById('map_45');
	VT.name = "Vermont";
	VT.visited = false;
	var VA = document.getElementById('map_46');
	VA.name = "Virginia";
	VA.visited = false;
	var WA = document.getElementById('map_47');
	WA.name = "Washington";
	WA.visited = false;
	var WV = document.getElementById('map_48');
	WV.name = "WestVirginia";
	WA.visited = false;
	var WI = document.getElementById('map_49');
	WI.name = "Wisconsin";
	WI.visited = false;
	var WY = document.getElementById('map_50');
	WY.name = "Wyoming";
	WY.visited = false;
	/*$('#map_1').hover(function(e){
		alert("You hovered over alabama");
	})*/
	var states = [AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,
	MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY];
	/*for(var i=0;i<states.length;i++){
		console.log(states[i].name);
	}*/
	}catch (err){
	}
	$('#submitW').click(function(e){
		if(Year_InputW.value.length==0){
			alert("Year cannot be empty");
			return;
		}
		if(Year_InputW.value %4==0){
			alert("Cannot add existing year to table");
			return;
		}
		if(Name_Input.value.length==0){
			alert("Candidate Name cannot be empty!");
			return;
		}
		if(VP_Input.value.length==0){
			VP_Input.value= "NO VP";
		}
		if(Party_Input.value.length==0){
			Party_Input.value= "NO PARTY";
		}
		if(Popular_Vote_Input.value.length==0){
			Popular_Vote_Input.value=0;
		}
		textboxAdd.value="INSERT INTO Winners(Name, Vice_President_Candidate, Party, Popular_Vote, Year) Values('"+Name_Input.value+"', '"+VP_Input.value+"', '"+Party_Input.value+"', "+ Popular_Vote_Input.value+", "+ Year_InputW.value+")";
			$.ajax({
			    type: "POST",
			    method: "POST",
			    url: '/query',
			    async: false,
			    data: {textbox: textboxAdd.value},
			    success: function(){
			    	console.log("Success");
			    },
			    error: function(){
			    	alert("An error occured!");
			    },
			    dataType: "json",
			});
			$.ajax({
		      type: "GET",
		      contentType: "application/json; charset=utf-8",
		      url: "/test",
		      async: false,
		      success: function (data) {
		      	alert("Tuple successfully added, Feel free to close this tab or choose another table to add to to restart the process. You can also see your addition if you view the table that holds it");
		      },
			  error: function(){
			    	alert("An error occured!");
			  }
			});
	});
	$('#submitD').click(function(e){
		e.preventDefault();
		if(State_InputD.value.length==0){
			State_InputD.value = "No Name";
		}
		if(White_Percent_Input.value.length==0){
			White_Percent_Input.value=0;
		}
		if(Black_Percent_Input.value.length==0){
			Black_Percent_Input.value=0;
		}
		if(Hispanic_Percent_Input.value.length==0){
			Hispanic_Percent_Input.value=0;
		}
		if(Asian_Percent_Input.value.length==0){
			Asian_Percent_Input.value=0;
		}
		if(AmericanIndian_Percent_Input.value.length==0){
			AmericanIndian_Percent_Input.value=0;
		}
		if(NativeHawaiin_Percent_Input.value.length==0){
			NativeHawaiin_Percent_Input.value=0;
		}
		if(With_Children_Percent_Input.value.length==0){
			With_Children_Percent_Input.value=0;
		}
		if(Without_Children_Percent_Input.value.length==0){
			Without_Children_Percent_Input.value=0;
		}
		if(Male_Percent_Input.value.length==0){
			Male_Percent_Input.value=0;
		}
		if(Female_Percent_Input.value.length==0){
			Female_Percent_Input.value=0;
		}
		if(Median_Income_Input.value.length==0){
			Median_Income_Input.value=0;
		}
		if(Citizen_Percent_Input.value.length==0){
			Citizen_Percent_Input.value=0;
		}
		if(Non_Citizen_Percent_Input.value.length==0){
			Non_Citizen_Percent_Input.value=0;
		}
		if(AdultsUnder55_Input.value.length==0){
			AdultsUnder55_Input.value=0;
		}
		if(AdultsOver55_Input.value.length==0){
			AdultsOver55_Input.value=0;
		}
		if(FullTime_Percent_Input.value.length==0){
			FullTime_Percent_Input.value=0;
		}
		if(PartTime_Percent_Input.value.length==0){
			PartTime_Percent_Input.value=0;
		}
		if(Unemployed_Percent_Input.value.length==0){
			Unemployed_Percent_Input.value=0;
		}
		if(Education_Rank_Input.value.length==0){
			Education_Rank_Input.value=0;
		}
		textboxAdd.value="INSERT INTO Demographics(State, White_Percent, Black_Percent, Hispanic_Percent, Asian_Percent, AmericanIndian_Percent, NativeHawaiin_Percent, With_Children_Percent, Without_Children_Percent, Male_Percent, Female_Percent, Median_Income, Citizen_Percent, Non_Citizen_Percent, AdultsUnder55, AdultsOver55, FullTime_Percent, PartTime_Percent, Unemployed_Percent, Education_Rank) Values("+"'"+State_InputD.value+"'"+", "+White_Percent_Input.value+", "+ Black_Percent_Input.value+", " + Hispanic_Percent_Input.value + ", " + Asian_Percent_Input.value+", " + AmericanIndian_Percent_Input.value +", " + NativeHawaiin_Percent_Input.value+", "+With_Children_Percent_Input.value+", "+Without_Children_Percent_Input.value+", "+Male_Percent_Input.value+", "+Female_Percent_Input.value+", "+Median_Income_Input.value+", "+ Citizen_Percent_Input.value+", " + Non_Citizen_Percent_Input.value+", "+ AdultsUnder55_Input.value+", "+AdultsOver55_Input.value+", "+FullTime_Percent_Input.value+", "+PartTime_Percent_Input.value+", "+ Unemployed_Percent_Input.value+", "+Education_Rank_Input.value+")";
			$.ajax({
			    type: "POST",
			    method: "POST",
			    url: '/query',
			    async: false,
			    data: {textbox: textboxAdd.value},
			    success: function(){
			    	console.log("Success");
			    },
			    error: function(){
			    	alert("An error occured!");
			    },
			    dataType: "json",
			});
			$.ajax({
		      type: "GET",
		      contentType: "application/json; charset=utf-8",
		      url: "/test",
		      async: false,
		      success: function (data) {
		      	alert("Tuple successfully added, Feel free to close this tab or choose another table to add to to restart the process. You can also see your addition if you view the table that holds it");
		      },
			  error: function(){
			    	alert("An error occured!");
			  }
			});
	});
	$('#submitPE').click(function(e){
		e.preventDefault();
		if(State_Input.value.length==0){
			State_Input.value = "No Name";
		}
		if(Democratic_Percent_Input.value.length==0){
			Democratic_Percent_Input.value =0;
		}
		if(Republican_Percent_Input.value.length==0){
			Republican_Percent_Input.value =0;
		}
		if(Independent_Percent_Input.value.length==0){
			Independent_Percent_Input.value =0;
		}
		if(Other_Percent_Input.value.length==0){
			Other_Percent_Input.value =0;
		}
		if(Democratic_Votes_Input.value.length==0){
			Democratic_Votes_Input.value =0;
		}
		if(Republican_Votes_Input.value.length==0){
			Republican_Votes_Input.value =0;
		}
		if(Independent_Votes_Input.value.length==0){
			Independent_Votes_Input.value =0;
		}
		if(Other_Votes_Input.value.length==0){
			Other_Votes_Input.value =0;
		}
		textboxAdd.value="INSERT INTO Previous_Elections(State, Total_Votes, Democratic_Percent, Republican_Percent, Independent_Percent, Other_Percent, Votes_Democratic, Votes_Republican, Votes_Independent, Votes_Other, Year) Values('" +State_Input.value+ "', 0,"+Democratic_Percent_Input.value+", "+Republican_Percent_Input.value+", "+Independent_Percent_Input.value+", "+Other_Percent_Input.value+", "+Democratic_Votes_Input.value+", "+Republican_Votes_Input.value+", "+Independent_Votes_Input.value+", "+Other_Votes_Input.value+", "+yearBoxSelectionAdd.value+")";
		$.ajax({
		    type: "POST",
		    method: "POST",
		    url: '/query',
		    async: false,
		    data: {textbox: textboxAdd.value},
		    success: function(){
		    	console.log("Success");
		    },
		    error: function(){
		    	alert("An error occured!");
		    },
		    dataType: "json",
		});
		$.ajax({
	      type: "GET",
	      contentType: "application/json; charset=utf-8",
	      url: "/test",
	      async: false,
	      success: function (data) {
	      	alert("Tuple successfully added, Feel free to close this tab or choose another table to add to to restart the process. You can also see your addition if you view the table that holds it");
	      },
		  error: function(){
		    	alert("An error occured!");
		  }
	  });

	});
	$('#submit').click(function(e) {
	    e.preventDefault();
	    if(text.value.toLowerCase().includes("drop")){
      		text.value += "\n Sorry, Dropping is disabled on this website for securty, Access the database directly if you need to drop something.";
      		return;
      	}

	    // information to be sent to the server
	    var info = text.value;
	    //console.log("Button pressed, value at box: "+ info );
	    $.ajax({
	        type: "POST",
	        method: "POST",
	        url: '/query',
	        async: false,
	        data: {textbox: info},
	        success: function(){
	        	console.log("Success");
	        },
	        error: function(){
	        	console.log("failed :(");
	        },
	        dataType: "json",
	    });
	    $.ajax({
	      type: "GET",
	      contentType: "application/json; charset=utf-8",
	      url: "/test",
	      async: false,
	      success: function (data) {
	      	responseFeed = data;
	      	if(typeof responseFeed === 'string'){
	      		if(responseFeed.substring(0,2) == "ER"){
	      			text.value = text.value +"\nThere was an error in your Query, please retry";
	      			text.value = text.value + "\nError given: " + responseFeed;
	      			text.value = text.value + "\nDefaulting map to 2016";
	      			return;
	      		}
	      	}
	      	var numHeaders=0;
	        for(var i in responseFeed){
	        	var lineMaker=0;
	        	dataTable[i] = [];
	        	for(var j in responseFeed[i]){
	        		if(checkTableHeaders(j)){
	        			tableHeaders[numHeaders] = j;
	        			numHeaders++;
	        		}
	        		dataTable[i][lineMaker] = responseFeed[i][j];
	        		lineMaker++;
	        		//console.log(responseFeed[i]);
	        		//console.log(j);
	        		//console.log(responseFeed[i][j]);
	        	}
	        }
	      },
	      dataType: "json",
	    });
	    $.ajax({
	        type: "POST",
	        method: "POST",
	        url: '/tableheaders',
	        async: false,
	        data: {tableHeaders},
	        success: function(){
	        	console.log("Success");
	        },
	        error: function(){
	        	console.log("failed :(");
	        },
	        dataType: "json",
	    });
	    //payload too large while using *
	    $.ajax({
	        type: "POST",
	        method: "POST",
	        url: '/tabledata',
	        async: false,
	        data: {dataTable},
	        success: function(){
	        	console.log("Success");
	        },
	        error: function(){
	        	console.log("failed :(");
	        },
	        dataType: "json",
	    });
	    var textboxtext = text.value;
	    var year = 2016;
	    if(textboxtext.includes("Year")){
	    	//user inputted a year
	    	
	    	if(textboxtext.includes("2016")){
	    		year = 2016;
	    	}
	    	if(textboxtext.includes("2012")){
	    		year = 2012;
	    	}
	    	if(textboxtext.includes("2008")){
	    		year = 2008;
	    	}
	    	if(textboxtext.includes("2004")){
	    		year = 2004;
	    	}
	    	if(textboxtext.includes("2000")){
	    		year = 2000;
	    	}
	    	if(textboxtext.includes("1996")){
	    		year = 1996;
	    	}
	    	if(textboxtext.includes("1992")){
	    		year = 1992;
	    	}
	    	if(textboxtext.includes("1988")){
	    		year = 1988;
	    	}
	    	if(textboxtext.includes("1984")){
	    		year = 1984;
	    	}
	    	if(textboxtext.includes("1980")){
	    		year = 1980;
	    	}
	    	if(textboxtext.includes("1976")){
	    		year = 1976;
	    	}
	    	if(textboxtext.includes("1972")){
	    		year = 1972;
	    	}
	    	if(textboxtext.includes("1968")){
	    		year = 1968;
	    	}
	    	if(textboxtext.includes("1964")){
	    		year = 1964;
	    	}
	    	if(textboxtext.includes("1960")){
	    		year = 1960;
	    	}
	    	if(textboxtext.includes("1956")){
	    		year = 1956;
	    	}
	    	if(textboxtext.includes("1952")){
	    		year = 1952;
	    	}
	    	if(textboxtext.includes("1948")){
	    		year = 1948;
	    	}
	    	if(textboxtext.includes("1944")){
	    		year = 1944;
	    	}
	    	if(textboxtext.includes("1940")){
	    		year = 1940;
	    	}
	    	if(textboxtext.includes("1936")){
	    		year = 1936;
	    	}
	    	if(textboxtext.includes("1932")){
	    		year = 1932;
	    	}
	    	if(textboxtext.includes("1928")){
	    		year = 1928;
	    	}
	    	if(textboxtext.includes("1924")){
	    		year = 1924;
	    	}
	    	if(textboxtext.includes("1920")){
	    		year = 1920;
	    	}
	    	if(textboxtext.includes("1916")){
	    		year = 1916;
	    	}
	    	if(textboxtext.includes("1912")){
	    		year = 1912;
	    	}

	    }
	    yearBox.innerHTML = "Year : "+year;
	    setStateColors();
	    tableHeaders=[];
	    dataTable=[[]];
	    if(textboxtext.includes("There was an error in your Query, please retry")){
	    }else{
	    	openInNewTab("/table.html");
	    }
	});
$('#submitwp').click(function(e) {
    e.preventDefault();

    // information to be sent to the server
    var info = text.value;
    //console.log("Button pressed, value at box: "+ info );
    if(text.value.toLowerCase().includes("drop")){
      		text.value += "\n Sorry, Dropping is disabled on this website for securty, Access the database directly if you need to drop something.";
      		return;
      	}
    $.ajax({
        type: "POST",
        method: "POST",
        url: '/query',
        async: false,
        data: {textbox: info},
        success: function(){
        	console.log("Success");
        },
        error: function(){
        	console.log("failed :(");
        },
        dataType: "json",
    });
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "/test",
      async: false,
      success: function (data) {
      	responseFeed = data;
      	//console.log(responseFeed);
      	if(typeof responseFeed === 'string'){
      		if(responseFeed.substring(0,2) == "ER"){
      			text.value = text.value +"\nThere was an error in your Query, please retry";
      			text.value = text.value + "\nError given: " + responseFeed;
      			text.value = text.value + "\nDefaulting map to 2016";
      			return;
      		}
      	}
      	
      	var numHeaders=0;
        for(var i in responseFeed){
        	var lineMaker=0;
        	dataTable[i] = [];
        	for(var j in responseFeed[i]){
        		if(checkTableHeaders(j)){
        			tableHeaders[numHeaders] = j;
        			numHeaders++;
        		}
        		dataTable[i][lineMaker] = responseFeed[i][j];
        		lineMaker++;
        		//console.log(responseFeed[i]);
        		//console.log(j);
        		//console.log(responseFeed[i][j]);
        	}
        }
      },
      dataType: "json",
    });
    //WY.setAttribute("fill","rgb(0, 97, 255)");
    $.ajax({
        type: "POST",
        method: "POST",
        url: '/tableheaders',
        async: false,
        data: {tableHeaders},
        success: function(){
        	console.log("Success");
        },
        error: function(){
        	console.log("failed :(");
        },
        dataType: "json",
    });
    $.ajax({
        type: "POST",
        method: "POST",
        url: '/tabledata',
        async: false,
        data: {dataTable},
        success: function(){
        	console.log("Success");
        },
        error: function(){
        	console.log("failed :(");
        },
        dataType: "json",
    });
    var textboxtext = text.value;
    var year = 2016;
    if(textboxtext.includes("Year")){
    	//user inputted a year
    	
    	if(textboxtext.includes("2016")){
    		year = 2016;
    	}
    	if(textboxtext.includes("2012")){
    		year = 2012;
    	}
    	if(textboxtext.includes("2008")){
    		year = 2008;
    	}
    	if(textboxtext.includes("2004")){
    		year = 2004;
    	}
    	if(textboxtext.includes("2000")){
    		year = 2000;
    	}
    	if(textboxtext.includes("1996")){
    		year = 1996;
    	}
    	if(textboxtext.includes("1992")){
    		year = 1992;
    	}
    	if(textboxtext.includes("1988")){
    		year = 1988;
    	}
    	if(textboxtext.includes("1984")){
    		year = 1984;
    	}
    	if(textboxtext.includes("1980")){
    		year = 1980;
    	}
    	if(textboxtext.includes("1976")){
    		year = 1976;
    	}
    	if(textboxtext.includes("1972")){
    		year = 1972;
    	}
    	if(textboxtext.includes("1968")){
    		year = 1968;
    	}
    	if(textboxtext.includes("1964")){
    		year = 1964;
    	}
    	if(textboxtext.includes("1960")){
    		year = 1960;
    	}
    	if(textboxtext.includes("1956")){
    		year = 1956;
    	}
    	if(textboxtext.includes("1952")){
    		year = 1952;
    	}
    	if(textboxtext.includes("1948")){
    		year = 1948;
    	}
    	if(textboxtext.includes("1944")){
    		year = 1944;
    	}
    	if(textboxtext.includes("1940")){
    		year = 1940;
    	}
    	if(textboxtext.includes("1936")){
    		year = 1936;
    	}
    	if(textboxtext.includes("1932")){
    		year = 1932;
    	}
    	if(textboxtext.includes("1928")){
    		year = 1928;
    	}
    	if(textboxtext.includes("1924")){
    		year = 1924;
    	}
    	if(textboxtext.includes("1920")){
    		year = 1920;
    	}
    	if(textboxtext.includes("1916")){
    		year = 1916;
    	}
    	if(textboxtext.includes("1912")){
    		year = 1912;
    	}

    }
    yearBox.innerHTML = "Year : "+year;
    setStateColors();
    tableHeaders=[];
    dataTable=[[]];
});
	$('#help').click(function(e){
    	e.preventDefault();
    	openInNewTab("/help.html");
    });

    $("path, circle").hover(function(e) {
      $('#info-box').css('display','block');
      if(this.demPercent == undefined || this.demPercent == null || this.demPercent ==0){
      	$('#info-box').html("<div>State: " + this.name+"</div>");
      }else{
      	$('#info-box').html("<div>State: " + this.name +"</div><div>Democratic: " + this.demPercent +"%</div><div>Republican: " + this.repPercent + "%</div><div>Independent: " + this.indPercent + "%</div><div>Other: " + this.othPercent + "%</div>");
    	}
    });
    $("path, circle").mouseleave(function(e) {
      $('#info-box').css('display','none');
    });
    $(document).mousemove(function(e) {
      $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
      $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
    }).mouseover();

	function checkTableHeaders(header){
		var i;
		for(i=0;i<tableHeaders.length;i++){
			if(header==tableHeaders[i]){
				return false;
			}
		}
		return true;
	}
	function openInNewTab(url) {
	  var win = window.open(url, '_blank');
	}
	function setStateColors(){
		$.ajax({
		  type: "GET",
		  contentType: "application/json; charset=utf-8",
		  url: "/statescolors",
		  async: false,
		  success: function (data) {
		  	statesData = data;
		  	for(var loop=0;loop<statesData.length;loop++){
		  		var thisState = statesData[loop].State;
		  		var demPercent = statesData[loop].Democratic_Percent;
		  		var repPercent = statesData[loop].Republican_Percent;
		  		var indPercent = statesData[loop].Independent_Percent;
		  		var othPercent = statesData[loop].Other_Percent;
		  		for(var st=0;st<states.length;st++){
		  			if(states[st].name==thisState){
		  				states[st].visited=true;
		  				states[st].demPercent = demPercent;
		  				states[st].repPercent = repPercent;
		  				states[st].indPercent = indPercent;
		  				states[st].othPercent = othPercent;
		  				if(demPercent > repPercent && demPercent > indPercent && demPercent > othPercent){
		  					states[st].setAttribute("fill","rgb(0, 97, 255)");
		  				}else if(repPercent > demPercent && repPercent > indPercent && repPercent > othPercent){
		  					states[st].setAttribute("fill","rgb(255, 0, 16)");
		  				}else if(indPercent > repPercent && indPercent > demPercent && indPercent > othPercent){
		  					states[st].setAttribute("fill","rgb(0, 186, 3)");
		  				}else{
		  					states[st].setAttribute("fill","rgb(206, 224, 4)");
		  				}
		  			}
		  		}
		  	}
		  	for(var check=0;check<states.length;check++){
		  		if(states[check].visited==false){
		  			states[check].demPercent = 0;
		  			states[check].setAttribute("fill","#666666");
		  		}
		  	}
		  	for(var reset=0; reset<states.length;reset++){
		  		states[reset].visited=false;
		  	}
		  },
		  dataType: "json",
		});
	}
});