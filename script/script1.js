function calc_energy_saving(){
    var PCS= document.getElementById("PCS").value;
    var energy= document.getElementById("energy").value;
    var saving=0;
    if(energy=="1"){
        saving= 2160*PCS;}
    else if(energy=="2"){
        saving= 4320*PCS;}
    else if(energy=="3"){
        saving= 6480*PCS;}
    else {saving=8640 *PCS;}
    document.getElementById("Result").innerHTML="If you use smart street ligthing you will save "  + saving  + " AED in 1 year";
            return false;}