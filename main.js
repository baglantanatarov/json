var load = document.getElementById("load");
var loadStatus = document.getElementById("loadStatus");
const getFriends = () => {
    $.ajax({
        url: 'http://localhost/site/data.json',
        type: 'GET',
        dataType: 'json',
        data: "",
        beforeSend: function() {
            load.innerHTML = "<img src='img/Double Ring-1s-200px.gif' class='loading'>";
            console.log("loading");
        }
    })

    .done(function(data) {
            load.innerHTML = "<img src='http://localhost/site/img/checked.svg' class='loading'>";
            // console.log("Friends Response: ", data);
            load.innerHTML = data[0].name + "<br>" + data[1].name;

        })
        .fail(function() {
            load.innerHTML = "<img src='http://localhost/site/img/error.svg' class='loading'>";
            console.log("friends response error");
        })
        .always(function() {

            console.log("friends response");
        });
}

getFriends();

const getStatus = () => {
    $.ajax({
        url: 'http://localhost/site/data2.json',
        type: 'GET',
        dataType: 'json',
        data: "",
        beforeSend: function() {
            loadStatus.innerHTML = "<img src='img/Double Ring-1s-200px.gif' class='loadingStatus'>";
            console.log("loading");
        }
    })

    .done(function(data) {
            loadStatus.innerHTML = "<img src='http://localhost/site/img/checked.svg' class='loadingStatus'>";
            // console.log("Friends Response: ", data);
            loadStatus.innerHTML = data.id;
        })
        .fail(function() {
            loadStatus.innerHTML = "<img src='http://localhost/site/img/error.svg' class='loadingStatus'>";
            console.log("friends response error");
        })
        .always(function() {

            console.log("friends response");
        });
}
setTimeout(function() {
    getStatus();
}, 5000);