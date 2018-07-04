$.ajax({
    type: 'get',
    url: 'http://35.234.3.182:9009/api/v1.0/users',
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + btoa('powerberry' + ":" + '1'));
    },
    success: function (data) {
        console.log(data);
    },
    error: function () {
        alert("로그인을 하셔야 합니다.")
    }
})

$("#subject").submit(function (event) {
    // alert("기사를 게시하겠습니까?");
    if ($("#sub").val() === 0 || $("#titleBox").val() === 0 || $("textarea#postBox").val() === 0) {
        alert('작성을 안한 부분이 있습니다.');
    }
    jsondata = JSON.stringify({
        field: $("#sub").val(),
        title: $("#titlebox").val(),
        context: $("textarea#postBox").val()
    })
    
    $.ajax({
        type: "POST",
        url: 'http://35.234.3.182:9009/api/v1.0/news',
        // dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        async: false,
        data: jsondata,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa('powerberry' + ":" + '1'));
        },
        success: function (data) {
            console.log(data);
        }
    })
    var news_id_param;
    function getParameter () {
      var param = location.search;
      var temp = param.split("=");
      getparam = unescape(temp[1]);
      news_id_param = getparam;
    }
    getParameter();
});

