const kanban = document.getElementsByClassName("kanban")[0]
console.log(kanban)
kanban.addEventListener("click", function ()
{
    document.getElementById("kanban-voice").play()
})