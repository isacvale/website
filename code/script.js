var coursesDB;

function doneLoadingCode(){
    
    $.getJSON("https://s3-sa-east-1.amazonaws.com/isacvale.com/db.json", function(json){
        coursesDB = json.courses;
        console.log(coursesDB);
        loadCourses();
    });
    
}


function loadCourses(){
    var newTable;
    var tableItem;
    coursesDB.forEach(function(specialization){
        
        newTable = $("#table-head").html();
        newTable = $(newTable);
        
        newTable.find(".specialization-name").html(specialization["specialization"]);
        newTable.find(".specialization-institution").html(specialization["institution"]);
        newTable.find(".specialization-hours").html(specialization["hours"]+"h");
        
        specialization["courses"].forEach(function(course){
            
            tableItem = $("#table-body").html();
            tableItem = $(tableItem);
            if(course.charAt(0)=="-"){
                course = course.substr(1);
                tableItem.addClass("enrolled");
            }
            tableItem.find("td").html(course)
            newTable.find("tbody").append(tableItem);
        });
        
        $("#table-target").append(newTable);
        
    });
}