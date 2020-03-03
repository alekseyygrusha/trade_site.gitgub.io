"use strict";

let body = document.querySelector("body");
let header = body.querySelector("header");
let main = body.querySelector("main");

let mobile_container = header.querySelector(".container_mobile");
addButtonsListener(mobile_container);

function addButtonsListener(mobile_container) {
    mobile_container.onclick = function(event) {
        let target = event.target.closest(".button_m");
        let mobile_contents = mobile_container.querySelectorAll(
            ".mobile_content"
        );
        let num = target.getAttribute("data-num");
        if (event.target.closest(".active_m")) {
            event.target.classList.remove("active_m");
            mobile_contents[num - 1].classList.remove("visible");
            return;
        }
        if (target) {
            target.classList.add("active_m");
            mobile_contents[num - 1].classList.add("visible");
        }
    };
}

function showMobileContent(event) {}

$(document).ready(function() {
    $(".btn").click(function(event) {
        $(".box").removeClass("active");
        var num = $(this).attr("data-num");
        $("#block" + num).addClass("active");
        $(".ring").removeClass("active_block");
        $("#ring" + num).addClass("active_block");
    });
    $(".btn").click(function(event) {
        $(".btn").removeClass("pick_active");
        var num = $(this).attr("data-num");
        $(".btn" + num).addClass("pick_active");
    });

    // $('.button_m').click(function(event){
    //     $('.button_m'.removeClass())
    // });
});
