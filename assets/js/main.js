$(document).ready(function(){
	$(".generate-new-text-button").click(function(){
		$(".generate-new-text-button").text("- Reset")
		$(".generation-form").css('display', 'block');
		$(".bind-text").val("");
		$(".select-one").val("none").change();
		$(".select-two").val("none").change();
		$(".select-three").val("none").change();
		$(".output").val("");
		$(".bind-name").val("");
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

		if($(".select-one").val() == "dropdown")
		{
			$(".select-one-dropdown").css('display', 'block');
			
		}
		else
		{
			$(".select-one-dropdown").css('display', 'none');
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

		if($(".select-two").val() == "dropdown")
		{
			$(".select-two-dropdown").css('display', 'block');
			
		}
		else
		{
			$(".select-two-dropdown").css('display', 'none');
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

		if($(".select-three").val() == "dropdown")
		{
			$(".select-three-dropdown").css('display', 'block');
			
		}
		else
		{
			$(".select-three-dropdown").css('display', 'none');
		}
		
	});
	$(".bind-dropdown-addOption-one").click(function(){
		$(this).parent().find("span").last().clone().insertAfter($(this).parent().find("span").last());
		$(this).parent().find("span").last().find("input").first().val("");
		$(".bind-dropdown-option-delete-one").off();
		$(".bind-dropdown-option-delete-one").click(function(){
			if($(this).parent().parent().find("span").length > 1)
			{
				$(this).parent().remove();
			}	
		});
	});
	$(".bind-dropdown-addOption-two").click(function(){
		$(this).parent().find("span").last().clone().insertAfter($(this).parent().find("span").last());
		$(this).parent().find("span").last().find("input").first().val("");
		$(".bind-dropdown-option-delete-two").off();
		$(".bind-dropdown-option-delete-two").click(function(){
			if($(this).parent().parent().find("span").length > 1)
			{
				$(this).parent().remove();
			}	
		});
	});
	$(".bind-dropdown-addOption-three").click(function(){
		$(this).parent().find("span").last().clone().insertAfter($(this).parent().find("span").last());
		$(this).parent().find("span").last().find("input").first().val("");
		$(".bind-dropdown-option-delete-three").off();
		$(".bind-dropdown-option-delete-three").click(function(){
			if($(this).parent().parent().find("span").length > 1)
			{
				$(this).parent().remove();
			}	
		});
	});
	$(".submit-button").click(function(){
		var outputText = "";
		outputText += $(".bind-name").val();
		outputText += "|//";
		outputText += $(".bind-text").val();
		outputText += "|//";

		if($(".select-one").val() == "text")
		{
			outputText += $(".bind-text-one").val();
		}
		if($(".select-one").val() == "dropdown")
		{
			outputText += "||DROPDOWN"
			$(".bind-dropdown-option-one").each(function () {
				outputText += "||" + $(this).val();
			});
		}

		outputText += "|//";

		if($(".select-two").val() == "text")
		{
			outputText += $(".bind-text-two").val();
		}
		if($(".select-two").val() == "dropdown")
		{
			outputText += "||DROPDOWN"
			$(".bind-dropdown-option-two").each(function () {
				outputText += "||" + $(this).val();
			});
		}

		outputText += "|//";

		if($(".select-three").val() == "text")
		{
			outputText += $(".bind-text-three").val();
		}
		if($(".select-three").val() == "dropdown")
		{
			outputText += "||DROPDOWN"
			$(".bind-dropdown-option-three").each(function () {
				outputText += "||" + $(this).val();
			});
		}

		
		$(".output").val(outputText);
	});
});