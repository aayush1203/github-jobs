$(document).ready(function(){
    let list=$("#list");
    let input1=$('#inp');
    let input2=$('#loct')
    let button=$('#btn');
    let loc=$('');
    let lang=$('');
    let text1 = $('');
    let span1 = $('');
    let text2 = $('');
    let span2 = $('');
    let text3 = $('');
    let span3 = $('');
    let text4 = $('');
    let span4 = $('');
    let li1 = $('');
    let li2 = $('');
    let li3 = $('');
    let li4=$('');

    var createnode=function(data,i){
        var t1 = Object.keys(data)[i];
        var v1 = data[t1];
        var j;
    
            var d1=Object.keys(v1)[7];
            var r1=v1[d1];

            li1=document.createElement('li');
            span1=document.createElement('span');
            text1=document.createTextNode(r1);

            var d2 = Object.keys(v1)[2];
            var r2 = v1[d2];
            var d3 = Object.keys(v1)[4];
            var r3 = v1[d3];
            var d4 = Object.keys(v1)[6];
            var r4 = v1[d4];
            li1=document.createElement('li');
            span1=document.createElement('span');
            text1=document.createTextNode(d1 + " : " + r1);
            li2=document.createElement('li');
            span2=document.createElement('span');
            text2=document.createTextNode(d2 + " : " + r2);
            li3=document.createElement('li');
            span3=document.createElement('span');
            text3=document.createTextNode(d3 + " : " + r3);
            li4=document.createElement('li');
            span4=document.createElement('span');
            text4=document.createTextNode(d4 + " : " + r4);
        }
    
        var appendNode=function(){
            span1.append(text1);
            li1.append(span1);
            list.append(li1);
            span2.append(text2);
            li2.append(span2);
            list.append(li2);
            span3.append(text3);
            li3.append(span3);
            list.append(li3);
            span4.append(text4);
            li4.append(span4);
            list.append(li4);
        }
    


    function network(lang,loc){
        $.ajax({
            url: "https://jobs.github.com/positions.json",
            type: "get",
            data: {
                description: lang,
                full_time: true,
                location: loc
            },
			success: function(data){
                var i;
                $("p").append(" <b> TOTAL JOBS FOUND FOR YOU : </b>" + Object.keys(data).length);
                for(i=0;i<Object.keys(data).length;i++){
                    createnode(data,i);
                    appendNode();
                }
			}
        })
    }

    $("#btn").click(function(){
		$("ul").empty();
        lang=$(inp).val();
        loc=$(loct).val();
		network(lang,loc);
	});
})