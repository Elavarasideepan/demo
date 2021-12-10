var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    data.forEach((element)=>console.log(element,name,capital,flag));


//Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    
  let result=data.filter((item)=>item.region=="Asia").map((item)=>item.name);
  console.log(result);
}

//Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    let result=data.filter((item)=>item.population<200000);
    console.log(result);


//Print the total population of countries using reduce function
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    let res=data.filter((item)=>item.population).map((item)=>item.population).reduce((acc,item)=>acc+item);
    console.log(res);

    //Print the country which uses US Dollars as currency.
    var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
let result= data.filter((x)=>{
        for(let cur in x.currencies)
        if(x.currencies[cur].code==="USD")
        return true;
    });
    console.log(result);












  
  
    
    
}