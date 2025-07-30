const dataPath = "data/2000多个J2me游戏下载可以解包素材二次开发.txt"
const ol = document.getElementById("j2me_list_2000")
var request = new XMLHttpRequest()
request.open("GET", dataPath)
request.onload = function () {
    var data = request.responseText
    //console.log(data)
    var lines = data.split("\n")
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i]
        if (line.trim() !== "") { // 只处理非空行
            var a = document.createElement("a")
            a.href = line
            a.text = line
            var li = document.createElement("li")
            li.appendChild(a)
            ol.appendChild(li)
        }
    }
}
request.send()