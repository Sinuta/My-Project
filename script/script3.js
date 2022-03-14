function show_streetlights(){
    
    var table_html="";
   for(var index in streetlights){
        var streetlight=streetlights[index];
        var name=streetlight["name"];
        var price=streetlight["price"];
        var product=streetlight["product"];
        var streetlight_index=Number(index)+1;
       table_html+="<tr><th scope='row'>"+streetlight_index+"</th><td>"+name+"</td><td><span class='"+price+"'>"+price+"</span></td><td><img class='streetlight_img' src='image/"+product+"'></td></tr>";
            }
    
    $("#light-table-data").html(table_html);  
}


function search_streetlights(){
    var search_text=$("#search-text").val();
    var table_html="";
        for(var index in streetlights){
        var streetlight=streetlights[index];
        var name=streetlight["name"];
        var price=streetlight["price"];
        var product=streetlight["product"];
        var streetlight_index=Number(index)+1;
        
            if(name.toLowerCase().search(search_text.toLowerCase())!=-1){

        table_html+="<tr><th scope='row'>"+streetlight_index+"</th><td>"+name+"</td><td><span class='"+price+"'>"+price+"</span></td><td><img class='streetlight_img' src='image/"+product+"'></td></tr>";
            }
    }
    
    $("#light-table-data").html(table_html);  
}
