document.addEventListener("DOMContentLoaded", function () {

  setTimeout(function () {
    var iframe = document.getElementById("target-iframe");
    var vulnerableInput = iframe.contentDocument.getElementById("target-input");
    vulnerableInput.oninput = function (event) { console.log(event.target.value) };
    console.log('attached keylogger.');
  }, 2000);

})
