 $(document).ready(function() {
 	    var arrayOfQuotes = [];
 	    arrayOfQuotes.push("I love you the more in that I believe you had liked me for my own sake and for nothing else.\
<br> <h3>John Keats</h3>");
 	    arrayOfQuotes.push(" There is nothing permanent except change.\
<br><h3>Heraclitus</h3>  ");
 	    arrayOfQuotes.push("You cannot shake hands with a clenched fist.\
<br><h3>Indira Gandhi</h3>");
 	    arrayOfQuotes.push("Let us sacrifice our today so that our children can have a better tomorrow.\
<br><h3>A. P. J. Abdul Kalam</h3>");
 	    arrayOfQuotes.push("There is no charm equal to tenderness of heart.\
<br><h3>Jane Austen</h3>");
 	    arrayOfQuotes.push("All that we see or seem is but a dream within a dream.\
<br><h3>Edgar Allan Poe</h3>");
 	    arrayOfQuotes.push("Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.\
<br><h3>Francis of Assisi</h3>");
 	    arrayOfQuotes.push("Learning never exhausts the mind.<br><h3>Leonardo da Vinci</h3>");
 	    arrayOfQuotes.push("If you cannot do great things, do small things in a great way.\
<br><h3>Napoleon Hill</h3>");
 	    arrayOfQuotes.push(" Independence is happiness.<br><h3>Susan B. Anthony</h3>");
        $('#quoteText').html(arrayOfQuotes[0]);
        var selectedIndex= 0;
 	    $("#changeQuote").click(function() {
 	    	var randomArrayIndex=  Math.floor((Math.random() * (arrayOfQuotes.length)));
 	    	while(randomArrayIndex === selectedIndex){
 	    		randomArrayIndex =  Math.floor((Math.random() * (arrayOfQuotes.length)));
 	    	}
 	    	selectedIndex = randomArrayIndex;
            $('#quoteText').html(arrayOfQuotes[selectedIndex]);
        });
 });