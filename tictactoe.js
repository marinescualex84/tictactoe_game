
var td1 = $('table #td1');
var td2 = $('table #td2');
var td3 = $('table #td3');
var td4 = $('table #td4');
var td5 = $('table #td5');
var td6 = $('table #td6');
var td7 = $('table #td7');
var td8 = $('table #td8');
var td9 = $('table #td9');
var turn = 0;
var countX = 1;
var countO = 1;

// When Pushing The "Start Button":
$('#start').click(function() { 
	$('#info').fadeOut(800);
	$('table td').text('');
	turn = 0;
	$('div#h3 h3').text(''); 
	$('table td').removeClass('ics').removeClass('zero');
	$('table td').on('click', playGame);
});

function playGame()	{
	$(this).text('X').removeClass('zero').addClass('ics');
	turn++;

	if (turn%2 == 0) {
		$(this).text('O').removeClass('ics').addClass('zero');
	}

	if($(this).has('.ics')) {
		$(this).off('click');
	}

	if ((td1.hasClass('ics') && td2.hasClass('ics') && td3.hasClass('ics')) ||
		(td1.hasClass('ics') && td4.hasClass('ics') && td7.hasClass('ics')) ||
		(td1.hasClass('ics') && td5.hasClass('ics') && td9.hasClass('ics')) ||
		(td2.hasClass('ics') && td5.hasClass('ics') && td8.hasClass('ics')) ||
		(td3.hasClass('ics') && td6.hasClass('ics') && td9.hasClass('ics')) ||
		(td3.hasClass('ics') && td5.hasClass('ics') && td7.hasClass('ics')) ||
		(td4.hasClass('ics') && td5.hasClass('ics') && td6.hasClass('ics')) ||
		(td7.hasClass('ics') && td8.hasClass('ics') && td9.hasClass('ics')) ){
		$('div#h3 h3').text('Player 1 WINS!');
		$('table td').removeClass('ics').removeClass('zero');
		$('table td').off('click');
		$('#spanX').text(countX++);
	}

	else if ((td1.hasClass('zero') && td2.hasClass('zero') && td3.hasClass('zero')) ||
		(td1.hasClass('zero') && td4.hasClass('zero') && td7.hasClass('zero')) ||
		(td1.hasClass('zero') && td5.hasClass('zero') && td9.hasClass('zero')) ||
		(td2.hasClass('zero') && td5.hasClass('zero') && td8.hasClass('zero')) ||
		(td3.hasClass('zero') && td6.hasClass('zero') && td9.hasClass('zero')) ||
		(td3.hasClass('zero') && td5.hasClass('zero') && td7.hasClass('zero')) ||
		(td4.hasClass('zero') && td5.hasClass('zero') && td6.hasClass('zero')) ||
		(td7.hasClass('zero') && td8.hasClass('zero') && td9.hasClass('zero')) ){
		$('div#h3 h3').text('Player 2 WINS!');
		$('table td').removeClass('ics').removeClass('zero');
		$('table td').off('click');
		$('#spanO').text(countO++);
		
	}	else if (turn == 9) {
		$('div#h3 h3').text("It's a tie! Try again");
		$('table td').removeClass('ics').removeClass('zero');
		$('table td').off('click');
	}
};






