/* прокрутка при клике */
$('.click').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 300,
		easing: "linear"
	});

	return false;
});

$(".calculator__select").select2({
	templateResult: formatData,
	templateSelection: formatData
});
function formatData (data) {
	if (!data.id) { return data.text; }
	var $result= $(
		'<span><img src=" https://hudson8811.github.io/finance/public/images/calculator/'+data.element.value+'.svg"/> ' + data.text + '</span>'
	);
	return $result;
};

$(document).ready(function(){
	$('.diagram__item').click(function(){
		$('.diagram__item').removeClass('active');
		$(this).addClass('active');
	});
	$('.btn').click(function(){
		$('.popap').addClass('active');
	});
	$('.popap__back').click(function(){
		$('.popap').removeClass('active');
	});
});

$(".calculator__input input").on('keyup mouseup', function () {
	var calculator__input = $(".calculator__input input").val();
	//1 месяц
	var amount1 = +calculator__input + ((calculator__input * 0.2) / 12)
	//1 год
	var amount2 = +calculator__input + (calculator__input * 0.2)
	//2 года
	var amount3 = +calculator__input + ((calculator__input * 0.2) * 2)
	//3 года
	var amount4 = +calculator__input + ((calculator__input * 0.2) * 3)

	$(".diargam__amount1").text(amount1);
	$(".diargam__amount2").text(amount2);
	$(".diargam__amount3").text(amount3);
	$(".diargam__amount4").text(amount4);
});

