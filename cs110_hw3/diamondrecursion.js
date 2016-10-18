const spaces = function(a) {
	    if (a === 0) {
	        return "";
	    }
	    return " " + spaces(a - 1);
	};



	const stars = function(a) {
	    if (a === 0) {
	        return "";
	    }
	    return '*' + stars(a - 1);
	};

	const reg2 = function(count, stcount, spcount) {
	    if (count === 0) {
	        return;
	    }
	    console.log(spaces(spcount) + stars(stcount));
	    reg2(count - 1, stcount - 2, spcount + 1);
	};

	const reg1 = function(count, stcount, spcount, n) {
	    if (stcount >= n) {
	        reg2(count, stcount, spcount);
	        return;
	    }

	    console.log(spaces(spcount) + stars(stcount));
	    reg1(count - 1, stcount + 2, spcount - 1, n);

	};
	const diamond = function(n) {
	    if (n % 2 === 0) {
	        n = n + 1;
	    }
	    reg1(n, 1, n - 1, n);
	};

	diamond(5);