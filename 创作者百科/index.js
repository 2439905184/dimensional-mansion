//alert("推荐使用新版主页，点击新版主页跳转")
alert("旧版已禁用，跳转新版主页")
window.open("new_index.html")

function into_menu(p_name)
{
    window.open(p_name)
}
var main_menu = document.getElementsByClassName("grid-container").item(0)
main_menu.children.item(1).addEventListener("click",function()
{
    into_menu("文化鱼塘/index.html")
})
main_menu.children.item(4).addEventListener("click",function()
{
    into_menu("经典讨论/index.html")
})
main_menu.children.item(2).addEventListener("click",function()
{
    into_menu("创作者百科/index.html")
})
main_menu.children.item(6).addEventListener("click",function()
{
    into_menu("动漫哲学/index.html")
})
main_menu.children.item(7).addEventListener("click",function()
{
    into_menu("动漫与天道/index.html")
})
main_menu.children.item(7).addEventListener("click",function()
{
    into_menu("文创讨论组/index.html")
})
main_menu.children.item(9).addEventListener("click",function()
{
    into_menu("怀旧/index.html")
})
var music_menu = document.getElementsByClassName("grid-container").item(1)
var music_menu_length = music_menu.children.length

music_menu.children.item(0).addEventListener("click",function()
{

})
music_menu.children.item(1).addEventListener("click",function()
{
    into_menu("音频区/同人音乐.html")
})

music_menu.children.item(5).addEventListener("click",function()
{
    into_menu("音频区/游戏音乐.html")
})
music_menu.children.item(6).addEventListener("click",function()
{
    into_menu("音频区/高频兴奋音乐.html")
})
music_menu.children.item(7).addEventListener("click",function()
{
    into_menu("音频区/动漫音乐.html")
})

var art_menu = document.getElementsByClassName("grid-container").item(2)
art_menu.children.item(3).addEventListener("click",function()
{
    into_menu("动画研究/index.html")
})
art_menu.children.item(5).addEventListener("click",function()
{
    into_menu("动漫图片收集/index.html")
})
var video_menu = document.getElementsByClassName("grid-container").item(3)
video_menu.children.item(0).addEventListener("click",function()
{
    into_menu("鬼畜要点.html")
})
