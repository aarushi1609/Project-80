var studentNames= [];

function submit()
{
    for(j=1; j<=4; j++){
        var student= document.getElementById("student"+j).value;
        console.log(student);
        studentNames.push(student);
    }
    
    var displayarray=[];

    for(k=0; k<studentNames.length; k++){
        displayarray.push("<h4> Name -"+ studentNames[k] + "</h4>");
    }
    var displayarraywithout= displayarray.join(" ");
    document.getElementById("displayNamesWithComma").innerHTML=displayarray;
    document.getElementById("displayNamesWithoutComma").innerHTML=displayarraywithout;
    console.log(studentNames);
    document.getElementById("submit_button").style.display="none"; 
    document.getElementById("sort_button").style.display="inline-block";   
}





function sort()
{
    studentNames.sort();
    var displayarray=[];
   

    for(k=0; k<studentNames.length; k++){
        displayarray.push("<h4> Name -"+ studentNames[k] + "</h4>");
    }
    var displayarraywithout= displayarray.join(" ");
    document.getElementById("displayNamesWithoutComma").innerHTML=displayarray;
    document.getElementById("displayNamesWithoutComma").innerHTML=displayarraywithout;
    console.log(studentNames);
  
}