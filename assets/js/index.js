const animeResourceHtml = `
<div class="category-card">
            <h3>动画</h3>
            <ul class="url-list">
                <li><a href="https://freelancerdh.free.nf/anime/index.html">在线追番网站</a><span class="tag tag-web">网页</span></li>
                <li><a href="https://anich.emmmm.eu.org/app.html">Anich</a><span class="tag tag-android">android</span></li>
                <li><a href="https://myani.org/">Animeko</a><span class="tag tag-android">android</span></li>
                <li><a href="https://9ciyuan.com/">囧次元</a></li>
                <li><a href="https://bgmlist.com/">每日放送（新番资讯）</a><span class="tag tag-web">网页</span></li>
                <li><a href="https://v.lanerc.app">Lanerc追番</a><span class="tag tag-android">android</span></li>
                <li><a href="https://xmoe.app/">xmoe</a><span class="tag tag-android">android</span></li>
                <li><a href="https://oneghg.com/">动漫共和国</a><span class="tag tag-android">android</span></li>
                <li><a href="https://www.crunchyroll.com/">crunchyroll</a><span class="tag tag-web">网页</span>要科学上网</li>
                <li><a href="https://mifun.tv/">MiFun</a><span class="tag tag-android">android</span></li>
            </ul>
        </div>
`
const contentDiv = document.getElementById("content")
function changeContent(value)
{
    if (value == "anime")
    {
        contentDiv.innerHTML = animeResourceHtml
    }
}
