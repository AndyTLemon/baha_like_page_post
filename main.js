// ==UserScript==
// @name            巴哈整頁點讚
// @namespace       https://github.com/AndyTLemon/baha_like_page_post.git
// @version         1.2
// @description     巴哈整頁點讚
// @author          AndyTLemon
// @match           *forum.gamer.com.tw/C.php?*
// @grant           none
// @icon              https://forum.gamer.com.tw/favicon.ico
// ==/UserScript==

async function btnfunction() {
    const wait = ms => new Promise(res => setTimeout(res, ms))

    for (let item of document.getElementsByClassName("more-reply")) {
        item.click();
        await wait((Math.random() * 3 + 1) * 100 | 0);
    };
    await wait((Math.random() * 3 + 1) * 1000 | 0);

    let startdoc = document.getElementsByClassName("gp")
    for (let i = 0; i < startdoc.length; i++) {
        if (startdoc[i].tagName == "DIV") {
            while (true) {
                startdoc[i].getElementsByTagName("button")[0].click();
                await wait(1500);
                let newestmsg = document.getElementsByClassName("toast-message")[0].innerText;
                if (newestmsg.includes("勇者獲得了 1 點能量")) {
                    console.log("wait 65s");
                    await wait((Math.random() * 5 + 61) * 1000 | 0);
                    break;
                } else if (newestmsg.includes("間隔時間太短囉! 請稍後再試。") || newestmsg.includes("此技能 CD 冷卻中。")) {
                    console.log("wait 10s and retry");
                    await wait((Math.random() * 6 + 7) * 1000 | 0);
                } else { break; };
            };
        } else {
            startdoc[i].click();
            await wait((Math.random()) * 1000 | 0);
        };
    };
    console.log("done");
};
window.btnfunction = btnfunction;

(function () {

    let button = `<li class="BH-menu-forumA-right"><button style="height:40px; border:0px; background-color: transparent; color : #C7C6CB;" onclick="btnfunction()">👍整頁點讚</button></li>`;

    let btnpos = document.getElementById("BH-menu-path").getElementsByTagName("ul")[1];
    btnpos.insertAdjacentHTML("beforeend", button);

    btnpos = document.getElementsByClassName("toolbar")[1];
    btnpos.insertAdjacentHTML("beforeend", button);
})();
