var images = document.getElementById("images").getElementsByTagName("img"); //var images = document.getElementById("slides").getElementsByTagName("img");

var cameras = [
    "Metropolitan/Indooroopilly_Western_Fwy_Sth.jpg&-720140242",
    "\\Metropolitan\\MRMETRO-1464.jpg&-713108812",
    "\\Metropolitan\\MRMETRO-1224.jpg&-681858012"
];

$(document).ready(function () {
    for (var i = 0, max = images.length; i < max; i++) {
        images[i].src = "http://131940.qld.gov.au/DMR.Controls/WebCams/DisplayImage.ashx?FilePath=" + cameras[i]
    }

    setInterval(function () {
        for (var i = 0, max = images.length; i < max; i++) {
            images[i].src = images[i].src + '?rand=' + Math.random();
        }
    }, 20000);
});