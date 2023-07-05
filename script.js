function startScan() {
  const btn = document.getElementById("btn");
  const reader = document.getElementById("reader");
  const result = document.getElementById("result");
  const readerContainer = document.getElementById("readerContainer");

  btn.style.display = "none";
  reader.style.display = "block";
  result.style.display = "block";
  readerContainer.style.display = "block";

  // Scanner will be initialized in DOM inside element with id of 'reader'
  const scanner = new Html5QrcodeScanner("reader", {
    // Sets dimensions of scanning box (set relative to reader element width)
    qrbox: {
      width: 250,
      height: 250,
    },
    fps: 20, // Frames per second to attempt a scan
  });

  // Starts scanner
  scanner.render(success, error);

  function success(result) {

    readerContainer.style.display = "none";
    // result.style.display = "none";

    // Prints result as a link inside result element
    document.getElementById("result").innerHTML = `
        <div class="alert alert-success" role="alert">
         Success!
        </div>
        <div class="alert alert-primary" role="alert">
        <span style="color:black;">Extracted Data:</span> ${result}</div>
        `;

    // Clears scanning instance
    scanner.clear();

    // Removes reader element from DOM since no longer needed
    document.getElementById("reader").remove();
  }

  function error(err) {
    // Prints any errors to the console
    console.error(err);
  }
}
