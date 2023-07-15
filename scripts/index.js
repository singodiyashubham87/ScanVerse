const startBtn = document.getElementById("btn");
const reader = document.getElementById("reader");
const result = document.getElementById("result");
const readerContainer = document.getElementById("readerContainer");
const successDiv = document.getElementById("success");
const dataDiv = document.getElementById("data");
const qrData = document.getElementById("qrData");
const reScan = document.querySelector(".reScan");

function startScan() {
  startBtn.style.display = "none";
  readerContainer.style.display = "block";
  result.style.display = "block";
  dataDiv.style.display = "block";
  successDiv.style.display = "block";
  initScanner();
}

function initScanner() {
  // Scanner will be initialized in DOM inside element with id of 'reader'
  const scanner = new Html5QrcodeScanner("reader", {
    // Sets dimensions of scanning box (set relative to reader element width)
    qrbox: {
      width: 300,
      height: 300,
    },
    fps: 20, // Frames per second to attempt a scan
  });

  // Starts scanner
  scanner.render(success, error);

  function success(result) {
    successDiv.textContent = "Success!";
    if(result.toLowerCase().includes("http") || result.toLowerCase().includes(".com")){
      qrData.innerHTML = `<a href="${result}" target="_blank">${result}</a>`;
      window.open(result,"_blank");
    }
    else
    qrData.textContent = result;
  }

  function error(err) {
    console.err(err);
  }
}

//To be continued................
// function success(result) {
//   readerContainer.style.display = "none";

// result.style.display = "none";

// Prints result as a link inside result element
// document.getElementById("result").innerHTML = `
//     <div class="alert alert-success" role="alert">
//      Success!
//     </div>
//     <div class="alert alert-primary" role="alert">
//     <span style="color:black;">Extracted Data:</span></div>
//     <button id="btn" type="button" class="reScan btn btn-dark">Scan Again</button>
//     `;

// ${result}
// Clears scanning instance
// scanner.clear();

// Removes reader element from DOM since no longer needed
// document.getElementById("reader").remove();
// }

// function error(err) {
// Prints any errors to the console
// console.error(err);
// }

// const reScan = document.querySelector(".reScan");
// reScan.onclick = () => console.log("ReScan clicked");
// }
