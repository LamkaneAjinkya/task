$(document).ready(function () { 
    //Initial Load - Home selected
    $('#contentArea').load('./templates/home.html');
    $('#home').addClass('active');
    $('#title').text('Home');

    //Menu ites click handler
    $('nav>ul>li').click(function () {
        var templateurl = './templates/' + $(this).attr('template') + '.html';
        $('#contentArea').load(templateurl);
        $('#title').text($(this).text());
        $('#home').addClass('active');
        resetHeaderNavSelection(this);
    });
   
    function resetHeaderNavSelection(selectedItem){
        $('nav>ul>li').removeClass('active');
        $(selectedItem).addClass('active');
    }
  
   
    //responsive nav
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });


    //select list Click handler
    $('select').on('change', function() {
        
        var pagesSet = new Set(["home", "cement", "bricks"]);
        var value = $(this).val();

        // test the Set at runtime
        if (pagesSet.has(value)) {
            var templateurl = './templates/' + $(this).val() + '.html';
            $('#contentArea').load(templateurl);
        }
        else {
            alert(value+' web-page underconstruction');
        }
        
       
    });
   
});
