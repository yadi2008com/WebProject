 $(document).ready(function(){
               //每1秒执行
        $('body').everyTime('5s',function(){
           showImage();
        });
        });


        var imagesArray=["images/header2.jpg","images/header3.jpg","images/header1.jpg"];
        var num=2;
        function showImage(){
        
            $("#banner img").attr("src",imagesArray[num]);
           
            if(num==0){
                num =2;
            }else{
                num=num-1;
            }
    $("#bt1").click(function(){  
    $("#banner img").attr({"src":"images/header2.jpg"});
     });
  $("#bt2").click(function(){
    $("#banner img").attr({"src":"images/header2.jpg"});
    });
   $("#bt3").click(function(){
    $("#banner img").attr({"src":"images/header3.jpg"});
    });
 };

    function scrollBox(){
 
    var first = $('#scrollbox ul li:first');
 
    var width = -(first.outerWidth(true)) + 'px';
 
    $('#scrollbox ul').animate({left:width},{
 
        duration:200,
 
        complete:function(){
 
            $('#scrollbox ul').append(first).css("left","0");
 
        }
 
    });
 
};
 
$(document).ready(function(){
 
    myScroll = setInterval(scrollBox,1500);
 
    $('#scrollbox').hover(function(){
 
        clearInterval(myScroll);
 
    },function(){
 
        myScroll = setInterval(scrollBox,1500);
 
    }
 
);
 
})
