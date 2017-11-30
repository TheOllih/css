(function(){
		function transformBack(){
			$("#footer-user .back span").text("Back");
		}
		
		function hideFooter() {
			if ($("#footer-user .badge").css('display') == "block"){
                $("#footer-user .badge").hide();
                $("#footer-user .store").hide();
                $("#footer-user .profile").hide();
                $("#footer-user .settings").hide();
                $("#footer-user .info").css({"background":"#282C35"});
            }
		}
		
		function toggleFooter(){
            if ($("#footer-user .back").css('display') == "none"){
                if ($("#footer-user .badge").css('display') == "none"){
                    $("#footer-user .badge").show();
                    $("#footer-user .store").show();
                    $("#footer-user .profile").show();
                    $("#footer-user .settings").show();
                    $("#footer-user .info").css({"background":"#1C1F25"});
                }else{
                    $("#footer-user .badge").hide();
                    $("#footer-user .store").hide();
                    $("#footer-user .profile").hide();
                    $("#footer-user .settings").hide();
                    $("#footer-user .info").css({"background":"#282C35"});
                }
            }
        }
		
		function turnOn(){
			$("#footer-user .button").on('click',hideFooter);
            $("#app").on('click', function(e) {
                if (!$(e.target).closest("#footer-user .info").length){
                    hideFooter();
                }
            });
            $("#footer-user .info").on('click',toggleFooter);
            $("#footer-user").on('click',transformBack);
            $("#playlist-meta .shop-button").on('click',transformBack);
            $("#room-bar").on('click',transformBack);
            $("#room .app-right .has-requests .header").on('click',transformBack);
            $("#app-menu").on('click',transformBack);
		}

		$("#footer-user .bar .value").hide();
        $("#footer-user .bar").mouseenter(function(){$("#footer-user .bcs-percentage").hide();$("#footer-user .bar .value").show();});
        $("#footer-user .bar").mouseleave(function(){$("#footer-user .bcs-percentage").show();$("#footer-user .bar .value").hide();});
		
		$("#footer-user .bar").css({'border-radius':'10px 10px'});
        $("#footer-user .progress").css({'border-radius':'10px 10px'});
        $("#footer-user .profile").hide();
        $("#footer-user .store").hide();
        $("#footer-user .played").hide();
        $("#footer-user .settings").hide();
        $("#footer-user .info .meta .bar").css({"width":"105px"});
        $("#footer-user .info .meta .level .label").text("Lv.");
        $("#footer-user .inventory .image .thumb").css({"border":"2px solid #89be6c"});
        $("#footer-user .inventory").hover(function(){
            $("#footer-user .buttons").css({"background":"#282C35","box-shadow":"#282C35","-webkit-box-shadow":"#282C35","-moz-box-shadow":"#282C35"});
        });
        $("#footer-user .badge").append("<div class='nothing'></div><span>My Badges</span>");
        $("#footer-user .store").append("<div class='nothing'></div><span>Shop</span>");
        $("#footer-user .profile").append("<div class='nothing'></div><span>My Profile</span>");
        $("#footer-user .settings").append("<div class='nothing'></div><span>Settings</span>");
        $("#footer-user .button").hover(function(){$("#tooltip").remove();});
		
		turnOn();
})();
