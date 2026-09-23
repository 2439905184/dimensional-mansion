document.addEventListener("DOMContentLoaded", () => {
    // 1. 修正选择器：HTML里是 class="kanban"，应该用 querySelector
    const kanbanComponent = document.querySelector(".kanban");
    
    // 如果找不到元素，直接退出，避免后面报错
    if (!kanbanComponent) {
        console.error("找不到 class 为 kanban 的元素");
        return;
    }

    // 2. 修正子元素查找方法：使用 querySelector
    const kanbanGirl = kanbanComponent.querySelector("#congyu");
    const kanbanVoice = kanbanComponent.querySelector("#kanban-voice");

    // 3. 安全检查后绑定点击事件
    if (kanbanGirl && kanbanVoice) {
        kanbanGirl.addEventListener("click", function () {
            // 重置播放进度，实现快速连点也能从头播放
            kanbanVoice.currentTime = 0; 
            kanbanVoice.play().catch(error => {
                console.error("音频播放失败:", error);
            });
        });
    } else {
        console.warn("找不到 kanban 内部的 img 或 audio 元素");
    }

    // 4. 修正变量拼写
    let kanbanVisible = true;

    // 5. 将函数挂载到 window 上，确保 HTML 里的 onclick 能找到它
    window.toggleKanban = function () {
        if (kanbanVisible) {
            kanbanVisible = false;
            kanbanComponent.style.display = "none";
        } else {
            kanbanVisible = true;
            // 使用 "" 而不是 "block"，以保留原本的 display 属性
            kanbanComponent.style.display = ""; 
        }
    };
});