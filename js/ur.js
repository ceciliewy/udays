"use strict";

fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")
    .then(function (data) {
        return data.json();
    })
    .then(function (post) {
        const datoOGtid = new Date(post.datetime);
        console.log("Tid: " + datoOGtid.getHours() + ":" + datoOGtid.getMinutes());

        document.getElementById("datoOGtid").insertAdjacentHTML("beforeend", "" + datoOGtid.getHours() + ":" + datoOGtid.getMinutes());

    });
