webpackHotUpdate(0,{"./src/app.js":function(e,t,n){"use strict";var a=n("./node_modules/react-dom/index.js");(function(e){e&&e.__esModule})(a),n("./src/app.css"),$(document).ready(function(){function e(e){var t;for(t=0;t<ce.length;t++)if(e==ce[t])return!1;return!0}function t(e){window.open(e,"_blank")}function n(){$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/statescolors",async:!1,success:function(e){oe=e;for(var t=0;t<oe.length;t++)for(var n=oe[t].State,a=oe[t].Democratic_Percent,l=oe[t].Republican_Percent,u=oe[t].Independent_Percent,d=oe[t].Other_Percent,o=0;o<ot.length;o++)ot[o].name==n&&(ot[o].visited=!0,ot[o].demPercent=a,ot[o].repPercent=l,ot[o].indPercent=u,ot[o].othPercent=d,a>l&&a>u&&a>d?ot[o].setAttribute("fill","rgb(0, 97, 255)"):l>a&&l>u&&l>d?ot[o].setAttribute("fill","rgb(255, 0, 16)"):u>l&&u>a&&u>d?ot[o].setAttribute("fill","rgb(0, 186, 3)"):ot[o].setAttribute("fill","rgb(206, 224, 4)"));for(var c=0;c<ot.length;c++)0==ot[c].visited&&(ot[c].demPercent=0,ot[c].setAttribute("fill","#666666"));for(var i=0;i<ot.length;i++)ot[i].visited=!1},dataType:"json"})}var a=window.innerHeight,l=window.innerWidth,u=document.getElementById("map");try{u.setAttribute("height",a/1.6),u.setAttribute("width",l/1.4)}catch(e){console.log("At Add to Database")}var d=document.getElementById("textbox"),o=document.getElementById("yearBox"),c=document.getElementById("statsSelect"),i=document.getElementById("winnerBox"),s=document.getElementById("winnerSelection"),r=document.getElementById("stateBox"),m=document.getElementById("stateSelection"),v=document.getElementById("percentInput"),y=document.getElementById("percentInputText"),p=document.getElementById("realInput"),g=document.getElementById("realInputText"),I=document.getElementById("yearBoxa"),_=document.getElementById("yearBoxSelection"),h=document.getElementById("statsSelectAdd"),E=document.getElementById("yearBoxAdd"),B=document.getElementById("yearBoxSelectionAdd"),f=document.getElementById("stateBoxAdd"),P=(document.getElementById("stateSelectionAdd"),document.getElementById("holderPE")),b=document.getElementById("holderD"),S=document.getElementById("holderW"),T=document.getElementById("submitPE"),A=document.getElementById("State_Input"),x=document.getElementById("Democratic_Percent_Input"),w=document.getElementById("Republican_Percent_Input"),k=document.getElementById("Independent_Percent_Input"),D=document.getElementById("Other_Percent_Input"),Y=document.getElementById("Democratic_Votes_Input"),j=document.getElementById("Republican_Votes_Input"),O=document.getElementById("Independent_Votes_Input"),N=document.getElementById("Other_Votes_Input"),V=document.getElementById("submitD"),R=document.getElementById("State_InputD"),C=document.getElementById("White_Percent_Input"),W=document.getElementById("Black_Percent_Input"),L=document.getElementById("Hispanic_Percent_Input"),M=document.getElementById("Asian_Percent_Input"),H=document.getElementById("AmericanIndian_Percent_Input"),F=document.getElementById("NativeHawaiin_Percent_Input"),G=document.getElementById("With_Children_Percent_Input"),U=document.getElementById("Without_Children_Percent_Input"),z=document.getElementById("Male_Percent_Input"),q=document.getElementById("Female_Percent_Input"),Q=document.getElementById("Median_Income_Input"),K=document.getElementById("Citizen_Percent_Input"),J=document.getElementById("Non_Citizen_Percent_Input"),X=document.getElementById("AdultsUnder55_Input"),Z=document.getElementById("AdultsOver55_Input"),ee=document.getElementById("FullTime_Percent_Input"),te=document.getElementById("PartTime_Percent_Input"),ne=document.getElementById("Unemployed_Percent_Input"),ae=document.getElementById("Education_Rank_Input"),le=document.getElementById("submitW"),ue=(document.getElementById("Name_Input"),document.getElementById("VP_Input"),document.getElementById("Party_Input"),document.getElementById("Popular_Vote"),document.getElementById("Electoral_Votes"),document.getElementById("textboxAdd"));$("#statsSelectAdd").change(function(){E.style.display="none",f.style.display="none",P.style.display="none",b.style.display="none",S.style.display="none",V.style.display="none",T.style.display="none",le.style.display="none","Previous_Elections"==h.value?E.style.display="block":"Demographics"==h.value?(b.style.display="block",V.style.display="block"):"Winners"==h.value&&(E.style.display="block")}),$("#yearBoxAdd").change(function(){"Previous_Elections"==h.value?(P.style.display="block",T.style.display="block"):"Winners"==h.value&&(S.style.display="block",le.style.display="block")}),$("#statsSelect").change(function(){i.style.display="none",r.style.display="none",v.style.display="none",p.style.display="none",I.style.display="none",g.value="",y.value="","Winners of Elections"==c.value?i.style.display="block":"Demographics of a state"==c.value?r.style.display="block":(I.style.display="block",c.value.includes("Percent")?(v.style.display="block","ALL YEARS"!=_.value?d.value="select Year, State, "+c.value+" from Previous_Elections where Year = "+_.value:d.value="select Year, State, "+c.value+" from Previous_Elections where Year >= 1912"):(p.style.display="block","ALL YEARS"!=_.value?d.value="select Year, State, "+c.value+" from Previous_Elections where Year = "+_.value:d.value="select Year, State, "+c.value+" from Previous_Elections where Year >= 1912"))}),$("#winnerBox").change(function(){d.value="select * from Candidates where Name = '"+s.value+"'"}),$("#stateBox").change(function(){"ALL STATES"==m.value?d.value="select * from Demographics":d.value="select * from Demographics where State = '"+m.value+"'"}),$("#yearBoxa").change(function(){"ALL YEARS"!=_.value?d.value="select Year, State, "+c.value+" from Previous_Elections where Year = "+_.value:d.value="select Year, State, "+c.value+" from Previous_Elections where Year >= 1912"}),$("#realInputText").keyup(function(){"ALL YEARS"!=_.value?d.value="select Year, State, "+c.value+" from Previous_Elections where Year = "+_.value+" AND "+c.value+" >= "+g.value:d.value="select Year, State, "+c.value+" from Previous_Elections where Year >= 1912 AND "+c.value+" >= "+g.value}),$("#percentInputText").keyup(function(){"ALL YEARS"!=_.value?d.value="select Year, State, "+c.value+" from Previous_Elections where Year = "+_.value+" AND "+c.value+" >= "+y.value:d.value="select Year, State, "+c.value+" from Previous_Elections where Year >= 1912 AND "+c.value+" >= "+y.value}),setInterval(function(){a=window.innerHeight,l=window.innerWidth;try{u.setAttribute("height",a/1.6),u.setAttribute("width",l/1.4)}catch(e){}},100);var de,oe,ce=[],ie=[[]];try{var se=document.getElementById("map_1");se.name="Alabama",se.visited=!1;var re=document.getElementById("map_2");re.name="Alaska",re.visited=!1;var me=document.getElementById("map_3");me.name="Arizona",me.visited=!1;var ve=document.getElementById("map_4");ve.name="Arkansas",ve.visited=!1;var ye=document.getElementById("map_5");ye.name="California",ye.visited=!1;var pe=document.getElementById("map_6");pe.name="Colorado",pe.visited=!1;var ge=document.getElementById("map_7");ge.name="Connecticut",ge.visited=!1;var Ie=document.getElementById("map_8");Ie.name="Delaware",Ie.visited=!1;var _e=document.getElementById("map_51");_e.name="D.C.",_e.visited=!1;var he=document.getElementById("map_9");he.name="Florida",he.visited=!1;var Ee=document.getElementById("map_10");Ee.name="Georgia",Ee.visited=!1;var Be=document.getElementById("map_11");Be.name="Hawaii",Be.visited=!1;var fe=document.getElementById("map_12");fe.name="Idaho",fe.visited=!1;var Pe=document.getElementById("map_13");Pe.name="Illinois",Pe.visited=!1;var be=document.getElementById("map_14");be.name="Indiana",be.visited=!1;var Se=document.getElementById("map_15");Se.name="Iowa",Se.visited=!1;var Te=document.getElementById("map_16");Te.name="Kansas",Te.visited=!1;var Ae=document.getElementById("map_17");Ae.name="Kentucky",Ae.visited=!1;var xe=document.getElementById("map_18");xe.name="Louisiana",xe.visited=!1;var we=document.getElementById("map_19");we.name="Maine",we.visited=!1;var $e=document.getElementById("map_20");$e.name="Maryland",$e.visited=!1;var ke=document.getElementById("map_21");ke.name="Massachusetts",ke.visited=!1;var De=document.getElementById("map_22");De.name="Michigan",De.visited=!1;var Ye=document.getElementById("map_23");Ye.name="Minnesota",Ye.visited=!1;var je=document.getElementById("map_24");je.name="Mississippi",je.visited=!1;var Oe=document.getElementById("map_25");Oe.name="Missouri",Oe.visited=!1;var Ne=document.getElementById("map_26");Ne.name="Montana",Ne.visited=!1;var Ve=document.getElementById("map_27");Ve.name="Nebraska",Ve.visited=!1;var Re=document.getElementById("map_28");Re.name="Nevada",Re.visited=!1;var Ce=document.getElementById("map_29");Ce.name="NewHampshire",Ce.visited=!1;var We=document.getElementById("map_30");We.name="NewJersey",We.visited=!1;var Le=document.getElementById("map_31");Le.name="NewMexico",Le.visited=!1;var Me=document.getElementById("map_32");Me.name="NewYork",Me.visited=!1;var He=document.getElementById("map_33");He.name="NorthCarolina",He.visited=!1;var Fe=document.getElementById("map_34");Fe.name="NorthDakota",Fe.visited=!1;var Ge=document.getElementById("map_35");Ge.name="Ohio",Ge.visited=!1;var Ue=document.getElementById("map_36");Ue.name="Oklahoma",Ue.visited=!1;var ze=document.getElementById("map_37");ze.name="Oregon",ze.visited=!1;var qe=document.getElementById("map_38");qe.name="Pennsylvania",qe.visited=!1;var Qe=document.getElementById("map_39");Qe.name="RhodeIsland",Qe.visited=!1;var Ke=document.getElementById("map_40");Ke.name="SouthCarolina",Ke.visited=!1;var Je=document.getElementById("map_41");Je.name="SouthDakota",Je.visited=!1;var Xe=document.getElementById("map_42");Xe.name="Tennessee",Xe.visited=!1;var Ze=document.getElementById("map_43");Ze.name="Texas",Ze.visited=!1;var et=document.getElementById("map_44");et.name="Utah",et.visited=!1;var tt=document.getElementById("map_45");tt.name="Vermont",tt.visited=!1;var nt=document.getElementById("map_46");nt.name="Virginia",nt.visited=!1;var at=document.getElementById("map_47");at.name="Washington",at.visited=!1;var lt=document.getElementById("map_48");lt.name="WestVirginia",at.visited=!1;var ut=document.getElementById("map_49");ut.name="Wisconsin",ut.visited=!1;var dt=document.getElementById("map_50");dt.name="Wyoming",dt.visited=!1;var ot=[se,re,me,ve,ye,pe,ge,Ie,_e,he,Ee,Be,fe,Pe,be,Se,Te,Ae,xe,we,$e,ke,De,Ye,je,Oe,Ne,Ve,Re,Ce,We,Le,Me,He,Fe,Ge,Ue,ze,qe,Qe,Ke,Je,Xe,Ze,et,tt,nt,at,lt,ut,dt]}catch(e){}$("#submitW").click(function(e){var t=document.getElementById("Name_Input"),n=document.getElementById("VP_Input"),a=document.getElementById("Party_Input"),l=document.getElementById("Popular_Vote"),u=document.getElementById("Electoral_Votes0");if(0==t.value.length)return void alert("Candidate Name cannot be empty!");0==n.value.length&&(n.value="NO VP"),0==a.value.length&&(a.value="NO PARTY"),0==l.value.length&&(l.value=0),(u.value.length=0)&&(u.value=0)}),$("#submitD").click(function(e){e.preventDefault(),0==R.value.length&&(R.value="No Name"),0==C.value.length&&(C.value=0),0==W.value.length&&(W.value=0),0==L.value.length&&(L.value=0),0==M.value.length&&(M.value=0),0==H.value.length&&(H.value=0),0==F.value.length&&(F.value=0),0==G.value.length&&(G.value=0),0==U.value.length&&(U.value=0),0==z.value.length&&(z.value=0),0==q.value.length&&(q.value=0),0==Q.value.length&&(Q.value=0),0==K.value.length&&(K.value=0),0==J.value.length&&(J.value=0),0==X.value.length&&(X.value=0),0==Z.value.length&&(Z.value=0),0==ee.value.length&&(ee.value=0),0==te.value.length&&(te.value=0),0==ne.value.length&&(ne.value=0),0==ae.value.length&&(ae.value=0),ue.value="INSERT INTO Demographics(State, White_Percent, Black_Percent, Hispanic_Percent, Asian_Percent, AmericanIndian_Percent, NativeHawaiin_Percent, With_Children_Percent, Without_Children_Percent, Male_Percent, Female_Percent, Median_Income, Citizen_Percent, Non_Citizen_Percent, AdultsUnder55, AdultsOver55, FullTime_Percent, PartTime_Percent, Unemployed_Percent, Education_Rank) Values('"+R.value+"', "+C.value+", "+W.value+", "+L.value+", "+M.value+", "+H.value+", "+F.value+", "+G.value+", "+U.value+", "+z.value+", "+q.value+", "+Q.value+", "+K.value+", "+J.value+", "+X.value+", "+Z.value+", "+ee.value+", "+te.value+", "+ne.value+", "+ae.value+")",$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:ue.value},success:function(){console.log("Success")},error:function(){alert("An error occured!")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(e){alert("Tuple successfully added, Feel free to close this tab or choose another table to add to to restart the process.")},error:function(){alert("An error occured!")}})}),$("#submitPE").click(function(e){e.preventDefault(),0==A.value.length&&(A.value="No Name"),0==x.value.length&&(x.value=0),0==w.value.length&&(w.value=0),0==k.value.length&&(k.value=0),0==D.value.length&&(D.value=0),0==Y.value.length&&(Y.value=0),0==j.value.length&&(j.value=0),0==O.value.length&&(O.value=0),0==N.value.length&&(N.value=0),ue.value="INSERT INTO Previous_Elections(State, Total_Votes, Democratic_Percent, Republican_Percent, Independent_Percent, Other_Percent, Votes_Democratic, Votes_Republican, Votes_Independent, Votes_Other, Year) Values('"+A.value+"', 0,"+x.value+", "+w.value+", "+k.value+", "+D.value+", "+Y.value+", "+j.value+", "+O.value+", "+N.value+", "+B.value+")",$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:ue.value},success:function(){console.log("Success")},error:function(){alert("An error occured!")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(e){alert("Tuple successfully added, Feel free to close this tab or choose another table to add to to restart the process.")},error:function(){alert("An error occured!")}})}),$("#submit").click(function(a){if(a.preventDefault(),d.value.toLowerCase().includes("drop"))return void(d.value+="\n Sorry, Dropping is disabled on this website for securty, Access the database directly if you need to drop something.");var l=d.value;$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:l},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(t){if("string"==typeof(de=t)&&"ER"==de.substring(0,2))return d.value=d.value+"\nThere was an error in your Query, please retry",d.value=d.value+"\nError given: "+de,void(d.value=d.value+"\nDefaulting map to 2016");var n=0;for(var a in de){var l=0;ie[a]=[];for(var u in de[a])e(u)&&(ce[n]=u,n++),ie[a][l]=de[a][u],l++}},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tableheaders",async:!1,data:{tableHeaders:ce},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tabledata",async:!1,data:{dataTable:ie},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"});var u=d.value,c=2016;u.includes("Year")&&(u.includes("2016")&&(c=2016),u.includes("2012")&&(c=2012),u.includes("2008")&&(c=2008),u.includes("2004")&&(c=2004),u.includes("2000")&&(c=2e3),u.includes("1996")&&(c=1996),u.includes("1992")&&(c=1992),u.includes("1988")&&(c=1988),u.includes("1984")&&(c=1984),u.includes("1980")&&(c=1980),u.includes("1976")&&(c=1976),u.includes("1972")&&(c=1972),u.includes("1968")&&(c=1968),u.includes("1964")&&(c=1964),u.includes("1960")&&(c=1960),u.includes("1956")&&(c=1956),u.includes("1952")&&(c=1952),u.includes("1948")&&(c=1948),u.includes("1944")&&(c=1944),u.includes("1940")&&(c=1940),u.includes("1936")&&(c=1936),u.includes("1932")&&(c=1932),u.includes("1928")&&(c=1928),u.includes("1924")&&(c=1924),u.includes("1920")&&(c=1920),u.includes("1916")&&(c=1916),u.includes("1912")&&(c=1912)),o.innerHTML="Year : "+c,n(),ce=[],ie=[[]],u.includes("There was an error in your Query, please retry")||t("/table.html")}),$("#submitwp").click(function(t){t.preventDefault();var a=d.value;if(d.value.toLowerCase().includes("drop"))return void(d.value+="\n Sorry, Dropping is disabled on this website for securty, Access the database directly if you need to drop something.");$.ajax({type:"POST",method:"POST",url:"/query",async:!1,data:{textbox:a},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"GET",contentType:"application/json; charset=utf-8",url:"/test",async:!1,success:function(t){if("string"==typeof(de=t)&&"ER"==de.substring(0,2))return d.value=d.value+"\nThere was an error in your Query, please retry",d.value=d.value+"\nError given: "+de,void(d.value=d.value+"\nDefaulting map to 2016");var n=0;for(var a in de){var l=0;ie[a]=[];for(var u in de[a])e(u)&&(ce[n]=u,n++),ie[a][l]=de[a][u],l++}},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tableheaders",async:!1,data:{tableHeaders:ce},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"}),$.ajax({type:"POST",method:"POST",url:"/tabledata",async:!1,data:{dataTable:ie},success:function(){console.log("Success")},error:function(){console.log("failed :(")},dataType:"json"});var l=d.value,u=2016;l.includes("Year")&&(l.includes("2016")&&(u=2016),l.includes("2012")&&(u=2012),l.includes("2008")&&(u=2008),l.includes("2004")&&(u=2004),l.includes("2000")&&(u=2e3),l.includes("1996")&&(u=1996),l.includes("1992")&&(u=1992),l.includes("1988")&&(u=1988),l.includes("1984")&&(u=1984),l.includes("1980")&&(u=1980),l.includes("1976")&&(u=1976),l.includes("1972")&&(u=1972),l.includes("1968")&&(u=1968),l.includes("1964")&&(u=1964),l.includes("1960")&&(u=1960),l.includes("1956")&&(u=1956),l.includes("1952")&&(u=1952),l.includes("1948")&&(u=1948),l.includes("1944")&&(u=1944),l.includes("1940")&&(u=1940),l.includes("1936")&&(u=1936),l.includes("1932")&&(u=1932),l.includes("1928")&&(u=1928),l.includes("1924")&&(u=1924),l.includes("1920")&&(u=1920),l.includes("1916")&&(u=1916),l.includes("1912")&&(u=1912)),o.innerHTML="Year : "+u,n(),ce=[],ie=[[]]}),$("#help").click(function(e){e.preventDefault(),t("/help.html")}),$("path, circle").hover(function(e){$("#info-box").css("display","block"),void 0==this.demPercent||null==this.demPercent||0==this.demPercent?$("#info-box").html("<div>State: "+this.name+"</div>"):$("#info-box").html("<div>State: "+this.name+"</div><div>Democratic: "+this.demPercent+"%</div><div>Republican: "+this.repPercent+"%</div><div>Independent: "+this.indPercent+"%</div><div>Other: "+this.othPercent+"%</div>")}),$("path, circle").mouseleave(function(e){$("#info-box").css("display","none")}),$(document).mousemove(function(e){$("#info-box").css("top",e.pageY-$("#info-box").height()-30),$("#info-box").css("left",e.pageX-$("#info-box").width()/2)}).mouseover()})}});