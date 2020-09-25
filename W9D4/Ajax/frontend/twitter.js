const FollowToggle = require("./follow_toggle.js");
// const Game = require("./game.js");
// ele = new FollowToggle();

// document.ready(ele);

// $("li").each(function (index) {
//     console.log(index + ": " + $(this).text());
// });
window.FollowToggle = FollowToggle;

$(document).ready(function() {
    $(".follow-toggle").each(buttonEle => {
        new FollowToggle(buttonEle);
    });
});

// window.FollowToggle = FollowToggle;
// $(document).ready(handler)

// $(handler);
// $(document).ready(handler)
// $("document").ready(handler)
// $("img").ready(handler)
// $().ready(handler)