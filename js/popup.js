$(document).ready(function(){

	// show after 5s
	setTimeout(showModal, 5000);

	function showModal(){

		var is_already_show = sessionStorage.getItem("alreadyShow");
		if(is_already_show != "already shown"){
			sessionStorage.setItem("alreadyShow", "already shown");
			$("#popupModal").show();
		}else{
			$("#popupModal").show();
			console.log("Pop up already shown");
		}

		$("#closeBtn").click(function(){
			$("#popupModal").hide();
		})
	}

})