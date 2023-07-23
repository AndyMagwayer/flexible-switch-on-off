document.getElementById('slider').addEventListener('input', function(e) {
    document.querySelector('.out-container').style.setProperty('--radius', this.value + '%');
  });