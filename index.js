window.onload = function(){
    let item = new Array;
    for(var i=0; i<15; i++)
    item[i]=i+1;
    item[15] = 0;

    for(let i=item.length-1; i>0; i--){
        const rand = Math.floor(Math.random()*(i+1));
        item[rand] = (item[i]+item[rand] - (item[i]=item[rand]));
    }

    
    function boxItem(){
        for(var i=1; i<16; i++)
        document.getElementsByTagName('td')[i].innerHTML = '<img src="resources/'+item[i]+'.png" >';
    }

    document.addEventListener('keydown',function(e){
        if(e.keyCode==38 && item.indexOf(0)>3)
            item[(item.indexOf(0)-4)] = ( item[item.indexOf(0)]+item[(item.indexOf(0)-4)] -(item[item.indexOf(0)]=item[(item.indexOf(0)-4)]));
        else if(e.keyCode==40 && item.indexOf(0)<12)
            item[(item.indexOf(0)+4)] = ( item[item.indexOf(0)]+item[(item.indexOf(0)+4)] -(item[item.indexOf(0)]=item[(item.indexOf(0)+4)]));
        else if(e.keyCode==37 && !(item.indexOf(0)==0 || item.indexOf(0)==4 || item.indexOf(0)==8 || item.indexOf(0)==12))
            item[(item.indexOf(0)-1)] = ( item[item.indexOf(0)]+item[(item.indexOf(0)-1)] -(item[item.indexOf(0)]=item[(item.indexOf(0)-1)]));
        else if(e.keyCode==39 && !(item.indexOf(0)==3 || item.indexOf(0)==7 || item.indexOf(0)==11 || item.indexOf(0)==15))
            item[(item.indexOf(0)+1)] = ( item[item.indexOf(0)]+item[(item.indexOf(0)+1)] -(item[item.indexOf(0)]=item[(item.indexOf(0)+1)]));
        boxItem();
    })

    boxItem();
}