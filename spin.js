var spin = {};

spin.VGrid = function() {
	var $g = $("<div spin='vgrid' class='canvas'>");
	this.$e = $g;

	function Lane($l) {
		this.dispose = function() {
			$l.remove();
			resize();
		};

		this.content = function($e) {
			if (!$e)
				return $l.children();
			else
				$l.empty().append($e);
		};
	}

	this.create = function() {
		$l = $("<div spin='lane'>");
		$g.append($l);
		resize();
		var lane = new Lane($l);
		return lane;
	};

	function resize() {
		var w = 100 / $g.children().length;
		$g.children().css("width", w + "%");
	}
};
