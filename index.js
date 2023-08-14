const btn= document.getElementById("btn");

btn.addEventListener('click', function(){
  var name = document.getElementById("myName").value;
  document.getElementById("demo").innerHTML = name

  var name2 = document.getElementById("myName2").value;
  document.getElementById("demo2").innerHTML = name2

  var name3 = document.getElementById("myName3").value;
  document.getElementById("demo3").innerHTML = name3

  
  var name4 = document.getElementById("myName4").value;
  document.getElementById("demo4").innerHTML = name4

  
  var name5 = document.getElementById("myName5").value;
  document.getElementById("demo5").innerHTML = name5

  var name6 = document.getElementById("myName6").value;
  document.getElementById("demo6").innerHTML = name6

  var name7 = document.getElementById("myName7").value;
  document.getElementById("demo7").innerHTML = name7

  var name8 = document.getElementById("myName8").value;
  document.getElementById("demo8").innerHTML = name8

  var name9 = document.getElementById("myName9").value;
  document.getElementById("demo9").innerHTML = name9

    
});

const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});


function previewBeforeUpload(id){
    document.querySelector("#"+id).addEventListener("change",function(e){
      if(e.target.files.length == 0){
        return;
      }
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      document.querySelector("#"+id+"-preview div").innerText = file.name;
      document.querySelector("#"+id+"-preview img").src = url;
    });
  }
  
  previewBeforeUpload("file-1");
  previewBeforeUpload("file-2");
  previewBeforeUpload("file-3");
function download(url){
    var a = $("<a style='display:none' id='js-downloder'>")
    .attr("href", url)
    .attr("download", "test.png")
    .appendTo("body");
  
    a[0].click();
  
    a.remove();
  }
  
  function saveCapture(element) {
    html2canvas(element).then(function(canvas) {
      download(canvas.toDataURL("/png"));
    })
  }
  
  $('#btnDownload').click(function(){
    var element = document.querySelector("#capture");
    saveCapture(element)
  })