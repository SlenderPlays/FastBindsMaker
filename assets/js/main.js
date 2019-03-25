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
		$(".bind-adder-adding-number-checkbox").prop('checked', false).trigger("change");
		$(".bind-stopper-public-two").prop('checked', false).trigger("change");
		$(".bind-stopper-public-three").prop('checked', false).trigger("change");
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
			var optionsToDelete = $(".bind-dropdown-option-delete-one").length - 1;
			$(".bind-dropdown-option-delete-one").each(function () {
				if(optionsToDelete != 0)
				{
					$(this).click();
				}
				optionsToDelete = optionsToDelete - 1;
			});
			$(".bind-dropdown-option-one").val("");
		}

		if($(".select-one").val() == "adder")
		{
			$(".select-one-adder").css('display', 'block');
		}
		else
		{
			$(".select-one-adder").css('display', 'none');
			$(".bind-adder-comment").val("");
			$(".bind-adder-starting-number").val("");
			$(".bind-adder-ending-number").val("");
			$(".bind-adder-digits").val("0");
			$(".bind-adder-adding-number").val("");
			$(".bind-adder-adding-number-min").val("");
			$(".bind-adder-adding-number-max").val("");
			$(".bind-adder-delay").val("");
			$(".bind-adder-timer-name").val("");
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
			var optionsToDelete = $(".bind-dropdown-option-delete-two").length - 1;
			$(".bind-dropdown-option-delete-two").each(function () {
				if(optionsToDelete != 0)
				{
					$(this).click();
				}
				optionsToDelete = optionsToDelete - 1;
			});
			$(".bind-dropdown-option-two").val("");
		}

		if($(".select-two").val() == "stopper")
		{
			$(".select-two-stopper").css('display', 'block');
			
		}
		else
		{
			$(".select-two-stopper").css('display', 'none');

			$(".bind-stopper-timer-name-two").val("");
			$(".bind-stopper-message-two").val("");
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
			var optionsToDelete = $(".bind-dropdown-option-delete-three").length - 1;
			$(".bind-dropdown-option-delete-three").each(function () {
				if(optionsToDelete != 0)
				{
					$(this).click();
				}
				optionsToDelete = optionsToDelete - 1;
			});
			$(".bind-dropdown-option-three").val("");
		}
		if($(".select-three").val() == "stopper")
		{
			$(".select-three-stopper").css('display', 'block');
			
		}
		else
		{
			$(".select-three-stopper").css('display', 'none');

			$(".bind-stopper-timer-name-three").val("");
			$(".bind-stopper-message-three").val("");
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
	$(".bind-adder-adding-number-checkbox").change(function(){
		if(this.checked)
		{
			// Random
			$(".bind-adder-adding-number-container").css('display', 'none');
			$(".bind-adder-adding-number-random-container").css('display', 'block');

			$(".bind-adder-adding-number").val("");
		}
		else
		{
			// Not Random
			$(".bind-adder-adding-number-random-container").css('display', 'none');
			$(".bind-adder-adding-number-container").css('display', 'block');

			$(".bind-adder-adding-number-min").val("");
			$(".bind-adder-adding-number-max").val("");
		}
	});
	$(".bind-stopper-public-two").change(function(){
		console.log(this.checked);
		

		if(this.checked)
		{
			// Public
			$(".bind-stopper-message-two-container").css('display', 'block');
		}
		else
		{
			$(".bind-stopper-message-two-container").css('display', 'none');
			$(".bind-stopper-message-two").val("");
		}
	});
	$(".bind-stopper-public-three").change(function(){
		console.log(this.checked);
		

		if(this.checked)
		{
			// Public
			$(".bind-stopper-message-three-container").css('display', 'block');
		}
		else
		{
			$(".bind-stopper-message-three-container").css('display', 'none');
			$(".bind-stopper-message-three").val("");
		}
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
		if($(".select-one").val() == "adder")
		{
			outputText += "||ADDER||";
			outputText += $(".bind-adder-comment").val() + "||";
			outputText += $(".bind-adder-starting-number").val() + "||";
			outputText += $(".bind-adder-ending-number").val() + "||";
			outputText += $(".bind-adder-digits").val() + "||";
			if(!$(".bind-adder-adding-number-checkbox").is(":checked"))
			{
				outputText += $(".bind-adder-adding-number").val() + "||";
			}
			else
			{
				outputText += "RAND=";
				outputText += $(".bind-adder-adding-number-min").val();
				outputText += "="
				outputText += $(".bind-adder-adding-number-max").val();
				outputText += "||"
			}
			outputText += $(".bind-adder-delay").val() + "||";
			outputText += $(".bind-adder-timer-name").val();
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
		if($(".select-two").val() == "stopper")
		{
			outputText += "||STOPPER||";
			outputText += $(".bind-stopper-timer-name-two").val();
			outputText += "||";
			if(!$(".bind-stopper-public-two").is(":checked"))
			{
				outputText += "false||None";				
			}
			else
			{
				outputText += "true||";
				outputText += $(".bind-stopper-message-two").val();
			}
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
		if($(".select-three").val() == "stopper")
		{
			outputText += "||STOPPER||";
			outputText += $(".bind-stopper-timer-name-three").val();
			outputText += "||";
			if(!$(".bind-stopper-public-three").is(":checked"))
			{
				outputText += "false||None";				
			}
			else
			{
				outputText += "true||";
				outputText += $(".bind-stopper-message-three").val();
			}
		}

		
		$(".output").val(outputText);
	});
});