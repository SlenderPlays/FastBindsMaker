$(document).ready(function(){
	$(".generate-new-text-button").click(function(){
		$(".generate-new-text-button").text("- Reset")
		$(".generation-form").css('display', 'block');
		$(".bind-text").val("");
		$(".select-one").val("none").change();
		$(".select-two").val("none").change();
		$(".select-three").val("none").change();
	});
	$(".select-one").change(function(){
		if($(".select-one").val() == "text")
		{
			$(".select-one-text").css('display', 'block');
			$(".bind-text-one").val("");
		}
		else
		{
			$(".select-one-text").css('display', 'none');
		}
		
	});
	$(".select-two").change(function(){
		if($(".select-two").val() == "text")
		{
			$(".select-two-text").css('display', 'block');
			$(".bind-text-two").val("");
		}
		else
		{
			$(".select-two-text").css('display', 'none');
		}
		
	});
	$(".select-three").change(function(){
		if($(".select-three").val() == "text")
		{
			$(".select-three-text").css('display', 'block');
			$(".bind-text-three").val("");
		}
		else
		{
			$(".select-three-text").css('display', 'none');
		}
		
	});
});