$(document).ready(function(){
        $('#taskform').submit(function(e){
         e.preventDefault();
         $.ajax({
            type:"POST",
            url:'session.php',
            data:$(this).serialize(),
            success: function(response){
                var jsonData= JSON.parse(response);
                console.log(jsonData);
               alert('done');
            }
         })    
        })
        $('#clearSession').on('click',function(e){
            e.preventDefault();
            $.ajax({
                type:'POST',
                url:'clearSession.php',
                success:function(response){
                var jsonData= JSON.parse(response);
                console.log(jsonData);                
                }
            })  
        })
})