

 
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
          updatedata();

        
          } catch(e){
        console.log("error",e);
           }

        } ;


          weatherdata();
          const updatedata= () =>{
            document.querySelector('#date').textContent=window.moment(data.dt*1000).format('LL');
            document.querySelector('#date').classList.remove('d-none');
            document.querySelector('#locationName').textContent = data.name;
            document.querySelector('#temp').innerHTML='<i class="bi bi-thermometer-half"></i>'+data.main.temp+"&#8451";
            document.querySelector('#desc').textContent=data.weather[0].main;
            let ico=data.weather[0].icon
           //  document.querySelector('#icon').innerHTML=`<img width="100px" src="https://openweathermap.org/img/w/${ico}.png"></img>`;
   
            document.querySelector('#icon').innerHTML=`<img width="100px" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${ico}.svg'></img>`;
            document.querySelector('#humidy').textContent=data.main.humidity+'%';
            document.querySelector('#pressure').textContent=data.main.pressure+'hPa';
            document.querySelector('#windspeed').textContent=data.wind.speed+'Kmph';

            switch (ico) {
         
               case "01d":
                  document.querySelector("#data-container").style.backgroundImage ="url('01d.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
               case "01n":
                  document.querySelector("#data-container").style.backgroundImage ="url('01n.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
               case "02d":
                  document.querySelector("#data-container").style.backgroundImage ="url('02d.jpg')";
                  document.querySelector("#data-container").style.color ="black";
                 break;
               case "02n":
                  document.querySelector("#data-container").style.backgroundImage ="url('02n.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
               case "03d":
                  document.querySelector("#data-container").style.backgroundImage ="url('03d.jpg')";
                  document.querySelector("#data-container").style.color ="black";
                 break;
               case "03n":
                  document.querySelector("#data-container").style.backgroundImage ="url('03n.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
               case "04d":
                  document.querySelector("#data-container").style.backgroundImage ="url('02d.jpg')";
                  document.querySelector("#data-container").style.color ="black";
                 break;
               case "04n":
                  document.querySelector("#data-container").style.backgroundImage ="url('02n.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
               case "09d":
                  document.querySelector("#data-container").style.backgroundImage ="url('09d.jpg')";
                  document.querySelector("#data-container").style.color ="black";
                 break;
               case "09n":
                  document.querySelector("#data-container").style.backgroundImage ="url('09n.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
               case "10d":
                  document.querySelector("#data-container").style.backgroundImage ="url('010d.jpg')";
                  document.querySelector("#data-container").style.color ="black";
                 break;
               case "10n":
                  document.querySelector("#data-container").style.backgroundImage ="url('010d.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
               case "11d":
                  document.querySelector("#data-container").style.backgroundImage ="url('11d.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 
                 break;
               case "11n":
                  document.querySelector("#data-container").style.backgroundImage ="url('11d.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
      
               case "12d":
                  document.querySelector("#data-container").style.backgroundImage ="url('12d.jpg')";
                  document.querySelector("#data-container").style.color ="black";
                 break;
               case "12n":
                  document.querySelector("#data-container").style.backgroundImage ="url('12d.jpg')";
                  document.querySelector("#data-container").style.color ="black";
                 break;
               
               case "50d":
                  document.querySelector("#data-container").style.backgroundImage ="url('50d.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
               case "50n":
                  document.querySelector("#data-container").style.backgroundImage ="url('50d.jpg')";
                  document.querySelector("#data-container").style.color ="white";
                 break;
              
               default:
                  document.querySelector("body").style.backgroundImage ="default.jpg";
                 break;
             }


              

          }    

       }) 

       
   }  

   
   
   
  
});


///////////////////////////////////////////////////








getmylocation.addEventListener('click',async ()=>{
   document.querySelector('.future-forecast').classList.remove('d-none');
   if(navigator.geolocation)
   {
       navigator.geolocation.getCurrentPosition(pos=>{
          console.log(pos);
         longit=pos.coords.longitude;
         latit=pos.coords.latitude;
         console.log(longit);
         console.log(latit);

        let futuredata;


         futureapi=`https://api.openweathermap.org/data/2.5/onecall?lat=${latit}&lon=${longit}&exclude=hourly,minutely&units=metric&appid=c122071759372fcecdaa35a2bb850043`;

         const weatherfuturedata=async()=>{
           try{
           const res2=await fetch(futureapi);
            futuredata=await res2.json();
           
            console.log(futuredata);
            updatefuturedata();
        
          
             } catch(e){
           console.log("error",e);
              }
        
           } ;


           
             weatherfuturedata();
             const updatefuturedata= ()=>
              {     
                    const days=document.querySelectorAll('.day');  
                    let daystemp=1;
                    days.forEach((e)=>{
                       e.textContent=window.moment(futuredata.daily[`${daystemp}`].dt*1000).format('LL');
                       daystemp++;
                   })
                      
                   const minTemps=document.querySelectorAll('.mintemp')
                   let mintemp=1;
                   minTemps.forEach((e)=>{
                       e.innerHTML='<i class="bi bi-thermometer-half"></i>'+futuredata.daily[`${mintemp}`].temp.min+"&#8451";
                       mintemp++;
                   })

                   const maxTemps=document.querySelectorAll('.maxtemp')
                   let maxtemp=1;
                   maxTemps.forEach((e)=>{
                       e.innerHTML=futuredata.daily[`${maxtemp}`].temp.max+"&#8451";
                       maxtemp++;
                   })

                   const descs=document.querySelectorAll('.description');
                   let descstemp=1;
                   descs.forEach((e)=>{
                       e.textContent=futuredata.daily[`${descstemp}`].weather[0].description;
                       descstemp++;
                   })

                   const imageicons=document.querySelectorAll('.images-icons');
                   let iconstemp=1;
                   imageicons.forEach((e)=>{
                       e.innerHTML=`<img src="http://openweathermap.org/img/wn/${futuredata.daily[`${iconstemp}`].weather[0].icon}@2x.png" alt="weather icon" class="w-icon"></img>`;
                       iconstemp++;
                   })
                       
              }

       }) 



       
       
   }  

   
   
   
  
});






       










///////////////////////////////////////////////////



let data2;

const form = document.querySelector("form");

 form.addEventListener('submit',(e)=>{
   e.preventDefault();
   document.querySelector('.future-forecast').classList.add('d-none');
   document.querySelector('#date').classList.add('d-none');
   

const cityname = document.querySelector("#cityname");
const feedback = document.querySelector("#feedback");
  const  api2=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=c122071759372fcecdaa35a2bb850043&units=metric`;


 const weatherdata2=async()=>{
   try{
   const res2=await fetch(api2);
    data2=await res2.json();
   
    console.log(data2);
    updatedata2();

  
     } catch(e){
   console.log("error",e);
      }

   } ;

    weatherdata2();

    const updatedata2=()=>{
      
      document.querySelector('#locationName').textContent=data2.name;
      document.querySelector('#temp').innerHTML='<i class="bi bi-thermometer-half"></i>'+data2.main.temp+"&#8451";
      document.querySelector('#desc').textContent=data2.weather[0].main;
      const ico2=data2.weather[0].icon;
       //document.querySelector('#icon').innerHTML=`<img width="100px" src="https://openweathermap.org/img/w/${ico2}.png"></img>`;
   
      document.querySelector('#icon').innerHTML=`<img width="100px" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${ico2}.svg'></img>`;
       document.querySelector('#humidy').textContent=data2.main.humidity+' %';
       document.querySelector('#pressure').textContent=data2.main.pressure+' hPa';
       document.querySelector('#windspeed').textContent=data2.wind.speed+' Kmph';


       document.querySelector("#data-container").style.backgroundRepeat ="no-repeat";
       document.querySelector("#data-container").style.backgroundSize ="cover";

       switch (ico2) {
         
         case "01d":
            document.querySelector("#data-container").style.backgroundImage ="url('01d.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
         case "01n":
            document.querySelector("#data-container").style.backgroundImage ="url('01n.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
         case "02d":
            document.querySelector("#data-container").style.backgroundImage ="url('02d.jpg')";
            document.querySelector("#data-container").style.color ="black";
           break;
         case "02n":
            document.querySelector("#data-container").style.backgroundImage ="url('02n.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
         case "03d":
            document.querySelector("#data-container").style.backgroundImage ="url('03d.jpg')";
            document.querySelector("#data-container").style.color ="black";
           break;
         case "03n":
            document.querySelector("#data-container").style.backgroundImage ="url('03n.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
         case "04d":
            document.querySelector("#data-container").style.backgroundImage ="url('02d.jpg')";
            document.querySelector("#data-container").style.color ="black";
           break;
         case "04n":
            document.querySelector("#data-container").style.backgroundImage ="url('02n.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
         case "09d":
            document.querySelector("#data-container").style.backgroundImage ="url('09d.jpg')";
            document.querySelector("#data-container").style.color ="black";
           break;
         case "09n":
            document.querySelector("#data-container").style.backgroundImage ="url('09n.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
         case "10d":
            document.querySelector("#data-container").style.backgroundImage ="url('010d.jpg')";
            document.querySelector("#data-container").style.color ="black";
           break;
         case "10n":
            document.querySelector("#data-container").style.backgroundImage ="url('010d.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
         case "11d":
            document.querySelector("#data-container").style.backgroundImage ="url('11d.jpg')";
            document.querySelector("#data-container").style.color ="white";
           
           break;
         case "11n":
            document.querySelector("#data-container").style.backgroundImage ="url('11d.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;

         case "12d":
            document.querySelector("#data-container").style.backgroundImage ="url('12d.jpg')";
            document.querySelector("#data-container").style.color ="black";
           break;
         case "12n":
            document.querySelector("#data-container").style.backgroundImage ="url('12d.jpg')";
            document.querySelector("#data-container").style.color ="black";
           break;
         
         case "50d":
            document.querySelector("#data-container").style.backgroundImage ="url('50d.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
         case "50n":
            document.querySelector("#data-container").style.backgroundImage ="url('50d.jpg')";
            document.querySelector("#data-container").style.color ="white";
           break;
        
         default:
            document.querySelector("body").style.backgroundImage ="default.jpg";
           break;
       }


    }
  
 });




 
