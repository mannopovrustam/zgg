
function rjParallax(that)
{
	var topMargin = $(that).css('margin-top');
	this.defaultMargin = parseInt(topMargin.substr(0,topMargin.length-2));
	this.position = $(that).parent().offset();
	this.target = that;
	this.direction = ($(that).attr('data-parallax-direction') == 'reversed') ? false : true;
	this.elementType = $(that).get(0).tagName;
	this.depth = ($(that).attr('data-parallax-depth')) ? $(that).attr('data-parallax-depth') : 3;
}
rjParallax.prototype = {
	constructor : rjParallax,
	move : function()
	{
		var _this = this;
		//console.log(_this.elementType);
		$(window).resize(function(){
			var topMargin = $(_this.target).css('margin-top');
			_this.defaultMargin = parseInt(topMargin.substr(0,topMargin.length-2));
		});
		$(window).scroll(function(){
			var position = $(document).scrollTop() - _this.position.top;
			switch(_this.elementType)
			{
				case 'IMG' :
					//console.log($(_this.target).parent().height);
					if(!_this.direction)
						$(_this.target).css('margin-top', _this.defaultMargin - (position/_this.depth));
					else
						$(_this.target).css('margin-top', _this.defaultMargin + (position/_this.depth));
					
					break;
				default :
					if(!_this.direction)
						$(_this.target).css('background-position-y', -(position/_this.depth)+'px');
					else
						$(_this.target).css('background-position-y', (position/_this.depth)+'px');
					break;
			}
		});
	}
};