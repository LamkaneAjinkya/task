$(document).ready(function () { 
   
    $('div.polaroid img').click(function (){
        var pagesSet = new Set(["home", "cement", "bricks"]);
        var value = $(this).attr('subTemplate');
        // test the Set at runtime
        if (pagesSet.has(value)) {
            var templateurl = './templates/' + value + '.html';
            $('#contentArea').load(templateurl);
        }
        else {
            alert(value + ' web-page underconstruction...');
        }
    });   
});