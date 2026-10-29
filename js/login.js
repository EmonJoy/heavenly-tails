document.getElementById('resetBtn').addEventListener('click', function() {
    let message = document.getElementById('resetSuccess');

     message.style.display = 'block';
     message.style.color = '#8a1212';
     message.style.font = 'times new roman';
     message.style.fontSize = '20px';
     message.style.fontWeight = 'bold';
     message.style.textAlign = 'center';
     message.style.marginTop = '10px';
     message.style.marginBottom = '10px';
     message.style.padding = '10px';

    setTimeout(function() {
        
        message.style.display = 'none';
    }, 3000);

});