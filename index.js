let button = document.getElementById('btn');
button.addEventListener('click', ()=>{
  
   const height = parseInt(document.getElementById('height').value);
   const weight = parseInt(document.getElementById('weight').value);
   const result = document.getElementById('output');

   let height_status = false, weight_status = false;

   if (height === '' || height < 0 || isNaN(height)){
      document.getElementById('height_error').innerHTML = `Please give a valid height, ${height}`;
   } else{
    document.getElementById('height_error').innerHTML = '';
    height_status =  true;
   }
   
   if (weight === '' || weight < 0 || isNaN(weight)){
     document.getElementById('weight_error') .innerHTML = `Please give a valid weight, ${weight}`;
   } else{
    document.getElementById('weight_error').innerHTML = '';
    weight_status =  true;
   }
   
   if(height_status && weight_status){
       const bmi = (weight / ((height *height)/10000)).toFixed(2);
   

   if (bmi < 18.6){
    result.innerHTML = 'Under Weight:' + bmi;
   } else if (bmi >= 18.6 && bmi < 24.9){
    result.innerHTML = 'Normal Range:' + bmi;
   } else{
        result.innerHTML = 'Over Weight:' + bmi;
   } 
  } else{
    alert('OOPS! your form is empty');
    result.innerHTML = '';
   }

});