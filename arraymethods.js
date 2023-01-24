//1.solving problem using array function on the rest contries data(https://restcountes.com/v3.1/all).
//a.Get all the countries form the Asia continental/ region using the filter function
//xml-http request
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
   let array=[];
   for(let i in result){
       array.push(result[i].region);
   }
   let out=result.filter((data)=>{
       if(data.region=='Asia'){
           return data;
       }

   })
   for(let i in out){
       console.log(out[i].name.common);
   }

  
}
//output:
/*Jordan
 Nepal
 Palestine
 Kazakhstan
 Philippines
 Singapore
 Armenia
 Vietnam
 Tajikistan
 China
 South Korea
 Oman
 Maldives
 Mongolia
 Yemen
 Macau
 Azerbaijan
 Sri Lanka
 Malaysia
 Bhutan
 United Arab Emirates
 Japan
 Kyrgyzstan
 Taiwan
 Myanmar
 Turkey
 Afghanistan
 Iran
 Iraq
 India
 Syria
 Kuwait
 Pakistan
 Thailand
 Cambodia
 Lebanon
 Israel
 Saudi Arabia
 Timor-Leste
 Bahrain
 Georgia
 Turkmenistan
 Hong Kong
 Laos
 Uzbekistan
 Indonesia
 Bangladesh
 North Korea
 Qatar
 Brunei
 */

 //-------------------------------------------------------------------------------------------------------------


// //1.solving problem using array function on the rest contries data(https://restcountes.com/v3.1/all).
// //b.Get all the countries with a population of less than 2 lakhs using filter function
// //xml-http request
// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
//     let array=[];
    
//     for(let i in result){
//         array.push(result[i].population);
//     }    
//     let output=array.filter(checkpopulation);
//        function checkpopulation(data){
//           if(data<200000){
//               return data;
//             }
//         }  
//  console.log(output);     
// }
// //output:
// //59194, 198410, 105697, 85032, 106766, 30, 18092 ..extra

//-------------------------------------------------------------------------------------------------------------


// //1.solving problem using array function on the rest contries data(https://restcountes.com/v3.1/all).
// //c.Print the following details name,capital,flag using forEach function
// //xml-http request
// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);

//     result.forEach(data=>console.log(data.name.common,data.capital,data.flags.png));
 
// }
// //output:
/*
United Kingdom ['London'] https://flagcdn.com/w320/gb.png
 ....
 */

 //-------------------------------------------------------------------------------------------------------------

// //1.solving problem using array function on the rest contries data(https://restcountes.com/v3.1/all).
// //d.print the total population of countries using reduce function
// //xml-http request
// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
//     let array=[];
    
//     for(let i in result){
//         array.push(result[i].population);
//     }    
//     let output=array.reduce(function (acc,curr){
//         acc=acc+curr;
//         return acc;
//     },0); 
//  console.log(output);     
// }
// //output:
// //7777721563

//-------------------------------------------------------------------------------------------------------------

// //1.solving problem using array function on the rest contries data(https://restcountes.com/v3.1/all).
// //e.print the country which uses US dollars as currency.
// //xml-http request
// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();

// request.onload=function(){
//     var result=JSON.parse(request.response);
//     let count=0
//     let output=result.filter((result) =>  {
//     for (let key in result.currencies) {
//         if(result.currencies[key].name === "United States dollar"){
//             console.log(result.currencies[key].symbol,result.name.common);
//          count++;
//       }
//     }
//   })
//   console.log(count);   
// }
// //output:
/*
$ Marshall Islands
$ Ecuador
 $ Palau
 $ American Samoa
 $ Guam
 $ United States Virgin Islands
 $ Micronesia
 $ El Salvador
 $ United States
 $ United States Minor Outlying Islands
 $ Panama
 $ Cambodia
 $ British Indian Ocean Territory
 $ Timor-Leste
 $ Bahamas
 $ Puerto Rico
 $ Northern Mariana Islands
 $ British Virgin Islands
 $ Turks and Caicos Islands
 $ Caribbean Netherlands
 20
*/

//-------------------------------------------------------------------------------------------------------------