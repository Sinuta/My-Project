function convert(){

    var from=$("#from").val();
    var to=$("#to").val();
    var amount=$("#amount").val();
    
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://currency-exchange.p.rapidapi.com/exchange?q=1&from="+from+"&to="+to,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "ae028ba0admshfff829b83ed9634p114e92jsn3cc9b0d66228"
	}
};

$.ajax(settings).done(function (response) {
    var rate=Number(response);
    var result=rate*amount;
    $("#result").text(amount+" "+from+"= "+result.toFixed(2)+""+to);

});

}