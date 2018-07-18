var load = document.getElementById("load");

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
            console.log("Friends Response: ", data)
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