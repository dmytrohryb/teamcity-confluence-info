$(document).ready(function(){
    $("#blog").load("tester.html", function() {
        alert('Load was performed.');
    });
});