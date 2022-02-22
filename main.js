nameOfTheStudentArray = [];


function submit()
{
    var display_Student_array = [];
    for(var j = 1; j <= 4; j++)
    {
        var name_of_the_Student = document.getElementById("name_of_the_student_" + j).value;
        console.log(name_of_the_Student);

        nameOfTheStudentArray.push(name_of_the_Student);
    }

    console.log(nameOfTheStudentArray);

    var length_of_name_of_student_array = nameOfTheStudentArray.length;

    console.log(length_of_name_of_student_array);

    for(var i = 0; i < length_of_name_of_student_array; i++)
    {
        display_Student_array.push("<h4> NAME-" + nameOfTheStudentArray[i] + "</h4>");
        console.log(display_Student_array);
    }

    console.log(display_Student_array);

    document.getElementById("display_name_with_commas").innerHTML = display_Student_array;
    console.log(display_Student_array);

    var remove_comma = display_Student_array.join(" ");
    console.log(remove_comma);

    document.getElementById("display_name_without_commas").innerHTML = remove_comma;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    
}

function sorting(){
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displaystudentarraysorting = [];

    var length_name_of_student_array = nameOfTheStudentArray.length;
    console.log(nameOfTheStudentArray);

    for(i = 0; i < length_name_of_student_array; i++)
    {
        displaystudentarraysorting.push("<h4> NAME-" + nameOfTheStudentArray[i] + "<h4>");
        console.log(displaystudentarraysorting);
    }

    var remove_comma = displaystudentarraysorting.join(" ");
    console.log(remove_comma);

    document.getElementById("display_name_without_commas").innerHTML = remove_comma;
}
 