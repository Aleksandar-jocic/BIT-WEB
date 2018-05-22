document.getElementById('inputtxt').addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var value = document.getElementById('inputtxt').value;


        var request = new XMLHttpRequest();

        request.open('GET', 'http://api.ipstack.com/' + value + '?format=1&access_key=66f0403b5870e87ee670adb5fa81c3a6', true);


        request.onload = function () {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                console.log(data);

            }
        }

        request.send();
        value = document.getElementById('inputtxt').value = '';

        
    }


                

})