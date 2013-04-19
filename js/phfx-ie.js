(function() {

	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			init();
			clearInterval(readyStateCheckInterval);
		};
	}, 10);

	function init() {

		var arr = ['input','textarea'],
			len = arr.length,
			i = 0,
			elements,
			eLen,
			eI;

		for (; i < len; i++) {
		
			elements = document.getElementsByTagName(arr[i]);
			eLen = elements.length;
			eI = 0;
			
			for (; eI < eLen; eI++) {
			
				elements[eI].attachEvent('onfocus',function() {
					var e = (window.event.currentTarget) ? window.event.currentTarget : window.event.srcElement;
					e.className += ' focus'; 				
				});
				
				elements[eI].attachEvent('onblur', function() {
					var e = (window.event.currentTarget) ? window.event.currentTarget : window.event.srcElement;
					e.className = e.className.replace('focus', '');
					if (e.value !== '') e.className += ' filled';
					else e.className = e.className.replace('filled', '');
				});
			};
		};
	};
	
})();