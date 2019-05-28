<template id="allEntriesTemplate">
<h2>Alla våra inlägg</h2>
<div id="entries"></div>

</template>



<?php
//Skriver ut alla poster

/*
$posts = $db->get('posts');

//Kollar om en post request har skickats
if(isset($_POST['like'])){
    $post_id = $_POST['like'];

    //Sätter värdet till vad det är plus 1
    $query = Array('like_count'=>$db->inc(1));

    //Vi vill bara öka det på det id/inlägget vi just gillade
    $db->where('entryID', $post_id);

    //Första vi gör när vi gillat ett inlägg är att updatera poststabellen i DB och öka det med ett
    $db->update('entries', $query);

    //Skicka gillat till gilla tabellen i DB
    $db->insert('likes', Array('post_id'=>$post_id));

}


//Loopar igenom alla posts och skriver ut dem med en like button
foreach($posts as $post){
    echo $post["title"] .'&nbsp;<button data-postid="'.$post['entryID'].'" data-likes="'.$post['like_count'].'" class="like">Like ('.$post['like_count'].')</button><hr />';
}
?>

<script src="https://ajax.googleapis.com/ajax/libs/d3js/5.9.0/d3.min.js"></script>
<script>
$(".like").click(function(){
    let button = $(this)
    let post_id= $(button).data('postid')
$.post("index.php", { 'like':post_id }), function(data, status{
    $(button).html("Like (" + ($(button).data('likes')+1) + ")")
    $(button).data('likes', $(button).data('likes')+1)
});
});
</script>
*/

