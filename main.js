let studentInformation = [
    {
        "Name": "Shafiq",
        "Id": 5,
        "Age": 25,
        "phone": 1671787555
    },

    {
        "Name": "Ashiq",
        "Id": 6,
        "Age": 27,
        "phone": 1970664340
    },

    {
        "Name": "Rashed",
        "Id": 7,
        "Age": 29,
        "phone": 1671787444
    },
]
function seeDetails() { 
    for (let index = 0; index < studentInformation.length; index++) 
    {
        document.write("Name : ",studentInformation[index].Name + " " + "Age : ", studentInformation[index].Age + " " +"Id : ",studentInformation[index].Id + " " +"Phone : ",studentInformation[index].phone + " " +"<br>")
        
    }
} 