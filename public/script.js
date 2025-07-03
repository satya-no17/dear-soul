 const btn = document.getElementById("downloadBtn");
    const box = document.querySelector(".body");

    btn.addEventListener("click", () => {
      btn.style.display = "none"; // Hide button before screenshot
     setTimeout(()=>{
         html2canvas(box).then((canvas) => {
        const link = document.createElement("a");
        link.download = "dearsoul_output.png";
        link.href = canvas.toDataURL();
        link.click();
        btn.style.display = ""; // Show button again
      });
     },300)
    });