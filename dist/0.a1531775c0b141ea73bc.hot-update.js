webpackHotUpdate(0,{"./src/app.js":function(e,t,n){"use strict";var a=n("./node_modules/react-dom/index.js");(function(e){e&&e.__esModule})(a),n("./src/app.css"),$(document).ready(function(){function e(e){var t;for(t=0;t<l.length;t++)if(e==l[t])return!1;return!0}function t(e){window.open(e,"_blank")}function n(){$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/statescolors",async:!1,success:function(e){m=e;for(var t=0;t<m.length;t++)for(var n=m[t].State,a=m[t].Democratic_Percent,i=m[t].Republican_Percent,d=m[t].Independent_Percent,s=m[t].Other_Percent,o=0;o<le.length;o++)le[o].name==n&&(le[o].visited=!0,le[o].demPercent=a,le[o].repPercent=i,le[o].indPercent=d,le[o].othPercent=s,a>i&&a>d&&a>s?le[o].setAttribute("fill","rgb(0, 97, 255)"):i>a&&i>d&&i>s?le[o].setAttribute("fill","rgb(255, 0, 16)"):d>i&&d>a&&d>s?le[o].setAttribute("fill","rgb(0, 186, 3)"):le[o].setAttribute("fill","rgb(206, 224, 4)"));for(var c=0;c<le.length;c++)0==le[c].visited&&(le[c].demPercent=0,le[c].setAttribute("fill","#666666"));for(var l=0;l<le.length;l++)le[l].visited=!1},dataType:"json"})}var a=window.innerHeight,i=window.innerWidth,d=document.getElementById("map");d.setAttribute("height",a/1.3),d.setAttribute("width",i/1.1);var s=document.getElementById("textbox"),o=document.getElementById("yearBox");setInterval(function(){a=window.innerHeight,i=window.innerWidth,d.setAttribute("height",a/1.35),d.setAttribute("width",i/1.1)},100);var c,m,l=[],r=[[]],u=document.getElementById("map_1");u.name="Alabama",u.visited=!1;var v=document.getElementById("map_2");v.name="Alaska",v.visited=!1;var p=document.getElementById("map_3");p.name="Arizona",p.visited=!1;var y=document.getElementById("map_4");y.name="Arkansas",y.visited=!1;var g=document.getElementById("map_5");g.name="California",g.visited=!1;var f=document.getElementById("map_6");f.name="Colorado",f.visited=!1;var h=document.getElementById("map_7");h.name="Connecticut",h.visited=!1;var I=document.getElementById("map_8");I.name="Delaware",I.visited=!1;var E=document.getElementById("map_51");E.name="D.C.",E.visited=!1;var _=document.getElementById("map_9");_.name="Florida",_.visited=!1;var B=document.getElementById("map_10");B.name="Georgia",B.visited=!1;var b=document.getElementById("map_11");b.name="Hawaii",b.visited=!1;var T=document.getElementById("map_12");T.name="Idaho",T.visited=!1;var P=document.getElementById("map_13");P.name="Illinois",P.visited=!1;var x=document.getElementById("map_14");x.name="Indiana",x.visited=!1;var w=document.getElementById("map_15");w.name="Iowa",w.visited=!1;var j=document.getElementById("map_16");j.name="Kansas",j.visited=!1;var S=document.getElementById("map_17");S.name="Kentucky",S.visited=!1;var O=document.getElementById("map_18");O.name="Louisiana",O.visited=!1;var k=document.getElementById("map_19");k.name="Maine",k.visited=!1;var A=document.getElementById("map_20");A.name="Maryland",A.visited=!1;var M=document.getElementById("map_21");M.name="Massachusetts",M.visited=!1;var D=document.getElementById("map_22");D.name="Michigan",D.visited=!1;var H=document.getElementById("map_23");H.name="Minnesota",H.visited=!1;var N=document.getElementById("map_24");N.name="Mississippi",N.visited=!1;var C=document.getElementById("map_25");C.name="Missouri",C.visited=!1;var W=document.getElementById("map_26");W.name="Montana",W.visited=!1;var Y=document.getElementById("map_27");Y.name="Nebraska",Y.visited=!1;var R=document.getElementById("map_28");R.name="Nevada",R.visited=!1;var G=document.getElementById("map_29");G.name="NewHampshire",G.visited=!1;var L=document.getElementById("map_30");L.name="NewJersey",L.visited=!1;var V=document.getElementById("map_31");V.name="NewMexico",V.visited=!1;var q=document.getElementById("map_32");q.name="NewYork",q.visited=!1;var K=document.getElementById("map_33");K.name="NorthCarolina",K.visited=!1;var Q=document.getElementById("map_34");Q.name="NorthDakota",Q.visited=!1;var U=document.getElementById("map_35");U.name="Ohio",U.visited=!1;var z=document.getElementById("map_36");z.name="Oklahoma",z.visited=!1;var F=document.getElementById("map_37");F.name="Oregon",F.visited=!1;var J=document.getElementById("map_38");J.name="Pennsylvania",J.visited=!1;var X=document.getElementById("map_39");X.name="RhodeIsland",X.visited=!1;var Z=document.getElementById("map_40");Z.name="SouthCarolina",Z.visited=!1;var ee=document.getElementById("map_41");ee.name="SouthDakota",ee.visited=!1;var te=document.getElementById("map_42");te.name="Tennessee",te.visited=!1;var ne=document.getElementById("map_43");ne.name="Texas",ne.visited=!1;var ae=document.getElementById("map_44");ae.name="Utah",ae.visited=!1;var ie=document.getElementById("map_45");ie.name="Vermont",ie.visited=!1;var de=document.getElementById("map_46");de.name="Virginia",de.visited=!1;var se=document.getElementById("map_47");se.name="Washington",se.visited=!1;var oe=document.getElementById("map_48");oe.name="WestVirginia",se.visited=!1;var ce=document.getElementById("map_49");ce.name="Wisconsin",ce.visited=!1;var me=document.getElementById("map_50");me.name="Wyoming",me.visited=!1;var le=[u,v,p,y,g,f,h,I,E,_,B,b,T,P,x,w,j,S,O,k,A,M,D,H,N,C,W,Y,R,G,L,V,q,K,Q,U,z,F,J,X,Z,ee,te,ne,ae,ie,de,se,oe,ce,me];$("#submit").click(function(a){a.preventDefault();var i=s.value;$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:i},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(t){if(c=t,console.log(c),"string"==typeof c&&"ER"==c.substring(0,2))return void(s.value="There was an error in your Query, please retry");var n=0;for(var a in c){var i=0;r[a]=[];for(var d in c[a])e(d)&&(l[n]=d,n++),r[a][i]=c[a][d],i++}},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tableheaders",async:!1,data:{tableHeaders:l},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tabledata",async:!1,data:{dataTable:r},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"});var d=s.value,m=2016;d.includes("Year")&&(d.includes("2016")&&(m=2016),d.includes("2012")&&(m=2012),d.includes("2008")&&(m=2008),d.includes("2004")&&(m=2004),d.includes("2000")&&(m=2e3),d.includes("1996")&&(m=1996),d.includes("1992")&&(m=1992),d.includes("1988")&&(m=1988),d.includes("1984")&&(m=1984),d.includes("1980")&&(m=1980),d.includes("1976")&&(m=1976),d.includes("1972")&&(m=1972),d.includes("1968")&&(m=1968),d.includes("1964")&&(m=1964),d.includes("1960")&&(m=1960),d.includes("1956")&&(m=1956),d.includes("1952")&&(m=1952),d.includes("1948")&&(m=1948),d.includes("1944")&&(m=1944),d.includes("1940")&&(m=1940),d.includes("1936")&&(m=1936),d.includes("1932")&&(m=1932),d.includes("1928")&&(m=1928),d.includes("1924")&&(m=1924),d.includes("1920")&&(m=1920),d.includes("1916")&&(m=1916),d.includes("1912")&&(m=1912)),o.innerHTML="Year : "+m,n(),l=[],r=[[]],t("/table.html")}),$("#submitwp").click(function(t){t.preventDefault();var a=s.value;$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:a},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(t){if(c=t,console.log(c),"string"==typeof c&&"ER"==c.substring(0,2))return s.value=s.value+"\nThere was an error in your Query, please retry",void(s.value=s.value+"\nError given: "+c);var n=0;for(var a in c){var i=0;r[a]=[];for(var d in c[a])e(d)&&(l[n]=d,n++),r[a][i]=c[a][d],i++}},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tableheaders",async:!1,data:{tableHeaders:l},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tabledata",async:!1,data:{dataTable:r},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"});var i=s.value,d=2016;i.includes("Year")&&(i.includes("2016")&&(d=2016),i.includes("2012")&&(d=2012),i.includes("2008")&&(d=2008),i.includes("2004")&&(d=2004),i.includes("2000")&&(d=2e3),i.includes("1996")&&(d=1996),i.includes("1992")&&(d=1992),i.includes("1988")&&(d=1988),i.includes("1984")&&(d=1984),i.includes("1980")&&(d=1980),i.includes("1976")&&(d=1976),i.includes("1972")&&(d=1972),i.includes("1968")&&(d=1968),i.includes("1964")&&(d=1964),i.includes("1960")&&(d=1960),i.includes("1956")&&(d=1956),i.includes("1952")&&(d=1952),i.includes("1948")&&(d=1948),i.includes("1944")&&(d=1944),i.includes("1940")&&(d=1940),i.includes("1936")&&(d=1936),i.includes("1932")&&(d=1932),i.includes("1928")&&(d=1928),i.includes("1924")&&(d=1924),i.includes("1920")&&(d=1920),i.includes("1916")&&(d=1916),i.includes("1912")&&(d=1912)),o.innerHTML="Year : "+d,n(),l=[],r=[[]]}),$("#help").click(function(e){e.preventDefault(),t("/help.html")}),$("path, circle").hover(function(e){$("#info-box").css("display","block"),void 0==this.demPercent||null==this.demPercent||0==this.demPercent?$("#info-box").html("<div>State: "+this.name+"</div>"):$("#info-box").html("<div>State: "+this.name+"</div><div>Democratic: "+this.demPercent+"%</div><div>Republican: "+this.repPercent+"%</div><div>Independent: "+this.indPercent+"%</div><div>Other: "+this.othPercent+"%</div>")}),$("path, circle").mouseleave(function(e){$("#info-box").css("display","none")}),$(document).mousemove(function(e){$("#info-box").css("top",e.pageY-$("#info-box").height()-30),$("#info-box").css("left",e.pageX-$("#info-box").width()/2)}).mouseover()})}});