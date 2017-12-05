$.ajax({
    type: "POST",
    url: "http://localhost/whatever",
    dataType: "text",
    data: JSON.stringify({ a: "a", b: "b" }),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        console.log("Success", data);
    },
    error: function (textStatus, errorThrown) {
        console.error("Error", textStatus, errorThrown)
    }

});