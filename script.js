$(document).ready(function(){
   $('#searchField').focus();
    
    //This works when you click a button
    $('#searchBtn').on('click', function(e){
       var searchField = $('#searchField').val(); 
       $('.results').html('');
       e.preventDefault();
        
        /*checks if the user typed any keyword*/
        if(searchField !== ""){
            $('.isi').addClass('hidden');
            $('.otutu').addClass('hidden');
            $('.ochucho').css({
                'background-color': 'whitesmoke'
            });
            $('body').css({
                'background-color': 'whitesmoke' 
            });
        
            $.ajax({
                url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchField + '&format=json&callback=?&limit=500',
                method: 'GET',
                dataType: 'jsonp',
                async: false,
                success: function(data){
                    for(var i=0; i < data[1].length; i++){
                        $('.results').append('<h2>' + '<a href="'+ data[3][i]+'" target="_blank">' + data[1][i] + '</a>' + '</h2>'+ '<h4>' + data[2][i] + '</h4>');
                
                    }
                },
                error: function(err){
                    alert("An error just occured, refresh this page!!!");
                }   
            });
            }else{
                alert("Enter a keyword into the search field");
            }
        });
    
    //This works when the user presses enter key
        $('#searchField').bind('keypress', function(key){
            if(key.keyCode == 13){
                $('#searchBtn').click();
            }
        })
});
