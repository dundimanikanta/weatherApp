 
 const getmylocation=document.querySelector('#mylocation');
  
 let longit;
 let latit;
 let api;
 let data;



getmylocation.addEventListener('click',async ()=>{
   
   if(navigator.geolocation)
   {
       navigator.geolocation.getCurrentPosition(pos=>{
          console.log(pos);
         longit=pos.coords.longitude;
         latit=pos.coords.latitude;
         console.log(longit);
         console.log(latit);

          
      api=`https://api.openweathermap.org/data/2.5/weather?lat=${latit}&lon=${longit}&appid=c122071759372fcecdaa35a2bb850043&units=metric`;
     
   
        const weatherdata=async()=>{
        try{
        const res=await fetch(api);
         data=await res.json();
          console.log(data);
         document.querySelector('#locationName').textContent = data.name;
         document.querySelector('#temp').textContent=data.main.temp;
         document.querySelector('#desc').textContent=data.weather[0].description;
         let ico=data.weather[0].icon
        //  document.querySelector('#icon').innerHTML=`<img width="100px" src="https://openweathermap.org/img/w/${ico}.png"></img>`;

         document.querySelector('#icon').innerHTML=`<img width="100px" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${ico}.svg'></img>`;
       
          } catch(e){
        console.log("error",e);
           }

        } ;
          weatherdata();
            

       }) 

       
   }  

   
   
   
  
});



let data2;

const form = document.querySelector("form");

 form.addEventListener('submit',(e)=>{
   e.preventDefault();
   

const cityname = document.querySelector("#cityname");
const feedback = document.querySelector("#feedback");
  const  api2=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=c122071759372fcecdaa35a2bb850043&units=metric`;


 const weatherdata2=async()=>{
   try{
   const res2=await fetch(api2);
    data2=await res2.json();
   
    console.log(data2);

   document.querySelector('#locationName').textContent=data2.name;
   document.querySelector('#temp').textContent=data2.main.temp;
   document.querySelector('#desc').textContent=data2.weather[0].description;
   let ico2=data2.weather[0].icon
   // document.querySelector('#icon').innerHTML=`<img width="100px" src="https://openweathermap.org/img/w/${ico2}.png"></img>`;

    document.querySelector('#icon').innerHTML=`<img width="100px" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${ico2}.svg'></img>`;
     } catch(e){
   console.log("error",e);
      }

   } ;

    weatherdata2();

  
   
  
 });




