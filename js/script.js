var input = document.getElementById('input');
var btn = document.getElementById('btn');
var ul = document.getElementById('ul');

btn.addEventListener('click', function() {
		var li = document.createElement('li');
		if(input.value !== '') {
			li.innerHTML = input.value;
			ul.appendChild(li);
			input.value = '';
		}

		function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}
		$('li').each(function() {
				$(this).css('color', getRandomColor());
		});
});
