function runPlayer(obj){
    console.log("Start Player");
    $("#playerIcon").fadeOut();
    //console.log($(obj).children().attr("src"));
    var link = $(obj).children().attr("src").split("/");
    //console.log(link[link.length-1]);
    var id = link[link.length-1].split("_");
    // console.log(id[0]);
    var url = "http://www.xiami.com/song/play?ids=/song/playlist/id/"+id[0]+"/type/3";
    $("#playerBG").remove();
    $("body").append("<div id=\"playerBG\"><iframe id=\"player\" src=\"" + url + "\"></iframe><img id=\"minus\" src=\"img/remove.png\"><img id=\"close\" src=\"img/delete.png\"></div></div>");
    $("#playerBG").bind("click",function(){
        console.log("Player Click");
        $(this).fadeOut();
        $("#playerIcon").fadeIn();
    });
    $("#playerIcon").bind("click",function(){
        $(this).fadeOut();
        $("#playerBG").fadeIn();
    });
    $("#minus").bind("click",function(){
        $("#playerBG").fadeOut();
        $("#playerIcon").fadeIn();
    });
    $("#close").bind("click", function(){
        $("#playerBG").remove();
    });
}
function pageStart(){
    $('#show').hide();
    $.get("http://www.xiami.com/collect/feed", function(data) {
        console.log('InGet');
        var $xml = $(data);
        $xml.find("item").each(function(index, value) {
            var $this = $(this),
                item = {
                    title: $this.find("title").text(),
                    link: $this.find("link").text(),
                    description: $this.find("description").text(),
                    pubDate: $this.find("pubDate").text(),
                    author: $this.find("author").text()
            }
            var $html = $('<div>').html(item.description);
            var code = $html.find("img");
           // var newPic = code[0].addClass("album")
            var newList = $('<div>').html(code[0]).addClass("album").bind('click',function(){
                console.log("onClick");
                runPlayer(this);
            }).bind('mouseover',function(){
                //console.log("mouseover");
                $(this).find(".titleBox").fadeIn();
            }).bind('mouseleave',function(){
                //console.log("mouseleave");
                $(this).find(".titleBox").fadeOut();
            });
            var titleBox = $('<div>').html("<label>"+item.title+"</label>").addClass("titleBox").css("display","none");
            newList.append(titleBox);
            $("#show").append(newList);
            checkImages();
    });
  /*  $("#show").append("<div class='logo control'><img src=\"img/next.png\"</div>")
    $(".control").mouseover(function(){
        $(this).children().fadeIn("slow");
    }).mouseleave(function(){
        $(this).children().fadeOut("slow");
    });*/
    var myList = $("<div>").html("<img src=\"http://img.xiami.com/images/collect/105/5/22381105_1372573648_4.jpg\">").addClass("album").bind('click',function(){
            console.log("onClick");
            runPlayer(this);
        }).bind('mouseover',function(){
            //console.log("mouseover");
            $(this).find(".titleBox").fadeIn();
        }).bind('mouseleave',function(){
            //console.log("mouseleave");
            $(this).find(".titleBox").fadeOut();
        });
        $("#show").append(myList);
});
}
function checkImages() {
    console.log("In check")
    var done = true;
    var images = $("#show img");
    $.each(images,function() {
        done = done && this.complete;
    });
    if(done) {
        $("#loading").hide();
        $("#show").fadeIn("slow");
    } else {
        setTimeout(checkImages,100); // wait at least 100 ms and check again
    }
    }
    $(function(){
    $("#playerIcon").draggable({ containment: "parent" });
});
