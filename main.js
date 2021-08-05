var studentNames= [];

function submit()
{
    var student1= document.getElementById("student1").value;
    var student2= document.getElementById("student2").value;
    var student3= document.getElementById("student3").value;
    var student4= document.getElementById("student4").value;

    studentNames.push(student1);
    studentNames.push(student2);
    studentNames.push(student3);
    studentNames.push(student4);

    document.getElementById("displayNames").innerHTML=studentNames;
    console.log(studentNames);
    document.getElementById("submit_button").style.display="none"; 
    document.getElementById("sort_button").style.display="inline-block";   
}

function sort()
{
    studentNames.sort();
    document.getElementById("displayNames").innerHTML=studentNames;
    console.log(studentNames);
}