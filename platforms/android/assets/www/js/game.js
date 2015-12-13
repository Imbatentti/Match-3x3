function renderTiles(tiles) {
	$('#row1').empty();
	$('#row2').empty();
	$('#row3').empty();

	for (var i = 0; i < tiles.length; i++) {
		var shape;
		tile = tiles[i];

		if (tile.shape === 'square') {
			shape = '<rect class="shape color-' + tile.shapeColor + '" x="0" y="0" width="100" height="100"/>';
		} else if (tile.shape === 'triangle') {
			shape = '<polygon class="shape color-' + tile.shapeColor + '" points="50,0 0,100 100,100"/>';
		} else if (tile.shape === 'circle') {
			shape = '<circle class="shape color-' + tile.shapeColor + '" cx="50" cy="50" r="50"/>';
		}

		var html = '<div class="col-xs-4">' +
			'<div class="tile color-' + tile.backgroundColor + '" id="'+tile.id +'">' +
			'<svg class="shape-svg" viewBox="0 0 100 100" preserveAspectRatio="none">' +
			shape +
			'</svg>' + '</div>' + '</div>'

		$('#row' + Math.floor(i / 3)).append(html);
	}
	$('.tile').unbind('click')
	$('#no-more').unbind('click')
	$('.tile').on('click', tileClickHandler);
	$('#no-more').on('click', noMoreClickHandler);
}