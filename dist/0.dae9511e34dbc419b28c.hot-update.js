webpackHotUpdate(0,{"./src/app.js":function(e,t,n){"use strict";var a=n("./node_modules/react-dom/index.js");(function(e){e&&e.__esModule})(a),n("./src/app.css"),$(document).ready(function(){function e(e){var t;for(t=0;t<Y.length;t++)if(e==Y[t])return!1;return!0}function t(e){window.open(e,"_blank")}function n(){$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/statescolors",async:!1,success:function(e){k=e;for(var t=0;t<k.length;t++)for(var n=k[t].State,a=k[t].Democratic_Percent,i=k[t].Republican_Percent,l=k[t].Independent_Percent,s=k[t].Other_Percent,d=0;d<ke.length;d++)ke[d].name==n&&(ke[d].visited=!0,ke[d].demPercent=a,ke[d].repPercent=i,ke[d].indPercent=l,ke[d].othPercent=s,a>i&&a>l&&a>s?ke[d].setAttribute("fill","rgb(0, 97, 255)"):i>a&&i>l&&i>s?ke[d].setAttribute("fill","rgb(255, 0, 16)"):l>i&&l>a&&l>s?ke[d].setAttribute("fill","rgb(0, 186, 3)"):ke[d].setAttribute("fill","rgb(206, 224, 4)"));for(var o=0;o<ke.length;o++)0==ke[o].visited&&(ke[o].demPercent=0,ke[o].setAttribute("fill","#666666"));for(var c=0;c<ke.length;c++)ke[c].visited=!1},dataType:"json"})}var a=window.innerHeight,i=window.innerWidth,l=document.getElementById("map");try{l.setAttribute("height",a/1.6),l.setAttribute("width",i/1.4)}catch(e){console.log("At Add to Database")}var s=document.getElementById("textbox"),d=document.getElementById("yearBox"),o=document.getElementById("statsSelect"),c=document.getElementById("winnerBox"),r=document.getElementById("winnerSelection"),u=document.getElementById("stateBox"),m=document.getElementById("stateSelection"),v=document.getElementById("percentInput"),y=document.getElementById("percentInputText"),p=document.getElementById("realInput"),g=document.getElementById("realInputText"),E=document.getElementById("yearBoxa"),h=document.getElementById("yearBoxSelection"),f=document.getElementById("statsSelectAdd"),I=document.getElementById("yearBoxAdd"),B=(document.getElementById("yearBoxSelectionAdd"),document.getElementById("stateBoxAdd")),_=(document.getElementById("stateSelectionAdd"),document.getElementById("holderPE")),b=document.getElementById("holderD"),S=document.getElementById("holderW"),P=document.getElementById("submitPE"),T=document.getElementById("Democratic_Percent_Input"),w=document.getElementById("submitD"),x=document.getElementById("submitW");$("#statsSelectAdd").change(function(){I.style.display="none",B.style.display="none",_.style.display="none",b.style.display="none",S.style.display="none",w.style.display="none",P.style.display="none",x.style.display="none","Previous_Elections"==f.value?I.style.display="block":"Demographics"==f.value?B.style.display="block":"Winners"==f.value&&(I.style.display="block")}),$("#yearBoxAdd").change(function(){"Previous_Elections"==f.value?B.style.display="block":"Winners"==f.value&&(S.style.display="block",x.style.display="block")}),$("#stateBoxAdd").change(function(){"Previous_Elections"==f.value?(_.style.display="block",P.style.display="block"):"Demographics"==f.value&&(b.style.display="block",w.style.display="block")}),$("#statsSelect").change(function(){c.style.display="none",u.style.display="none",v.style.display="none",p.style.display="none",E.style.display="none",g.value="",y.value="","Winners of Elections"==o.value?c.style.display="block":"Demographics of a state"==o.value?u.style.display="block":(E.style.display="block",o.value.includes("Percent")?(v.style.display="block","ALL YEARS"!=h.value?s.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+h.value:s.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912"):(p.style.display="block","ALL YEARS"!=h.value?s.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+h.value:s.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912"))}),$("#winnerBox").change(function(){s.value="select * from Candidates where Name = '"+r.value+"'"}),$("#stateBox").change(function(){"ALL STATES"==m.value?s.value="select * from Demographics":s.value="select * from Demographics where State = '"+m.value+"'"}),$("#yearBoxa").change(function(){"ALL YEARS"!=h.value?s.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+h.value:s.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912"}),$("#realInputText").keyup(function(){"ALL YEARS"!=h.value?s.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+h.value+" AND "+o.value+" >= "+g.value:s.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912 AND "+o.value+" >= "+g.value}),$("#percentInputText").keyup(function(){"ALL YEARS"!=h.value?s.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+h.value+" AND "+o.value+" >= "+y.value:s.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912 AND "+o.value+" >= "+y.value}),setInterval(function(){a=window.innerHeight,i=window.innerWidth;try{l.setAttribute("height",a/1.6),l.setAttribute("width",i/1.4)}catch(e){}},100);var A,k,Y=[],D=[[]];try{var j=document.getElementById("map_1");j.name="Alabama",j.visited=!1;var O=document.getElementById("map_2");O.name="Alaska",O.visited=!1;var L=document.getElementById("map_3");L.name="Arizona",L.visited=!1;var N=document.getElementById("map_4");N.name="Arkansas",N.visited=!1;var R=document.getElementById("map_5");R.name="California",R.visited=!1;var M=document.getElementById("map_6");M.name="Colorado",M.visited=!1;var W=document.getElementById("map_7");W.name="Connecticut",W.visited=!1;var C=document.getElementById("map_8");C.name="Delaware",C.visited=!1;var H=document.getElementById("map_51");H.name="D.C.",H.visited=!1;var V=document.getElementById("map_9");V.name="Florida",V.visited=!1;var G=document.getElementById("map_10");G.name="Georgia",G.visited=!1;var Q=document.getElementById("map_11");Q.name="Hawaii",Q.visited=!1;var q=document.getElementById("map_12");q.name="Idaho",q.visited=!1;var K=document.getElementById("map_13");K.name="Illinois",K.visited=!1;var U=document.getElementById("map_14");U.name="Indiana",U.visited=!1;var z=document.getElementById("map_15");z.name="Iowa",z.visited=!1;var F=document.getElementById("map_16");F.name="Kansas",F.visited=!1;var J=document.getElementById("map_17");J.name="Kentucky",J.visited=!1;var X=document.getElementById("map_18");X.name="Louisiana",X.visited=!1;var Z=document.getElementById("map_19");Z.name="Maine",Z.visited=!1;var ee=document.getElementById("map_20");ee.name="Maryland",ee.visited=!1;var te=document.getElementById("map_21");te.name="Massachusetts",te.visited=!1;var ne=document.getElementById("map_22");ne.name="Michigan",ne.visited=!1;var ae=document.getElementById("map_23");ae.name="Minnesota",ae.visited=!1;var ie=document.getElementById("map_24");ie.name="Mississippi",ie.visited=!1;var le=document.getElementById("map_25");le.name="Missouri",le.visited=!1;var se=document.getElementById("map_26");se.name="Montana",se.visited=!1;var de=document.getElementById("map_27");de.name="Nebraska",de.visited=!1;var oe=document.getElementById("map_28");oe.name="Nevada",oe.visited=!1;var ce=document.getElementById("map_29");ce.name="NewHampshire",ce.visited=!1;var re=document.getElementById("map_30");re.name="NewJersey",re.visited=!1;var ue=document.getElementById("map_31");ue.name="NewMexico",ue.visited=!1;var me=document.getElementById("map_32");me.name="NewYork",me.visited=!1;var ve=document.getElementById("map_33");ve.name="NorthCarolina",ve.visited=!1;var ye=document.getElementById("map_34");ye.name="NorthDakota",ye.visited=!1;var pe=document.getElementById("map_35");pe.name="Ohio",pe.visited=!1;var ge=document.getElementById("map_36");ge.name="Oklahoma",ge.visited=!1;var Ee=document.getElementById("map_37");Ee.name="Oregon",Ee.visited=!1;var he=document.getElementById("map_38");he.name="Pennsylvania",he.visited=!1;var fe=document.getElementById("map_39");fe.name="RhodeIsland",fe.visited=!1;var Ie=document.getElementById("map_40");Ie.name="SouthCarolina",Ie.visited=!1;var Be=document.getElementById("map_41");Be.name="SouthDakota",Be.visited=!1;var _e=document.getElementById("map_42");_e.name="Tennessee",_e.visited=!1;var be=document.getElementById("map_43");be.name="Texas",be.visited=!1;var Se=document.getElementById("map_44");Se.name="Utah",Se.visited=!1;var Pe=document.getElementById("map_45");Pe.name="Vermont",Pe.visited=!1;var Te=document.getElementById("map_46");Te.name="Virginia",Te.visited=!1;var we=document.getElementById("map_47");we.name="Washington",we.visited=!1;var xe=document.getElementById("map_48");xe.name="WestVirginia",we.visited=!1;var Ae=document.getElementById("map_49");Ae.name="Wisconsin",Ae.visited=!1;var $e=document.getElementById("map_50");$e.name="Wyoming",$e.visited=!1;var ke=[j,O,L,N,R,M,W,C,H,V,G,Q,q,K,U,z,F,J,X,Z,ee,te,ne,ae,ie,le,se,de,oe,ce,re,ue,me,ve,ye,pe,ge,Ee,he,fe,Ie,Be,_e,be,Se,Pe,Te,we,xe,Ae,$e]}catch(e){}$("#submitPE").click(function(e){e.preventDefault(),console.log(T.value.length),console.log("INSERT INTO Previous_Elections(State, Total_Votes, Democratic_Percent, Republican_Percent, Independent_Percent, Other_Percent, Votes_Democratic, Votes_Republican, Votes_Independent, Votes_Other, Year) Values('mystate', 120, 1, 0, 1, 0, 1, 0, 1, 0, 1996)")}),$("#submit").click(function(a){if(a.preventDefault(),s.value.toLowerCase().includes("drop"))return void(s.value+="\n Sorry, Dropping is disabled on this website for securty, Access the database directly if you need to drop something.");var i=s.value;$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:i},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(t){if("string"==typeof(A=t)&&"ER"==A.substring(0,2))return s.value=s.value+"\nThere was an error in your Query, please retry",s.value=s.value+"\nError given: "+A,void(s.value=s.value+"\nDefaulting map to 2016");var n=0;for(var a in A){var i=0;D[a]=[];for(var l in A[a])e(l)&&(Y[n]=l,n++),D[a][i]=A[a][l],i++}},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tableheaders",async:!1,data:{tableHeaders:Y},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tabledata",async:!1,data:{dataTable:D},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"});var l=s.value,o=2016;l.includes("Year")&&(l.includes("2016")&&(o=2016),l.includes("2012")&&(o=2012),l.includes("2008")&&(o=2008),l.includes("2004")&&(o=2004),l.includes("2000")&&(o=2e3),l.includes("1996")&&(o=1996),l.includes("1992")&&(o=1992),l.includes("1988")&&(o=1988),l.includes("1984")&&(o=1984),l.includes("1980")&&(o=1980),l.includes("1976")&&(o=1976),l.includes("1972")&&(o=1972),l.includes("1968")&&(o=1968),l.includes("1964")&&(o=1964),l.includes("1960")&&(o=1960),l.includes("1956")&&(o=1956),l.includes("1952")&&(o=1952),l.includes("1948")&&(o=1948),l.includes("1944")&&(o=1944),l.includes("1940")&&(o=1940),l.includes("1936")&&(o=1936),l.includes("1932")&&(o=1932),l.includes("1928")&&(o=1928),l.includes("1924")&&(o=1924),l.includes("1920")&&(o=1920),l.includes("1916")&&(o=1916),l.includes("1912")&&(o=1912)),d.innerHTML="Year : "+o,n(),Y=[],D=[[]],l.includes("There was an error in your Query, please retry")||t("/table.html")}),$("#submitwp").click(function(t){t.preventDefault();var a=s.value;if(s.value.toLowerCase().includes("drop"))return void(s.value+="\n Sorry, Dropping is disabled on this website for securty, Access the database directly if you need to drop something.");$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:a},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(t){if("string"==typeof(A=t)&&"ER"==A.substring(0,2))return s.value=s.value+"\nThere was an error in your Query, please retry",s.value=s.value+"\nError given: "+A,void(s.value=s.value+"\nDefaulting map to 2016");var n=0;for(var a in A){var i=0;D[a]=[];for(var l in A[a])e(l)&&(Y[n]=l,n++),D[a][i]=A[a][l],i++}},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tableheaders",async:!1,data:{tableHeaders:Y},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tabledata",async:!1,data:{dataTable:D},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"});var i=s.value,l=2016;i.includes("Year")&&(i.includes("2016")&&(l=2016),i.includes("2012")&&(l=2012),i.includes("2008")&&(l=2008),i.includes("2004")&&(l=2004),i.includes("2000")&&(l=2e3),i.includes("1996")&&(l=1996),i.includes("1992")&&(l=1992),i.includes("1988")&&(l=1988),i.includes("1984")&&(l=1984),i.includes("1980")&&(l=1980),i.includes("1976")&&(l=1976),i.includes("1972")&&(l=1972),i.includes("1968")&&(l=1968),i.includes("1964")&&(l=1964),i.includes("1960")&&(l=1960),i.includes("1956")&&(l=1956),i.includes("1952")&&(l=1952),i.includes("1948")&&(l=1948),i.includes("1944")&&(l=1944),i.includes("1940")&&(l=1940),i.includes("1936")&&(l=1936),i.includes("1932")&&(l=1932),i.includes("1928")&&(l=1928),i.includes("1924")&&(l=1924),i.includes("1920")&&(l=1920),i.includes("1916")&&(l=1916),i.includes("1912")&&(l=1912)),d.innerHTML="Year : "+l,n(),Y=[],D=[[]]}),$("#help").click(function(e){e.preventDefault(),t("/help.html")}),$("path, circle").hover(function(e){$("#info-box").css("display","block"),void 0==this.demPercent||null==this.demPercent||0==this.demPercent?$("#info-box").html("<div>State: "+this.name+"</div>"):$("#info-box").html("<div>State: "+this.name+"</div><div>Democratic: "+this.demPercent+"%</div><div>Republican: "+this.repPercent+"%</div><div>Independent: "+this.indPercent+"%</div><div>Other: "+this.othPercent+"%</div>")}),$("path, circle").mouseleave(function(e){$("#info-box").css("display","none")}),$(document).mousemove(function(e){$("#info-box").css("top",e.pageY-$("#info-box").height()-30),$("#info-box").css("left",e.pageX-$("#info-box").width()/2)}).mouseover()})}});