// ==UserScript==
// @name            巴哈整頁點讚
// @namespace       https://github.com/AndyTLemon/baha_like_page_post.git
// @version         1.0
// @description     巴哈整頁點讚
// @author          AndyTLemon
// @match           *forum.gamer.com.tw/C.php?*
// @grant           none
//@icon              https://forum.gamer.com.tw/favicon.ico
// ==/UserScript==

async function btnfunction() {
    const timer = ms => new Promise(res => setTimeout(res, ms))

    for (let item of document.getElementsByClassName("more-reply")) {
        item.click();
        await timer((Math.random() * 3 + 1) * 100 | 0);
    };
    await timer((Math.random() * 3 + 1) * 1000 | 0);

    for (let item of document.getElementsByClassName("gp")) {
        if (item.tagName == "DIV") {
            let x = item.getElementsByTagName("button")[0]
            if (x.className.indexOf("is-active") == -1) {
                x.click();
                await timer((Math.random() * 3 + 1) * 1000 | 0);
            }
        } else {
            item.click();
            await timer((Math.random() * 3 + 1) * 100 | 0);
        };
    };
    console.log("done");
};
window.btnfunction = btnfunction;

(function () {

    let button = `<li class="BH-menu-forumA-right"><button style="height:40px; border:0px; background-color: transparent; color : #C7C6CB;" onclick="btnfunction()">👍整頁點讚</button></li>`;

    let btnpos = document.getElementById("BH-menu-path").getElementsByTagName("ul")[1];
    btnpos.insertAdjacentHTML("beforeend", button);

    let btnpos2 = document.getElementsByClassName("toolbar")[1];
    btnpos2.insertAdjacentHTML("beforeend", button);
})();
