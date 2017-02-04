

$(function() {
    $(".img-w").each(function() {
        $(this).wrap("<div class='img-c'></div>")
        let imgSrc = $(this).find("img").attr("src");
        $(this).css('background-image', 'url(' + imgSrc + ')');
    })

	$(".img-c").each(function() {
		let x = $(this).offset().left
		let y = $(this).offset().top
		console.log(y)

		let transition = $(this).css("transition");
		transition += " ,left cubic-bezier(0.4, 0, 0.2, 1) " + Math.round(0.6 * x) + "ms";
		transition += " ,top cubic-bezier(0.4, 0, 0.2, 1) " + Math.round(0.6 * y) + "ms";

		console.log(transition)

		$(this).css("transition", transition)
	})

    $(".img-c").click(function() {
        let w = $(this).outerWidth()
        let h = $(this).outerHeight()
        let x = $(this).offset().left
        let y = $(this).offset().top

        $(".active").not($(this)).remove()
        let copy = $(this).clone();
        copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
        $(".active").css('top', y - 8);
        $(".active").css('left', x - 8);

        setTimeout(function() {
            copy.addClass("positioned")
        }, 0)
    })
})

$(document).on("click", ".img-c.active", function() {
    let copy = $(this)
    copy.removeClass("positioned active").addClass("postactive")
    setTimeout(function() {
        copy.remove();
    }, 500)
})
