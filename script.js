function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * (1+years * rate / 100);
    var amount = parseInt(principal)+parseFloat(interest);
        // parseInt converts string to integer
        // parseFloat converts string to float
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(years);
        // getFullYear gets the year, using local time
    if (principal<=0){
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = "If you deposit $"+"<mark>"+principal+"</mark>"+",\<br\>at an interest rate of "+"<mark>"+rate+"</mark>"+"%\<br\>You will receive an amount of $"+"<mark>"+interest+"</mark>"+",\<br\>in the year "+"<mark>"+year+"</mark>"+"\<br\>";

    }
    
}

function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
