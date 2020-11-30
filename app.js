document.querySelector('.temp-form').addEventListener('submit', function (e) {
  document.getElementById('results').style.display = 'none';
  document.getElementById('loader').style.display = 'block';
  setTimeout(calculateResults, 2000);





  e.preventDefault();
}

);

function calculateResults() {

  const degrees = document.getElementById('degrees');
  const fahrenheit = document.getElementById('fahrenheit');



  if (degrees.value === '') {
    // Work out FAHRENHEIT to degrees
    document.getElementById('result-degrees').value = ((fahrenheit.value - 32) * 5 / 9).toFixed(1);
    document.getElementById('result-fahrenheit').value = fahrenheit.value;
    document.getElementById('loader').style.display = 'none';
    document.getElementById('results').style.display = 'block';


  } if (fahrenheit.value === '') {
    // Work out DEGREES to fahrenheit 
    document.getElementById('result-fahrenheit').value = ((9 / 5 * degrees.value) + 32).toFixed(1);
    document.getElementById('result-degrees').value = degrees.value;
    document.getElementById('loader').style.display = 'none';
    document.getElementById('results').style.display = 'block';
  }
  if (fahrenheit.value && degrees.value != null) {
    document.getElementById('loader').style.display = 'none';
    alert('please enter only ONE value!');

  }

}