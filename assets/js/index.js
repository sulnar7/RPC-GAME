var win=1;
var lose=1;

var random;
function choose(meChs) {
    
    
}
$(document).on('keyup',function (e) {
    var meChs;
    var cmpChs;
   random=Math.floor(Math.random() * 3 ) ;
   if(e.which==80 || e.which==82 || e.which==83){
   if(random==0){
       $('#cChoose').html('Paper')
       $('#cimg').attr("src",'./assets/images/p.png')
   }
   else if(random==1){
         $('#cChoose').html('Rock')
         $('#cimg').attr("src",'./assets/images/r.png')
   }
   else{
        $('#cChoose').html('Scissors')
        $('#cimg').attr("src",'./assets/images/s.png')
   }
}
    if(e.which==80){
        meChs='Paper'
        
        $('#img').attr("src",'./assets/images/p.png')
        $('#choose').html(meChs)
        
        console.log(meChs)
        if(random==1 && meChs){
            cmpChs=='Rock'
            $('#cmp').removeClass('text-success')
            $('#me').removeClass('text-danger')
            $('#me').removeClass('text-dark')
            $('#cmp').removeClass('text-dark')
            $('#me').addClass('text-success')
            $('#me').html('WIN')
            $('#cmp').addClass('text-danger')
            $('#cmp').html('LOSE')
            $('#win').html(win++)
            
        }
        else if(random==2 && meChs){
            cmpChs=='Scissors'
            $('#me').removeClass('text-success')
            $('#cmp').removeClass('text-danger')
            $('#me').addClass('text-danger')
            $('#me').removeClass('text-dark')
            $('#cmp').removeClass('text-dark')
            $('#me').html('LOSE')
            $('#cmp').addClass('text-success')
            $('#cmp').html('WIN')
            $('#lose').html(lose++)
            console.log('CMP'+lose);
        }
        else{
            cmpChs='Paper'
            $('#me').removeClass('text-danger')
            $('#cmp').removeClass('text-success')
            $('#cmp').removeClass('text-danger')
            $('#me').removeClass('text-success')
            $('#me').addClass('text-dark')
            $('#cmp').addClass('text-dark')
            $('#me').html('DRAF')
            $('#cmp').html('DRAF')
        }

    }
    else if(e.which==83){
        meChs='Scissors'
        $('#choose').html(meChs)

        $('#img').attr("src",'./assets/images/s.png')
        $('#choose').html(meChs)
         if(random==0 && meChs){
            cmpChs=='Paper'
            $('#cmp').removeClass('text-success')
            $('#me').removeClass('text-danger')
            $('#me').addClass('text-success')
            $('#me').html('WIN')
            $('#cmp').addClass('text-danger')
            $('#cmp').html('LOSE')
            $('#win').html(win++)
            $('#me').removeClass('text-dark')
            $('#cmp').removeClass('text-dark')
        }
        
        else if(random==1 && meChs){
            cmpChs=='Rock'
            $('#me').removeClass('text-success')
            $('#cmp').removeClass('text-danger')
            $('#me').addClass('text-danger')
            $('#me').removeClass('text-dark')
            $('#cmp').removeClass('text-dark')
            $('#me').html('LOSE')
            $('#cmp').addClass('text-success')
            $('#cmp').html('WIN')
            $('#lose').html(lose++)

        }
        else{
            $('#me').removeClass('text-danger')
            $('#cmp').removeClass('text-success')
            $('#cmp').removeClass('text-danger')
            $('#me').removeClass('text-success')
            $('#me').addClass('text-dark')
            $('#cmp').addClass('text-dark')
            
            $('#me').html('DRAF')
            $('#cmp').html('DRAF')
        }
    }
    else if(e.which==82){
        meChs='Rock'
        $('#img').attr("src",'./assets/images/r.png')
        $('#choose').html(meChs)

        if(random==0 && meChs){
            cmpChs=='Paper'
            $('#me').removeClass('text-success')
            $('#cmp').removeClass('text-danger')
            $('#me').addClass('text-danger')
            $('#me').removeClass('text-dark')
            $('#cmp').removeClass('text-dark')
            $('#me').html('LOSE')
            $('#cmp').addClass('text-success')
            $('#cmp').html('WIN')
            $('#lose').html(lose++)
            console.log('CMP'+lose);
        }
       
        
        else if(random==2 && meChs){
            cmpChs=='Scissors'
            $('#me').removeClass('text-dark')
            $('#cmp').removeClass('text-dark')
            $('#cmp').removeClass('text-success')
            $('#me').removeClass('text-danger')
            $('#me').addClass('text-success')
            $('#me').html('WIN')
            $('#cmp').addClass('text-danger')
            $('#cmp').html('LOSE')
            $('#win').html(win++)
            console.log('Me'+win)
        }
        else{
            $('#me').removeClass('text-danger')
            $('#cmp').removeClass('text-success')
            $('#cmp').removeClass('text-danger')
            $('#me').removeClass('text-success')
            $('#me').addClass('text-dark')
            $('#cmp').addClass('text-dark')
            
            $('#me').html('DRAF')
            $('#cmp').html('DRAF')
        }

    }
    else{
      alert("Please select one of the 'R S P' (press) buttons to play")
    }
    
})