function clearValues(){
    var j=0;
    $('input').each( function(index){
        if($(this).attr('id') != 'submit' && $(this).attr('id') != 'clear' ){
                $(this).val('');
             setResultsText(j,'');
        }
        j++;
    });
}
 function setResultsText(i,copy){
     $('#result_' + (i+1)).html(copy);
 }
 function getSearchTerms(){
    var searchTerms=new Array();
    var i=0;
    $('input').each( function(index){
        if($(this).val() != '' && $(this).attr('id') != 'submit' && $(this).attr('id') != 'clear' ){
            searchTerms.push( escape($(this).val()) );
            setResultsText(i,'Loading...');
        }
        i++;
    });
    return searchTerms;
} 

$( document ).ready(function() {
    $('#submit').click(function(event) {
        event.preventDefault();
        searchTermsArray=getSearchTerms();
        console.log(searchTermsArray);
    });
    $('#clear').click(function(event) {
        clearValues()
    });
});