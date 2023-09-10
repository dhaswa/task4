//JSON object creation
let userdata ={
    "name":"Dhanasekaran",
    "email":"dhaswa@gmail.com",
    "mobile":"91012691",
    "country":"Singapore",
    "address":{
        "street":"16,Simei Street 1",
        "postalcode":"529942",
        "region":"East",
    },
    "education":[{
        "degree":"B.E",
        "percentage":"75%",
        "university":"Anna University",
    },
    {
        "highersecondary":"12th Standard",
        "percentage":"80%",
        "school":"NSMVPS Hr sec school",
    },
    {
        "secondary":"10th Standard",
        "percentage":"85%",
        "school":"De Britto Hr sec school",
    }
    ],
    "experience":[{
        "company":"Lee Yuen Engg Pte Ltd",
        "yearsofexperience":"5years",
        "trade":"Steel Structural works",
    },
    {
        "company":"Deshin Pte Ltd",
        "yearsofexperience":"6years",
        "trade":"Archi works",
    },
    {
        "company":"Steel Junction Pte Ltd",
        "yearsofexperience":"1years",
        "trade":"Steel Structural works",
    },
    {
        "company":"Metalix Pte Ltd",
        "yearsofexperience":"till now",
        "trade":"Archi works",
    },
]
}
//JSON Object validation
console.log(userdata.name);
console.log(userdata.address["postalcode"]);
console.log(userdata.education[0].degree);
console.log(userdata.experience[2].yearsofexperience);
//for in iteration
for (var key in userdata){
       console.log(`${key} :`,userdata[key]);     
}
//forEach iteration
const keys =Object.keys(userdata);
keys.forEach((key)=>{
    console.log(`${key} :`,userdata[key]);
})
//for loop iteration
for(var i=0;i<userdata.education.length;i++){
    console.log("Education:",userdata.education[i]);
    } 
//for of iteration
for(var [key,values] of Object.entries(userdata)){
    console.log(`${key}:${values}`);
}     
git
