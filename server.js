var http = require('http');
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '5000mb'}) );
app.use(bodyParser.urlencoded({
  limit: '5000mb',
  extended: true,
  parameterLimit:5000000
}));
var textbox;
var headers;
var datums;
var statesColorBox;



/*****************ROUTES********************/
app.use('/dist', express.static('dist'));
app.get('/', function(req,res){
	res.redirect('/index.html');
});
app.get('/index.html', function(req,res){
	res.sendFile(__dirname + "/dist/index.html");
});
app.get('/app.bundle.js', function(req, res){
	res.sendFile(__dirname + "/dist/app.bundle.js");
});
app.get('/table.html', function(req,res){
	res.sendFile(__dirname+ "/src/tables.html");
});
app.get('/help.html', function(req,res){
	res.sendFile(__dirname+ "/src/help.html");
});
app.post('/tableheaders', function(req,res){
	headers=req.body.tableHeaders;
	res.send(req.body);
});
app.get('/tableheaders', function(req,res){
	tableHeader(res);
});
app.get('/statescolors', function(req,res){
	doStateColors(res);
});
app.post('/tabledata', function(req,res){
	datums = req.body.dataTable;
	res.send(req.body);
});
app.get('/tabledata', function(req,res){
	tabledatums(res);
});
app.get('/test', function(req, res){
	doTestQuery(res);
});
app.post('/query', function(req, res){
	textbox = req.body.textbox;
	res.send(req.body);
});
app.get('/query', function(req, res){
	doTestQuery(res,textbox);
});
/***********FUNCTIONS************/

function doTestQuery(res){
	const con = mysql.createConnection({host: 'cs336tl455db.cj0ps9gmurzy.us-east-1.rds.amazonaws.com', port: 3306, database:'test',user:'tl455cs336', password:'cs336tl455'});
	res.setHeader('Content-Type', 'application/json');
	var array =[];
	var i=0
	con.query(textbox,function(error,results,fields){
		if(error===null){
			//console.dir(results);

			//for (key in res){
			//	res.send(JSON.stringify({key:res[key]}));
			//}
			//array[i]=results;
			//i++;
			//console.log(array[i-1]);
			res.json(results);
		}else{
			res.json(error.code);
		}
	});
	con.end();
	
}
function tableHeader(res){
	res.setHeader('Content-Type', 'application/json');
	res.json(headers);
}
function tabledatums(res){
	res.setHeader('Content-Type', 'application/json');
	res.json(datums);
}
function doStateColors(res){
	if(textbox.includes("Year")){
		//user inputted a year
		var year = 2016;
		if(textbox.includes("2016")){
			year = 2016;
		}
		if(textbox.includes("2012")){
			year = 2012;
		}
		if(textbox.includes("2008")){
			year = 2008;
		}
		if(textbox.includes("2004")){
			year = 2004;
		}
		if(textbox.includes("2000")){
			year = 2000;
		}
		if(textbox.includes("1996")){
			year = 1996;
		}
		if(textbox.includes("1992")){
			year = 1992;
		}
		if(textbox.includes("1988")){
			year = 1988;
		}
		if(textbox.includes("1984")){
			year = 1984;
		}
		if(textbox.includes("1980")){
			year = 1980;
		}
		if(textbox.includes("1976")){
			year = 1976;
		}
		if(textbox.includes("1972")){
			year = 1972;
		}
		if(textbox.includes("1968")){
			year = 1968;
		}
		if(textbox.includes("1964")){
			year = 1964;
		}
		if(textbox.includes("1960")){
			year = 1960;
		}
		if(textbox.includes("1956")){
			year = 1956;
		}
		if(textbox.includes("1952")){
			year = 1952;
		}
		if(textbox.includes("1948")){
			year = 1948;
		}
		if(textbox.includes("1944")){
			year = 1944;
		}
		if(textbox.includes("1940")){
			year = 1940;
		}
		if(textbox.includes("1936")){
			year = 1936;
		}
		if(textbox.includes("1932")){
			year = 1932;
		}
		if(textbox.includes("1928")){
			year = 1928;
		}
		if(textbox.includes("1924")){
			year = 1924;
		}
		if(textbox.includes("1920")){
			year = 1920;
		}
		if(textbox.includes("1916")){
			year = 1916;
		}
		if(textbox.includes("1912")){
			year = 1912;
		}
		const con = mysql.createConnection({host: 'cs336tl455db.cj0ps9gmurzy.us-east-1.rds.amazonaws.com', port: 3306, database:'test',user:'tl455cs336', password:'cs336tl455'});
		res.setHeader('Content-Type', 'application/json');
		var array =[];
		var i=0
		con.query('select State, Democratic_Percent, Republican_Percent, Independent_Percent, Other_Percent from Previous_Elections Where Year = '+year+'',function(error,results,fields){
			if(error===null){
				//console.dir(results);

				//for (key in res){
				//	res.send(JSON.stringify({key:res[key]}));
				//}
				//array[i]=results;
				//i++;
				//console.log(array[i-1]);
				res.json(results);
			}else{
				res.json(error.code);
			}
		});
		con.end();

	}else{
		//defualt 2016 query
		const con = mysql.createConnection({host: 'cs336tl455db.cj0ps9gmurzy.us-east-1.rds.amazonaws.com', port: 3306, database:'test',user:'tl455cs336', password:'cs336tl455'});
		res.setHeader('Content-Type', 'application/json');
		var array =[];
		var i=0
		con.query('select State, Democratic_Percent, Republican_Percent, Independent_Percent, Other_Percent from Previous_Elections Where Year = 2016',function(error,results,fields){
			if(error===null){
				//console.dir(results);

				//for (key in res){
				//	res.send(JSON.stringify({key:res[key]}));
				//}
				//array[i]=results;
				//i++;
				//console.log(array[i-1]);
				res.json(results);
			}else{
				res.json(error.code);
			}
		});
		con.end();
	}


}
/******************SERVER START****************/

var server = app.listen(8080);