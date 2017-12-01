webpackHotUpdate(0,{"./src/app.js":function(e,t,n){"use strict";var a=n("./node_modules/react-dom/index.js");(function(e){e&&e.__esModule})(a),n("./src/app.css"),$(document).ready(function(){function e(e){var t;for(t=0;t<_.length;t++)if(e==_[t])return!1;return!0}function t(e){window.open(e,"_blank")}function n(){$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/statescolors",async:!1,success:function(e){B=e;for(var t=0;t<B.length;t++)for(var n=B[t].State,a=B[t].Democratic_Percent,i=B[t].Republican_Percent,d=B[t].Independent_Percent,l=B[t].Other_Percent,s=0;s<_e.length;s++)_e[s].name==n&&(_e[s].visited=!0,_e[s].demPercent=a,_e[s].repPercent=i,_e[s].indPercent=d,_e[s].othPercent=l,a>i&&a>d&&a>l?_e[s].setAttribute("fill","rgb(0, 97, 255)"):i>a&&i>d&&i>l?_e[s].setAttribute("fill","rgb(255, 0, 16)"):d>i&&d>a&&d>l?_e[s].setAttribute("fill","rgb(0, 186, 3)"):_e[s].setAttribute("fill","rgb(206, 224, 4)"));for(var o=0;o<_e.length;o++)0==_e[o].visited&&(_e[o].demPercent=0,_e[o].setAttribute("fill","#666666"));for(var c=0;c<_e.length;c++)_e[c].visited=!1},dataType:"json"})}var a=window.innerHeight,i=window.innerWidth,d=document.getElementById("map");try{d.setAttribute("height",a/1.6),d.setAttribute("width",i/1.4)}catch(e){console.log("At Add to Database")}var l=document.getElementById("textbox"),s=document.getElementById("yearBox"),o=document.getElementById("statsSelect"),c=document.getElementById("winnerBox"),r=document.getElementById("winnerSelection"),u=document.getElementById("stateBox"),m=document.getElementById("stateSelection"),v=document.getElementById("percentInput"),y=document.getElementById("percentInputText"),p=document.getElementById("realInput"),g=document.getElementById("realInputText"),h=document.getElementById("yearBoxa"),E=document.getElementById("yearBoxSelection"),f=document.getElementById("statsSelectAdd");document.getElementById("yearBoxAdd"),document.getElementById("yearBoxSelectionAdd"),document.getElementById("stateBoxAdd"),document.getElementById("stateSelectionAdd"),document.getElementById("holderPE"),document.getElementById("holderD"),document.getElementById("holderW"),$("#statsSelectAdd").change(function(){"Previous_Elections"==f.value?alert("PE"):"Demographics"==f.value||f.value}),$("#statsSelect").change(function(){c.style.display="none",u.style.display="none",v.style.display="none",p.style.display="none",h.style.display="none",g.value="",y.value="","Winners of Elections"==o.value?c.style.display="block":"Demographics of a state"==o.value?u.style.display="block":(h.style.display="block",o.value.includes("Percent")?(v.style.display="block","ALL YEARS"!=E.value?l.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+E.value:l.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912"):(p.style.display="block","ALL YEARS"!=E.value?l.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+E.value:l.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912"))}),$("#winnerBox").change(function(){l.value="select * from Candidates where Name = '"+r.value+"'"}),$("#stateBox").change(function(){"ALL STATES"==m.value?l.value="select * from Demographics":l.value="select * from Demographics where State = '"+m.value+"'"}),$("#yearBoxa").change(function(){"ALL YEARS"!=E.value?l.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+E.value:l.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912"}),$("#realInputText").keyup(function(){"ALL YEARS"!=E.value?l.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+E.value+" AND "+o.value+" >= "+g.value:l.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912 AND "+o.value+" >= "+g.value}),$("#percentInputText").keyup(function(){"ALL YEARS"!=E.value?l.value="select Year, State, "+o.value+" from Previous_Elections where Year = "+E.value+" AND "+o.value+" >= "+y.value:l.value="select Year, State, "+o.value+" from Previous_Elections where Year >= 1912 AND "+o.value+" >= "+y.value}),setInterval(function(){a=window.innerHeight,i=window.innerWidth;try{d.setAttribute("height",a/1.6),d.setAttribute("width",i/1.4)}catch(e){}},100);var I,B,_=[],b=[[]];try{var S=document.getElementById("map_1");S.name="Alabama",S.visited=!1;var w=document.getElementById("map_2");w.name="Alaska",w.visited=!1;var P=document.getElementById("map_3");P.name="Arizona",P.visited=!1;var T=document.getElementById("map_4");T.name="Arkansas",T.visited=!1;var x=document.getElementById("map_5");x.name="California",x.visited=!1;var A=document.getElementById("map_6");A.name="Colorado",A.visited=!1;var Y=document.getElementById("map_7");Y.name="Connecticut",Y.visited=!1;var j=document.getElementById("map_8");j.name="Delaware",j.visited=!1;var D=document.getElementById("map_51");D.name="D.C.",D.visited=!1;var k=document.getElementById("map_9");k.name="Florida",k.visited=!1;var L=document.getElementById("map_10");L.name="Georgia",L.visited=!1;var O=document.getElementById("map_11");O.name="Hawaii",O.visited=!1;var N=document.getElementById("map_12");N.name="Idaho",N.visited=!1;var M=document.getElementById("map_13");M.name="Illinois",M.visited=!1;var R=document.getElementById("map_14");R.name="Indiana",R.visited=!1;var C=document.getElementById("map_15");C.name="Iowa",C.visited=!1;var H=document.getElementById("map_16");H.name="Kansas",H.visited=!1;var W=document.getElementById("map_17");W.name="Kentucky",W.visited=!1;var G=document.getElementById("map_18");G.name="Louisiana",G.visited=!1;var Q=document.getElementById("map_19");Q.name="Maine",Q.visited=!1;var V=document.getElementById("map_20");V.name="Maryland",V.visited=!1;var q=document.getElementById("map_21");q.name="Massachusetts",q.visited=!1;var K=document.getElementById("map_22");K.name="Michigan",K.visited=!1;var U=document.getElementById("map_23");U.name="Minnesota",U.visited=!1;var z=document.getElementById("map_24");z.name="Mississippi",z.visited=!1;var F=document.getElementById("map_25");F.name="Missouri",F.visited=!1;var J=document.getElementById("map_26");J.name="Montana",J.visited=!1;var X=document.getElementById("map_27");X.name="Nebraska",X.visited=!1;var Z=document.getElementById("map_28");Z.name="Nevada",Z.visited=!1;var ee=document.getElementById("map_29");ee.name="NewHampshire",ee.visited=!1;var te=document.getElementById("map_30");te.name="NewJersey",te.visited=!1;var ne=document.getElementById("map_31");ne.name="NewMexico",ne.visited=!1;var ae=document.getElementById("map_32");ae.name="NewYork",ae.visited=!1;var ie=document.getElementById("map_33");ie.name="NorthCarolina",ie.visited=!1;var de=document.getElementById("map_34");de.name="NorthDakota",de.visited=!1;var le=document.getElementById("map_35");le.name="Ohio",le.visited=!1;var se=document.getElementById("map_36");se.name="Oklahoma",se.visited=!1;var oe=document.getElementById("map_37");oe.name="Oregon",oe.visited=!1;var ce=document.getElementById("map_38");ce.name="Pennsylvania",ce.visited=!1;var re=document.getElementById("map_39");re.name="RhodeIsland",re.visited=!1;var ue=document.getElementById("map_40");ue.name="SouthCarolina",ue.visited=!1;var me=document.getElementById("map_41");me.name="SouthDakota",me.visited=!1;var ve=document.getElementById("map_42");ve.name="Tennessee",ve.visited=!1;var ye=document.getElementById("map_43");ye.name="Texas",ye.visited=!1;var pe=document.getElementById("map_44");pe.name="Utah",pe.visited=!1;var ge=document.getElementById("map_45");ge.name="Vermont",ge.visited=!1;var he=document.getElementById("map_46");he.name="Virginia",he.visited=!1;var Ee=document.getElementById("map_47");Ee.name="Washington",Ee.visited=!1;var fe=document.getElementById("map_48");fe.name="WestVirginia",Ee.visited=!1;var Ie=document.getElementById("map_49");Ie.name="Wisconsin",Ie.visited=!1;var Be=document.getElementById("map_50");Be.name="Wyoming",Be.visited=!1;var _e=[S,w,P,T,x,A,Y,j,D,k,L,O,N,M,R,C,H,W,G,Q,V,q,K,U,z,F,J,X,Z,ee,te,ne,ae,ie,de,le,se,oe,ce,re,ue,me,ve,ye,pe,ge,he,Ee,fe,Ie,Be]}catch(e){}$("#submit").click(function(a){if(a.preventDefault(),l.value.toLowerCase().includes("drop"))return void(l.value+="\n Sorry, Dropping is disabled on this website for securty, Access the database directly if you need to drop something.");var i=l.value;$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:i},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(t){if("string"==typeof(I=t)&&"ER"==I.substring(0,2))return l.value=l.value+"\nThere was an error in your Query, please retry",l.value=l.value+"\nError given: "+I,void(l.value=l.value+"\nDefaulting map to 2016");var n=0;for(var a in I){var i=0;b[a]=[];for(var d in I[a])e(d)&&(_[n]=d,n++),b[a][i]=I[a][d],i++}},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tableheaders",async:!1,data:{tableHeaders:_},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tabledata",async:!1,data:{dataTable:b},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"});var d=l.value,o=2016;d.includes("Year")&&(d.includes("2016")&&(o=2016),d.includes("2012")&&(o=2012),d.includes("2008")&&(o=2008),d.includes("2004")&&(o=2004),d.includes("2000")&&(o=2e3),d.includes("1996")&&(o=1996),d.includes("1992")&&(o=1992),d.includes("1988")&&(o=1988),d.includes("1984")&&(o=1984),d.includes("1980")&&(o=1980),d.includes("1976")&&(o=1976),d.includes("1972")&&(o=1972),d.includes("1968")&&(o=1968),d.includes("1964")&&(o=1964),d.includes("1960")&&(o=1960),d.includes("1956")&&(o=1956),d.includes("1952")&&(o=1952),d.includes("1948")&&(o=1948),d.includes("1944")&&(o=1944),d.includes("1940")&&(o=1940),d.includes("1936")&&(o=1936),d.includes("1932")&&(o=1932),d.includes("1928")&&(o=1928),d.includes("1924")&&(o=1924),d.includes("1920")&&(o=1920),d.includes("1916")&&(o=1916),d.includes("1912")&&(o=1912)),s.innerHTML="Year : "+o,n(),_=[],b=[[]],d.includes("There was an error in your Query, please retry")||t("/table.html")}),$("#submitwp").click(function(t){t.preventDefault();var a=l.value;if(l.value.toLowerCase().includes("drop"))return void(l.value+="\n Sorry, Dropping is disabled on this website for securty, Access the database directly if you need to drop something.");$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:a},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(t){if("string"==typeof(I=t)&&"ER"==I.substring(0,2))return l.value=l.value+"\nThere was an error in your Query, please retry",l.value=l.value+"\nError given: "+I,void(l.value=l.value+"\nDefaulting map to 2016");var n=0;for(var a in I){var i=0;b[a]=[];for(var d in I[a])e(d)&&(_[n]=d,n++),b[a][i]=I[a][d],i++}},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tableheaders",async:!1,data:{tableHeaders:_},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tabledata",async:!1,data:{dataTable:b},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"});var i=l.value,d=2016;i.includes("Year")&&(i.includes("2016")&&(d=2016),i.includes("2012")&&(d=2012),i.includes("2008")&&(d=2008),i.includes("2004")&&(d=2004),i.includes("2000")&&(d=2e3),i.includes("1996")&&(d=1996),i.includes("1992")&&(d=1992),i.includes("1988")&&(d=1988),i.includes("1984")&&(d=1984),i.includes("1980")&&(d=1980),i.includes("1976")&&(d=1976),i.includes("1972")&&(d=1972),i.includes("1968")&&(d=1968),i.includes("1964")&&(d=1964),i.includes("1960")&&(d=1960),i.includes("1956")&&(d=1956),i.includes("1952")&&(d=1952),i.includes("1948")&&(d=1948),i.includes("1944")&&(d=1944),i.includes("1940")&&(d=1940),i.includes("1936")&&(d=1936),i.includes("1932")&&(d=1932),i.includes("1928")&&(d=1928),i.includes("1924")&&(d=1924),i.includes("1920")&&(d=1920),i.includes("1916")&&(d=1916),i.includes("1912")&&(d=1912)),s.innerHTML="Year : "+d,n(),_=[],b=[[]]}),$("#help").click(function(e){e.preventDefault(),t("/help.html")}),$("path, circle").hover(function(e){$("#info-box").css("display","block"),void 0==this.demPercent||null==this.demPercent||0==this.demPercent?$("#info-box").html("<div>State: "+this.name+"</div>"):$("#info-box").html("<div>State: "+this.name+"</div><div>Democratic: "+this.demPercent+"%</div><div>Republican: "+this.repPercent+"%</div><div>Independent: "+this.indPercent+"%</div><div>Other: "+this.othPercent+"%</div>")}),$("path, circle").mouseleave(function(e){$("#info-box").css("display","none")}),$(document).mousemove(function(e){$("#info-box").css("top",e.pageY-$("#info-box").height()-30),$("#info-box").css("left",e.pageX-$("#info-box").width()/2)}).mouseover()})}});