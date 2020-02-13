/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 336);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_main_index__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);
// libs
//-------------------------------------------------------
window.$ = window.jQuery = __webpack_require__(23);

__webpack_require__(338); // utils
//----------------------------------------------


__webpack_require__(351); //----------------------------------------------



$(function () {
  __WEBPACK_IMPORTED_MODULE_0__components_main_index__["a" /* default */].init();
});
$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true
  });
  $('.js-example-basic-single').select2();
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__swiper__);
__webpack_require__(339);

__webpack_require__(340);

__webpack_require__(341);

__webpack_require__(342);

__webpack_require__(343);

__webpack_require__(344);

__webpack_require__(345);

__webpack_require__(346);

__webpack_require__(347);


window.Swiper = __WEBPACK_IMPORTED_MODULE_0__swiper__["default"];

__webpack_require__(349);

__webpack_require__(350);

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(95);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tab';
  var VERSION = '4.1.0';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    HIDE: "hide".concat(EVENT_KEY),
    HIDDEN: "hidden".concat(EVENT_KEY),
    SHOW: "show".concat(EVENT_KEY),
    SHOWN: "shown".concat(EVENT_KEY),
    CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
  };
  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    } // Getters


    _createClass(Tab, [{
      key: "show",
      // Public
      value: function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var target;
        var previous;
        var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
        var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
          previous = $.makeArray($(listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $.Event(Event.HIDE, {
          relatedTarget: this._element
        });
        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $(previous).trigger(hideEvent);
        }

        $(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = $(selector)[0];
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });
          var shownEvent = $.Event(Event.SHOWN, {
            relatedTarget: previous
          });
          $(previous).trigger(hiddenEvent);
          $(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      } // Private

    }, {
      key: "_activate",
      value: function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements;

        if (container.nodeName === 'UL') {
          activeElements = $(container).find(Selector.ACTIVE_UL);
        } else {
          activeElements = $(container).children(Selector.ACTIVE);
        }

        var active = activeElements[0];
        var isTransitioning = callback && active && $(active).hasClass(ClassName.FADE);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(active);
          $(active).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(element, active, callback) {
        if (active) {
          $(active).removeClass("".concat(ClassName.SHOW, " ").concat(ClassName.ACTIVE));
          var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $(element).addClass(ClassName.ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].reflow(element);
        $(element).addClass(ClassName.SHOW);

        if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
          var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];

          if (dropdownElement) {
            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(95);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.1): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'collapse';
  var VERSION = '4.1.1';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event = {
    SHOW: "show".concat(EVENT_KEY),
    SHOWN: "shown".concat(EVENT_KEY),
    HIDE: "hide".concat(EVENT_KEY),
    HIDDEN: "hidden".concat(EVENT_KEY),
    CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
  };
  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($("[data-toggle=\"collapse\"][href=\"#".concat(element.id, "\"],") + "[data-toggle=\"collapse\"][data-target=\"#".concat(element.id, "\"]")));
      var tabToggles = $(Selector.DATA_TOGGLE);

      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(elem);

        if (selector !== null && $(selector).filter(element).length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    _createClass(Collapse, [{
      key: "toggle",
      // Public
      value: function toggle() {
        if ($(this._element).hasClass(ClassName.SHOW)) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: "show",
      value: function show() {
        var _this = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var actives;
        var activesData;

        if (this._parent) {
          actives = $.makeArray($(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"".concat(this._config.parent, "\"]")));

          if (actives.length === 0) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).not(this._selector).data(DATA_KEY);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        this._element.style[dimension] = 0;

        if (this._triggerArray.length > 0) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $(_this._element).trigger(Event.SHOWN);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll".concat(capitalizedDimension);
        var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(this._element);
        $(this._element).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);
        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
        __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].reflow(this._element);
        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

        if (this._triggerArray.length > 0) {
          for (var i = 0; i < this._triggerArray.length; i++) {
            var trigger = this._triggerArray[i];
            var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(trigger);

            if (selector !== null) {
              var $elem = $(selector);

              if (!$elem.hasClass(ClassName.SHOW)) {
                $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
              }
            }
          }
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);

          $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = '';
        var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(this._element);
        $(this._element).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, Default, {}, config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this3 = this;

        var parent = null;

        if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].isElement(this._config.parent)) {
          parent = this._config.parent; // It's a jQuery object

          if (typeof this._config.parent.jquery !== 'undefined') {
            parent = this._config.parent[0];
          }
        } else {
          parent = $(this._config.parent)[0];
        }

        var selector = "[data-toggle=\"collapse\"][data-parent=\"".concat(this._config.parent, "\"]");
        $(parent).find(selector).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        return parent;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.SHOW);

          if (triggerArray.length > 0) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      } // Static

    }], [{
      key: "_getTargetFromElement",
      value: function _getTargetFromElement(element) {
        var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(element);
        return selector ? $(selector)[0] : null;
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);

          var _config = _objectSpread({}, Default, {}, $this.data(), {}, _typeof(config) === 'object' && config ? config : {});

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(this);
    $(selector).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Collapse);

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(95);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'alert';
  var VERSION = '4.1.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close".concat(EVENT_KEY),
    CLOSED: "closed".concat(EVENT_KEY),
    CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    } // Getters


    _createClass(Alert, [{
      key: "close",
      // Public
      value: function close(element) {
        var rootElement = this._element;

        if (element) {
          rootElement = this._getRootElement(element);
        }

        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      } // Private

    }, {
      key: "_getRootElement",
      value: function _getRootElement(element) {
        var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = $(selector)[0];
        }

        if (!parent) {
          parent = $(element).closest(".".concat(ClassName.ALERT))[0];
        }

        return parent;
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(element) {
        var closeEvent = $.Event(Event.CLOSE);
        $(element).trigger(closeEvent);
        return closeEvent;
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(element) {
        var _this = this;

        $(element).removeClass(ClassName.SHOW);

        if (!$(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);

          return;
        }

        var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(element);
        $(element).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, function (event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(transitionDuration);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(element) {
        $(element).detach().trigger(Event.CLOSED).remove();
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      }
    }, {
      key: "_handleDismiss",
      value: function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.0): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'button';
  var VERSION = '4.1.0';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event = {
    CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY),
    FOCUS_BLUR_DATA_API: "focus".concat(EVENT_KEY).concat(DATA_API_KEY, " ") + "blur".concat(EVENT_KEY).concat(DATA_API_KEY)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    } // Getters


    _createClass(Button, [{
      key: "toggle",
      // Public
      value: function toggle() {
        var triggerChangeEvent = true;
        var addAriaPressed = true;
        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

        if (rootElement) {
          var input = $(this._element).find(Selector.INPUT)[0];

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

                if (activeElement) {
                  $(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                return;
              }

              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
              $(input).trigger('change');
            }

            input.focus();
            addAriaPressed = false;
          }
        }

        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName.ACTIVE);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Button(this);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/glebsimdyankin/Documents/work/redsoft/src/scripts/libs/select2.js: Unexpected token, expected \",\" (1:475)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[90m/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */\u001b[39m\u001b[33m!\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m define\u001b[33m&&\u001b[39mdefine\u001b[33m.\u001b[39mamd\u001b[33m?\u001b[39mdefine([\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39ma)\u001b[33m:\u001b[39m\u001b[32m\"object\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m module\u001b[33m&&\u001b[39mmodule\u001b[33m.\u001b[39mexports\u001b[33m?\u001b[39mmodule\u001b[33m.\u001b[39mexports\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39m\u001b[32m\"undefined\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m window\u001b[33m?\u001b[39mrequire(\u001b[32m\"jquery\"\u001b[39m)\u001b[33m:\u001b[39mrequire(\u001b[32m\"jquery\"\u001b[39m)(b))\u001b[33m,\u001b[39ma(c)\u001b[33m,\u001b[39mc}\u001b[33m:\u001b[39ma(jQuery)}(\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mif\u001b[39m(a\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mselect2\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mselect2\u001b[33m.\u001b[39mamd)\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mselect2\u001b[33m.\u001b[39mamd\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mb\u001b[33m||\u001b[39m\u001b[33m!\u001b[39mb\u001b[33m.\u001b[39mrequirejs){b\u001b[33m?\u001b[39mc\u001b[33m=\u001b[39mb\u001b[33m:\u001b[39mb\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m a\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m;\u001b[39m\u001b[33m!\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mfunction\u001b[39m e(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m v\u001b[33m.\u001b[39mcall(a\u001b[33m,\u001b[39mb)}\u001b[36mfunction\u001b[39m f(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mh\u001b[33m,\u001b[39mi\u001b[33m,\u001b[39mj\u001b[33m,\u001b[39mk\u001b[33m,\u001b[39ml\u001b[33m,\u001b[39mm\u001b[33m,\u001b[39mn\u001b[33m,\u001b[39mo\u001b[33m=\u001b[39mb\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39msplit(\u001b[32m\"/\"\u001b[39m)\u001b[33m,\u001b[39mp\u001b[33m=\u001b[39mt\u001b[33m.\u001b[39mmap\u001b[33m,\u001b[39mq\u001b[33m=\u001b[39mp\u001b[33m&&\u001b[39mp[\u001b[32m\"*\"\u001b[39m]\u001b[33m||\u001b[39m{}\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(a){\u001b[36mfor\u001b[39m(a\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39msplit(\u001b[32m\"/\"\u001b[39m)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mlength\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mt\u001b[33m.\u001b[39mnodeIdCompat\u001b[33m&&\u001b[39mx\u001b[33m.\u001b[39mtest(a[g])\u001b[33m&&\u001b[39m(a[g]\u001b[33m=\u001b[39ma[g]\u001b[33m.\u001b[39mreplace(x\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[32m\".\"\u001b[39m\u001b[33m===\u001b[39ma[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mcharAt(\u001b[35m0\u001b[39m)\u001b[33m&&\u001b[39mo\u001b[33m&&\u001b[39m(n\u001b[33m=\u001b[39mo\u001b[33m.\u001b[39mslice(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mo\u001b[33m.\u001b[39mlength\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m=\u001b[39mn\u001b[33m.\u001b[39mconcat(a))\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mk\u001b[33m<\u001b[39m\u001b[33ma\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mk\u001b[33m++\u001b[39m)\u001b[36mif\u001b[39m(\u001b[32m\".\"\u001b[39m\u001b[33m===\u001b[39m(m\u001b[33m=\u001b[39ma[k]))a\u001b[33m.\u001b[39msplice(k\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mk\u001b[33m-=\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(\u001b[32m\"..\"\u001b[39m\u001b[33m===\u001b[39mm){\u001b[36mif\u001b[39m(\u001b[35m0\u001b[39m\u001b[33m===\u001b[39mk\u001b[33m||\u001b[39m\u001b[35m1\u001b[39m\u001b[33m===\u001b[39mk\u001b[33m&&\u001b[39m\u001b[32m\"..\"\u001b[39m\u001b[33m===\u001b[39ma[\u001b[35m2\u001b[39m]\u001b[33m||\u001b[39m\u001b[32m\"..\"\u001b[39m\u001b[33m===\u001b[39ma[k\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m])\u001b[36mcontinue\u001b[39m\u001b[33m;\u001b[39mk\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39msplice(k\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39m\u001b[35m2\u001b[39m)\u001b[33m,\u001b[39mk\u001b[33m-=\u001b[39m\u001b[35m2\u001b[39m)}a\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mjoin(\u001b[32m\"/\"\u001b[39m)}\u001b[36mif\u001b[39m((o\u001b[33m||\u001b[39mq)\u001b[33m&&\u001b[39mp){\u001b[36mfor\u001b[39m(c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39msplit(\u001b[32m\"/\"\u001b[39m)\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mk\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mk\u001b[33m-=\u001b[39m\u001b[35m1\u001b[39m){\u001b[36mif\u001b[39m(d\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mslice(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mk)\u001b[33m.\u001b[39mjoin(\u001b[32m\"/\"\u001b[39m)\u001b[33m,\u001b[39mo)\u001b[36mfor\u001b[39m(l\u001b[33m=\u001b[39mo\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39ml\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39ml\u001b[33m-=\u001b[39m\u001b[35m1\u001b[39m)\u001b[36mif\u001b[39m((e\u001b[33m=\u001b[39mp[o\u001b[33m.\u001b[39mslice(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39ml)\u001b[33m.\u001b[39mjoin(\u001b[32m\"/\"\u001b[39m)])\u001b[33m&&\u001b[39m(e\u001b[33m=\u001b[39me[d])){f\u001b[33m=\u001b[39me\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mk\u001b[33m;\u001b[39m\u001b[36mbreak\u001b[39m}\u001b[36mif\u001b[39m(f)\u001b[36mbreak\u001b[39m\u001b[33m;\u001b[39m\u001b[33m!\u001b[39mi\u001b[33m&&\u001b[39mq\u001b[33m&&\u001b[39mq[d]\u001b[33m&&\u001b[39m(i\u001b[33m=\u001b[39mq[d]\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39mk)}\u001b[33m!\u001b[39mf\u001b[33m&&\u001b[39mi\u001b[33m&&\u001b[39m(f\u001b[33m=\u001b[39mi\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mj)\u001b[33m,\u001b[39mf\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39msplice(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mh\u001b[33m,\u001b[39mf)\u001b[33m,\u001b[39ma\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mjoin(\u001b[32m\"/\"\u001b[39m))}\u001b[36mreturn\u001b[39m a}\u001b[36mfunction\u001b[39m g(a\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mw\u001b[33m.\u001b[39mcall(arguments\u001b[33m,\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m d[\u001b[35m0\u001b[39m]\u001b[33m&&\u001b[39m\u001b[35m1\u001b[39m\u001b[33m===\u001b[39md\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39md\u001b[33m.\u001b[39mpush(\u001b[36mnull\u001b[39m)\u001b[33m,\u001b[39mo\u001b[33m.\u001b[39mapply(b\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mconcat([a\u001b[33m,\u001b[39mc]))}}\u001b[36mfunction\u001b[39m h(a){\u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(b){\u001b[36mreturn\u001b[39m f(b\u001b[33m,\u001b[39ma)}}\u001b[36mfunction\u001b[39m i(a){\u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(b){r[a]\u001b[33m=\u001b[39mb}}\u001b[36mfunction\u001b[39m j(a){\u001b[36mif\u001b[39m(e(s\u001b[33m,\u001b[39ma)){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ms[a]\u001b[33m;\u001b[39m\u001b[36mdelete\u001b[39m s[a]\u001b[33m,\u001b[39mu[a]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mn\u001b[33m.\u001b[39mapply(b\u001b[33m,\u001b[39mc)}\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39me(r\u001b[33m,\u001b[39ma)\u001b[33m&&\u001b[39m\u001b[33m!\u001b[39me(u\u001b[33m,\u001b[39ma))\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(\u001b[32m\"No \"\u001b[39m\u001b[33m+\u001b[39ma)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m r[a]}\u001b[36mfunction\u001b[39m k(a){\u001b[36mvar\u001b[39m b\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39ma\u001b[33m?\u001b[39ma\u001b[33m.\u001b[39mindexOf(\u001b[32m\"!\"\u001b[39m)\u001b[33m:\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m>\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m&&\u001b[39m(b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39msubstring(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39ma\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39msubstring(c\u001b[33m+\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mlength))\u001b[33m,\u001b[39m[b\u001b[33m,\u001b[39ma]}\u001b[36mfunction\u001b[39m l(a){\u001b[36mreturn\u001b[39m a\u001b[33m?\u001b[39mk(a)\u001b[33m:\u001b[39m[]}\u001b[36mfunction\u001b[39m m(a){\u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m t\u001b[33m&&\u001b[39mt\u001b[33m.\u001b[39mconfig\u001b[33m&&\u001b[39mt\u001b[33m.\u001b[39mconfig[a]\u001b[33m||\u001b[39m{}}}\u001b[36mvar\u001b[39m n\u001b[33m,\u001b[39mo\u001b[33m,\u001b[39mp\u001b[33m,\u001b[39mq\u001b[33m,\u001b[39mr\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39ms\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mt\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mu\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mv\u001b[33m=\u001b[39m\u001b[33mObject\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mhasOwnProperty\u001b[33m,\u001b[39mw\u001b[33m=\u001b[39m[]\u001b[33m.\u001b[39mslice\u001b[33m,\u001b[39mx\u001b[33m=\u001b[39m\u001b[35m/\\.js$/\u001b[39m\u001b[33m;\u001b[39mp\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mk(a)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39md[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mb[\u001b[35m1\u001b[39m]\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m a\u001b[33m=\u001b[39md[\u001b[35m1\u001b[39m]\u001b[33m,\u001b[39me\u001b[33m&&\u001b[39m(e\u001b[33m=\u001b[39mf(e\u001b[33m,\u001b[39mg)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39mj(e))\u001b[33m,\u001b[39me\u001b[33m?\u001b[39ma\u001b[33m=\u001b[39mc\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mnormalize\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39mnormalize(a\u001b[33m,\u001b[39mh(g))\u001b[33m:\u001b[39mf(a\u001b[33m,\u001b[39mg)\u001b[33m:\u001b[39m(a\u001b[33m=\u001b[39mf(a\u001b[33m,\u001b[39mg)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mk(a)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39md[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39ma\u001b[33m=\u001b[39md[\u001b[35m1\u001b[39m]\u001b[33m,\u001b[39me\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39mj(e)))\u001b[33m,\u001b[39m{f\u001b[33m:\u001b[39me\u001b[33m?\u001b[39me\u001b[33m+\u001b[39m\u001b[32m\"!\"\u001b[39m\u001b[33m+\u001b[39ma\u001b[33m:\u001b[39ma\u001b[33m,\u001b[39mn\u001b[33m:\u001b[39ma\u001b[33m,\u001b[39mpr\u001b[33m:\u001b[39me\u001b[33m,\u001b[39mp\u001b[33m:\u001b[39mc}}\u001b[33m,\u001b[39mq\u001b[33m=\u001b[39m{require\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m g(a)}\u001b[33m,\u001b[39mexports\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39mr[a]\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39mb\u001b[33m?\u001b[39mb\u001b[33m:\u001b[39mr[a]\u001b[33m=\u001b[39m{}}\u001b[33m,\u001b[39mmodule\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m{id\u001b[33m:\u001b[39ma\u001b[33m,\u001b[39muri\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mexports\u001b[33m:\u001b[39mr[a]\u001b[33m,\u001b[39mconfig\u001b[33m:\u001b[39mm(a)}}}\u001b[33m,\u001b[39mn\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m,\u001b[39mf){\u001b[36mvar\u001b[39m h\u001b[33m,\u001b[39mk\u001b[33m,\u001b[39mm\u001b[33m,\u001b[39mn\u001b[33m,\u001b[39mo\u001b[33m,\u001b[39mt\u001b[33m,\u001b[39mv\u001b[33m,\u001b[39mw\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39mx\u001b[33m=\u001b[39m\u001b[36mtypeof\u001b[39m d\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(f\u001b[33m=\u001b[39mf\u001b[33m||\u001b[39ma\u001b[33m,\u001b[39mt\u001b[33m=\u001b[39ml(f)\u001b[33m,\u001b[39m\u001b[32m\"undefined\"\u001b[39m\u001b[33m===\u001b[39mx\u001b[33m||\u001b[39m\u001b[32m\"function\"\u001b[39m\u001b[33m===\u001b[39mx){\u001b[36mfor\u001b[39m(c\u001b[33m=\u001b[39m\u001b[33m!\u001b[39mc\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39md\u001b[33m.\u001b[39mlength\u001b[33m?\u001b[39m[\u001b[32m\"require\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"exports\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"module\"\u001b[39m]\u001b[33m:\u001b[39mc\u001b[33m,\u001b[39mo\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mo\u001b[33m<\u001b[39m\u001b[33mc\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mo\u001b[33m+=\u001b[39m\u001b[35m1\u001b[39m)\u001b[36mif\u001b[39m(n\u001b[33m=\u001b[39mp(c[o]\u001b[33m,\u001b[39mt)\u001b[33m,\u001b[39m\u001b[32m\"require\"\u001b[39m\u001b[33m===\u001b[39m(k\u001b[33m=\u001b[39mn\u001b[33m.\u001b[39mf))w[o]\u001b[33m=\u001b[39mq\u001b[33m.\u001b[39mrequire(a)\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(\u001b[32m\"exports\"\u001b[39m\u001b[33m===\u001b[39mk)w[o]\u001b[33m=\u001b[39mq\u001b[33m.\u001b[39mexports(a)\u001b[33m,\u001b[39mv\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(\u001b[32m\"module\"\u001b[39m\u001b[33m===\u001b[39mk)h\u001b[33m=\u001b[39mw[o]\u001b[33m=\u001b[39mq\u001b[33m.\u001b[39mmodule(a)\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(e(r\u001b[33m,\u001b[39mk)\u001b[33m||\u001b[39me(s\u001b[33m,\u001b[39mk)\u001b[33m||\u001b[39me(u\u001b[33m,\u001b[39mk))w[o]\u001b[33m=\u001b[39mj(k)\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m{\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mn\u001b[33m.\u001b[39mp)\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(a\u001b[33m+\u001b[39m\u001b[32m\" missing \"\u001b[39m\u001b[33m+\u001b[39mk)\u001b[33m;\u001b[39mn\u001b[33m.\u001b[39mp\u001b[33m.\u001b[39mload(n\u001b[33m.\u001b[39mn\u001b[33m,\u001b[39mg(f\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39mi(k)\u001b[33m,\u001b[39m{})\u001b[33m,\u001b[39mw[o]\u001b[33m=\u001b[39mr[k]}m\u001b[33m=\u001b[39md\u001b[33m?\u001b[39md\u001b[33m.\u001b[39mapply(r[a]\u001b[33m,\u001b[39mw)\u001b[33m:\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m&&\u001b[39m(h\u001b[33m&&\u001b[39mh\u001b[33m.\u001b[39mexports\u001b[33m!==\u001b[39mb\u001b[33m&&\u001b[39mh\u001b[33m.\u001b[39mexports\u001b[33m!==\u001b[39mr[a]\u001b[33m?\u001b[39mr[a]\u001b[33m=\u001b[39mh\u001b[33m.\u001b[39mexports\u001b[33m:\u001b[39mm\u001b[33m===\u001b[39mb\u001b[33m&&\u001b[39mv\u001b[33m||\u001b[39m(r[a]\u001b[33m=\u001b[39mm))}\u001b[36melse\u001b[39m a\u001b[33m&&\u001b[39m(r[a]\u001b[33m=\u001b[39md)}\u001b[33m,\u001b[39ma\u001b[33m=\u001b[39mc\u001b[33m=\u001b[39mo\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m,\u001b[39mf){\u001b[36mif\u001b[39m(\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m a)\u001b[36mreturn\u001b[39m q[a]\u001b[33m?\u001b[39mq[a](c)\u001b[33m:\u001b[39mj(p(a\u001b[33m,\u001b[39ml(c))\u001b[33m.\u001b[39mf)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39ma\u001b[33m.\u001b[39msplice){\u001b[36mif\u001b[39m(t\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39mt\u001b[33m.\u001b[39mdeps\u001b[33m&&\u001b[39mo(t\u001b[33m.\u001b[39mdeps\u001b[33m,\u001b[39mt\u001b[33m.\u001b[39mcallback)\u001b[33m,\u001b[39m\u001b[33m!\u001b[39mc)\u001b[36mreturn\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39msplice\u001b[33m?\u001b[39m(a\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39md\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m)\u001b[33m:\u001b[39ma\u001b[33m=\u001b[39mb}\u001b[36mreturn\u001b[39m c\u001b[33m=\u001b[39mc\u001b[33m||\u001b[39m\u001b[36mfunction\u001b[39m(){}\u001b[33m,\u001b[39m\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m d\u001b[33m&&\u001b[39m(d\u001b[33m=\u001b[39me\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mf)\u001b[33m,\u001b[39me\u001b[33m?\u001b[39mn(b\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m:\u001b[39msetTimeout(\u001b[36mfunction\u001b[39m(){n(b\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)}\u001b[33m,\u001b[39m\u001b[35m4\u001b[39m)\u001b[33m,\u001b[39mo}\u001b[33m,\u001b[39mo\u001b[33m.\u001b[39mconfig\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m o(a)}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39m_defined\u001b[33m=\u001b[39mr\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mif\u001b[39m(\u001b[32m\"string\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m a)\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(\u001b[32m\"See almond README: incorrect module build, no module name\"\u001b[39m)\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39msplice\u001b[33m||\u001b[39m(c\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39m[])\u001b[33m,\u001b[39me(r\u001b[33m,\u001b[39ma)\u001b[33m||\u001b[39me(s\u001b[33m,\u001b[39ma)\u001b[33m||\u001b[39m(s[a]\u001b[33m=\u001b[39m[a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc])}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mamd\u001b[33m=\u001b[39m{jQuery\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}}()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mrequirejs\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mrequire\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine\u001b[33m=\u001b[39md}}()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"almond\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m||\u001b[39m$\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mb\u001b[33m&&\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39merror\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39merror(\u001b[32m\"Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.\"\u001b[39m)\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/utils\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m b(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mprototype\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m[]\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m d \u001b[36min\u001b[39m b){\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m b[d]\u001b[33m&&\u001b[39m(\u001b[32m\"constructor\"\u001b[39m\u001b[33m!==\u001b[39md\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mpush(d))}\u001b[36mreturn\u001b[39m c}\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfunction\u001b[39m c(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mconstructor\u001b[33m=\u001b[39ma}\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m{}\u001b[33m.\u001b[39mhasOwnProperty\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m e \u001b[36min\u001b[39m b)d\u001b[33m.\u001b[39mcall(b\u001b[33m,\u001b[39me)\u001b[33m&&\u001b[39m(a[e]\u001b[33m=\u001b[39mb[e])\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mprototype\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mprototype\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m c\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39m__super__\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m,\u001b[39ma}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[33mArray\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39munshift\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mlength\u001b[33m,\u001b[39me\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mconstructor\u001b[33m;\u001b[39md\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39mcall(arguments\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mconstructor)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mconstructor)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39marguments)}\u001b[36mfunction\u001b[39m e(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mconstructor\u001b[33m=\u001b[39md}\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mb(c)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mb(a)\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39mdisplayName\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mdisplayName\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m e\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mh\u001b[33m<\u001b[39m\u001b[33mg\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mh\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m i\u001b[33m=\u001b[39mg[h]\u001b[33m;\u001b[39md\u001b[33m.\u001b[39mprototype[i]\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mprototype[i]}\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m j\u001b[33m=\u001b[39m(\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){}\u001b[33m;\u001b[39ma \u001b[36min\u001b[39m d\u001b[33m.\u001b[39mprototype\u001b[33m&&\u001b[39m(b\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mprototype[a])\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mprototype[a]\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[33mArray\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39munshift\u001b[33m.\u001b[39mcall(arguments\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39marguments)}})\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mk\u001b[33m<\u001b[39m\u001b[33mf\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mk\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m l\u001b[33m=\u001b[39mf[k]\u001b[33m;\u001b[39md\u001b[33m.\u001b[39mprototype[l]\u001b[33m=\u001b[39mj(l)}\u001b[36mreturn\u001b[39m d}\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners\u001b[33m=\u001b[39m{}}\u001b[33m;\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mon\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners\u001b[33m||\u001b[39m{}\u001b[33m,\u001b[39ma \u001b[36min\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners[a]\u001b[33m.\u001b[39mpush(b)\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners[a]\u001b[33m=\u001b[39m[b]}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mtrigger\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[33mArray\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mslice\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mcall(arguments\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners\u001b[33m||\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mc\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39m[])\u001b[33m,\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mpush({})\u001b[33m,\u001b[39mc[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39m_type\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39ma \u001b[36min\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvoke(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners[a]\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcall(arguments\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m))\u001b[33m,\u001b[39m\u001b[32m\"*\"\u001b[39m\u001b[36min\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvoke(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlisteners[\u001b[32m\"*\"\u001b[39m]\u001b[33m,\u001b[39marguments)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39minvoke\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mc\u001b[33m<\u001b[39m\u001b[33md\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m++\u001b[39m)a[c]\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mObservable\u001b[39m\u001b[33m=\u001b[39md\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mgenerateChars\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m<\u001b[39m\u001b[33ma\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m++\u001b[39m){b\u001b[33m+=\u001b[39m\u001b[33mMath\u001b[39m\u001b[33m.\u001b[39mfloor(\u001b[35m36\u001b[39m\u001b[33m*\u001b[39m\u001b[33mMath\u001b[39m\u001b[33m.\u001b[39mrandom())\u001b[33m.\u001b[39mtoString(\u001b[35m36\u001b[39m)}\u001b[36mreturn\u001b[39m b}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(){a\u001b[33m.\u001b[39mapply(b\u001b[33m,\u001b[39marguments)}}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m_convertData\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m b \u001b[36min\u001b[39m a){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39msplit(\u001b[32m\"-\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[35m1\u001b[39m\u001b[33m!==\u001b[39mc\u001b[33m.\u001b[39mlength){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39me\u001b[33m<\u001b[39m\u001b[33mc\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39me\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mc[e]\u001b[33m;\u001b[39mf\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39msubstring(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m.\u001b[39mtoLowerCase()\u001b[33m+\u001b[39mf\u001b[33m.\u001b[39msubstring(\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mf \u001b[36min\u001b[39m d\u001b[33m||\u001b[39m(d[f]\u001b[33m=\u001b[39m{})\u001b[33m,\u001b[39me\u001b[33m==\u001b[39mc\u001b[33m.\u001b[39mlength\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m&&\u001b[39m(d[f]\u001b[33m=\u001b[39ma[b])\u001b[33m,\u001b[39md\u001b[33m=\u001b[39md[f]}\u001b[36mdelete\u001b[39m a[b]}}\u001b[36mreturn\u001b[39m a}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mhasScroll\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma(c)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39moverflowX\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39moverflowY\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m(e\u001b[33m!==\u001b[39mf\u001b[33m||\u001b[39m\u001b[32m\"hidden\"\u001b[39m\u001b[33m!==\u001b[39mf\u001b[33m&&\u001b[39m\u001b[32m\"visible\"\u001b[39m\u001b[33m!==\u001b[39mf)\u001b[33m&&\u001b[39m(\u001b[32m\"scroll\"\u001b[39m\u001b[33m===\u001b[39me\u001b[33m||\u001b[39m\u001b[32m\"scroll\"\u001b[39m\u001b[33m===\u001b[39mf\u001b[33m||\u001b[39m(d\u001b[33m.\u001b[39minnerHeight()\u001b[33m<\u001b[39m\u001b[33mc\u001b[39m\u001b[33m.\u001b[39mscrollHeight\u001b[33m||\u001b[39md\u001b[33m.\u001b[39minnerWidth()\u001b[33m<\u001b[39m\u001b[33mc\u001b[39m\u001b[33m.\u001b[39mscrollWidth))}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mescapeMarkup\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m{\u001b[32m\"\\\\\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"&#92;\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"&\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"&amp;\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"<\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"&lt;\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\">\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"&gt;\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m'\"'\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"&quot;\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"'\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"&#39;\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"/\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"&#47;\"\u001b[39m}\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m a\u001b[33m?\u001b[39ma\u001b[33m:\u001b[39m\u001b[33mString\u001b[39m(a)\u001b[33m.\u001b[39mreplace(\u001b[35m/[&<>\"'\\/\\\\]/g\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m b[a]})}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mappendMany\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mif\u001b[39m(\u001b[32m\"1.7\"\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mjquery\u001b[33m.\u001b[39msubstr(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[35m3\u001b[39m)){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma()\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mmap(c\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m=\u001b[39md\u001b[33m.\u001b[39madd(a)})\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39md}b\u001b[33m.\u001b[39mappend(c)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m__cache\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39m\u001b[33mGetUniqueElementId\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mgetAttribute(\u001b[32m\"data-select2-id\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mb\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mid\u001b[33m?\u001b[39m(b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39msetAttribute(\u001b[32m\"data-select2-id\"\u001b[39m\u001b[33m,\u001b[39mb))\u001b[33m:\u001b[39m(a\u001b[33m.\u001b[39msetAttribute(\u001b[32m\"data-select2-id\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m++\u001b[39me)\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mtoString()))\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetUniqueElementId\u001b[39m(a)\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39m__cache[e]\u001b[33m||\u001b[39m(c\u001b[33m.\u001b[39m__cache[e]\u001b[33m=\u001b[39m{})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m__cache[e][b]\u001b[33m=\u001b[39md}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetUniqueElementId\u001b[39m(b)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m d\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39m__cache[e]\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39m__cache[e][d]\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39m__cache[e][d]\u001b[33m:\u001b[39ma(b)\u001b[33m.\u001b[39mdata(d)\u001b[33m:\u001b[39mc\u001b[33m.\u001b[39m__cache[e]}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mRemoveData\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetUniqueElementId\u001b[39m(a)\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39m__cache[b]\u001b[33m&&\u001b[39m\u001b[36mdelete\u001b[39m c\u001b[33m.\u001b[39m__cache[b]}\u001b[33m,\u001b[39mc})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/results\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfunction\u001b[39m c(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39md){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdata\u001b[33m=\u001b[39md\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(c\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mObservable\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma(\u001b[32m'<ul class=\"select2-results__options\" role=\"tree\"></ul>'\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"multiple\"\u001b[39m)\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-multiselectable\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mclear\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mempty()}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdisplayMessage\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"escapeMarkup\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclear()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhideLoading()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma(\u001b[32m'<li role=\"treeitem\" aria-live=\"assertive\" class=\"select2-results__option\"></li>'\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"translations\"\u001b[39m)\u001b[33m.\u001b[39mget(b\u001b[33m.\u001b[39mmessage)\u001b[33m;\u001b[39md\u001b[33m.\u001b[39mappend(c(e(b\u001b[33m.\u001b[39margs)))\u001b[33m,\u001b[39md[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mclassName\u001b[33m+=\u001b[39m\u001b[32m\" select2-results__message\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mappend(d)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mhideMessages\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-results__message\"\u001b[39m)\u001b[33m.\u001b[39mremove()}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mappend\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhideLoading()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m[]\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ma\u001b[33m.\u001b[39mresults\u001b[33m||\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mresults\u001b[33m.\u001b[39mlength)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m(\u001b[35m0\u001b[39m\u001b[33m===\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mchildren()\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:message\"\u001b[39m\u001b[33m,\u001b[39m{message\u001b[33m:\u001b[39m\u001b[32m\"noResults\"\u001b[39m}))\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mresults\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msort(a\u001b[33m.\u001b[39mresults)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m<\u001b[39m\u001b[33ma\u001b[39m\u001b[33m.\u001b[39mresults\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mc\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mresults[c]\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moption(d)\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mpush(e)}\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mappend(b)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mposition\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){b\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-results\"\u001b[39m)\u001b[33m.\u001b[39mappend(a)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39msort\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"sorter\"\u001b[39m)(a)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mhighlightFirstItem\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-results__option[aria-selected]\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mfilter(\u001b[32m\"[aria-selected=true]\"\u001b[39m)\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mfirst()\u001b[33m.\u001b[39mtrigger(\u001b[32m\"mouseenter\"\u001b[39m)\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mfirst()\u001b[33m.\u001b[39mtrigger(\u001b[32m\"mouseenter\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mensureHighlightVisible()}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39msetClasses\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mcurrent(\u001b[36mfunction\u001b[39m(d){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mmap(d\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mid\u001b[33m.\u001b[39mtoString()})\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-results__option[aria-selected]\"\u001b[39m)\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mid\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39md\u001b[33m.\u001b[39melement\u001b[33m&&\u001b[39md\u001b[33m.\u001b[39melement\u001b[33m.\u001b[39mselected\u001b[33m||\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39md\u001b[33m.\u001b[39melement\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39minArray(f\u001b[33m,\u001b[39me)\u001b[33m>\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-selected\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m)\u001b[33m:\u001b[39mc\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-selected\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"false\"\u001b[39m)})})}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mshowLoading\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhideLoading()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"translations\"\u001b[39m)\u001b[33m.\u001b[39mget(\u001b[32m\"searching\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m{disabled\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mloading\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mtext\u001b[33m:\u001b[39mb(a)}\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moption(c)\u001b[33m;\u001b[39md\u001b[33m.\u001b[39mclassName\u001b[33m+=\u001b[39m\u001b[32m\" loading-results\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mprepend(d)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mhideLoading\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mfind(\u001b[32m\".loading-results\"\u001b[39m)\u001b[33m.\u001b[39mremove()}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39moption\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"li\"\u001b[39m)\u001b[33m;\u001b[39md\u001b[33m.\u001b[39mclassName\u001b[33m=\u001b[39m\u001b[32m\"select2-results__option\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m{role\u001b[33m:\u001b[39m\u001b[32m\"treeitem\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"aria-selected\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"false\"\u001b[39m}\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39mdisabled\u001b[33m&&\u001b[39m(\u001b[36mdelete\u001b[39m e[\u001b[32m\"aria-selected\"\u001b[39m]\u001b[33m,\u001b[39me[\u001b[32m\"aria-disabled\"\u001b[39m]\u001b[33m=\u001b[39m\u001b[32m\"true\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mc\u001b[33m.\u001b[39mid\u001b[33m&&\u001b[39m\u001b[36mdelete\u001b[39m e[\u001b[32m\"aria-selected\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39m_resultId\u001b[33m&&\u001b[39m(d\u001b[33m.\u001b[39mid\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39m_resultId)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mtitle\u001b[33m&&\u001b[39m(d\u001b[33m.\u001b[39mtitle\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mtitle)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mchildren\u001b[33m&&\u001b[39m(e\u001b[33m.\u001b[39mrole\u001b[33m=\u001b[39m\u001b[32m\"group\"\u001b[39m\u001b[33m,\u001b[39me[\u001b[32m\"aria-label\"\u001b[39m]\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mtext\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m e[\u001b[32m\"aria-selected\"\u001b[39m])\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m f \u001b[36min\u001b[39m e){\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39me[f]\u001b[33m;\u001b[39md\u001b[33m.\u001b[39msetAttribute(f\u001b[33m,\u001b[39mg)}\u001b[36mif\u001b[39m(c\u001b[33m.\u001b[39mchildren){\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39ma(d)\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"strong\"\u001b[39m)\u001b[33m;\u001b[39mi\u001b[33m.\u001b[39mclassName\u001b[33m=\u001b[39m\u001b[32m\"select2-results__group\"\u001b[39m\u001b[33m;\u001b[39ma(i)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtemplate(c\u001b[33m,\u001b[39mi)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m j\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mk\u001b[33m<\u001b[39m\u001b[33mc\u001b[39m\u001b[33m.\u001b[39mchildren\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mk\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m l\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mchildren[k]\u001b[33m,\u001b[39mm\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moption(l)\u001b[33m;\u001b[39mj\u001b[33m.\u001b[39mpush(m)}\u001b[36mvar\u001b[39m n\u001b[33m=\u001b[39ma(\u001b[32m\"<ul></ul>\"\u001b[39m\u001b[33m,\u001b[39m{\u001b[36mclass\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"select2-results__options select2-results__options--nested\"\u001b[39m})\u001b[33m;\u001b[39mn\u001b[33m.\u001b[39mappend(j)\u001b[33m,\u001b[39mh\u001b[33m.\u001b[39mappend(i)\u001b[33m,\u001b[39mh\u001b[33m.\u001b[39mappend(n)}\u001b[36melse\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtemplate(c\u001b[33m,\u001b[39md)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(d\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39md}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mid\u001b[33m+\u001b[39m\u001b[32m\"-results\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mattr(\u001b[32m\"id\"\u001b[39m\u001b[33m,\u001b[39mf)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:all\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39mclear()\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mappend(a\u001b[33m.\u001b[39mdata)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39misOpen()\u001b[33m&&\u001b[39m(e\u001b[33m.\u001b[39msetClasses()\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mhighlightFirstItem())})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:append\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39mappend(a\u001b[33m.\u001b[39mdata)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39misOpen()\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39msetClasses()})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"query\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39mhideMessages()\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mshowLoading(a)})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"select\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){c\u001b[33m.\u001b[39misOpen()\u001b[33m&&\u001b[39m(e\u001b[33m.\u001b[39msetClasses()\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mhighlightFirstItem())})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"unselect\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){c\u001b[33m.\u001b[39misOpen()\u001b[33m&&\u001b[39m(e\u001b[33m.\u001b[39msetClasses()\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mhighlightFirstItem())})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){e\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-expanded\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-hidden\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"false\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39msetClasses()\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mensureHighlightVisible()})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){e\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-expanded\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"false\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-hidden\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"aria-activedescendant\"\u001b[39m)})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:toggle\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mgetHighlightedResults()\u001b[33m;\u001b[39m\u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mtrigger(\u001b[32m\"mouseup\"\u001b[39m)})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:select\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mgetHighlightedResults()\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39mlength){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[32m\"true\"\u001b[39m\u001b[33m==\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-selected\"\u001b[39m)\u001b[33m?\u001b[39me\u001b[33m.\u001b[39mtrigger(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m{})\u001b[33m:\u001b[39me\u001b[33m.\u001b[39mtrigger(\u001b[32m\"select\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39mc})}})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:previous\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mgetHighlightedResults()\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mfind(\u001b[32m\"[aria-selected]\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mindex(a)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m(c\u001b[33m<=\u001b[39m\u001b[35m0\u001b[39m)){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mc\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m(d\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39meq(d)\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39mtrigger(\u001b[32m\"mouseenter\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39moffset()\u001b[33m.\u001b[39mtop\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39moffset()\u001b[33m.\u001b[39mtop\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop()\u001b[33m+\u001b[39m(h\u001b[33m-\u001b[39mg)\u001b[33m;\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39md\u001b[33m?\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop(\u001b[35m0\u001b[39m)\u001b[33m:\u001b[39mh\u001b[33m-\u001b[39mg\u001b[33m<\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop(i)}})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:next\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mgetHighlightedResults()\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mfind(\u001b[32m\"[aria-selected]\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mindex(a)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mc\u001b[33m+\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m(d\u001b[33m>=\u001b[39mb\u001b[33m.\u001b[39mlength)){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39meq(d)\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39mtrigger(\u001b[32m\"mouseenter\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39moffset()\u001b[33m.\u001b[39mtop\u001b[33m+\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mouterHeight(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39moffset()\u001b[33m.\u001b[39mtop\u001b[33m+\u001b[39mf\u001b[33m.\u001b[39mouterHeight(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop()\u001b[33m+\u001b[39mh\u001b[33m-\u001b[39mg\u001b[33m;\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39md\u001b[33m?\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop(\u001b[35m0\u001b[39m)\u001b[33m:\u001b[39mh\u001b[33m>\u001b[39mg\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop(i)}})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39melement\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-results__option--highlighted\"\u001b[39m)})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:message\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39mdisplayMessage(a)})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mmousewheel\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mon(\u001b[32m\"mousewheel\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop()\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mget(\u001b[35m0\u001b[39m)\u001b[33m.\u001b[39mscrollHeight\u001b[33m-\u001b[39mb\u001b[33m+\u001b[39ma\u001b[33m.\u001b[39mdeltaY\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mdeltaY\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39mb\u001b[33m-\u001b[39ma\u001b[33m.\u001b[39mdeltaY\u001b[33m<=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mdeltaY\u001b[33m<\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39mc\u001b[33m<=\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mheight()\u001b[33m;\u001b[39md\u001b[33m?\u001b[39m(e\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop(\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mpreventDefault()\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mstopPropagation())\u001b[33m:\u001b[39mf\u001b[33m&&\u001b[39m(e\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop(e\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mget(\u001b[35m0\u001b[39m)\u001b[33m.\u001b[39mscrollHeight\u001b[33m-\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mheight())\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mpreventDefault()\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mstopPropagation())})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mon(\u001b[32m\"mouseup\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-results__option[aria-selected]\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"true\"\u001b[39m\u001b[33m===\u001b[39md\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-selected\"\u001b[39m))\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m(e\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"multiple\"\u001b[39m)\u001b[33m?\u001b[39me\u001b[33m.\u001b[39mtrigger(\u001b[32m\"unselect\"\u001b[39m\u001b[33m,\u001b[39m{originalEvent\u001b[33m:\u001b[39mc\u001b[33m,\u001b[39mdata\u001b[33m:\u001b[39mf})\u001b[33m:\u001b[39me\u001b[33m.\u001b[39mtrigger(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m{}))\u001b[33m;\u001b[39me\u001b[33m.\u001b[39mtrigger(\u001b[32m\"select\"\u001b[39m\u001b[33m,\u001b[39m{originalEvent\u001b[33m:\u001b[39mc\u001b[33m,\u001b[39mdata\u001b[33m:\u001b[39mf})})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mon(\u001b[32m\"mouseenter\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-results__option[aria-selected]\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)\u001b[33m;\u001b[39me\u001b[33m.\u001b[39mgetHighlightedResults()\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-results__option--highlighted\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:focus\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39md\u001b[33m,\u001b[39melement\u001b[33m:\u001b[39ma(\u001b[36mthis\u001b[39m)})})}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mgetHighlightedResults\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-results__option--highlighted\"\u001b[39m)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdestroy\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mremove()}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mensureHighlightVisible\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetHighlightedResults()\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39mlength){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mfind(\u001b[32m\"[aria-selected]\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mindex(a)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39moffset()\u001b[33m.\u001b[39mtop\u001b[33m,\u001b[39me\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39moffset()\u001b[33m.\u001b[39mtop\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop()\u001b[33m+\u001b[39m(e\u001b[33m-\u001b[39md)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39me\u001b[33m-\u001b[39md\u001b[33m;\u001b[39mf\u001b[33m-=\u001b[39m\u001b[35m2\u001b[39m\u001b[33m*\u001b[39ma\u001b[33m.\u001b[39mouterHeight(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m<=\u001b[39m\u001b[35m2\u001b[39m\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop(\u001b[35m0\u001b[39m)\u001b[33m:\u001b[39m(g\u001b[33m>\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mouterHeight()\u001b[33m||\u001b[39mg\u001b[33m<\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mscrollTop(f)}}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mtemplate\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"templateResult\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"escapeMarkup\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39md(b\u001b[33m,\u001b[39mc)\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mf\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39mdisplay\u001b[33m=\u001b[39m\u001b[32m\"none\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m f\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39minnerHTML\u001b[33m=\u001b[39me(f)\u001b[33m:\u001b[39ma(c)\u001b[33m.\u001b[39mappend(f)}\u001b[33m,\u001b[39mc})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/keys\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m{\u001b[33mBACKSPACE\u001b[39m\u001b[33m:\u001b[39m\u001b[35m8\u001b[39m\u001b[33m,\u001b[39m\u001b[33mTAB\u001b[39m\u001b[33m:\u001b[39m\u001b[35m9\u001b[39m\u001b[33m,\u001b[39m\u001b[33mENTER\u001b[39m\u001b[33m:\u001b[39m\u001b[35m13\u001b[39m\u001b[33m,\u001b[39m\u001b[33mSHIFT\u001b[39m\u001b[33m:\u001b[39m\u001b[35m16\u001b[39m\u001b[33m,\u001b[39m\u001b[33mCTRL\u001b[39m\u001b[33m:\u001b[39m\u001b[35m17\u001b[39m\u001b[33m,\u001b[39m\u001b[33mALT\u001b[39m\u001b[33m:\u001b[39m\u001b[35m18\u001b[39m\u001b[33m,\u001b[39m\u001b[33mESC\u001b[39m\u001b[33m:\u001b[39m\u001b[35m27\u001b[39m\u001b[33m,\u001b[39m\u001b[33mSPACE\u001b[39m\u001b[33m:\u001b[39m\u001b[35m32\u001b[39m\u001b[33m,\u001b[39m\u001b[33mPAGE_UP\u001b[39m\u001b[33m:\u001b[39m\u001b[35m33\u001b[39m\u001b[33m,\u001b[39m\u001b[33mPAGE_DOWN\u001b[39m\u001b[33m:\u001b[39m\u001b[35m34\u001b[39m\u001b[33m,\u001b[39m\u001b[33mEND\u001b[39m\u001b[33m:\u001b[39m\u001b[35m35\u001b[39m\u001b[33m,\u001b[39m\u001b[33mHOME\u001b[39m\u001b[33m:\u001b[39m\u001b[35m36\u001b[39m\u001b[33m,\u001b[39m\u001b[33mLEFT\u001b[39m\u001b[33m:\u001b[39m\u001b[35m37\u001b[39m\u001b[33m,\u001b[39m\u001b[33mUP\u001b[39m\u001b[33m:\u001b[39m\u001b[35m38\u001b[39m\u001b[33m,\u001b[39m\u001b[33mRIGHT\u001b[39m\u001b[33m:\u001b[39m\u001b[35m39\u001b[39m\u001b[33m,\u001b[39m\u001b[33mDOWN\u001b[39m\u001b[33m:\u001b[39m\u001b[35m40\u001b[39m\u001b[33m,\u001b[39m\u001b[33mDELETE\u001b[39m\u001b[33m:\u001b[39m\u001b[35m46\u001b[39m}})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/selection/base\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../keys\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(d\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mObservable\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ma(\u001b[32m'<span class=\"select2-selection\" role=\"combobox\"  aria-haspopup=\"true\" aria-expanded=\"false\"></span>'\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_tabindex\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"old-tabindex\"\u001b[39m)\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_tabindex\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"old-tabindex\"\u001b[39m)\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m)\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_tabindex\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mattr(\u001b[32m\"title\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mattr(\u001b[32m\"title\"\u001b[39m))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_tabindex)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39mc}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m(a\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m+\u001b[39m\u001b[32m\"-results\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainer\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39mtrigger(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39ma)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"blur\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39m_handleBlur(a)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"keydown\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39mtrigger(\u001b[32m\"keypress\"\u001b[39m\u001b[33m,\u001b[39ma)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mwhich\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mSPACE\u001b[39m\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mpreventDefault()})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"results:focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-activedescendant\"\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39m_resultId)})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"selection:update\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39mupdate(a\u001b[33m.\u001b[39mdata)})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-expanded\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-owns\"\u001b[39m\u001b[33m,\u001b[39me)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m_attachCloseHandler(a)})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-expanded\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"false\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"aria-activedescendant\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"aria-owns\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfocus()\u001b[33m,\u001b[39mwindow\u001b[33m.\u001b[39msetTimeout(\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfocus()}\u001b[33m,\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m_detachCloseHandler(a)})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"enable\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m_tabindex)})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"disable\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"-1\"\u001b[39m)})}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_handleBlur\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39mwindow\u001b[33m.\u001b[39msetTimeout(\u001b[36mfunction\u001b[39m(){document\u001b[33m.\u001b[39mactiveElement\u001b[33m==\u001b[39mc\u001b[33m.\u001b[39m$selection[\u001b[35m0\u001b[39m]\u001b[33m||\u001b[39ma\u001b[33m.\u001b[39mcontains(c\u001b[33m.\u001b[39m$selection[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39mdocument\u001b[33m.\u001b[39mactiveElement)\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39mtrigger(\u001b[32m\"blur\"\u001b[39m\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_attachCloseHandler\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c){a(document\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39mon(\u001b[32m\"mousedown.select2.\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma(c\u001b[33m.\u001b[39mtarget)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mclosest(\u001b[32m\".select2\"\u001b[39m)\u001b[33m;\u001b[39ma(\u001b[32m\".select2.select2-container--open\"\u001b[39m)\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){a(\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m!=\u001b[39me[\u001b[35m0\u001b[39m]\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"element\"\u001b[39m)\u001b[33m.\u001b[39mselect2(\u001b[32m\"close\"\u001b[39m)})})}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_detachCloseHandler\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){a(document\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39moff(\u001b[32m\"mousedown.select2.\"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m.\u001b[39mid)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mposition\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){b\u001b[33m.\u001b[39mfind(\u001b[32m\".selection\"\u001b[39m)\u001b[33m.\u001b[39mappend(a)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdestroy\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_detachCloseHandler(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainer)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mupdate\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(\u001b[32m\"The `update` method must be defined in child classes.\"\u001b[39m)}\u001b[33m,\u001b[39md})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/selection/single\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./base\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../keys\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mfunction\u001b[39m e(){e\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39marguments)}\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(e\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mrender\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-selection--single\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mhtml(\u001b[32m'<span class=\"select2-selection__rendered\"></span><span class=\"select2-selection__arrow\" role=\"presentation\"><b role=\"presentation\"></b></span>'\u001b[39m)\u001b[33m,\u001b[39ma}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39me\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mbind\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39marguments)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m+\u001b[39m\u001b[32m\"-container\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"id\"\u001b[39m\u001b[33m,\u001b[39md)\u001b[33m.\u001b[39mattr(\u001b[32m\"role\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"textbox\"\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-readonly\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-labelledby\"\u001b[39m\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"mousedown\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[35m1\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mwhich\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mtrigger(\u001b[32m\"toggle\"\u001b[39m\u001b[33m,\u001b[39m{originalEvent\u001b[33m:\u001b[39ma})})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"blur\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b){a\u001b[33m.\u001b[39misOpen()\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfocus()})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mclear\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mempty()\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"title\"\u001b[39m)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdisplay\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"templateSelection\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"escapeMarkup\"\u001b[39m)(c(a\u001b[33m,\u001b[39mb))}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mselectionContainer\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m a(\u001b[32m\"<span></span>\"\u001b[39m)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mupdate\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(\u001b[35m0\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mlength)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclear()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdisplay(b\u001b[33m,\u001b[39mc)\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39mempty()\u001b[33m.\u001b[39mappend(d)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mattr(\u001b[32m\"title\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mtitle\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mtext)}\u001b[33m,\u001b[39me})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/selection/multiple\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./base\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(a\u001b[33m,\u001b[39mb){d\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39marguments)}\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(d\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39md\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mrender\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-selection--multiple\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mhtml(\u001b[32m'<ul class=\"select2-selection__rendered\"></ul>'\u001b[39m)\u001b[33m,\u001b[39ma}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39me){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39md\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mbind\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39marguments)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"click\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){f\u001b[33m.\u001b[39mtrigger(\u001b[32m\"toggle\"\u001b[39m\u001b[33m,\u001b[39m{originalEvent\u001b[33m:\u001b[39ma})})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"click\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-selection__choice__remove\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mf\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"disabled\"\u001b[39m)){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mparent()\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(e[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39mtrigger(\u001b[32m\"unselect\"\u001b[39m\u001b[33m,\u001b[39m{originalEvent\u001b[33m:\u001b[39mb\u001b[33m,\u001b[39mdata\u001b[33m:\u001b[39mg})}})}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mclear\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mempty()\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"title\"\u001b[39m)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdisplay\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"templateSelection\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"escapeMarkup\"\u001b[39m)(c(a\u001b[33m,\u001b[39mb))}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mselectionContainer\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m a(\u001b[32m'<li class=\"select2-selection__choice\"><span class=\"select2-selection__choice__remove\" role=\"presentation\">&times;</span></li>'\u001b[39m)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mupdate\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclear()\u001b[33m,\u001b[39m\u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39mlength){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39md\u001b[33m<\u001b[39m\u001b[33ma\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39md\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma[d]\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselectionContainer()\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdisplay(e\u001b[33m,\u001b[39mf)\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39mappend(g)\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mattr(\u001b[32m\"title\"\u001b[39m\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mtitle\u001b[33m||\u001b[39me\u001b[33m.\u001b[39mtext)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(f[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m\u001b[33m,\u001b[39me)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpush(f)}\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39mappendMany(h\u001b[33m,\u001b[39mb)}}\u001b[33m,\u001b[39md})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/selection/placeholder\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"../utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m b(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mplaceholder\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mnormalizePlaceholder(c\u001b[33m.\u001b[39mget(\u001b[32m\"placeholder\"\u001b[39m))\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mnormalizePlaceholder\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m b\u001b[33m&&\u001b[39m(b\u001b[33m=\u001b[39m{id\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mtext\u001b[33m:\u001b[39mb})\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mcreatePlaceholder\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselectionContainer()\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mhtml(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdisplay(b))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-selection__placeholder\"\u001b[39m)\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-selection__choice\"\u001b[39m)\u001b[33m,\u001b[39mc}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mupdate\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[35m1\u001b[39m\u001b[33m==\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39mb[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mid\u001b[33m!=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mplaceholder\u001b[33m.\u001b[39mid\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m1\u001b[39m\u001b[33m||\u001b[39mc)\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclear()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcreatePlaceholder(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mplaceholder)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m.\u001b[39mappend(d)}\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/selection/allowClear\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../keys\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(){}\u001b[36mreturn\u001b[39m d\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mplaceholder\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"debug\"\u001b[39m)\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39merror\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39merror(\u001b[32m\"Select2: The `allowClear` option should be used in combination with the `placeholder` option.\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"mousedown\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-selection__clear\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39m_handleClear(a)})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mon(\u001b[32m\"keypress\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39m_handleKeyboardClear(a\u001b[33m,\u001b[39mb)})}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_handleClear\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"disabled\"\u001b[39m)){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__clear\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[35m0\u001b[39m\u001b[33m!==\u001b[39md\u001b[33m.\u001b[39mlength){b\u001b[33m.\u001b[39mstopPropagation()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(d[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval()\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mplaceholder\u001b[33m.\u001b[39mid)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39m{data\u001b[33m:\u001b[39me}\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"clear\"\u001b[39m\u001b[33m,\u001b[39mg)\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39mprevented)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval(f)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mh\u001b[33m<\u001b[39m\u001b[33me\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mh\u001b[33m++\u001b[39m)\u001b[36mif\u001b[39m(g\u001b[33m=\u001b[39m{data\u001b[33m:\u001b[39me[h]}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"unselect\"\u001b[39m\u001b[33m,\u001b[39mg)\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39mprevented)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval(f)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mtrigger(\u001b[32m\"change\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"toggle\"\u001b[39m\u001b[33m,\u001b[39m{})}}}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_handleKeyboardClear\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){d\u001b[33m.\u001b[39misOpen()\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39mwhich\u001b[33m!=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mDELETE\u001b[39m\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mwhich\u001b[33m!=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mBACKSPACE\u001b[39m\u001b[33m||\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_handleClear(c)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mupdate\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39md){\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__placeholder\"\u001b[39m)\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m||\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39md\u001b[33m.\u001b[39mlength)){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma(\u001b[32m'<span class=\"select2-selection__clear\">&times;</span>'\u001b[39m)\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(e[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m.\u001b[39mprepend(e)}}\u001b[33m,\u001b[39md})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/selection/search\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../keys\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){a\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)}\u001b[36mreturn\u001b[39m d\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ma(\u001b[32m'<li class=\"select2-search select2-search--inline\"><input class=\"select2-search__field\" type=\"search\" tabindex=\"-1\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"none\" spellcheck=\"false\" role=\"textbox\" aria-autocomplete=\"list\" /></li>'\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$searchContainer\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mfind(\u001b[32m\"input\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_transferTabIndex()\u001b[33m,\u001b[39md}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mon(\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){f\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mtrigger(\u001b[32m\"focus\"\u001b[39m)})\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mon(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){f\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mval(\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"aria-activedescendant\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mtrigger(\u001b[32m\"focus\"\u001b[39m)})\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mon(\u001b[32m\"enable\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){f\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mprop(\u001b[32m\"disabled\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39m_transferTabIndex()})\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mon(\u001b[32m\"disable\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){f\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mprop(\u001b[32m\"disabled\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)})\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mon(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){f\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mtrigger(\u001b[32m\"focus\"\u001b[39m)})\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mon(\u001b[32m\"results:focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){f\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-activedescendant\"\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mid)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"focusin\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-search--inline\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){f\u001b[33m.\u001b[39mtrigger(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39ma)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"focusout\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-search--inline\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){f\u001b[33m.\u001b[39m_handleBlur(a)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"keydown\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-search--inline\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(a\u001b[33m.\u001b[39mstopPropagation()\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mtrigger(\u001b[32m\"keypress\"\u001b[39m\u001b[33m,\u001b[39ma)\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39m_keyUpPrevented\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39misDefaultPrevented()\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mwhich\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mBACKSPACE\u001b[39m\u001b[33m&&\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m===\u001b[39mf\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mval()){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39m$searchContainer\u001b[33m.\u001b[39mprev(\u001b[32m\".select2-selection__choice\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(d\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(d[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39msearchRemoveChoice(e)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mpreventDefault()}}})\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mdocumentMode\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mg\u001b[33m&&\u001b[39mg\u001b[33m<=\u001b[39m\u001b[35m11\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"input.searchcheck\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-search--inline\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(h)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m f\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39moff(\u001b[32m\"input.search input.searchcheck\"\u001b[39m)\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39moff(\u001b[32m\"keyup.search\"\u001b[39m)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mon(\u001b[32m\"keyup.search input.search\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\".select2-search--inline\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(h\u001b[33m&&\u001b[39m\u001b[32m\"input\"\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mtype)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m f\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39moff(\u001b[32m\"input.search input.searchcheck\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mwhich\u001b[33m;\u001b[39mb\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mSHIFT\u001b[39m\u001b[33m&&\u001b[39mb\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mCTRL\u001b[39m\u001b[33m&&\u001b[39mb\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mALT\u001b[39m\u001b[33m&&\u001b[39mb\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mTAB\u001b[39m\u001b[33m&&\u001b[39mf\u001b[33m.\u001b[39mhandleSearch(a)})}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_transferTabIndex\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"-1\"\u001b[39m)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mcreatePlaceholder\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mattr(\u001b[32m\"placeholder\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mtext)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mupdate\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search[\u001b[35m0\u001b[39m]\u001b[33m==\u001b[39mdocument\u001b[33m.\u001b[39mactiveElement\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mattr(\u001b[32m\"placeholder\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m.\u001b[39mappend(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$searchContainer)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresizeSearch()\u001b[33m,\u001b[39mc){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mfind(\u001b[32m\"[data-select2-tag]\"\u001b[39m)\u001b[33m.\u001b[39mlength\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mfocus()\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mfocus()}}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mhandleSearch\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresizeSearch()\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_keyUpPrevented){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mval()\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"query\"\u001b[39m\u001b[33m,\u001b[39m{term\u001b[33m:\u001b[39ma})}\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_keyUpPrevented\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39msearchRemoveChoice\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"unselect\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39mb})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mval(b\u001b[33m.\u001b[39mtext)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleSearch()}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mresizeSearch\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mcss(\u001b[32m\"width\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"25px\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"\"\u001b[39m\u001b[33m!==\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mattr(\u001b[32m\"placeholder\"\u001b[39m))a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-selection__rendered\"\u001b[39m)\u001b[33m.\u001b[39minnerWidth()\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m{a\u001b[33m=\u001b[39m\u001b[35m.75\u001b[39m\u001b[33m*\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mval()\u001b[33m.\u001b[39mlength\u001b[33m+\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m+\u001b[39m\u001b[32m\"em\"\u001b[39m}\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mcss(\u001b[32m\"width\"\u001b[39m\u001b[33m,\u001b[39ma)}\u001b[33m,\u001b[39md})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/selection/eventRelay\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m b(){}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m[\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"opening\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"closing\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"select\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"selecting\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"unselect\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"unselecting\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"clear\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"clearing\"\u001b[39m]\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m[\u001b[32m\"opening\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"closing\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"selecting\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"unselecting\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"clearing\"\u001b[39m]\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"*\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mif\u001b[39m(\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39minArray(b\u001b[33m,\u001b[39mf)){c\u001b[33m=\u001b[39mc\u001b[33m||\u001b[39m{}\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39m\u001b[33mEvent\u001b[39m(\u001b[32m\"select2:\"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m,\u001b[39m{params\u001b[33m:\u001b[39mc})\u001b[33m;\u001b[39me\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mtrigger(d)\u001b[33m,\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39minArray(b\u001b[33m,\u001b[39mg)\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39mprevented\u001b[33m=\u001b[39md\u001b[33m.\u001b[39misDefaultPrevented())}})}\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/translation\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"require\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfunction\u001b[39m c(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdict\u001b[33m=\u001b[39ma\u001b[33m||\u001b[39m{}}\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mall\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdict}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mget\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdict[a]}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mextend\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdict\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mall()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdict)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m_cache\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mloadPath\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m(a \u001b[36min\u001b[39m c\u001b[33m.\u001b[39m_cache)){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mb(a)\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39m_cache[a]\u001b[33m=\u001b[39md}\u001b[36mreturn\u001b[39m \u001b[36mnew\u001b[39m c(c\u001b[33m.\u001b[39m_cache[a])}\u001b[33m,\u001b[39mc})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/diacritics\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m{\u001b[32m\"Ⓐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ａ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"À\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Á\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Â\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ầ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ấ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ã\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ā\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ă\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ằ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ắ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ä\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ả\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Å\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǎ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ạ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ậ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ặ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ą\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⱥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"A\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꜳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AA\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Æ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AE\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AE\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AE\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꜵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AO\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꜷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AU\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꜹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AV\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꜻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AV\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꜽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"AY\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"B\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｂ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"B\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"B\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"B\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"B\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƀ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"B\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"B\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"B\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓒ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ć\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ĉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ċ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Č\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ç\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƈ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȼ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꜿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"C\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｄ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ď\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Đ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƌ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝺ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"D\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"DZ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǆ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"DZ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǲ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Dz\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Dz\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓔ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"È\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"É\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ê\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ề\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ế\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ễ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ể\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ē\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ĕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ė\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ë\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ě\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ệ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ę\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"E\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"F\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｆ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"F\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"F\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƒ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"F\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝼ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"F\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ĝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ğ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ġ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ģ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɠ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ᵹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"G\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｈ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ĥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ħ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⱨ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⱶ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"H\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓘ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ì\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Í\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Î\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ĩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ī\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ĭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"İ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ï\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḯ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ị\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Į\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɨ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"I\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"J\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｊ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"J\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ĵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"J\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"J\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḱ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ķ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⱪ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"K\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｌ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŀ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ĺ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ľ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ļ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ł\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⱡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"L\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"LJ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǈ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Lj\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓜ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"M\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"M\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ḿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"M\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"M\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"M\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɱ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"M\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɯ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"M\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｎ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ń\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ñ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ň\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ņ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƞ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɲ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"N\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǌ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"NJ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Nj\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓞ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ò\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ó\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ô\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ồ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ố\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ổ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Õ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ō\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȯ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȱ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ö\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ő\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǒ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ơ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ờ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ớ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ở\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ợ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ọ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ộ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ø\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɔ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"OI\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"OO\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"OU\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ᵽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"P\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓠ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｒ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ř\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"R\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓢ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẞ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ś\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Š\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ș\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ş\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"S\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｔ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ť\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ț\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ţ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṱ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṯ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ʈ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⱦ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꞇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"T\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꜩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"TZ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓤ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ù\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ú\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Û\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ũ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ū\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ü\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǜ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǘ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ủ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ů\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ű\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ǔ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ư\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ừ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ứ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ữ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ử\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ự\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ụ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ų\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ʉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"U\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"V\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"V\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"V\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ṿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"V\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ʋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"V\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"V\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ʌ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"V\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"VY\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓦ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⱳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"W\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"X\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｘ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"X\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"X\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"X\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓨ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ý\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ŷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ÿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƴ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ỿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⓩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ｚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ź\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ż\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ž\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ẕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ƶ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ȥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ɀ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ⱬ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ꝣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ａ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"à\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"á\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"â\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ầ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ấ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ã\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ā\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ă\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ằ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ắ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ä\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ả\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"å\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǎ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ạ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ậ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ặ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ą\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⱥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꜳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"aa\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"æ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ae\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ae\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ae\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꜵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ao\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꜷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"au\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꜹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"av\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꜻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"av\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꜽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ay\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"b\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｂ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"b\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"b\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"b\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"b\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƀ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"b\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"b\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"b\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓒ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ć\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ĉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ċ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"č\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ç\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƈ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȼ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꜿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ↄ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"c\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｄ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ď\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"đ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƌ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝺ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"d\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"dz\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǆ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"dz\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓔ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"è\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"é\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ê\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ề\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ế\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ễ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ể\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ē\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ĕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ė\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ë\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ě\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ệ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ę\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"e\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"f\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｆ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"f\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"f\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƒ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"f\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝼ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"f\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ĝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ğ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ġ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ģ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɠ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ᵹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"g\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｈ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ĥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ħ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⱨ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⱶ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"h\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"hv\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓘ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ì\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"í\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"î\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ĩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ī\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ĭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ï\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḯ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ị\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"į\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɨ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ı\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"i\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"j\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｊ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"j\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ĵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"j\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǰ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"j\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"j\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḱ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ķ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⱪ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"k\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｌ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŀ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ĺ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ľ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ļ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ſ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ł\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⱡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"l\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"lj\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓜ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"m\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"m\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ḿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"m\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"m\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"m\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɱ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"m\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɯ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"m\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｎ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ń\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ñ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ň\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ņ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƞ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɲ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"n\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǌ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"nj\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓞ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ò\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ó\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ô\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ồ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ố\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ổ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"õ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ō\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȯ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȱ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ö\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ő\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǒ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ơ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ờ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ớ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ở\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ợ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ọ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ộ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ø\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɔ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"o\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"oi\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ou\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"oo\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ᵽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓠ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"q\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｒ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ř\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"r\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓢ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ß\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ś\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŝ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"š\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ș\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ş\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẛ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"s\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｔ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṫ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ť\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ț\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ţ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṱ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṯ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ʈ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⱦ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꞇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"t\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꜩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"tz\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓤ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ù\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ú\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"û\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ũ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ū\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṻ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŭ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ü\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǜ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǘ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ủ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ů\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ű\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ǔ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ư\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ừ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ứ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ữ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ử\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ự\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ụ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ų\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ʉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"u\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"v\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｖ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"v\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṽ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"v\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ṿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"v\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ʋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"v\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝟ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"v\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ʌ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"v\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝡ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"vy\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓦ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｗ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẁ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẃ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẇ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẅ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẘ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẉ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⱳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"w\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓧ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"x\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｘ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"x\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"x\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẍ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"x\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓨ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ý\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ŷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỹ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȳ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ÿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỷ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẙ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỵ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƴ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɏ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ỿ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"y\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⓩ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ｚ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ź\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẑ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ż\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ž\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẓ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ẕ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ƶ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ȥ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ɀ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ⱬ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ꝣ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"z\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ά\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Α\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Έ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Ε\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ή\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Η\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ί\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Ι\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ϊ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Ι\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ό\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Ο\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ύ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Υ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ϋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Υ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Ώ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"Ω\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ά\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"α\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"έ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ε\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ή\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"η\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ί\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ι\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ϊ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ι\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ΐ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ι\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ό\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ο\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ύ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"υ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ϋ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"υ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ΰ\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"υ\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ω\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"ω\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"ς\"\u001b[39m\u001b[33m:\u001b[39m\u001b[32m\"σ\"\u001b[39m}})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/base\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"../utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m b(a\u001b[33m,\u001b[39mc){b\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)}\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(b\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39m\u001b[33mObservable\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mcurrent\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(\u001b[32m\"The `current` method must be defined in child classes.\"\u001b[39m)}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mquery\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(\u001b[32m\"The `query` method must be defined in child classes.\"\u001b[39m)}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdestroy\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mgenerateResultId\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mid\u001b[33m+\u001b[39m\u001b[32m\"-result-\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m d\u001b[33m+=\u001b[39ma\u001b[33m.\u001b[39mgenerateChars(\u001b[35m4\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39mid\u001b[33m?\u001b[39md\u001b[33m+=\u001b[39m\u001b[32m\"-\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39mid\u001b[33m.\u001b[39mtoString()\u001b[33m:\u001b[39md\u001b[33m+=\u001b[39m\u001b[32m\"-\"\u001b[39m\u001b[33m+\u001b[39ma\u001b[33m.\u001b[39mgenerateChars(\u001b[35m4\u001b[39m)\u001b[33m,\u001b[39md}\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/select\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"./base\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(d\u001b[33m,\u001b[39ma)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mcurrent\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mfind(\u001b[32m\":selected\"\u001b[39m)\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39mc(\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mitem(a)\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mpush(e)})\u001b[33m,\u001b[39ma(b)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mselect\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(a\u001b[33m.\u001b[39mselected\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mc(a\u001b[33m.\u001b[39melement)\u001b[33m.\u001b[39mis(\u001b[32m\"option\"\u001b[39m))\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39melement\u001b[33m.\u001b[39mselected\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[36mvoid\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mtrigger(\u001b[32m\"change\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mprop(\u001b[32m\"multiple\"\u001b[39m))\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrent(\u001b[36mfunction\u001b[39m(d){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m[]\u001b[33m;\u001b[39ma\u001b[33m=\u001b[39m[a]\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mpush\u001b[33m.\u001b[39mapply(a\u001b[33m,\u001b[39md)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mf\u001b[33m<\u001b[39m\u001b[33ma\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mf\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39ma[f]\u001b[33m.\u001b[39mid\u001b[33m;\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39minArray(g\u001b[33m,\u001b[39me)\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39mpush(g)}b\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval(e)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mtrigger(\u001b[32m\"change\"\u001b[39m)})\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m{\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval(d)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mtrigger(\u001b[32m\"change\"\u001b[39m)}}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39munselect\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mprop(\u001b[32m\"multiple\"\u001b[39m)){\u001b[36mif\u001b[39m(a\u001b[33m.\u001b[39mselected\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mc(a\u001b[33m.\u001b[39melement)\u001b[33m.\u001b[39mis(\u001b[32m\"option\"\u001b[39m))\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39melement\u001b[33m.\u001b[39mselected\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39m\u001b[36mvoid\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mtrigger(\u001b[32m\"change\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrent(\u001b[36mfunction\u001b[39m(d){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mf\u001b[33m<\u001b[39m\u001b[33md\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mf\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39md[f]\u001b[33m.\u001b[39mid\u001b[33m;\u001b[39mg\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m&&\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39minArray(g\u001b[33m,\u001b[39me)\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39mpush(g)}b\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval(e)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mtrigger(\u001b[32m\"change\"\u001b[39m)})}}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainer\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"select\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){c\u001b[33m.\u001b[39mselect(a\u001b[33m.\u001b[39mdata)})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mon(\u001b[32m\"unselect\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){c\u001b[33m.\u001b[39munselect(a\u001b[33m.\u001b[39mdata)})}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdestroy\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mfind(\u001b[32m\"*\"\u001b[39m)\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39m\u001b[33mRemoveData\u001b[39m(\u001b[36mthis\u001b[39m)})}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mquery\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mchildren()\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39mc(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mis(\u001b[32m\"option\"\u001b[39m)\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mis(\u001b[32m\"optgroup\"\u001b[39m)){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mitem(b)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mmatches(a\u001b[33m,\u001b[39mf)\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!==\u001b[39mg\u001b[33m&&\u001b[39md\u001b[33m.\u001b[39mpush(g)}})\u001b[33m,\u001b[39mb({results\u001b[33m:\u001b[39md})}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39maddOptions\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){b\u001b[33m.\u001b[39mappendMany(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m,\u001b[39ma)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39moption\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m d\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mchildren\u001b[33m?\u001b[39m(d\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"optgroup\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mlabel\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mtext)\u001b[33m:\u001b[39m(d\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"option\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39md\u001b[33m.\u001b[39mtextContent\u001b[33m?\u001b[39md\u001b[33m.\u001b[39mtextContent\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mtext\u001b[33m:\u001b[39md\u001b[33m.\u001b[39minnerText\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mtext)\u001b[33m,\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m&&\u001b[39m(d\u001b[33m.\u001b[39mvalue\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mid)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mdisabled\u001b[33m&&\u001b[39m(d\u001b[33m.\u001b[39mdisabled\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mselected\u001b[33m&&\u001b[39m(d\u001b[33m.\u001b[39mselected\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mtitle\u001b[33m&&\u001b[39m(d\u001b[33m.\u001b[39mtitle\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mtitle)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mc(d)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_normalizeItem(a)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m f\u001b[33m.\u001b[39melement\u001b[33m=\u001b[39md\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(d\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m\u001b[33m,\u001b[39mf)\u001b[33m,\u001b[39me}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mitem\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39m(d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)))\u001b[36mreturn\u001b[39m d\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(a\u001b[33m.\u001b[39mis(\u001b[32m\"option\"\u001b[39m))d\u001b[33m=\u001b[39m{id\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mval()\u001b[33m,\u001b[39mtext\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mtext()\u001b[33m,\u001b[39mdisabled\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"disabled\"\u001b[39m)\u001b[33m,\u001b[39mselected\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"selected\"\u001b[39m)\u001b[33m,\u001b[39mtitle\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"title\"\u001b[39m)}\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(a\u001b[33m.\u001b[39mis(\u001b[32m\"optgroup\"\u001b[39m)){d\u001b[33m=\u001b[39m{text\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"label\"\u001b[39m)\u001b[33m,\u001b[39mchildren\u001b[33m:\u001b[39m[]\u001b[33m,\u001b[39mtitle\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"title\"\u001b[39m)}\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mchildren(\u001b[32m\"option\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mg\u001b[33m<\u001b[39m\u001b[33me\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mg\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39mc(e[g])\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mitem(h)\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39mpush(i)}d\u001b[33m.\u001b[39mchildren\u001b[33m=\u001b[39mf}\u001b[36mreturn\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_normalizeItem(d)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39melement\u001b[33m=\u001b[39ma[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39md}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_normalizeItem\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m!==\u001b[39m\u001b[33mObject\u001b[39m(a)\u001b[33m&&\u001b[39m(a\u001b[33m=\u001b[39m{id\u001b[33m:\u001b[39ma\u001b[33m,\u001b[39mtext\u001b[33m:\u001b[39ma})\u001b[33m,\u001b[39ma\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39m{text\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m}\u001b[33m,\u001b[39ma)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m{selected\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mdisabled\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m}\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mid\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m.\u001b[39mtoString())\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ma\u001b[33m.\u001b[39mtext\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mtext\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mtext\u001b[33m.\u001b[39mtoString())\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ma\u001b[33m.\u001b[39m_resultId\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainer\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39m_resultId\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgenerateResultId(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainer\u001b[33m,\u001b[39ma))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39ma)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mmatches\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"matcher\"\u001b[39m)(a\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39md})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/array\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"./select\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mget(\u001b[32m\"data\"\u001b[39m)\u001b[33m||\u001b[39m[]\u001b[33m;\u001b[39md\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39maddOptions(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mconvertToOptions(c))}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(d\u001b[33m,\u001b[39ma)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mselect\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mfind(\u001b[32m\"option\"\u001b[39m)\u001b[33m.\u001b[39mfilter(\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mvalue\u001b[33m==\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m.\u001b[39mtoString()})\u001b[33m;\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m(b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moption(a)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39maddOptions(b))\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mselect\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39ma)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mconvertToOptions\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m d(a){\u001b[36mreturn\u001b[39m \u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m c(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mval()\u001b[33m==\u001b[39ma\u001b[33m.\u001b[39mid}}\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mfind(\u001b[32m\"option\"\u001b[39m)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mmap(\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m e\u001b[33m.\u001b[39mitem(c(\u001b[36mthis\u001b[39m))\u001b[33m.\u001b[39mid})\u001b[33m.\u001b[39mget()\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mi\u001b[33m<\u001b[39m\u001b[33ma\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mi\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m j\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_normalizeItem(a[i])\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(c\u001b[33m.\u001b[39minArray(j\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39mg)\u001b[33m>=\u001b[39m\u001b[35m0\u001b[39m){\u001b[36mvar\u001b[39m k\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mfilter(d(j))\u001b[33m,\u001b[39ml\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mitem(k)\u001b[33m,\u001b[39mm\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39mj\u001b[33m,\u001b[39ml)\u001b[33m,\u001b[39mn\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moption(m)\u001b[33m;\u001b[39mk\u001b[33m.\u001b[39mreplaceWith(n)}\u001b[36melse\u001b[39m{\u001b[36mvar\u001b[39m o\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moption(j)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(j\u001b[33m.\u001b[39mchildren){\u001b[36mvar\u001b[39m p\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mconvertToOptions(j\u001b[33m.\u001b[39mchildren)\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mappendMany(o\u001b[33m,\u001b[39mp)}h\u001b[33m.\u001b[39mpush(o)}}\u001b[36mreturn\u001b[39m h}\u001b[33m,\u001b[39md})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/ajax\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"./array\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39majaxOptions\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_applyDefaults(b\u001b[33m.\u001b[39mget(\u001b[32m\"ajax\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39majaxOptions\u001b[33m.\u001b[39mprocessResults\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprocessResults\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39majaxOptions\u001b[33m.\u001b[39mprocessResults)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39mb)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(d\u001b[33m,\u001b[39ma)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_applyDefaults\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m{data\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39m{q\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mterm})}\u001b[33m,\u001b[39mtransport\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39majax(a)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m e\u001b[33m.\u001b[39mthen(b)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mfail(d)\u001b[33m,\u001b[39me}}\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mprocessResults\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mquery\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfunction\u001b[39m d(){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mtransport(f\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(d){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mprocessResults(d\u001b[33m,\u001b[39ma)\u001b[33m;\u001b[39me\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"debug\"\u001b[39m)\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39merror\u001b[33m&&\u001b[39m(f\u001b[33m&&\u001b[39mf\u001b[33m.\u001b[39mresults\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39misArray(f\u001b[33m.\u001b[39mresults)\u001b[33m||\u001b[39mconsole\u001b[33m.\u001b[39merror(\u001b[32m\"Select2: The AJAX results did not return an array in the `results` key of the response.\"\u001b[39m))\u001b[33m,\u001b[39mb(f)}\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[32m\"status\"\u001b[39m\u001b[36min\u001b[39m d\u001b[33m&&\u001b[39m(\u001b[35m0\u001b[39m\u001b[33m===\u001b[39md\u001b[33m.\u001b[39mstatus\u001b[33m||\u001b[39m\u001b[32m\"0\"\u001b[39m\u001b[33m===\u001b[39md\u001b[33m.\u001b[39mstatus)\u001b[33m||\u001b[39me\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:message\"\u001b[39m\u001b[33m,\u001b[39m{message\u001b[33m:\u001b[39m\u001b[32m\"errorLoading\"\u001b[39m})})\u001b[33m;\u001b[39me\u001b[33m.\u001b[39m_request\u001b[33m=\u001b[39md}\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_request\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39misFunction(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_request\u001b[33m.\u001b[39mabort)\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_request\u001b[33m.\u001b[39mabort()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_request\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mextend({type\u001b[33m:\u001b[39m\u001b[32m\"GET\"\u001b[39m}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39majaxOptions)\u001b[33m;\u001b[39m\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m f\u001b[33m.\u001b[39murl\u001b[33m&&\u001b[39m(f\u001b[33m.\u001b[39murl\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39murl\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m,\u001b[39ma))\u001b[33m,\u001b[39m\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m f\u001b[33m.\u001b[39mdata\u001b[33m&&\u001b[39m(f\u001b[33m.\u001b[39mdata\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m,\u001b[39ma))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39majaxOptions\u001b[33m.\u001b[39mdelay\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ma\u001b[33m.\u001b[39mterm\u001b[33m?\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_queryTimeout\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mclearTimeout(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_queryTimeout)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_queryTimeout\u001b[33m=\u001b[39mwindow\u001b[33m.\u001b[39msetTimeout(d\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39majaxOptions\u001b[33m.\u001b[39mdelay))\u001b[33m:\u001b[39md()}\u001b[33m,\u001b[39md})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/tags\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m b(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mget(\u001b[32m\"tags\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mget(\u001b[32m\"createTag\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39mf\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcreateTag\u001b[33m=\u001b[39mf)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mget(\u001b[32m\"insertTag\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39mg\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minsertTag\u001b[33m=\u001b[39mg)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39misArray(e))\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mh\u001b[33m<\u001b[39m\u001b[33me\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mh\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m i\u001b[33m=\u001b[39me[h]\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_normalizeItem(i)\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moption(j)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mappend(k)}}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mquery\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mfunction\u001b[39m d(a\u001b[33m,\u001b[39mf){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mresults\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mh\u001b[33m<\u001b[39m\u001b[33mg\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mh\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m i\u001b[33m=\u001b[39mg[h]\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mi\u001b[33m.\u001b[39mchildren\u001b[33m&&\u001b[39m\u001b[33m!\u001b[39md({results\u001b[33m:\u001b[39mi\u001b[33m.\u001b[39mchildren}\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m((i\u001b[33m.\u001b[39mtext\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m===\u001b[39m(b\u001b[33m.\u001b[39mterm\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m||\u001b[39mj)\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39mf\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mdata\u001b[33m=\u001b[39mg\u001b[33m,\u001b[39m\u001b[36mvoid\u001b[39m c(a))}\u001b[36mif\u001b[39m(f)\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m k\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mcreateTag(b)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mk){\u001b[36mvar\u001b[39m l\u001b[33m=\u001b[39me\u001b[33m.\u001b[39moption(k)\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mattr(\u001b[32m\"data-select2-tag\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39maddOptions([l])\u001b[33m,\u001b[39me\u001b[33m.\u001b[39minsertTag(g\u001b[33m,\u001b[39mk)}a\u001b[33m.\u001b[39mresults\u001b[33m=\u001b[39mg\u001b[33m,\u001b[39mc(a)}\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_removeOldTags()\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mb\u001b[33m.\u001b[39mterm\u001b[33m||\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mb\u001b[33m.\u001b[39mpage)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m a\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39md)}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mcreateTag\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mtrim(c\u001b[33m.\u001b[39mterm)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m===\u001b[39md\u001b[33m?\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m:\u001b[39m{id\u001b[33m:\u001b[39md\u001b[33m,\u001b[39mtext\u001b[33m:\u001b[39md}}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39minsertTag\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){b\u001b[33m.\u001b[39munshift(c)}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_removeOldTags\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_lastTag\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mfind(\u001b[32m\"option[data-select2-tag]\"\u001b[39m)\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselected\u001b[33m||\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mremove()})}\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/tokenizer\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m b(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mget(\u001b[32m\"tokenizer\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39md\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtokenizer\u001b[33m=\u001b[39md)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){a\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mdropdown\u001b[33m.\u001b[39m$search\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39m$search\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39mfind(\u001b[32m\".select2-search__field\"\u001b[39m)}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mquery\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mfunction\u001b[39m e(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39m_normalizeItem(b)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mg\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mfind(\u001b[32m\"option\"\u001b[39m)\u001b[33m.\u001b[39mfilter(\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m a(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mval()\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39mid})\u001b[33m.\u001b[39mlength){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39moption(c)\u001b[33m;\u001b[39md\u001b[33m.\u001b[39mattr(\u001b[32m\"data-select2-tag\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39m_removeOldTags()\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39maddOptions([d])}f(c)}\u001b[36mfunction\u001b[39m f(a){g\u001b[33m.\u001b[39mtrigger(\u001b[32m\"select\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39ma})}\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39mterm\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mterm\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtokenizer(c\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m,\u001b[39me)\u001b[33m;\u001b[39mh\u001b[33m.\u001b[39mterm\u001b[33m!==\u001b[39mc\u001b[33m.\u001b[39mterm\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mval(h\u001b[33m.\u001b[39mterm)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mfocus())\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mterm\u001b[33m=\u001b[39mh\u001b[33m.\u001b[39mterm)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mtokenizer\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mget(\u001b[32m\"tokenSeparators\"\u001b[39m)\u001b[33m||\u001b[39m[]\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mterm\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcreateTag\u001b[33m||\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m{id\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mterm\u001b[33m,\u001b[39mtext\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mterm}}\u001b[33m;\u001b[39mh\u001b[33m<\u001b[39m\u001b[33mg\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m){\u001b[36mvar\u001b[39m j\u001b[33m=\u001b[39mg[h]\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39minArray(j\u001b[33m,\u001b[39mf)){\u001b[36mvar\u001b[39m k\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39msubstr(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mh)\u001b[33m,\u001b[39ml\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39m{term\u001b[33m:\u001b[39mk})\u001b[33m,\u001b[39mm\u001b[33m=\u001b[39mi(l)\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mm\u001b[33m?\u001b[39m(e(m)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39msubstr(h\u001b[33m+\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m:\u001b[39mh\u001b[33m++\u001b[39m}\u001b[36melse\u001b[39m h\u001b[33m++\u001b[39m}\u001b[36mreturn\u001b[39m{term\u001b[33m:\u001b[39mg}}\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/minimumInputLength\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfunction\u001b[39m a(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mminimumInputLength\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mget(\u001b[32m\"minimumInputLength\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)}\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mquery\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mterm\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mterm\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mterm\u001b[33m.\u001b[39mlength\u001b[33m<\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mminimumInputLength)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:message\"\u001b[39m\u001b[33m,\u001b[39m{message\u001b[33m:\u001b[39m\u001b[32m\"inputTooShort\"\u001b[39m\u001b[33m,\u001b[39margs\u001b[33m:\u001b[39m{minimum\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mminimumInputLength\u001b[33m,\u001b[39minput\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mterm\u001b[33m,\u001b[39mparams\u001b[33m:\u001b[39mb}})\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)}\u001b[33m,\u001b[39ma})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/maximumInputLength\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfunction\u001b[39m a(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmaximumInputLength\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mget(\u001b[32m\"maximumInputLength\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)}\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mquery\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mterm\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mterm\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmaximumInputLength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mterm\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmaximumInputLength)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:message\"\u001b[39m\u001b[33m,\u001b[39m{message\u001b[33m:\u001b[39m\u001b[32m\"inputTooLong\"\u001b[39m\u001b[33m,\u001b[39margs\u001b[33m:\u001b[39m{maximum\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmaximumInputLength\u001b[33m,\u001b[39minput\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mterm\u001b[33m,\u001b[39mparams\u001b[33m:\u001b[39mb}})\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)}\u001b[33m,\u001b[39ma})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/data/maximumSelectionLength\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfunction\u001b[39m a(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmaximumSelectionLength\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mget(\u001b[32m\"maximumSelectionLength\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)}\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mquery\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrent(\u001b[36mfunction\u001b[39m(e){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39me\u001b[33m?\u001b[39me\u001b[33m.\u001b[39mlength\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(d\u001b[33m.\u001b[39mmaximumSelectionLength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39mf\u001b[33m>=\u001b[39md\u001b[33m.\u001b[39mmaximumSelectionLength)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m d\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:message\"\u001b[39m\u001b[33m,\u001b[39m{message\u001b[33m:\u001b[39m\u001b[32m\"maximumSelected\"\u001b[39m\u001b[33m,\u001b[39margs\u001b[33m:\u001b[39m{maximum\u001b[33m:\u001b[39md\u001b[33m.\u001b[39mmaximumSelectionLength}})\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(d\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)})}\u001b[33m,\u001b[39ma})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/dropdown\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfunction\u001b[39m c(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(c\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mObservable\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma(\u001b[32m'<span class=\"select2-dropdown\"><span class=\"select2-results\"></span></span>'\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mattr(\u001b[32m\"dir\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"dir\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mposition\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdestroy\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m.\u001b[39mremove()}\u001b[33m,\u001b[39mc})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/dropdown/search\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfunction\u001b[39m c(){}\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma(\u001b[32m'<span class=\"select2-search select2-search--dropdown\"><input class=\"select2-search__field\" type=\"search\" tabindex=\"-1\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"none\" spellcheck=\"false\" role=\"textbox\" /></span>'\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$searchContainer\u001b[33m=\u001b[39md\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mfind(\u001b[32m\"input\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprepend(d)\u001b[33m,\u001b[39mc}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mon(\u001b[32m\"keydown\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39mtrigger(\u001b[32m\"keypress\"\u001b[39m\u001b[33m,\u001b[39ma)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m_keyUpPrevented\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39misDefaultPrevented()})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mon(\u001b[32m\"input\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b){a(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39moff(\u001b[32m\"keyup\"\u001b[39m)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mon(\u001b[32m\"keyup input\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39mhandleSearch(a)})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){e\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mfocus()\u001b[33m,\u001b[39mwindow\u001b[33m.\u001b[39msetTimeout(\u001b[36mfunction\u001b[39m(){e\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mfocus()}\u001b[33m,\u001b[39m\u001b[35m0\u001b[39m)})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){e\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mval(\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mblur()})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){c\u001b[33m.\u001b[39misOpen()\u001b[33m||\u001b[39me\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mfocus()})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"results:all\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ma\u001b[33m.\u001b[39mquery\u001b[33m.\u001b[39mterm\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mquery\u001b[33m.\u001b[39mterm){e\u001b[33m.\u001b[39mshowSearch(a)\u001b[33m?\u001b[39me\u001b[33m.\u001b[39m$searchContainer\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-search--hide\"\u001b[39m)\u001b[33m:\u001b[39me\u001b[33m.\u001b[39m$searchContainer\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-search--hide\"\u001b[39m)}})}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mhandleSearch\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_keyUpPrevented){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$search\u001b[33m.\u001b[39mval()\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"query\"\u001b[39m\u001b[33m,\u001b[39m{term\u001b[33m:\u001b[39mb})}\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_keyUpPrevented\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mshowSearch\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mc})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/dropdown/hidePlaceholder\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfunction\u001b[39m a(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mplaceholder\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mnormalizePlaceholder(c\u001b[33m.\u001b[39mget(\u001b[32m\"placeholder\"\u001b[39m))\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)}\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mappend\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){b\u001b[33m.\u001b[39mresults\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mremovePlaceholder(b\u001b[33m.\u001b[39mresults)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mnormalizePlaceholder\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m b\u001b[33m&&\u001b[39m(b\u001b[33m=\u001b[39m{id\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mtext\u001b[33m:\u001b[39mb})\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mremovePlaceholder\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mslice(\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39md\u001b[33m>=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39md\u001b[33m--\u001b[39m){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mb[d]\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mplaceholder\u001b[33m.\u001b[39mid\u001b[33m===\u001b[39me\u001b[33m.\u001b[39mid\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39msplice(d\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m)}\u001b[36mreturn\u001b[39m c}\u001b[33m,\u001b[39ma})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/dropdown/infiniteScroll\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m b(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlastParams\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$loadingMore\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcreateLoadingMore()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mloading\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mappend\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$loadingMore\u001b[33m.\u001b[39mremove()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mloading\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mshowLoadingMore(b)\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mappend(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$loadingMore)}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"query\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39mlastParams\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mloading\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mon(\u001b[32m\"query:append\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39mlastParams\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mloading\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mon(\u001b[32m\"scroll\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mcontains(document\u001b[33m.\u001b[39mdocumentElement\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m$loadingMore[\u001b[35m0\u001b[39m])\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39me\u001b[33m.\u001b[39mloading\u001b[33m&&\u001b[39mb){e\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39moffset()\u001b[33m.\u001b[39mtop\u001b[33m+\u001b[39me\u001b[33m.\u001b[39m$results\u001b[33m.\u001b[39mouterHeight(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m+\u001b[39m\u001b[35m50\u001b[39m\u001b[33m>=\u001b[39me\u001b[33m.\u001b[39m$loadingMore\u001b[33m.\u001b[39moffset()\u001b[33m.\u001b[39mtop\u001b[33m+\u001b[39me\u001b[33m.\u001b[39m$loadingMore\u001b[33m.\u001b[39mouterHeight(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39mloadMore()}})}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mloadMore\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mloading\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39m{page\u001b[33m:\u001b[39m\u001b[35m1\u001b[39m}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlastParams)\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mpage\u001b[33m++\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"query:append\"\u001b[39m\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mshowLoadingMore\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mpagination\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mpagination\u001b[33m.\u001b[39mmore}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mcreateLoadingMore\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma(\u001b[32m'<li class=\"select2-results__option select2-results__option--load-more\"role=\"treeitem\" aria-disabled=\"true\"></li>'\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"translations\"\u001b[39m)\u001b[33m.\u001b[39mget(\u001b[32m\"loadingMore\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mhtml(c(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlastParams))\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/dropdown/attachBody\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"../utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mfunction\u001b[39m c(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownParent\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mget(\u001b[32m\"dropdownParent\"\u001b[39m)\u001b[33m||\u001b[39ma(document\u001b[33m.\u001b[39mbody)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)}\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mon(\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m_showDropdown()\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m_attachPositioningHandler(b)\u001b[33m,\u001b[39me\u001b[33m||\u001b[39m(e\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mon(\u001b[32m\"results:all\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m_positionDropdown()\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m_resizeDropdown()})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mon(\u001b[32m\"results:append\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m_positionDropdown()\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m_resizeDropdown()}))})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mon(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){d\u001b[33m.\u001b[39m_hideDropdown()\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m_detachPositioningHandler(b)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownContainer\u001b[33m.\u001b[39mon(\u001b[32m\"mousedown\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39mstopPropagation()})}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdestroy\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownContainer\u001b[33m.\u001b[39mremove()}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mposition\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){b\u001b[33m.\u001b[39mattr(\u001b[32m\"class\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mattr(\u001b[32m\"class\"\u001b[39m))\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-container--open\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcss({position\u001b[33m:\u001b[39m\u001b[32m\"absolute\"\u001b[39m\u001b[33m,\u001b[39mtop\u001b[33m:\u001b[39m\u001b[33m-\u001b[39m\u001b[35m999999\u001b[39m})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m=\u001b[39mc}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ma(\u001b[32m\"<span></span>\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mappend(d)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownContainer\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39mc}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_hideDropdown\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownContainer\u001b[33m.\u001b[39mdetach()}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_attachPositioningHandler\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[32m\"scroll.select2.\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[32m\"resize.select2.\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[32m\"orientationchange.select2.\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mparents()\u001b[33m.\u001b[39mfilter(b\u001b[33m.\u001b[39mhasScroll)\u001b[33m;\u001b[39mi\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"select2-scroll-position\"\u001b[39m\u001b[33m,\u001b[39m{x\u001b[33m:\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mscrollLeft()\u001b[33m,\u001b[39my\u001b[33m:\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mscrollTop()})})\u001b[33m,\u001b[39mi\u001b[33m.\u001b[39mon(f\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"select2-scroll-position\"\u001b[39m)\u001b[33m;\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mscrollTop(d\u001b[33m.\u001b[39my)})\u001b[33m,\u001b[39ma(window)\u001b[33m.\u001b[39mon(f\u001b[33m+\u001b[39m\u001b[32m\" \"\u001b[39m\u001b[33m+\u001b[39mg\u001b[33m+\u001b[39m\u001b[32m\" \"\u001b[39m\u001b[33m+\u001b[39mh\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){e\u001b[33m.\u001b[39m_positionDropdown()\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m_resizeDropdown()})}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_detachPositioningHandler\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[32m\"scroll.select2.\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[32m\"resize.select2.\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[32m\"orientationchange.select2.\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mid\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mparents()\u001b[33m.\u001b[39mfilter(b\u001b[33m.\u001b[39mhasScroll)\u001b[33m.\u001b[39moff(e)\u001b[33m,\u001b[39ma(window)\u001b[33m.\u001b[39moff(e\u001b[33m+\u001b[39m\u001b[32m\" \"\u001b[39m\u001b[33m+\u001b[39mf\u001b[33m+\u001b[39m\u001b[32m\" \"\u001b[39m\u001b[33m+\u001b[39mg)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_positionDropdown\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma(window)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m.\u001b[39mhasClass(\u001b[32m\"select2-dropdown--above\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m.\u001b[39mhasClass(\u001b[32m\"select2-dropdown--below\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39moffset()\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39mbottom\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mtop\u001b[33m+\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mouterHeight(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39m{height\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mouterHeight(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)}\u001b[33m;\u001b[39mg\u001b[33m.\u001b[39mtop\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mtop\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39mbottom\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mtop\u001b[33m+\u001b[39mg\u001b[33m.\u001b[39mheight\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39m{height\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m.\u001b[39mouterHeight(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)}\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m{top\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mscrollTop()\u001b[33m,\u001b[39mbottom\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mscrollTop()\u001b[33m+\u001b[39mb\u001b[33m.\u001b[39mheight()}\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39mi\u001b[33m.\u001b[39mtop\u001b[33m<\u001b[39m\u001b[33mf\u001b[39m\u001b[33m.\u001b[39mtop\u001b[33m-\u001b[39mh\u001b[33m.\u001b[39mheight\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39mi\u001b[33m.\u001b[39mbottom\u001b[33m>\u001b[39mf\u001b[33m.\u001b[39mbottom\u001b[33m+\u001b[39mh\u001b[33m.\u001b[39mheight\u001b[33m,\u001b[39ml\u001b[33m=\u001b[39m{left\u001b[33m:\u001b[39mf\u001b[33m.\u001b[39mleft\u001b[33m,\u001b[39mtop\u001b[33m:\u001b[39mg\u001b[33m.\u001b[39mbottom}\u001b[33m,\u001b[39mm\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownParent\u001b[33m;\u001b[39m\u001b[32m\"static\"\u001b[39m\u001b[33m===\u001b[39mm\u001b[33m.\u001b[39mcss(\u001b[32m\"position\"\u001b[39m)\u001b[33m&&\u001b[39m(m\u001b[33m=\u001b[39mm\u001b[33m.\u001b[39moffsetParent())\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m n\u001b[33m=\u001b[39mm\u001b[33m.\u001b[39moffset()\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mtop\u001b[33m-=\u001b[39mn\u001b[33m.\u001b[39mtop\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mleft\u001b[33m-=\u001b[39mn\u001b[33m.\u001b[39mleft\u001b[33m,\u001b[39mc\u001b[33m||\u001b[39md\u001b[33m||\u001b[39m(e\u001b[33m=\u001b[39m\u001b[32m\"below\"\u001b[39m)\u001b[33m,\u001b[39mk\u001b[33m||\u001b[39m\u001b[33m!\u001b[39mj\u001b[33m||\u001b[39mc\u001b[33m?\u001b[39m\u001b[33m!\u001b[39mj\u001b[33m&&\u001b[39mk\u001b[33m&&\u001b[39mc\u001b[33m&&\u001b[39m(e\u001b[33m=\u001b[39m\u001b[32m\"below\"\u001b[39m)\u001b[33m:\u001b[39me\u001b[33m=\u001b[39m\u001b[32m\"above\"\u001b[39m\u001b[33m,\u001b[39m(\u001b[32m\"above\"\u001b[39m\u001b[33m==\u001b[39me\u001b[33m||\u001b[39mc\u001b[33m&&\u001b[39m\u001b[32m\"below\"\u001b[39m\u001b[33m!==\u001b[39me)\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mtop\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39mtop\u001b[33m-\u001b[39mn\u001b[33m.\u001b[39mtop\u001b[33m-\u001b[39mh\u001b[33m.\u001b[39mheight)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39me\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-dropdown--below select2-dropdown--above\"\u001b[39m)\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-dropdown--\"\u001b[39m\u001b[33m+\u001b[39me)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-container--below select2-container--above\"\u001b[39m)\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-container--\"\u001b[39m\u001b[33m+\u001b[39me))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownContainer\u001b[33m.\u001b[39mcss(l)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_resizeDropdown\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m{width\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mouterWidth(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m+\u001b[39m\u001b[32m\"px\"\u001b[39m}\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"dropdownAutoWidth\"\u001b[39m)\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mminWidth\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mwidth\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mposition\u001b[33m=\u001b[39m\u001b[32m\"relative\"\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mwidth\u001b[33m=\u001b[39m\u001b[32m\"auto\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m.\u001b[39mcss(a)}\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_showDropdown\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownContainer\u001b[33m.\u001b[39mappendTo(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdownParent)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_positionDropdown()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_resizeDropdown()}\u001b[33m,\u001b[39mc})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/dropdown/minimumResultsForSearch\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfunction\u001b[39m a(b){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39md\u001b[33m<\u001b[39m\u001b[33mb\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39md\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mb[d]\u001b[33m;\u001b[39me\u001b[33m.\u001b[39mchildren\u001b[33m?\u001b[39mc\u001b[33m+=\u001b[39ma(e\u001b[33m.\u001b[39mchildren)\u001b[33m:\u001b[39mc\u001b[33m++\u001b[39m}\u001b[36mreturn\u001b[39m c}\u001b[36mfunction\u001b[39m b(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mminimumResultsForSearch\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mget(\u001b[32m\"minimumResultsForSearch\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mminimumResultsForSearch\u001b[33m<\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mminimumResultsForSearch\u001b[33m=\u001b[39m\u001b[35m1\u001b[39m\u001b[33m/\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mshowSearch\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m(a(c\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mresults)\u001b[33m<\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mminimumResultsForSearch)\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc)}\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/dropdown/selectOnClose\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"../utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mfunction\u001b[39m b(){}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mon(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39m_handleSelectOnClose(a)})}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_handleSelectOnClose\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mif\u001b[39m(c\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39moriginalSelect2Event){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39moriginalSelect2Event\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"select\"\u001b[39m\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m_type\u001b[33m||\u001b[39m\u001b[32m\"unselect\"\u001b[39m\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m_type)\u001b[36mreturn\u001b[39m}\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetHighlightedResults()\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m(e\u001b[33m.\u001b[39mlength\u001b[33m<\u001b[39m\u001b[35m1\u001b[39m)){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(e[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mf\u001b[33m.\u001b[39melement\u001b[33m&&\u001b[39mf\u001b[33m.\u001b[39melement\u001b[33m.\u001b[39mselected\u001b[33m||\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mf\u001b[33m.\u001b[39melement\u001b[33m&&\u001b[39mf\u001b[33m.\u001b[39mselected\u001b[33m||\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"select\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39mf})}}\u001b[33m,\u001b[39mb})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/dropdown/closeOnSelect\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfunction\u001b[39m a(){}\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mbind\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mon(\u001b[32m\"select\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39m_selectTriggered(a)})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mon(\u001b[32m\"unselect\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39m_selectTriggered(a)})}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_selectTriggered\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39moriginalEvent\u001b[33m;\u001b[39mc\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mctrlKey\u001b[33m||\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m{originalEvent\u001b[33m:\u001b[39mc\u001b[33m,\u001b[39moriginalSelect2Event\u001b[33m:\u001b[39mb})}\u001b[33m,\u001b[39ma})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/i18n/en\"\u001b[39m\u001b[33m,\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m{errorLoading\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m\u001b[32m\"The results could not be loaded.\"\u001b[39m}\u001b[33m,\u001b[39minputTooLong\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39minput\u001b[33m.\u001b[39mlength\u001b[33m-\u001b[39ma\u001b[33m.\u001b[39mmaximum\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[32m\"Please delete \"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m+\u001b[39m\u001b[32m\" character\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[35m1\u001b[39m\u001b[33m!=\u001b[39mb\u001b[33m&&\u001b[39m(c\u001b[33m+=\u001b[39m\u001b[32m\"s\"\u001b[39m)\u001b[33m,\u001b[39mc}\u001b[33m,\u001b[39minputTooShort\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m\u001b[32m\"Please enter \"\u001b[39m\u001b[33m+\u001b[39m(a\u001b[33m.\u001b[39mminimum\u001b[33m-\u001b[39ma\u001b[33m.\u001b[39minput\u001b[33m.\u001b[39mlength)\u001b[33m+\u001b[39m\u001b[32m\" or more characters\"\u001b[39m}\u001b[33m,\u001b[39mloadingMore\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m\u001b[32m\"Loading more results…\"\u001b[39m}\u001b[33m,\u001b[39mmaximumSelected\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[32m\"You can only select \"\u001b[39m\u001b[33m+\u001b[39ma\u001b[33m.\u001b[39mmaximum\u001b[33m+\u001b[39m\u001b[32m\" item\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[35m1\u001b[39m\u001b[33m!=\u001b[39ma\u001b[33m.\u001b[39mmaximum\u001b[33m&&\u001b[39m(b\u001b[33m+=\u001b[39m\u001b[32m\"s\"\u001b[39m)\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39mnoResults\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m\u001b[32m\"No results found\"\u001b[39m}\u001b[33m,\u001b[39msearching\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m\u001b[32m\"Searching…\"\u001b[39m}}})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/defaults\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"require\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./results\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./selection/single\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./selection/multiple\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./selection/placeholder\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./selection/allowClear\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./selection/search\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./selection/eventRelay\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./utils\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./translation\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./diacritics\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./data/select\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./data/array\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./data/ajax\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./data/tags\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./data/tokenizer\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./data/minimumInputLength\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./data/maximumInputLength\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./data/maximumSelectionLength\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./dropdown\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./dropdown/search\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./dropdown/hidePlaceholder\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./dropdown/infiniteScroll\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./dropdown/attachBody\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./dropdown/minimumResultsForSearch\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./dropdown/selectOnClose\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./dropdown/closeOnSelect\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./i18n/en\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mh\u001b[33m,\u001b[39mi\u001b[33m,\u001b[39mj\u001b[33m,\u001b[39mk\u001b[33m,\u001b[39ml\u001b[33m,\u001b[39mm\u001b[33m,\u001b[39mn\u001b[33m,\u001b[39mo\u001b[33m,\u001b[39mp\u001b[33m,\u001b[39mq\u001b[33m,\u001b[39mr\u001b[33m,\u001b[39ms\u001b[33m,\u001b[39mt\u001b[33m,\u001b[39mu\u001b[33m,\u001b[39mv\u001b[33m,\u001b[39mw\u001b[33m,\u001b[39mx\u001b[33m,\u001b[39my\u001b[33m,\u001b[39mz\u001b[33m,\u001b[39m\u001b[33mA\u001b[39m\u001b[33m,\u001b[39m\u001b[33mB\u001b[39m\u001b[33m,\u001b[39m\u001b[33mC\u001b[39m){\u001b[36mfunction\u001b[39m \u001b[33mD\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mreset()}\u001b[36mreturn\u001b[39m \u001b[33mD\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mapply\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(l){\u001b[36mif\u001b[39m(l\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdefaults\u001b[33m,\u001b[39ml)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ml\u001b[33m.\u001b[39mdataAdapter){\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39majax\u001b[33m?\u001b[39ml\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mo\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39mdata\u001b[33m?\u001b[39ml\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mn\u001b[33m:\u001b[39ml\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mm\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mminimumInputLength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m,\u001b[39mr))\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mmaximumInputLength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m,\u001b[39ms))\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mmaximumSelectionLength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m,\u001b[39mt))\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mtags\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m,\u001b[39mp))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ml\u001b[33m.\u001b[39mtokenSeparators\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ml\u001b[33m.\u001b[39mtokenizer\u001b[33m||\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m,\u001b[39mq))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39mquery){\u001b[36mvar\u001b[39m \u001b[33mC\u001b[39m\u001b[33m=\u001b[39mb(l\u001b[33m.\u001b[39mamdBase\u001b[33m+\u001b[39m\u001b[32m\"compat/query\"\u001b[39m)\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m,\u001b[39m\u001b[33mC\u001b[39m)}\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39minitSelection){\u001b[36mvar\u001b[39m \u001b[33mD\u001b[39m\u001b[33m=\u001b[39mb(l\u001b[33m.\u001b[39mamdBase\u001b[33m+\u001b[39m\u001b[32m\"compat/initSelection\"\u001b[39m)\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdataAdapter\u001b[33m,\u001b[39m\u001b[33mD\u001b[39m)}}\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ml\u001b[33m.\u001b[39mresultsAdapter\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mresultsAdapter\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39majax\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mresultsAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mresultsAdapter\u001b[33m,\u001b[39mx))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39mplaceholder\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mresultsAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mresultsAdapter\u001b[33m,\u001b[39mw))\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mselectOnClose\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mresultsAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mresultsAdapter\u001b[33m,\u001b[39m\u001b[33mA\u001b[39m)))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ml\u001b[33m.\u001b[39mdropdownAdapter){\u001b[36mif\u001b[39m(l\u001b[33m.\u001b[39mmultiple)l\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m=\u001b[39mu\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m{\u001b[36mvar\u001b[39m \u001b[33mE\u001b[39m\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(u\u001b[33m,\u001b[39mv)\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m=\u001b[39m\u001b[33mE\u001b[39m}\u001b[36mif\u001b[39m(\u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ml\u001b[33m.\u001b[39mminimumResultsForSearch\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m,\u001b[39mz))\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mcloseOnSelect\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m,\u001b[39m\u001b[33mB\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39mdropdownCssClass\u001b[33m||\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39mdropdownCss\u001b[33m||\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39madaptDropdownCssClass){\u001b[36mvar\u001b[39m \u001b[33mF\u001b[39m\u001b[33m=\u001b[39mb(l\u001b[33m.\u001b[39mamdBase\u001b[33m+\u001b[39m\u001b[32m\"compat/dropdownCss\"\u001b[39m)\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m,\u001b[39m\u001b[33mF\u001b[39m)}l\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mdropdownAdapter\u001b[33m,\u001b[39my)}\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ml\u001b[33m.\u001b[39mselectionAdapter){\u001b[36mif\u001b[39m(l\u001b[33m.\u001b[39mmultiple\u001b[33m?\u001b[39ml\u001b[33m.\u001b[39mselectionAdapter\u001b[33m=\u001b[39me\u001b[33m:\u001b[39ml\u001b[33m.\u001b[39mselectionAdapter\u001b[33m=\u001b[39md\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39mplaceholder\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m,\u001b[39mf))\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mallowClear\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m,\u001b[39mg))\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mmultiple\u001b[33m&&\u001b[39m(l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m,\u001b[39mh))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39mcontainerCssClass\u001b[33m||\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39mcontainerCss\u001b[33m||\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ml\u001b[33m.\u001b[39madaptContainerCssClass){\u001b[36mvar\u001b[39m \u001b[33mG\u001b[39m\u001b[33m=\u001b[39mb(l\u001b[33m.\u001b[39mamdBase\u001b[33m+\u001b[39m\u001b[32m\"compat/containerCss\"\u001b[39m)\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mselectionAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m,\u001b[39m\u001b[33mG\u001b[39m)}l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(l\u001b[33m.\u001b[39mselectionAdapter\u001b[33m,\u001b[39mi)}\u001b[36mif\u001b[39m(\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m l\u001b[33m.\u001b[39mlanguage)\u001b[36mif\u001b[39m(l\u001b[33m.\u001b[39mlanguage\u001b[33m.\u001b[39mindexOf(\u001b[32m\"-\"\u001b[39m)\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m){\u001b[36mvar\u001b[39m \u001b[33mH\u001b[39m\u001b[33m=\u001b[39ml\u001b[33m.\u001b[39mlanguage\u001b[33m.\u001b[39msplit(\u001b[32m\"-\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[33mI\u001b[39m\u001b[33m=\u001b[39m\u001b[33mH\u001b[39m[\u001b[35m0\u001b[39m]\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mlanguage\u001b[33m=\u001b[39m[l\u001b[33m.\u001b[39mlanguage\u001b[33m,\u001b[39m\u001b[33mI\u001b[39m]}\u001b[36melse\u001b[39m l\u001b[33m.\u001b[39mlanguage\u001b[33m=\u001b[39m[l\u001b[33m.\u001b[39mlanguage]\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(a\u001b[33m.\u001b[39misArray(l\u001b[33m.\u001b[39mlanguage)){\u001b[36mvar\u001b[39m \u001b[33mJ\u001b[39m\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m k\u001b[33m;\u001b[39ml\u001b[33m.\u001b[39mlanguage\u001b[33m.\u001b[39mpush(\u001b[32m\"en\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m \u001b[33mK\u001b[39m\u001b[33m=\u001b[39ml\u001b[33m.\u001b[39mlanguage\u001b[33m,\u001b[39m\u001b[33mL\u001b[39m\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[33mL\u001b[39m\u001b[33m<\u001b[39m\u001b[33mK\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m\u001b[33mL\u001b[39m\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m \u001b[33mM\u001b[39m\u001b[33m=\u001b[39m\u001b[33mK\u001b[39m[\u001b[33mL\u001b[39m]\u001b[33m,\u001b[39m\u001b[33mN\u001b[39m\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39m\u001b[36mtry\u001b[39m{\u001b[33mN\u001b[39m\u001b[33m=\u001b[39mk\u001b[33m.\u001b[39mloadPath(\u001b[33mM\u001b[39m)}\u001b[36mcatch\u001b[39m(a){\u001b[36mtry\u001b[39m{\u001b[33mM\u001b[39m\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdefaults\u001b[33m.\u001b[39mamdLanguageBase\u001b[33m+\u001b[39m\u001b[33mM\u001b[39m\u001b[33m,\u001b[39m\u001b[33mN\u001b[39m\u001b[33m=\u001b[39mk\u001b[33m.\u001b[39mloadPath(\u001b[33mM\u001b[39m)}\u001b[36mcatch\u001b[39m(a){l\u001b[33m.\u001b[39mdebug\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn(\u001b[32m'Select2: The language file for \"'\u001b[39m\u001b[33m+\u001b[39m\u001b[33mM\u001b[39m\u001b[33m+\u001b[39m\u001b[32m'\" could not be automatically loaded. A fallback will be used instead.'\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mcontinue\u001b[39m}}\u001b[33mJ\u001b[39m\u001b[33m.\u001b[39mextend(\u001b[33mN\u001b[39m)}l\u001b[33m.\u001b[39mtranslations\u001b[33m=\u001b[39m\u001b[33mJ\u001b[39m}\u001b[36melse\u001b[39m{\u001b[36mvar\u001b[39m \u001b[33mO\u001b[39m\u001b[33m=\u001b[39mk\u001b[33m.\u001b[39mloadPath(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdefaults\u001b[33m.\u001b[39mamdLanguageBase\u001b[33m+\u001b[39m\u001b[32m\"en\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[33mP\u001b[39m\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m k(l\u001b[33m.\u001b[39mlanguage)\u001b[33m;\u001b[39m\u001b[33mP\u001b[39m\u001b[33m.\u001b[39mextend(\u001b[33mO\u001b[39m)\u001b[33m,\u001b[39ml\u001b[33m.\u001b[39mtranslations\u001b[33m=\u001b[39m\u001b[33mP\u001b[39m}\u001b[36mreturn\u001b[39m l}\u001b[33m,\u001b[39m\u001b[33mD\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mreset\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfunction\u001b[39m b(a){\u001b[36mfunction\u001b[39m b(a){\u001b[36mreturn\u001b[39m l[a]\u001b[33m||\u001b[39ma}\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mreplace(\u001b[35m/[^\\u0000-\\u007E]/g\u001b[39m\u001b[33m,\u001b[39mb)}\u001b[36mfunction\u001b[39m c(d\u001b[33m,\u001b[39me){\u001b[36mif\u001b[39m(\u001b[32m\"\"\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mtrim(d\u001b[33m.\u001b[39mterm))\u001b[36mreturn\u001b[39m e\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(e\u001b[33m.\u001b[39mchildren\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39mchildren\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39me)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mchildren\u001b[33m.\u001b[39mlength\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39mg\u001b[33m>=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mg\u001b[33m--\u001b[39m){\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mc(d\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mchildren[g])\u001b[33m&&\u001b[39mf\u001b[33m.\u001b[39mchildren\u001b[33m.\u001b[39msplice(g\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m)}\u001b[36mreturn\u001b[39m f\u001b[33m.\u001b[39mchildren\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m?\u001b[39mf\u001b[33m:\u001b[39mc(d\u001b[33m,\u001b[39mf)}\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39mb(e\u001b[33m.\u001b[39mtext)\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39mb(d\u001b[33m.\u001b[39mterm)\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m h\u001b[33m.\u001b[39mindexOf(i)\u001b[33m>\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m?\u001b[39me\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m}\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdefaults\u001b[33m=\u001b[39m{amdBase\u001b[33m:\u001b[39m\u001b[32m\"./\"\u001b[39m\u001b[33m,\u001b[39mamdLanguageBase\u001b[33m:\u001b[39m\u001b[32m\"./i18n/\"\u001b[39m\u001b[33m,\u001b[39mcloseOnSelect\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mdebug\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mdropdownAutoWidth\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mescapeMarkup\u001b[33m:\u001b[39mj\u001b[33m.\u001b[39mescapeMarkup\u001b[33m,\u001b[39mlanguage\u001b[33m:\u001b[39m\u001b[33mC\u001b[39m\u001b[33m,\u001b[39mmatcher\u001b[33m:\u001b[39mc\u001b[33m,\u001b[39mminimumInputLength\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mmaximumInputLength\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mmaximumSelectionLength\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mminimumResultsForSearch\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mselectOnClose\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39msorter\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a}\u001b[33m,\u001b[39mtemplateResult\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mtext}\u001b[33m,\u001b[39mtemplateSelection\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mtext}\u001b[33m,\u001b[39mtheme\u001b[33m:\u001b[39m\u001b[32m\"default\"\u001b[39m\u001b[33m,\u001b[39mwidth\u001b[33m:\u001b[39m\u001b[32m\"resolve\"\u001b[39m}}\u001b[33m,\u001b[39m\u001b[33mD\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mset\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mcamelCase(b)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39me[d]\u001b[33m=\u001b[39mc\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39m_convertData(e)\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdefaults\u001b[33m,\u001b[39mf)}\u001b[33m,\u001b[39m\u001b[36mnew\u001b[39m \u001b[33mD\u001b[39m})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/options\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"require\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./defaults\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mfunction\u001b[39m e(b\u001b[33m,\u001b[39me){\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39me\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfromElement(e)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions)\u001b[33m,\u001b[39me\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39mis(\u001b[32m\"input\"\u001b[39m)){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mget(\u001b[32m\"amdBase\"\u001b[39m)\u001b[33m+\u001b[39m\u001b[32m\"compat/inputData\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39md\u001b[33m.\u001b[39m\u001b[33mDecorate\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdataAdapter\u001b[33m,\u001b[39mf)}}\u001b[36mreturn\u001b[39m e\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mfromElement\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m[\u001b[32m\"select2\"\u001b[39m]\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mmultiple\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mmultiple\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"multiple\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdisabled\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdisabled\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"disabled\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mlanguage\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mprop(\u001b[32m\"lang\"\u001b[39m)\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mlanguage\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"lang\"\u001b[39m)\u001b[33m.\u001b[39mtoLowerCase()\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mclosest(\u001b[32m\"[lang]\"\u001b[39m)\u001b[33m.\u001b[39mprop(\u001b[32m\"lang\"\u001b[39m)\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mlanguage\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mclosest(\u001b[32m\"[lang]\"\u001b[39m)\u001b[33m.\u001b[39mprop(\u001b[32m\"lang\"\u001b[39m)))\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdir\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mprop(\u001b[32m\"dir\"\u001b[39m)\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdir\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"dir\"\u001b[39m)\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mclosest(\u001b[32m\"[dir]\"\u001b[39m)\u001b[33m.\u001b[39mprop(\u001b[32m\"dir\"\u001b[39m)\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdir\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mclosest(\u001b[32m\"[dir]\"\u001b[39m)\u001b[33m.\u001b[39mprop(\u001b[32m\"dir\"\u001b[39m)\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdir\u001b[33m=\u001b[39m\u001b[32m\"ltr\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"disabled\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdisabled)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mprop(\u001b[32m\"multiple\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mmultiple)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"select2Tags\"\u001b[39m)\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdebug\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn(\u001b[32m'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags=\"true\"` attributes and will be removed in future versions of Select2.'\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"data\"\u001b[39m\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"select2Tags\"\u001b[39m))\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"tags\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m))\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"ajaxUrl\"\u001b[39m)\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mdebug\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn(\u001b[32m\"Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"ajax--url\"\u001b[39m\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"ajaxUrl\"\u001b[39m))\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"ajax-Url\"\u001b[39m\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"ajaxUrl\"\u001b[39m)))\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39me\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mjquery\u001b[33m&&\u001b[39m\u001b[32m\"1.\"\u001b[39m\u001b[33m==\u001b[39mb\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mjquery\u001b[33m.\u001b[39msubstr(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[35m2\u001b[39m)\u001b[33m&&\u001b[39ma[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mdataset\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39ma[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mdataset\u001b[33m,\u001b[39md\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]))\u001b[33m:\u001b[39md\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m])\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39me)\u001b[33m;\u001b[39mf\u001b[33m=\u001b[39md\u001b[33m.\u001b[39m_convertData(f)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m g \u001b[36min\u001b[39m f)b\u001b[33m.\u001b[39minArray(g\u001b[33m,\u001b[39mc)\u001b[33m>\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m||\u001b[39m(b\u001b[33m.\u001b[39misPlainObject(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions[g])\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mextend(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions[g]\u001b[33m,\u001b[39mf[g])\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions[g]\u001b[33m=\u001b[39mf[g])\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mget\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions[a]}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mset\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions[a]\u001b[33m=\u001b[39mb}\u001b[33m,\u001b[39me})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"select2/core\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./options\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./utils\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./keys\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39md){\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"select2\"\u001b[39m)\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"select2\"\u001b[39m)\u001b[33m.\u001b[39mdestroy()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mid\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_generateId(a)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39md\u001b[33m||\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m b(d\u001b[33m,\u001b[39ma)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mconstructor\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m)\u001b[33m||\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"old-tabindex\"\u001b[39m\u001b[33m,\u001b[39mf)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"-1\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"dataAdapter\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m g(a\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m h\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mrender()\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_placeContainer(h)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m i\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"selectionAdapter\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m i(a\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39mrender()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39mposition(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$selection\u001b[33m,\u001b[39mh)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m j\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"dropdownAdapter\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdropdown\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m j(a\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdropdown\u001b[33m.\u001b[39mrender()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdropdown\u001b[33m.\u001b[39mposition(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown\u001b[33m,\u001b[39mh)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m k\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"resultsAdapter\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresults\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m k(a\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresults\u001b[33m.\u001b[39mrender()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresults\u001b[33m.\u001b[39mposition(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$results\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$dropdown)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m l\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_bindAdapters()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_registerDomEvents()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_registerDataEvents()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_registerSelectionEvents()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_registerDropdownEvents()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_registerResultsEvents()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_registerEvents()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mcurrent(\u001b[36mfunction\u001b[39m(a){l\u001b[33m.\u001b[39mtrigger(\u001b[32m\"selection:update\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39ma})})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-hidden-accessible\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-hidden\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncAttributes()\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(a[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"select2\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mdata(\u001b[32m\"select2\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m)}\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39m\u001b[33mExtend\u001b[39m(e\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mObservable\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_generateId\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"id\"\u001b[39m)\u001b[33m?\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"id\"\u001b[39m)\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"name\"\u001b[39m)\u001b[33m?\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"name\"\u001b[39m)\u001b[33m+\u001b[39m\u001b[32m\"-\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39mgenerateChars(\u001b[35m2\u001b[39m)\u001b[33m:\u001b[39mc\u001b[33m.\u001b[39mgenerateChars(\u001b[35m4\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mreplace(\u001b[35m/(:|\\.|\\[|\\]|,)/g\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39m\u001b[32m\"select2-\"\u001b[39m\u001b[33m+\u001b[39mb}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_placeContainer\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39minsertAfter(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_resolveWidth(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"width\"\u001b[39m))\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mb\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mcss(\u001b[32m\"width\"\u001b[39m\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_resolveWidth\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[35m/^width:(([-+]?([0-9]*\\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"resolve\"\u001b[39m\u001b[33m==\u001b[39mb){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_resolveWidth(a\u001b[33m,\u001b[39m\u001b[32m\"style\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39md\u001b[33m?\u001b[39md\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_resolveWidth(a\u001b[33m,\u001b[39m\u001b[32m\"element\"\u001b[39m)}\u001b[36mif\u001b[39m(\u001b[32m\"element\"\u001b[39m\u001b[33m==\u001b[39mb){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mouterWidth(\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m e\u001b[33m<=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m?\u001b[39m\u001b[32m\"auto\"\u001b[39m\u001b[33m:\u001b[39me\u001b[33m+\u001b[39m\u001b[32m\"px\"\u001b[39m}\u001b[36mif\u001b[39m(\u001b[32m\"style\"\u001b[39m\u001b[33m==\u001b[39mb){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mattr(\u001b[32m\"style\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"string\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m f)\u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39msplit(\u001b[32m\";\"\u001b[39m)\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mh\u001b[33m<\u001b[39m\u001b[33mi\u001b[39m\u001b[33m;\u001b[39mh\u001b[33m+=\u001b[39m\u001b[35m1\u001b[39m){\u001b[36mvar\u001b[39m j\u001b[33m=\u001b[39mg[h]\u001b[33m.\u001b[39mreplace(\u001b[35m/\\s/g\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39mmatch(c)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m!==\u001b[39mk\u001b[33m&&\u001b[39mk\u001b[33m.\u001b[39mlength\u001b[33m>=\u001b[39m\u001b[35m1\u001b[39m)\u001b[36mreturn\u001b[39m k[\u001b[35m1\u001b[39m]}\u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m}\u001b[36mreturn\u001b[39m b}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_bindAdapters\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdropdown\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresults\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_registerDomEvents\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mon(\u001b[32m\"change.select2\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mcurrent(\u001b[36mfunction\u001b[39m(a){b\u001b[33m.\u001b[39mtrigger(\u001b[32m\"selection:update\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39ma})})})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mon(\u001b[32m\"focus.select2\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){b\u001b[33m.\u001b[39mtrigger(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39ma)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncA\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncAttributes\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncS\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncSubtree\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mattachEvent\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mattachEvent(\u001b[32m\"onpropertychange\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncA)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mwindow\u001b[33m.\u001b[39m\u001b[33mMutationObserver\u001b[39m\u001b[33m||\u001b[39mwindow\u001b[33m.\u001b[39m\u001b[33mWebKitMutationObserver\u001b[39m\u001b[33m||\u001b[39mwindow\u001b[33m.\u001b[39m\u001b[33mMozMutationObserver\u001b[39m\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39md\u001b[33m?\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_observer\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m d(\u001b[36mfunction\u001b[39m(c){a\u001b[33m.\u001b[39meach(c\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_syncA)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach(c\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_syncS)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_observer\u001b[33m.\u001b[39mobserve(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m{attributes\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mchildList\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39msubtree\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m}))\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39maddEventListener\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39maddEventListener(\u001b[32m\"DOMAttrModified\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_syncA\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39maddEventListener(\u001b[32m\"DOMNodeInserted\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_syncS\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39maddEventListener(\u001b[32m\"DOMNodeRemoved\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_syncS\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m))}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_registerDataEvents\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mon(\u001b[32m\"*\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){a\u001b[33m.\u001b[39mtrigger(b\u001b[33m,\u001b[39mc)})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_registerSelectionEvents\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m[\u001b[32m\"toggle\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"focus\"\u001b[39m]\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39mon(\u001b[32m\"toggle\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39mtoggleDropdown()})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39mon(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){b\u001b[33m.\u001b[39mfocus(a)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39mon(\u001b[32m\"*\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(d\u001b[33m,\u001b[39me){\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39minArray(d\u001b[33m,\u001b[39mc)\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mtrigger(d\u001b[33m,\u001b[39me)})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_registerDropdownEvents\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdropdown\u001b[33m.\u001b[39mon(\u001b[32m\"*\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){a\u001b[33m.\u001b[39mtrigger(b\u001b[33m,\u001b[39mc)})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_registerResultsEvents\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresults\u001b[33m.\u001b[39mon(\u001b[32m\"*\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){a\u001b[33m.\u001b[39mtrigger(b\u001b[33m,\u001b[39mc)})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_registerEvents\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){a\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-container--open\"\u001b[39m)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){a\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-container--open\"\u001b[39m)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"enable\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){a\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-container--disabled\"\u001b[39m)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"disable\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){a\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-container--disabled\"\u001b[39m)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"blur\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){a\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-container--focus\"\u001b[39m)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"query\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b){a\u001b[33m.\u001b[39misOpen()\u001b[33m||\u001b[39ma\u001b[33m.\u001b[39mtrigger(\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m{})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mquery(b\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(c){a\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:all\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39mc\u001b[33m,\u001b[39mquery\u001b[33m:\u001b[39mb})})})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"query:append\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mquery(b\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(c){a\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:append\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39mc\u001b[33m,\u001b[39mquery\u001b[33m:\u001b[39mb})})})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"keypress\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mwhich\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39misOpen()\u001b[33m?\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mESC\u001b[39m\u001b[33m||\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mTAB\u001b[39m\u001b[33m||\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mUP\u001b[39m\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39maltKey\u001b[33m?\u001b[39m(a\u001b[33m.\u001b[39mclose()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpreventDefault())\u001b[33m:\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mENTER\u001b[39m\u001b[33m?\u001b[39m(a\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:select\"\u001b[39m\u001b[33m,\u001b[39m{})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpreventDefault())\u001b[33m:\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mSPACE\u001b[39m\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mctrlKey\u001b[33m?\u001b[39m(a\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:toggle\"\u001b[39m\u001b[33m,\u001b[39m{})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpreventDefault())\u001b[33m:\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mUP\u001b[39m\u001b[33m?\u001b[39m(a\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:previous\"\u001b[39m\u001b[33m,\u001b[39m{})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpreventDefault())\u001b[33m:\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mDOWN\u001b[39m\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mtrigger(\u001b[32m\"results:next\"\u001b[39m\u001b[33m,\u001b[39m{})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpreventDefault())\u001b[33m:\u001b[39m(c\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mENTER\u001b[39m\u001b[33m||\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mSPACE\u001b[39m\u001b[33m||\u001b[39mc\u001b[33m===\u001b[39md\u001b[33m.\u001b[39m\u001b[33mDOWN\u001b[39m\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39maltKey)\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mopen()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpreventDefault())})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_syncAttributes\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mset(\u001b[32m\"disabled\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mprop(\u001b[32m\"disabled\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"disabled\"\u001b[39m)\u001b[33m?\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39misOpen()\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclose()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"disable\"\u001b[39m\u001b[33m,\u001b[39m{}))\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"enable\"\u001b[39m\u001b[33m,\u001b[39m{})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39m_syncSubtree\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39ma\u001b[33m||\u001b[39m\u001b[33m!\u001b[39ma\u001b[33m.\u001b[39mtarget\u001b[33m||\u001b[39m\u001b[32m\"OPTION\"\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mnodeName\u001b[33m||\u001b[39m\u001b[32m\"OPTGROUP\"\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mnodeName){\u001b[36mif\u001b[39m(b)\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39maddedNodes\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39maddedNodes\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m)\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39me\u001b[33m<\u001b[39m\u001b[33mb\u001b[39m\u001b[33m.\u001b[39maddedNodes\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39me\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39maddedNodes[e]\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39mselected\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)}\u001b[36melse\u001b[39m b\u001b[33m.\u001b[39mremovedNodes\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mremovedNodes\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m c\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mcurrent(\u001b[36mfunction\u001b[39m(a){d\u001b[33m.\u001b[39mtrigger(\u001b[32m\"selection:update\"\u001b[39m\u001b[33m,\u001b[39m{data\u001b[33m:\u001b[39ma})})}}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mtrigger\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m__super__\u001b[33m.\u001b[39mtrigger\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m{open\u001b[33m:\u001b[39m\u001b[32m\"opening\"\u001b[39m\u001b[33m,\u001b[39mclose\u001b[33m:\u001b[39m\u001b[32m\"closing\"\u001b[39m\u001b[33m,\u001b[39mselect\u001b[33m:\u001b[39m\u001b[32m\"selecting\"\u001b[39m\u001b[33m,\u001b[39munselect\u001b[33m:\u001b[39m\u001b[32m\"unselecting\"\u001b[39m\u001b[33m,\u001b[39mclear\u001b[33m:\u001b[39m\u001b[32m\"clearing\"\u001b[39m}\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m&&\u001b[39m(b\u001b[33m=\u001b[39m{})\u001b[33m,\u001b[39ma \u001b[36min\u001b[39m d){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39md[a]\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m{prevented\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mname\u001b[33m:\u001b[39ma\u001b[33m,\u001b[39margs\u001b[33m:\u001b[39mb}\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(c\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mg)\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39mprevented)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m(b\u001b[33m.\u001b[39mprevented\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)}c\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mtoggleDropdown\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"disabled\"\u001b[39m)\u001b[33m||\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39misOpen()\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclose()\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mopen())}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mopen\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39misOpen()\u001b[33m||\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"query\"\u001b[39m\u001b[33m,\u001b[39m{})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mclose\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39misOpen()\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m{})}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39misOpen\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mhasClass(\u001b[32m\"select2-container--open\"\u001b[39m)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mhasFocus\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mhasClass(\u001b[32m\"select2-container--focus\"\u001b[39m)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mfocus\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhasFocus()\u001b[33m||\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-container--focus\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtrigger(\u001b[32m\"focus\"\u001b[39m\u001b[33m,\u001b[39m{}))}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39menable\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"debug\"\u001b[39m)\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn(\u001b[32m'Select2: The `select2(\"enable\")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop(\"disabled\") instead.'\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39ma\u001b[33m&&\u001b[39m\u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39mlength\u001b[33m||\u001b[39m(a\u001b[33m=\u001b[39m[\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m])\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[33m!\u001b[39ma[\u001b[35m0\u001b[39m]\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mprop(\u001b[32m\"disabled\"\u001b[39m\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdata\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"debug\"\u001b[39m)\u001b[33m&&\u001b[39marguments\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn(\u001b[32m'Select2: Data can no longer be set using `select2(\"data\")`. You should consider setting the value instead using `$element.val()`.'\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m[]\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mcurrent(\u001b[36mfunction\u001b[39m(b){a\u001b[33m=\u001b[39mb})\u001b[33m,\u001b[39ma}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mval\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"debug\"\u001b[39m)\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn(\u001b[32m'Select2: The `select2(\"val\")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39mb\u001b[33m||\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mlength)\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb[\u001b[35m0\u001b[39m]\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39misArray(c)\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mmap(c\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mtoString()}))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mval(c)\u001b[33m.\u001b[39mtrigger(\u001b[32m\"change\"\u001b[39m)}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mdestroy\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39mremove()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mdetachEvent\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mdetachEvent(\u001b[32m\"onpropertychange\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncA)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_observer\u001b[33m?\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_observer\u001b[33m.\u001b[39mdisconnect()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_observer\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m)\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mremoveEventListener\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mremoveEventListener(\u001b[32m\"DOMAttrModified\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncA\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mremoveEventListener(\u001b[32m\"DOMNodeInserted\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncS\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mremoveEventListener(\u001b[32m\"DOMNodeRemoved\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncS\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncA\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_syncS\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39moff(\u001b[32m\".select2\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"old-tabindex\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"select2-hidden-accessible\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-hidden\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"false\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mRemoveData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element[\u001b[35m0\u001b[39m])\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element\u001b[33m.\u001b[39mremoveData(\u001b[32m\"select2\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m.\u001b[39mdestroy()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39mdestroy()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdropdown\u001b[33m.\u001b[39mdestroy()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresults\u001b[33m.\u001b[39mdestroy()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataAdapter\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselection\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdropdown\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresults\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m}\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mrender\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma(\u001b[32m'<span class=\"select2 select2-container\"><span class=\"selection\"></span><span class=\"dropdown-wrapper\" aria-hidden=\"true\"></span></span>'\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mattr(\u001b[32m\"dir\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"dir\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$container\u001b[33m.\u001b[39maddClass(\u001b[32m\"select2-container--\"\u001b[39m\u001b[33m+\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mget(\u001b[32m\"theme\"\u001b[39m))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39m\u001b[33mStoreData\u001b[39m(b[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"element\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$element)\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39me})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"jquery-mousewheel\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mdefine(\u001b[32m\"jquery.select2\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m\"jquery\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"jquery-mousewheel\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./select2/core\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./select2/defaults\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"./select2/utils\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me){\u001b[36mif\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mselect2){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39m[\u001b[32m\"open\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"close\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"destroy\"\u001b[39m]\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mselect2\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mif\u001b[39m(\u001b[32m\"object\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m(b\u001b[33m=\u001b[39mb\u001b[33m||\u001b[39m{}))\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39mb)\u001b[33m;\u001b[39m\u001b[36mnew\u001b[39m c(a(\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39md)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m b){\u001b[36mvar\u001b[39m d\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[33mArray\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mslice\u001b[33m.\u001b[39mcall(arguments\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39me\u001b[33m.\u001b[39m\u001b[33mGetData\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"select2\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ma\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39merror\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39merror(\u001b[32m\"The select2('\"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m+\u001b[39m\u001b[32m\"') method was called on an element that is not using Select2.\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma[b]\u001b[33m.\u001b[39mapply(a\u001b[33m,\u001b[39mg)})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39minArray(b\u001b[33m,\u001b[39mf)\u001b[33m>\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m:\u001b[39md}\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(\u001b[32m\"Invalid arguments for Select2: \"\u001b[39m\u001b[33m+\u001b[39mb)}}\u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m==\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mselect2\u001b[33m.\u001b[39mdefaults\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mselect2\u001b[33m.\u001b[39mdefaults\u001b[33m=\u001b[39md)\u001b[33m,\u001b[39mc})\u001b[33m,\u001b[39m{define\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mdefine\u001b[33m,\u001b[39mrequire\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mrequire}}()\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mrequire(\u001b[32m\"jquery.select2\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mselect2\u001b[33m.\u001b[39mamd\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39mc})\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[0m\n    at raise (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:6325:17)\n    at unexpected (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:7642:16)\n    at expect (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:7628:28)\n    at parseObj (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9150:14)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8784:28)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:3601:20)\n    at parseExprSubscripts (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8412:23)\n    at parseMaybeUnary (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8392:21)\n    at parseExprOps (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8267:23)\n    at parseMaybeConditional (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8240:23)\n    at parseMaybeAssign (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8187:21)\n    at parseExpression (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8135:23)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9958:23)\n    at parseStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9829:17)\n    at parseIfStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:10183:28)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9874:21)");

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/glebsimdyankin/Documents/work/redsoft/src/scripts/libs/jquery.magnific-popup.min.js: Unexpected token, expected \",\" (4:1598)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[90m* http://dimsemenov.com/plugins/magnific-popup/\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[90m* Copyright (c) 2016 Dmitry Semenov; */\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[33m!\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m define\u001b[33m&&\u001b[39mdefine\u001b[33m.\u001b[39mamd\u001b[33m?\u001b[39mdefine([\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39ma)\u001b[33m:\u001b[39ma(\u001b[32m\"object\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m exports\u001b[33m?\u001b[39mrequire(\u001b[32m\"jquery\"\u001b[39m)\u001b[33m:\u001b[39mwindow\u001b[33m.\u001b[39mjQuery\u001b[33m||\u001b[39mwindow\u001b[33m.\u001b[39m\u001b[33mZepto\u001b[39m)}(\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[32m\"Close\"\u001b[39m\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m\u001b[32m\"BeforeClose\"\u001b[39m\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39m\u001b[32m\"AfterClose\"\u001b[39m\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39m\u001b[32m\"BeforeAppend\"\u001b[39m\u001b[33m,\u001b[39ml\u001b[33m=\u001b[39m\u001b[32m\"MarkupParse\"\u001b[39m\u001b[33m,\u001b[39mm\u001b[33m=\u001b[39m\u001b[32m\"Open\"\u001b[39m\u001b[33m,\u001b[39mn\u001b[33m=\u001b[39m\u001b[32m\"Change\"\u001b[39m\u001b[33m,\u001b[39mo\u001b[33m=\u001b[39m\u001b[32m\"mfp\"\u001b[39m\u001b[33m,\u001b[39mp\u001b[33m=\u001b[39m\u001b[32m\".\"\u001b[39m\u001b[33m+\u001b[39mo\u001b[33m,\u001b[39mq\u001b[33m=\u001b[39m\u001b[32m\"mfp-ready\"\u001b[39m\u001b[33m,\u001b[39mr\u001b[33m=\u001b[39m\u001b[32m\"mfp-removing\"\u001b[39m\u001b[33m,\u001b[39ms\u001b[33m=\u001b[39m\u001b[32m\"mfp-prevent-close\"\u001b[39m\u001b[33m,\u001b[39mt\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){}\u001b[33m,\u001b[39mu\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[33m!\u001b[39mwindow\u001b[33m.\u001b[39mjQuery\u001b[33m,\u001b[39mv\u001b[33m=\u001b[39ma(window)\u001b[33m,\u001b[39mw\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc){b\u001b[33m.\u001b[39mev\u001b[33m.\u001b[39mon(o\u001b[33m+\u001b[39ma\u001b[33m+\u001b[39mp\u001b[33m,\u001b[39mc)}\u001b[33m,\u001b[39mx\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"div\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m f\u001b[33m.\u001b[39mclassName\u001b[33m=\u001b[39m\u001b[32m\"mfp-\"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m,\u001b[39md\u001b[33m&&\u001b[39m(f\u001b[33m.\u001b[39minnerHTML\u001b[33m=\u001b[39md)\u001b[33m,\u001b[39me\u001b[33m?\u001b[39mc\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mappendChild(f)\u001b[33m:\u001b[39m(f\u001b[33m=\u001b[39ma(f)\u001b[33m,\u001b[39mc\u001b[33m&&\u001b[39mf\u001b[33m.\u001b[39mappendTo(c))\u001b[33m,\u001b[39mf}\u001b[33m,\u001b[39my\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c\u001b[33m,\u001b[39md){b\u001b[33m.\u001b[39mev\u001b[33m.\u001b[39mtriggerHandler(o\u001b[33m+\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcallbacks\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mcharAt(\u001b[35m0\u001b[39m)\u001b[33m.\u001b[39mtoLowerCase()\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39mslice(\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcallbacks[c]\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcallbacks[c]\u001b[33m.\u001b[39mapply(b\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39misArray(d)\u001b[33m?\u001b[39md\u001b[33m:\u001b[39m[d]))}\u001b[33m,\u001b[39mz\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mreturn\u001b[39m c\u001b[33m===\u001b[39mg\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate\u001b[33m.\u001b[39mcloseBtn\u001b[33m||\u001b[39m(b\u001b[33m.\u001b[39mcurrTemplate\u001b[33m.\u001b[39mcloseBtn\u001b[33m=\u001b[39ma(b\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseMarkup\u001b[33m.\u001b[39mreplace(\u001b[32m\"%title%\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mtClose))\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mc)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate\u001b[33m.\u001b[39mcloseBtn}\u001b[33m,\u001b[39m\u001b[33mA\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){a\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39minstance\u001b[33m||\u001b[39m(b\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m t\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39minit()\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39minstance\u001b[33m=\u001b[39mb)}\u001b[33m,\u001b[39m\u001b[33mB\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"p\"\u001b[39m)\u001b[33m.\u001b[39mstyle\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39m[\u001b[32m\"ms\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"O\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Moz\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"Webkit\"\u001b[39m]\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39mtransition)\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m)\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mpop()\u001b[33m+\u001b[39m\u001b[32m\"Transition\"\u001b[39m\u001b[36min\u001b[39m a)\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m}\u001b[33m;\u001b[39mt\u001b[33m.\u001b[39mprototype\u001b[33m=\u001b[39m{constructor\u001b[33m:\u001b[39mt\u001b[33m,\u001b[39minit\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mnavigator\u001b[33m.\u001b[39mappVersion\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39misLowIE\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39misIE8\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mall\u001b[33m&&\u001b[39m\u001b[33m!\u001b[39mdocument\u001b[33m.\u001b[39maddEventListener\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39misAndroid\u001b[33m=\u001b[39m\u001b[35m/android/gi\u001b[39m\u001b[33m.\u001b[39mtest(c)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39misIOS\u001b[33m=\u001b[39m\u001b[35m/iphone|ipad|ipod/gi\u001b[39m\u001b[33m.\u001b[39mtest(c)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39msupportsTransition\u001b[33m=\u001b[39m\u001b[33mB\u001b[39m()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprobablyMobile\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39misAndroid\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39misIOS\u001b[33m||\u001b[39m\u001b[35m/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i\u001b[39m\u001b[33m.\u001b[39mtest(navigator\u001b[33m.\u001b[39muserAgent)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma(document)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpopupsCache\u001b[33m=\u001b[39m{}}\u001b[33m,\u001b[39mopen\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mvar\u001b[39m e\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(c\u001b[33m.\u001b[39misObj\u001b[33m===\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m){b\u001b[33m.\u001b[39mitems\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mitems\u001b[33m.\u001b[39mtoArray()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mindex\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mitems\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(e\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39me\u001b[33m<\u001b[39m\u001b[33mh\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39me\u001b[33m++\u001b[39m)\u001b[36mif\u001b[39m(g\u001b[33m=\u001b[39mh[e]\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39mparsed\u001b[33m&&\u001b[39m(g\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39mel[\u001b[35m0\u001b[39m])\u001b[33m,\u001b[39mg\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39mel[\u001b[35m0\u001b[39m]){b\u001b[33m.\u001b[39mindex\u001b[33m=\u001b[39me\u001b[33m;\u001b[39m\u001b[36mbreak\u001b[39m}}\u001b[36melse\u001b[39m b\u001b[33m.\u001b[39mitems\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39misArray(c\u001b[33m.\u001b[39mitems)\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39mitems\u001b[33m:\u001b[39m[c\u001b[33m.\u001b[39mitems]\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mindex\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mindex\u001b[33m||\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39misOpen)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m b\u001b[33m.\u001b[39mupdateItemHTML()\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mtypes\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mmainEl\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mmainEl\u001b[33m.\u001b[39mlength\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mev\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mmainEl\u001b[33m.\u001b[39meq(\u001b[35m0\u001b[39m)\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mev\u001b[33m=\u001b[39md\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mkey\u001b[33m?\u001b[39m(b\u001b[33m.\u001b[39mpopupsCache[c\u001b[33m.\u001b[39mkey]\u001b[33m||\u001b[39m(b\u001b[33m.\u001b[39mpopupsCache[c\u001b[33m.\u001b[39mkey]\u001b[33m=\u001b[39m{})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mpopupsCache[c\u001b[33m.\u001b[39mkey])\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mdefaults\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mfixedContentPos\u001b[33m=\u001b[39m\u001b[32m\"auto\"\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mfixedContentPos\u001b[33m?\u001b[39m\u001b[33m!\u001b[39mb\u001b[33m.\u001b[39mprobablyMobile\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mfixedContentPos\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mmodal\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseOnContentClick\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseOnBgClick\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mshowCloseBtn\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39menableEscapeKey\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mbgOverlay\u001b[33m||\u001b[39m(b\u001b[33m.\u001b[39mbgOverlay\u001b[33m=\u001b[39mx(\u001b[32m\"bg\"\u001b[39m)\u001b[33m.\u001b[39mon(\u001b[32m\"click\"\u001b[39m\u001b[33m+\u001b[39mp\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39mclose()})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m=\u001b[39mx(\u001b[32m\"wrap\"\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"tabindex\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m.\u001b[39mon(\u001b[32m\"click\"\u001b[39m\u001b[33m+\u001b[39mp\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){b\u001b[33m.\u001b[39m_checkIfClose(a\u001b[33m.\u001b[39mtarget)\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mclose()})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m=\u001b[39mx(\u001b[32m\"container\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwrap))\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontentContainer\u001b[33m=\u001b[39mx(\u001b[32m\"content\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mpreloader\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39mpreloader\u001b[33m=\u001b[39mx(\u001b[32m\"preloader\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mtLoading))\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m i\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mmodules\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(e\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39me\u001b[33m<\u001b[39m\u001b[33mi\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39me\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m j\u001b[33m=\u001b[39mi[e]\u001b[33m;\u001b[39mj\u001b[33m=\u001b[39mj\u001b[33m.\u001b[39mcharAt(\u001b[35m0\u001b[39m)\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m+\u001b[39mj\u001b[33m.\u001b[39mslice(\u001b[35m1\u001b[39m)\u001b[33m,\u001b[39mb[\u001b[32m\"init\"\u001b[39m\u001b[33m+\u001b[39mj]\u001b[33m.\u001b[39mcall(b)}y(\u001b[32m\"BeforeOpen\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mshowCloseBtn\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseBtnInside\u001b[33m?\u001b[39m(w(l\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){c\u001b[33m.\u001b[39mclose_replaceWith\u001b[33m=\u001b[39mz(d\u001b[33m.\u001b[39mtype)})\u001b[33m,\u001b[39mf\u001b[33m+=\u001b[39m\u001b[32m\" mfp-close-btn-in\"\u001b[39m)\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39mappend(z()))\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39malignTop\u001b[33m&&\u001b[39m(f\u001b[33m+=\u001b[39m\u001b[32m\" mfp-align-top\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mfixedContentPos\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39mcss({overflow\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39moverflowY\u001b[33m,\u001b[39moverflowX\u001b[33m:\u001b[39m\u001b[32m\"hidden\"\u001b[39m\u001b[33m,\u001b[39moverflowY\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39moverflowY})\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39mcss({top\u001b[33m:\u001b[39mv\u001b[33m.\u001b[39mscrollTop()\u001b[33m,\u001b[39mposition\u001b[33m:\u001b[39m\u001b[32m\"absolute\"\u001b[39m})\u001b[33m,\u001b[39m(b\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mfixedBgPos\u001b[33m===\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m||\u001b[39m\u001b[32m\"auto\"\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mfixedBgPos\u001b[33m&&\u001b[39m\u001b[33m!\u001b[39mb\u001b[33m.\u001b[39mfixedContentPos)\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mbgOverlay\u001b[33m.\u001b[39mcss({height\u001b[33m:\u001b[39md\u001b[33m.\u001b[39mheight()\u001b[33m,\u001b[39mposition\u001b[33m:\u001b[39m\u001b[32m\"absolute\"\u001b[39m})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39menableEscapeKey\u001b[33m&&\u001b[39md\u001b[33m.\u001b[39mon(\u001b[32m\"keyup\"\u001b[39m\u001b[33m+\u001b[39mp\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[35m27\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mkeyCode\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mclose()})\u001b[33m,\u001b[39mv\u001b[33m.\u001b[39mon(\u001b[32m\"resize\"\u001b[39m\u001b[33m+\u001b[39mp\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39mupdateSize()})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseOnContentClick\u001b[33m||\u001b[39m(f\u001b[33m+=\u001b[39m\u001b[32m\" mfp-auto-cursor\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39maddClass(f)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m k\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mwH\u001b[33m=\u001b[39mv\u001b[33m.\u001b[39mheight()\u001b[33m,\u001b[39mn\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mfixedContentPos\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39m_hasScrollBar(k)){\u001b[36mvar\u001b[39m o\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39m_getScrollbarSize()\u001b[33m;\u001b[39mo\u001b[33m&&\u001b[39m(n\u001b[33m.\u001b[39mmarginRight\u001b[33m=\u001b[39mo)}b\u001b[33m.\u001b[39mfixedContentPos\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39misIE7\u001b[33m?\u001b[39ma(\u001b[32m\"body, html\"\u001b[39m)\u001b[33m.\u001b[39mcss(\u001b[32m\"overflow\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"hidden\"\u001b[39m)\u001b[33m:\u001b[39mn\u001b[33m.\u001b[39moverflow\u001b[33m=\u001b[39m\u001b[32m\"hidden\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m r\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mmainClass\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39misIE7\u001b[33m&&\u001b[39m(r\u001b[33m+=\u001b[39m\u001b[32m\" mfp-ie7\"\u001b[39m)\u001b[33m,\u001b[39mr\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39m_addClassToMFP(r)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateItemHTML()\u001b[33m,\u001b[39my(\u001b[32m\"BuildControls\"\u001b[39m)\u001b[33m,\u001b[39ma(\u001b[32m\"html\"\u001b[39m)\u001b[33m.\u001b[39mcss(n)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mbgOverlay\u001b[33m.\u001b[39madd(b\u001b[33m.\u001b[39mwrap)\u001b[33m.\u001b[39mprependTo(b\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mprependTo\u001b[33m||\u001b[39ma(document\u001b[33m.\u001b[39mbody))\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_lastFocusedEl\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mactiveElement\u001b[33m,\u001b[39msetTimeout(\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39mcontent\u001b[33m?\u001b[39m(b\u001b[33m.\u001b[39m_addClassToMFP(q)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_setFocus())\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mbgOverlay\u001b[33m.\u001b[39maddClass(q)\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mon(\u001b[32m\"focusin\"\u001b[39m\u001b[33m+\u001b[39mp\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_onFocusIn)}\u001b[33m,\u001b[39m\u001b[35m16\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39misOpen\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateSize(k)\u001b[33m,\u001b[39my(m)\u001b[33m,\u001b[39mc}\u001b[33m,\u001b[39mclose\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39misOpen\u001b[33m&&\u001b[39m(y(i)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39misOpen\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mremovalDelay\u001b[33m&&\u001b[39m\u001b[33m!\u001b[39mb\u001b[33m.\u001b[39misLowIE\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39msupportsTransition\u001b[33m?\u001b[39m(b\u001b[33m.\u001b[39m_addClassToMFP(r)\u001b[33m,\u001b[39msetTimeout(\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39m_close()}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mremovalDelay))\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39m_close())}\u001b[33m,\u001b[39m_close\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){y(h)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mr\u001b[33m+\u001b[39m\u001b[32m\" \"\u001b[39m\u001b[33m+\u001b[39mq\u001b[33m+\u001b[39m\u001b[32m\" \"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mbgOverlay\u001b[33m.\u001b[39mdetach()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39mdetach()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m.\u001b[39mempty()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mmainClass\u001b[33m&&\u001b[39m(c\u001b[33m+=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mmainClass\u001b[33m+\u001b[39m\u001b[32m\" \"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_removeClassFromMFP(c)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mfixedContentPos){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m{marginRight\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m}\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39misIE7\u001b[33m?\u001b[39ma(\u001b[32m\"body, html\"\u001b[39m)\u001b[33m.\u001b[39mcss(\u001b[32m\"overflow\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m:\u001b[39me\u001b[33m.\u001b[39moverflow\u001b[33m=\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39ma(\u001b[32m\"html\"\u001b[39m)\u001b[33m.\u001b[39mcss(e)}d\u001b[33m.\u001b[39moff(\u001b[32m\"keyup\"\u001b[39m\u001b[33m+\u001b[39mp\u001b[33m+\u001b[39m\u001b[32m\" focusin\"\u001b[39m\u001b[33m+\u001b[39mp)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mev\u001b[33m.\u001b[39moff(p)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39mattr(\u001b[32m\"class\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"mfp-wrap\"\u001b[39m)\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"style\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mbgOverlay\u001b[33m.\u001b[39mattr(\u001b[32m\"class\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"mfp-bg\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m.\u001b[39mattr(\u001b[32m\"class\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"mfp-container\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[33m!\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mshowCloseBtn\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseBtnInside\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate[b\u001b[33m.\u001b[39mcurrItem\u001b[33m.\u001b[39mtype]\u001b[33m!==\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate\u001b[33m.\u001b[39mcloseBtn\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate\u001b[33m.\u001b[39mcloseBtn\u001b[33m.\u001b[39mdetach()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mautoFocusLast\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39m_lastFocusedEl\u001b[33m&&\u001b[39ma(b\u001b[33m.\u001b[39m_lastFocusedEl)\u001b[33m.\u001b[39mfocus()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcurrItem\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mprevHeight\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39my(j)}\u001b[33m,\u001b[39mupdateSize\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39misIOS){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mdocumentElement\u001b[33m.\u001b[39mclientWidth\u001b[33m/\u001b[39mwindow\u001b[33m.\u001b[39minnerWidth\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mwindow\u001b[33m.\u001b[39minnerHeight\u001b[33m*\u001b[39mc\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39mcss(\u001b[32m\"height\"\u001b[39m\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwH\u001b[33m=\u001b[39md}\u001b[36melse\u001b[39m b\u001b[33m.\u001b[39mwH\u001b[33m=\u001b[39ma\u001b[33m||\u001b[39mv\u001b[33m.\u001b[39mheight()\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mfixedContentPos\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39mcss(\u001b[32m\"height\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwH)\u001b[33m,\u001b[39my(\u001b[32m\"Resize\"\u001b[39m)}\u001b[33m,\u001b[39mupdateItemHTML\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mitems[b\u001b[33m.\u001b[39mindex]\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mcontentContainer\u001b[33m.\u001b[39mdetach()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m.\u001b[39mdetach()\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mparsed\u001b[33m||\u001b[39m(c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mparseEl(b\u001b[33m.\u001b[39mindex))\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mtype\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(y(\u001b[32m\"BeforeChange\"\u001b[39m\u001b[33m,\u001b[39m[b\u001b[33m.\u001b[39mcurrItem\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mcurrItem\u001b[33m.\u001b[39mtype\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39md])\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcurrItem\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39m\u001b[33m!\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate[d]){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst[d]\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mst[d]\u001b[33m.\u001b[39mmarkup\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39my(\u001b[32m\"FirstMarkupParse\"\u001b[39m\u001b[33m,\u001b[39mf)\u001b[33m,\u001b[39mf\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate[d]\u001b[33m=\u001b[39ma(f)\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate[d]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}e\u001b[33m&&\u001b[39me\u001b[33m!==\u001b[39mc\u001b[33m.\u001b[39mtype\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"mfp-\"\u001b[39m\u001b[33m+\u001b[39me\u001b[33m+\u001b[39m\u001b[32m\"-holder\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39mb[\u001b[32m\"get\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mcharAt(\u001b[35m0\u001b[39m)\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m+\u001b[39md\u001b[33m.\u001b[39mslice(\u001b[35m1\u001b[39m)](c\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate[d])\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mappendContent(g\u001b[33m,\u001b[39md)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mpreloaded\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39my(n\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mtype\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m.\u001b[39mprepend(b\u001b[33m.\u001b[39mcontentContainer)\u001b[33m,\u001b[39my(\u001b[32m\"AfterChange\"\u001b[39m)}\u001b[33m,\u001b[39mappendContent\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc){b\u001b[33m.\u001b[39mcontent\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39ma\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mshowCloseBtn\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseBtnInside\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcurrTemplate[c]\u001b[33m===\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m.\u001b[39mfind(\u001b[32m\".mfp-close\"\u001b[39m)\u001b[33m.\u001b[39mlength\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m.\u001b[39mappend(z())\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m=\u001b[39ma\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m=\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39my(k)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m.\u001b[39maddClass(\u001b[32m\"mfp-\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m+\u001b[39m\u001b[32m\"-holder\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontentContainer\u001b[33m.\u001b[39mappend(b\u001b[33m.\u001b[39mcontent)}\u001b[33m,\u001b[39mparseEl\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mvar\u001b[39m d\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mitems[c]\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(e\u001b[33m.\u001b[39mtagName\u001b[33m?\u001b[39me\u001b[33m=\u001b[39m{el\u001b[33m:\u001b[39ma(e)}\u001b[33m:\u001b[39m(d\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mtype\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m{data\u001b[33m:\u001b[39me\u001b[33m,\u001b[39msrc\u001b[33m:\u001b[39me\u001b[33m.\u001b[39msrc})\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mel){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mtypes\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mg\u001b[33m<\u001b[39m\u001b[33mf\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mg\u001b[33m++\u001b[39m)\u001b[36mif\u001b[39m(e\u001b[33m.\u001b[39mel\u001b[33m.\u001b[39mhasClass(\u001b[32m\"mfp-\"\u001b[39m\u001b[33m+\u001b[39mf[g])){d\u001b[33m=\u001b[39mf[g]\u001b[33m;\u001b[39m\u001b[36mbreak\u001b[39m}e\u001b[33m.\u001b[39msrc\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mel\u001b[33m.\u001b[39mattr(\u001b[32m\"data-mfp-src\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39msrc\u001b[33m||\u001b[39m(e\u001b[33m.\u001b[39msrc\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mel\u001b[33m.\u001b[39mattr(\u001b[32m\"href\"\u001b[39m))}\u001b[36mreturn\u001b[39m e\u001b[33m.\u001b[39mtype\u001b[33m=\u001b[39md\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mtype\u001b[33m||\u001b[39m\u001b[32m\"inline\"\u001b[39m\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mindex\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mparsed\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mitems[c]\u001b[33m=\u001b[39me\u001b[33m,\u001b[39my(\u001b[32m\"ElementParse\"\u001b[39m\u001b[33m,\u001b[39me)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mitems[c]}\u001b[33m,\u001b[39maddGroup\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(d){d\u001b[33m.\u001b[39mmfpEl\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_openClick(d\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39mc)}\u001b[33m;\u001b[39mc\u001b[33m||\u001b[39m(c\u001b[33m=\u001b[39m{})\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[32m\"click.magnificPopup\"\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39mmainEl\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mitems\u001b[33m?\u001b[39m(c\u001b[33m.\u001b[39misObj\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39moff(e)\u001b[33m.\u001b[39mon(e\u001b[33m,\u001b[39md))\u001b[33m:\u001b[39m(c\u001b[33m.\u001b[39misObj\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mdelegate\u001b[33m?\u001b[39ma\u001b[33m.\u001b[39moff(e)\u001b[33m.\u001b[39mon(e\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mdelegate\u001b[33m,\u001b[39md)\u001b[33m:\u001b[39m(c\u001b[33m.\u001b[39mitems\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39moff(e)\u001b[33m.\u001b[39mon(e\u001b[33m,\u001b[39md)))}\u001b[33m,\u001b[39m_openClick\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(c\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39me\u001b[33m.\u001b[39mmidClick\u001b[33m?\u001b[39me\u001b[33m.\u001b[39mmidClick\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mdefaults\u001b[33m.\u001b[39mmidClick\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(f\u001b[33m||\u001b[39m\u001b[33m!\u001b[39m(\u001b[35m2\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39mwhich\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39mctrlKey\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39mmetaKey\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39maltKey\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39mshiftKey)){\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39me\u001b[33m.\u001b[39mdisableOn\u001b[33m?\u001b[39me\u001b[33m.\u001b[39mdisableOn\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mdefaults\u001b[33m.\u001b[39mdisableOn\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(g)\u001b[36mif\u001b[39m(a\u001b[33m.\u001b[39misFunction(g)){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mg\u001b[33m.\u001b[39mcall(b))\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(v\u001b[33m.\u001b[39mwidth()\u001b[33m<\u001b[39m\u001b[33mg\u001b[39m)\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mc\u001b[33m.\u001b[39mtype\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39mpreventDefault()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39misOpen\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mstopPropagation())\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mel\u001b[33m=\u001b[39ma(c\u001b[33m.\u001b[39mmfpEl)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mdelegate\u001b[33m&&\u001b[39m(e\u001b[33m.\u001b[39mitems\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mfind(e\u001b[33m.\u001b[39mdelegate))\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mopen(e)}}\u001b[33m,\u001b[39mupdateStatus\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39md){\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mpreloader){c\u001b[33m!==\u001b[39ma\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"mfp-s-\"\u001b[39m\u001b[33m+\u001b[39mc)\u001b[33m,\u001b[39md\u001b[33m||\u001b[39m\u001b[32m\"loading\"\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m||\u001b[39m(d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mtLoading)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m{status\u001b[33m:\u001b[39ma\u001b[33m,\u001b[39mtext\u001b[33m:\u001b[39md}\u001b[33m;\u001b[39my(\u001b[32m\"UpdateStatus\"\u001b[39m\u001b[33m,\u001b[39me)\u001b[33m,\u001b[39ma\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mstatus\u001b[33m,\u001b[39md\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mtext\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpreloader\u001b[33m.\u001b[39mhtml(d)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mpreloader\u001b[33m.\u001b[39mfind(\u001b[32m\"a\"\u001b[39m)\u001b[33m.\u001b[39mon(\u001b[32m\"click\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39mstopImmediatePropagation()})\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mcontainer\u001b[33m.\u001b[39maddClass(\u001b[32m\"mfp-s-\"\u001b[39m\u001b[33m+\u001b[39ma)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39ma}}\u001b[33m,\u001b[39m_checkIfClose\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39ma(c)\u001b[33m.\u001b[39mhasClass(s)){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseOnContentClick\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mcloseOnBgClick\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(d\u001b[33m&&\u001b[39me)\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m||\u001b[39ma(c)\u001b[33m.\u001b[39mhasClass(\u001b[32m\"mfp-close\"\u001b[39m)\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mpreloader\u001b[33m&&\u001b[39mc\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mpreloader[\u001b[35m0\u001b[39m])\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(c\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mcontent[\u001b[35m0\u001b[39m]\u001b[33m||\u001b[39ma\u001b[33m.\u001b[39mcontains(b\u001b[33m.\u001b[39mcontent[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39mc)){\u001b[36mif\u001b[39m(d)\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(e\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mcontains(document\u001b[33m,\u001b[39mc))\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m}}\u001b[33m,\u001b[39m_addClassToMFP\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){b\u001b[33m.\u001b[39mbgOverlay\u001b[33m.\u001b[39maddClass(a)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39maddClass(a)}\u001b[33m,\u001b[39m_removeClassFromMFP\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mbgOverlay\u001b[33m.\u001b[39mremoveClass(a)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39mremoveClass(a)}\u001b[33m,\u001b[39m_hasScrollBar\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m(b\u001b[33m.\u001b[39misIE7\u001b[33m?\u001b[39md\u001b[33m.\u001b[39mheight()\u001b[33m:\u001b[39mdocument\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mscrollHeight)\u001b[33m>\u001b[39m(a\u001b[33m||\u001b[39mv\u001b[33m.\u001b[39mheight())}\u001b[33m,\u001b[39m_setFocus\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){(b\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mfocus\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m.\u001b[39mfind(b\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mfocus)\u001b[33m.\u001b[39meq(\u001b[35m0\u001b[39m)\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mwrap)\u001b[33m.\u001b[39mfocus()}\u001b[33m,\u001b[39m_onFocusIn\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mtarget\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mwrap[\u001b[35m0\u001b[39m]\u001b[33m||\u001b[39ma\u001b[33m.\u001b[39mcontains(b\u001b[33m.\u001b[39mwrap[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mtarget)\u001b[33m?\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m:\u001b[39m(b\u001b[33m.\u001b[39m_setFocus()\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)}\u001b[33m,\u001b[39m_parseMarkup\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m;\u001b[39md\u001b[33m.\u001b[39mdata\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(d\u001b[33m.\u001b[39mdata\u001b[33m,\u001b[39mc))\u001b[33m,\u001b[39my(l\u001b[33m,\u001b[39m[b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md])\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach(c\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(c\u001b[33m,\u001b[39md){\u001b[36mif\u001b[39m(\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m===\u001b[39md\u001b[33m||\u001b[39md\u001b[33m===\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(e\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39msplit(\u001b[32m\"_\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m1\u001b[39m){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mfind(p\u001b[33m+\u001b[39m\u001b[32m\"-\"\u001b[39m\u001b[33m+\u001b[39me[\u001b[35m0\u001b[39m])\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(f\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m){\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39me[\u001b[35m1\u001b[39m]\u001b[33m;\u001b[39m\u001b[32m\"replaceWith\"\u001b[39m\u001b[33m===\u001b[39mg\u001b[33m?\u001b[39mf[\u001b[35m0\u001b[39m]\u001b[33m!==\u001b[39md[\u001b[35m0\u001b[39m]\u001b[33m&&\u001b[39mf\u001b[33m.\u001b[39mreplaceWith(d)\u001b[33m:\u001b[39m\u001b[32m\"img\"\u001b[39m\u001b[33m===\u001b[39mg\u001b[33m?\u001b[39mf\u001b[33m.\u001b[39mis(\u001b[32m\"img\"\u001b[39m)\u001b[33m?\u001b[39mf\u001b[33m.\u001b[39mattr(\u001b[32m\"src\"\u001b[39m\u001b[33m,\u001b[39md)\u001b[33m:\u001b[39mf\u001b[33m.\u001b[39mreplaceWith(a(\u001b[32m\"<img>\"\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"src\"\u001b[39m\u001b[33m,\u001b[39md)\u001b[33m.\u001b[39mattr(\u001b[32m\"class\"\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mattr(\u001b[32m\"class\"\u001b[39m)))\u001b[33m:\u001b[39mf\u001b[33m.\u001b[39mattr(e[\u001b[35m1\u001b[39m]\u001b[33m,\u001b[39md)}}\u001b[36melse\u001b[39m b\u001b[33m.\u001b[39mfind(p\u001b[33m+\u001b[39m\u001b[32m\"-\"\u001b[39m\u001b[33m+\u001b[39mc)\u001b[33m.\u001b[39mhtml(d)})}\u001b[33m,\u001b[39m_getScrollbarSize\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mif\u001b[39m(\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mscrollbarSize){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"div\"\u001b[39m)\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39mcssText\u001b[33m=\u001b[39m\u001b[32m\"width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;\"\u001b[39m\u001b[33m,\u001b[39mdocument\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mappendChild(a)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mscrollbarSize\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39moffsetWidth\u001b[33m-\u001b[39ma\u001b[33m.\u001b[39mclientWidth\u001b[33m,\u001b[39mdocument\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mremoveChild(a)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mscrollbarSize}}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m=\u001b[39m{instance\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mproto\u001b[33m:\u001b[39mt\u001b[33m.\u001b[39mprototype\u001b[33m,\u001b[39mmodules\u001b[33m:\u001b[39m[]\u001b[33m,\u001b[39mopen\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m \u001b[33mA\u001b[39m()\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39mb\u001b[33m?\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39mb)\u001b[33m:\u001b[39m{}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39misObj\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mindex\u001b[33m=\u001b[39mc\u001b[33m||\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minstance\u001b[33m.\u001b[39mopen(b)}\u001b[33m,\u001b[39mclose\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39minstance\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39minstance\u001b[33m.\u001b[39mclose()}\u001b[33m,\u001b[39mregisterModule\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){c\u001b[33m.\u001b[39moptions\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mdefaults[b]\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39moptions)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mproto\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mproto)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmodules\u001b[33m.\u001b[39mpush(b)}\u001b[33m,\u001b[39mdefaults\u001b[33m:\u001b[39m{disableOn\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mkey\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mmidClick\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mmainClass\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mpreloader\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mfocus\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mcloseOnContentClick\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mcloseOnBgClick\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mcloseBtnInside\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mshowCloseBtn\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39menableEscapeKey\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mmodal\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39malignTop\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mremovalDelay\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mprependTo\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mfixedContentPos\u001b[33m:\u001b[39m\u001b[32m\"auto\"\u001b[39m\u001b[33m,\u001b[39mfixedBgPos\u001b[33m:\u001b[39m\u001b[32m\"auto\"\u001b[39m\u001b[33m,\u001b[39moverflowY\u001b[33m:\u001b[39m\u001b[32m\"auto\"\u001b[39m\u001b[33m,\u001b[39mcloseMarkup\u001b[33m:\u001b[39m\u001b[32m'<button title=\"%title%\" type=\"button\" class=\"mfp-close\">&#215;</button>'\u001b[39m\u001b[33m,\u001b[39mtClose\u001b[33m:\u001b[39m\u001b[32m\"Close (Esc)\"\u001b[39m\u001b[33m,\u001b[39mtLoading\u001b[33m:\u001b[39m\u001b[32m\"Loading...\"\u001b[39m\u001b[33m,\u001b[39mautoFocusLast\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mmagnificPopup\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[33mA\u001b[39m()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m c)\u001b[36mif\u001b[39m(\u001b[32m\"open\"\u001b[39m\u001b[33m===\u001b[39mc){\u001b[36mvar\u001b[39m e\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39mu\u001b[33m?\u001b[39md\u001b[33m.\u001b[39mdata(\u001b[32m\"magnificPopup\"\u001b[39m)\u001b[33m:\u001b[39md[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mmagnificPopup\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mparseInt(arguments[\u001b[35m1\u001b[39m]\u001b[33m,\u001b[39m\u001b[35m10\u001b[39m)\u001b[33m||\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39mitems\u001b[33m?\u001b[39me\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mitems[g]\u001b[33m:\u001b[39m(e\u001b[33m=\u001b[39md\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mdelegate\u001b[33m&&\u001b[39m(e\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mfind(f\u001b[33m.\u001b[39mdelegate))\u001b[33m,\u001b[39me\u001b[33m=\u001b[39me\u001b[33m.\u001b[39meq(g))\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_openClick({mfpEl\u001b[33m:\u001b[39me}\u001b[33m,\u001b[39md\u001b[33m,\u001b[39mf)}\u001b[36melse\u001b[39m b\u001b[33m.\u001b[39misOpen\u001b[33m&&\u001b[39mb[c]\u001b[33m.\u001b[39mapply(b\u001b[33m,\u001b[39m\u001b[33mArray\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mslice\u001b[33m.\u001b[39mcall(arguments\u001b[33m,\u001b[39m\u001b[35m1\u001b[39m))\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39mu\u001b[33m?\u001b[39md\u001b[33m.\u001b[39mdata(\u001b[32m\"magnificPopup\"\u001b[39m\u001b[33m,\u001b[39mc)\u001b[33m:\u001b[39md[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mmagnificPopup\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39maddGroup(d\u001b[33m,\u001b[39mc)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m d}\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m \u001b[33mC\u001b[39m\u001b[33m,\u001b[39m\u001b[33mD\u001b[39m\u001b[33m,\u001b[39m\u001b[33mE\u001b[39m\u001b[33m,\u001b[39m\u001b[33mF\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"inline\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33mG\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[33mE\u001b[39m\u001b[33m&&\u001b[39m(\u001b[33mD\u001b[39m\u001b[33m.\u001b[39mafter(\u001b[33mE\u001b[39m\u001b[33m.\u001b[39maddClass(\u001b[33mC\u001b[39m))\u001b[33m.\u001b[39mdetach()\u001b[33m,\u001b[39m\u001b[33mE\u001b[39m\u001b[33m=\u001b[39m\u001b[36mnull\u001b[39m)}\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mregisterModule(\u001b[33mF\u001b[39m\u001b[33m,\u001b[39m{options\u001b[33m:\u001b[39m{hiddenClass\u001b[33m:\u001b[39m\u001b[32m\"hide\"\u001b[39m\u001b[33m,\u001b[39mmarkup\u001b[33m:\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39mtNotFound\u001b[33m:\u001b[39m\u001b[32m\"Content not found\"\u001b[39m}\u001b[33m,\u001b[39mproto\u001b[33m:\u001b[39m{initInline\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39mtypes\u001b[33m.\u001b[39mpush(\u001b[33mF\u001b[39m)\u001b[33m,\u001b[39mw(h\u001b[33m+\u001b[39m\u001b[32m\".\"\u001b[39m\u001b[33m+\u001b[39m\u001b[33mF\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[33mG\u001b[39m()})}\u001b[33m,\u001b[39mgetInline\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(c\u001b[33m,\u001b[39md){\u001b[36mif\u001b[39m(\u001b[33mG\u001b[39m()\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39msrc){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39minline\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39ma(c\u001b[33m.\u001b[39msrc)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(f\u001b[33m.\u001b[39mlength){\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39mf[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mparentNode\u001b[33m;\u001b[39mg\u001b[33m&&\u001b[39mg\u001b[33m.\u001b[39mtagName\u001b[33m&&\u001b[39m(\u001b[33mD\u001b[39m\u001b[33m||\u001b[39m(\u001b[33mC\u001b[39m\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mhiddenClass\u001b[33m,\u001b[39m\u001b[33mD\u001b[39m\u001b[33m=\u001b[39mx(\u001b[33mC\u001b[39m)\u001b[33m,\u001b[39m\u001b[33mC\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"mfp-\"\u001b[39m\u001b[33m+\u001b[39m\u001b[33mC\u001b[39m)\u001b[33m,\u001b[39m\u001b[33mE\u001b[39m\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mafter(\u001b[33mD\u001b[39m)\u001b[33m.\u001b[39mdetach()\u001b[33m.\u001b[39mremoveClass(\u001b[33mC\u001b[39m))\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"ready\"\u001b[39m)}\u001b[36melse\u001b[39m b\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"error\"\u001b[39m\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mtNotFound)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39ma(\u001b[32m\"<div>\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39minlineElement\u001b[33m=\u001b[39mf\u001b[33m,\u001b[39mf}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"ready\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_parseMarkup(d\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39md}}})\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m \u001b[33mH\u001b[39m\u001b[33m,\u001b[39m\u001b[33mI\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"ajax\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33mJ\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[33mH\u001b[39m\u001b[33m&&\u001b[39ma(document\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39mremoveClass(\u001b[33mH\u001b[39m)}\u001b[33m,\u001b[39m\u001b[33mK\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[33mJ\u001b[39m()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mreq\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mreq\u001b[33m.\u001b[39mabort()}\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mregisterModule(\u001b[33mI\u001b[39m\u001b[33m,\u001b[39m{options\u001b[33m:\u001b[39m{settings\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mcursor\u001b[33m:\u001b[39m\u001b[32m\"mfp-ajax-cur\"\u001b[39m\u001b[33m,\u001b[39mtError\u001b[33m:\u001b[39m\u001b[32m'<a href=\"%url%\">The content</a> could not be loaded.'\u001b[39m}\u001b[33m,\u001b[39mproto\u001b[33m:\u001b[39m{initAjax\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39mtypes\u001b[33m.\u001b[39mpush(\u001b[33mI\u001b[39m)\u001b[33m,\u001b[39m\u001b[33mH\u001b[39m\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39majax\u001b[33m.\u001b[39mcursor\u001b[33m,\u001b[39mw(h\u001b[33m+\u001b[39m\u001b[32m\".\"\u001b[39m\u001b[33m+\u001b[39m\u001b[33mI\u001b[39m\u001b[33m,\u001b[39m\u001b[33mK\u001b[39m)\u001b[33m,\u001b[39mw(\u001b[32m\"BeforeChange.\"\u001b[39m\u001b[33m+\u001b[39m\u001b[33mI\u001b[39m\u001b[33m,\u001b[39m\u001b[33mK\u001b[39m)}\u001b[33m,\u001b[39mgetAjax\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[33mH\u001b[39m\u001b[33m&&\u001b[39ma(document\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39maddClass(\u001b[33mH\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"loading\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend({url\u001b[33m:\u001b[39mc\u001b[33m.\u001b[39msrc\u001b[33m,\u001b[39msuccess\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(d\u001b[33m,\u001b[39me\u001b[33m,\u001b[39mf){\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39m{data\u001b[33m:\u001b[39md\u001b[33m,\u001b[39mxhr\u001b[33m:\u001b[39mf}\u001b[33m;\u001b[39my(\u001b[32m\"ParseAjax\"\u001b[39m\u001b[33m,\u001b[39mg)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mappendContent(a(g\u001b[33m.\u001b[39mdata)\u001b[33m,\u001b[39m\u001b[33mI\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mfinished\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[33mJ\u001b[39m()\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39m_setFocus()\u001b[33m,\u001b[39msetTimeout(\u001b[36mfunction\u001b[39m(){b\u001b[33m.\u001b[39mwrap\u001b[33m.\u001b[39maddClass(q)}\u001b[33m,\u001b[39m\u001b[35m16\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"ready\"\u001b[39m)\u001b[33m,\u001b[39my(\u001b[32m\"AjaxContentAdded\"\u001b[39m)}\u001b[33m,\u001b[39merror\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[33mJ\u001b[39m()\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mfinished\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mloadError\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"error\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39majax\u001b[33m.\u001b[39mtError\u001b[33m.\u001b[39mreplace(\u001b[32m\"%url%\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39msrc))}}\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39majax\u001b[33m.\u001b[39msettings)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mreq\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39majax(d)\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m}}})\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m \u001b[33mL\u001b[39m\u001b[33m,\u001b[39m\u001b[33mM\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(c){\u001b[36mif\u001b[39m(c\u001b[33m.\u001b[39mdata\u001b[33m&&\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39mc\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mtitle)\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mtitle\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mimage\u001b[33m.\u001b[39mtitleSrc\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(d){\u001b[36mif\u001b[39m(a\u001b[33m.\u001b[39misFunction(d))\u001b[36mreturn\u001b[39m d\u001b[33m.\u001b[39mcall(b\u001b[33m,\u001b[39mc)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(c\u001b[33m.\u001b[39mel)\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39mel\u001b[33m.\u001b[39mattr(d)\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m}\u001b[36mreturn\u001b[39m\u001b[32m\"\"\u001b[39m}\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mregisterModule(\u001b[32m\"image\"\u001b[39m\u001b[33m,\u001b[39m{options\u001b[33m:\u001b[39m{markup\u001b[33m:\u001b[39m\u001b[32m'<div class=\"mfp-figure\"><div class=\"mfp-close\"></div><figure><div class=\"mfp-img\"></div><figcaption><div class=\"mfp-bottom-bar\"><div class=\"mfp-title\"></div><div class=\"mfp-counter\"></div></div></figcaption></figure></div>'\u001b[39m\u001b[33m,\u001b[39mcursor\u001b[33m:\u001b[39m\u001b[32m\"mfp-zoom-out-cur\"\u001b[39m\u001b[33m,\u001b[39mtitleSrc\u001b[33m:\u001b[39m\u001b[32m\"title\"\u001b[39m\u001b[33m,\u001b[39mverticalFit\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mtError\u001b[33m:\u001b[39m\u001b[32m'<a href=\"%url%\">The image</a> could not be loaded.'\u001b[39m}\u001b[33m,\u001b[39mproto\u001b[33m:\u001b[39m{initImage\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mimage\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[32m\".image\"\u001b[39m\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39mtypes\u001b[33m.\u001b[39mpush(\u001b[32m\"image\"\u001b[39m)\u001b[33m,\u001b[39mw(m\u001b[33m+\u001b[39md\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[32m\"image\"\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mcurrItem\u001b[33m.\u001b[39mtype\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mcursor\u001b[33m&&\u001b[39ma(document\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39maddClass(c\u001b[33m.\u001b[39mcursor)})\u001b[33m,\u001b[39mw(h\u001b[33m+\u001b[39md\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){c\u001b[33m.\u001b[39mcursor\u001b[33m&&\u001b[39ma(document\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39mremoveClass(c\u001b[33m.\u001b[39mcursor)\u001b[33m,\u001b[39mv\u001b[33m.\u001b[39moff(\u001b[32m\"resize\"\u001b[39m\u001b[33m+\u001b[39mp)})\u001b[33m,\u001b[39mw(\u001b[32m\"Resize\"\u001b[39m\u001b[33m+\u001b[39md\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mresizeImage)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39misLowIE\u001b[33m&&\u001b[39mw(\u001b[32m\"AfterChange\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mresizeImage)}\u001b[33m,\u001b[39mresizeImage\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mcurrItem\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(a\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mimg\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mimage\u001b[33m.\u001b[39mverticalFit){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mb\u001b[33m.\u001b[39misLowIE\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39mparseInt(a\u001b[33m.\u001b[39mimg\u001b[33m.\u001b[39mcss(\u001b[32m\"padding-top\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[35m10\u001b[39m)\u001b[33m+\u001b[39mparseInt(a\u001b[33m.\u001b[39mimg\u001b[33m.\u001b[39mcss(\u001b[32m\"padding-bottom\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[35m10\u001b[39m))\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mimg\u001b[33m.\u001b[39mcss(\u001b[32m\"max-height\"\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mwH\u001b[33m-\u001b[39mc)}}\u001b[33m,\u001b[39m_onImageHasSize\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39mimg\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39mhasSize\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[33mL\u001b[39m\u001b[33m&&\u001b[39mclearInterval(\u001b[33mL\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39misCheckingImgSize\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39my(\u001b[32m\"ImageHasSize\"\u001b[39m\u001b[33m,\u001b[39ma)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mimgHidden\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39mcontent\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mcontent\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"mfp-loading\"\u001b[39m)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mimgHidden\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m))}\u001b[33m,\u001b[39mfindImageSize\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mimg[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(f){\u001b[33mL\u001b[39m\u001b[33m&&\u001b[39mclearInterval(\u001b[33mL\u001b[39m)\u001b[33m,\u001b[39m\u001b[33mL\u001b[39m\u001b[33m=\u001b[39msetInterval(\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m d\u001b[33m.\u001b[39mnaturalWidth\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m?\u001b[39m\u001b[36mvoid\u001b[39m b\u001b[33m.\u001b[39m_onImageHasSize(a)\u001b[33m:\u001b[39m(c\u001b[33m>\u001b[39m\u001b[35m200\u001b[39m\u001b[33m&&\u001b[39mclearInterval(\u001b[33mL\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m++\u001b[39m\u001b[33m,\u001b[39m\u001b[36mvoid\u001b[39m(\u001b[35m3\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m?\u001b[39me(\u001b[35m10\u001b[39m)\u001b[33m:\u001b[39m\u001b[35m40\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m?\u001b[39me(\u001b[35m50\u001b[39m)\u001b[33m:\u001b[39m\u001b[35m100\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m&&\u001b[39me(\u001b[35m500\u001b[39m)))}\u001b[33m,\u001b[39mf)}\u001b[33m;\u001b[39me(\u001b[35m1\u001b[39m)}\u001b[33m,\u001b[39mgetImage\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(c\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){c\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39mimg[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mcomplete\u001b[33m?\u001b[39m(c\u001b[33m.\u001b[39mimg\u001b[33m.\u001b[39moff(\u001b[32m\".mfploader\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mcurrItem\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39m_onImageHasSize(c)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"ready\"\u001b[39m))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mhasSize\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mloaded\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39my(\u001b[32m\"ImageLoadComplete\"\u001b[39m))\u001b[33m:\u001b[39m(e\u001b[33m++\u001b[39m\u001b[33m,\u001b[39m\u001b[35m200\u001b[39m\u001b[33m>\u001b[39me\u001b[33m?\u001b[39msetTimeout(f\u001b[33m,\u001b[39m\u001b[35m100\u001b[39m)\u001b[33m:\u001b[39mg()))}\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){c\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39mimg\u001b[33m.\u001b[39moff(\u001b[32m\".mfploader\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mcurrItem\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39m_onImageHasSize(c)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"error\"\u001b[39m\u001b[33m,\u001b[39mh\u001b[33m.\u001b[39mtError\u001b[33m.\u001b[39mreplace(\u001b[32m\"%url%\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39msrc)))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mhasSize\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mloaded\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mloadError\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)}\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mimage\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mfind(\u001b[32m\".mfp-img\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(i\u001b[33m.\u001b[39mlength){\u001b[36mvar\u001b[39m j\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"img\"\u001b[39m)\u001b[33m;\u001b[39mj\u001b[33m.\u001b[39mclassName\u001b[33m=\u001b[39m\u001b[32m\"mfp-img\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mel\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mel\u001b[33m.\u001b[39mfind(\u001b[32m\"img\"\u001b[39m)\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m(j\u001b[33m.\u001b[39malt\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mel\u001b[33m.\u001b[39mfind(\u001b[32m\"img\"\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"alt\"\u001b[39m))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mimg\u001b[33m=\u001b[39ma(j)\u001b[33m.\u001b[39mon(\u001b[32m\"load.mfploader\"\u001b[39m\u001b[33m,\u001b[39mf)\u001b[33m.\u001b[39mon(\u001b[32m\"error.mfploader\"\u001b[39m\u001b[33m,\u001b[39mg)\u001b[33m,\u001b[39mj\u001b[33m.\u001b[39msrc\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39msrc\u001b[33m,\u001b[39mi\u001b[33m.\u001b[39mis(\u001b[32m\"img\"\u001b[39m)\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39mimg\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mimg\u001b[33m.\u001b[39mclone())\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mimg[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39mj\u001b[33m.\u001b[39mnaturalWidth\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39mhasSize\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m:\u001b[39mj\u001b[33m.\u001b[39mwidth\u001b[33m||\u001b[39m(c\u001b[33m.\u001b[39mhasSize\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39m_parseMarkup(d\u001b[33m,\u001b[39m{title\u001b[33m:\u001b[39m\u001b[33mM\u001b[39m(c)\u001b[33m,\u001b[39mimg_replaceWith\u001b[33m:\u001b[39mc\u001b[33m.\u001b[39mimg}\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mresizeImage()\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mhasSize\u001b[33m?\u001b[39m(\u001b[33mL\u001b[39m\u001b[33m&&\u001b[39mclearInterval(\u001b[33mL\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mloadError\u001b[33m?\u001b[39m(d\u001b[33m.\u001b[39maddClass(\u001b[32m\"mfp-loading\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"error\"\u001b[39m\u001b[33m,\u001b[39mh\u001b[33m.\u001b[39mtError\u001b[33m.\u001b[39mreplace(\u001b[32m\"%url%\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39msrc)))\u001b[33m:\u001b[39m(d\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"mfp-loading\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"ready\"\u001b[39m))\u001b[33m,\u001b[39md)\u001b[33m:\u001b[39m(b\u001b[33m.\u001b[39mupdateStatus(\u001b[32m\"loading\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mloading\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mhasSize\u001b[33m||\u001b[39m(c\u001b[33m.\u001b[39mimgHidden\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39md\u001b[33m.\u001b[39maddClass(\u001b[32m\"mfp-loading\"\u001b[39m)\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mfindImageSize(c))\u001b[33m,\u001b[39md)}}})\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m \u001b[33mN\u001b[39m\u001b[33m,\u001b[39m\u001b[33mO\u001b[39m\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m===\u001b[39m\u001b[33mN\u001b[39m\u001b[33m&&\u001b[39m(\u001b[33mN\u001b[39m\u001b[33m=\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39mdocument\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"p\"\u001b[39m)\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39m\u001b[33mMozTransform\u001b[39m)\u001b[33m,\u001b[39m\u001b[33mN\u001b[39m}\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mmagnificPopup\u001b[33m.\u001b[39mregisterModule(\u001b[32m\"zoom\"\u001b[39m\u001b[33m,\u001b[39m{options\u001b[33m:\u001b[39m{enabled\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39measing\u001b[33m:\u001b[39m\u001b[32m\"ease-in-out\"\u001b[39m\u001b[33m,\u001b[39mduration\u001b[33m:\u001b[39m\u001b[35m300\u001b[39m\u001b[33m,\u001b[39mopener\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mis(\u001b[32m\"img\"\u001b[39m)\u001b[33m?\u001b[39ma\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mfind(\u001b[32m\"img\"\u001b[39m)}}\u001b[33m,\u001b[39mproto\u001b[33m:\u001b[39m{initZoom\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mst\u001b[33m.\u001b[39mzoom\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[32m\".zoom\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(c\u001b[33m.\u001b[39menabled\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39msupportsTransition){\u001b[36mvar\u001b[39m e\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mduration\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mclone()\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"style\"\u001b[39m)\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"class\"\u001b[39m)\u001b[33m.\u001b[39maddClass(\u001b[32m\"mfp-animated-image\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[32m\"all \"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39mduration\u001b[35m/1e3+\"s \"+c.easing,e={position:\"fixed\",zIndex:9999,left:0,top:0,\"-webkit-backface-visibility\":\"hidden\"},f=\"transition\";return e[\"-webkit-\"+f]=e[\"-moz-\"+f]=e[\"-o-\"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css(\"visibility\",\"visible\")};w(\"BuildControls\"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css(\"visibility\",\"hidden\"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y(\"ZoomAnimationEnded\")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css(\"visibility\",\"hidden\"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return\"image\"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css(\"padding-top\"),10),g=parseInt(d.css(\"padding-bottom\"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h[\"-moz-transform\"]=h.transform=\"translate(\"+e.left+\"px,\"+e.top+\"px)\":(h.left=e.left,h.top=e.top),h}}});var P=\"iframe\",Q=\"/\u001b[39m\u001b[33m/\u001b[39mabout\u001b[33m:\u001b[39mblank\u001b[32m\",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find(\"\u001b[39miframe\u001b[32m\");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css(\"\u001b[39mdisplay\u001b[32m\",a?\"\u001b[39mblock\u001b[32m\":\"\u001b[39mnone\u001b[32m\"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class=\"\u001b[39mmfp\u001b[33m-\u001b[39miframe\u001b[33m-\u001b[39mscaler\u001b[32m\"><div class=\"\u001b[39mmfp\u001b[33m-\u001b[39mclose\u001b[32m\"></div><iframe class=\"\u001b[39mmfp\u001b[33m-\u001b[39miframe\u001b[32m\" src=\"\u001b[39m\u001b[90m//about:blank\" frameborder=\"0\" allowfullscreen></iframe></div>',srcAction:\"iframe_src\",patterns:{youtube:{index:\"youtube.com\",id:\"v=\",src:\"//www.youtube.com/embed/%id%?autoplay=1\"},vimeo:{index:\"vimeo.com/\",id:\"/\",src:\"//player.vimeo.com/video/%id%?autoplay=1\"},gmaps:{index:\"//maps.google.\",src:\"%id%&output=embed\"}}},proto:{initIframe:function(){b.types.push(P),w(\"BeforeChange\",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+\".\"+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e=\"string\"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace(\"%id%\",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus(\"ready\"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule(\"gallery\",{options:{enabled:!1,arrowMarkup:'<button title=\"%title%\" type=\"button\" class=\"mfp-arrow mfp-arrow-%dir%\"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:\"Previous (Left arrow key)\",tNext:\"Next (Right arrow key)\",tCounter:\"%curr% of %total%\"},proto:{initGallery:function(){var c=b.st.gallery,e=\".mfp-gallery\";return b.direction=!0,c&&c.enabled?(f+=\" mfp-gallery\",w(m+e,function(){c.navigateByImgClick&&b.wrap.on(\"click\"+e,\".mfp-img\",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on(\"keydown\"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w(\"UpdateStatus\"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):\"\"}),w(\"BuildControls\"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,\"left\")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,\"right\")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off(\"click\"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y(\"LazyLoad\",d),\"image\"===d.type&&(d.img=a('<img class=\"mfp-img\" />').on(\"load.mfploader\",function(){d.hasSize=!0}).on(\"error.mfploader\",function(){d.hasSize=!0,d.loadError=!0,y(\"LazyLoadError\",d)}).attr(\"src\",d.src)),d.preloaded=!0}}}});var U=\"retina\";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\\.\\w+$/,function(a){return\"@2x\"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w(\"ImageHasSize.\"+U,function(a,b){b.img.css({\"max-width\":b.img[0].naturalWidth/c,width:\"100%\"})}),w(\"ElementParse.\"+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at raise (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:6325:17)\n    at unexpected (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:7642:16)\n    at expect (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:7628:28)\n    at parseObj (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9150:14)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8784:28)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:3601:20)\n    at parseExprSubscripts (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8412:23)\n    at parseMaybeUnary (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8392:21)\n    at parseExprOps (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8267:23)\n    at parseMaybeConditional (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8240:23)\n    at parseMaybeAssign (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8187:21)\n    at parseExpression (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8135:23)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9958:23)\n    at parseStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9829:17)\n    at parseIfStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:10183:28)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9874:21)");

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/glebsimdyankin/Documents/work/redsoft/src/scripts/libs/jquery.mask.min.js: Unexpected keyword 'var' (3:118)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[90m// jQuery Mask Plugin v1.14.10\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[90m// github.com/igorescobar/jQuery-Mask-Plugin\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m\u001b[36mvar\u001b[39m $jscomp\u001b[33m=\u001b[39m{scope\u001b[33m:\u001b[39m{}\u001b[33m,\u001b[39mfindInternal\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mc){a \u001b[36minstanceof\u001b[39m \u001b[33mString\u001b[39m\u001b[33m&&\u001b[39m(a\u001b[33m=\u001b[39m\u001b[33mString\u001b[39m(a))\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m l\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mlength\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mg\u001b[33m<\u001b[39m\u001b[33ml\u001b[39m\u001b[33m;\u001b[39mg\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39ma[g]\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(f\u001b[33m.\u001b[39mcall(c\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39ma))\u001b[36mreturn\u001b[39m{i\u001b[33m:\u001b[39mg\u001b[33m,\u001b[39mv\u001b[33m:\u001b[39mb}}\u001b[36mreturn\u001b[39m{i\u001b[33m:\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mv\u001b[33m:\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m}}}\u001b[33m;\u001b[39m$jscomp\u001b[33m.\u001b[39mdefineProperty\u001b[33m=\u001b[39m\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m \u001b[33mObject\u001b[39m\u001b[33m.\u001b[39mdefineProperties\u001b[33m?\u001b[39m\u001b[33mObject\u001b[39m\u001b[33m.\u001b[39mdefineProperty\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mc){\u001b[36mif\u001b[39m(c\u001b[33m.\u001b[39mget\u001b[33m||\u001b[39mc\u001b[33m.\u001b[39mset)\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mTypeError\u001b[39m(\u001b[32m\"ES3 does not support getters and setters.\"\u001b[39m)\u001b[33m;\u001b[39ma\u001b[33m!=\u001b[39m\u001b[33mArray\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m&&\u001b[39ma\u001b[33m!=\u001b[39m\u001b[33mObject\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m&&\u001b[39m(a[f]\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mvalue)}\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                                                                                                                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m$jscomp\u001b[33m.\u001b[39mgetGlobal\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m\u001b[32m\"undefined\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m window\u001b[33m&&\u001b[39mwindow\u001b[33m===\u001b[39ma\u001b[33m?\u001b[39ma\u001b[33m:\u001b[39m\u001b[32m\"undefined\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m global\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mglobal\u001b[33m?\u001b[39mglobal\u001b[33m:\u001b[39ma}\u001b[33m;\u001b[39m$jscomp\u001b[33m.\u001b[39mglobal\u001b[33m=\u001b[39m$jscomp\u001b[33m.\u001b[39mgetGlobal(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m$jscomp\u001b[33m.\u001b[39mpolyfill\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39ml){\u001b[36mif\u001b[39m(f){c\u001b[33m=\u001b[39m$jscomp\u001b[33m.\u001b[39mglobal\u001b[33m;\u001b[39ma\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39msplit(\u001b[32m\".\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(l\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39ml\u001b[33m<\u001b[39m\u001b[33ma\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m;\u001b[39ml\u001b[33m++\u001b[39m){\u001b[36mvar\u001b[39m g\u001b[33m=\u001b[39ma[l]\u001b[33m;\u001b[39mg \u001b[36min\u001b[39m c\u001b[33m||\u001b[39m(c[g]\u001b[33m=\u001b[39m{})\u001b[33m;\u001b[39mc\u001b[33m=\u001b[39mc[g]}a\u001b[33m=\u001b[39ma[a\u001b[33m.\u001b[39mlength\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m]\u001b[33m;\u001b[39ml\u001b[33m=\u001b[39mc[a]\u001b[33m;\u001b[39mf\u001b[33m=\u001b[39mf(l)\u001b[33m;\u001b[39mf\u001b[33m!=\u001b[39ml\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mf\u001b[33m&&\u001b[39m$jscomp\u001b[33m.\u001b[39mdefineProperty(c\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39m{configurable\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mwritable\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mvalue\u001b[33m:\u001b[39mf})}}\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m$jscomp\u001b[33m.\u001b[39mpolyfill(\u001b[32m\"Array.prototype.find\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a\u001b[33m?\u001b[39ma\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m $jscomp\u001b[33m.\u001b[39mfindInternal(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39mc)\u001b[33m.\u001b[39mv}}\u001b[33m,\u001b[39m\u001b[32m\"es6-impl\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"es3\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m(\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mc){\u001b[32m\"function\"\u001b[39m\u001b[33m===\u001b[39m\u001b[36mtypeof\u001b[39m define\u001b[33m&&\u001b[39mdefine\u001b[33m.\u001b[39mamd\u001b[33m?\u001b[39mdefine([\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39ma)\u001b[33m:\u001b[39m\u001b[32m\"object\"\u001b[39m\u001b[33m===\u001b[39m\u001b[36mtypeof\u001b[39m exports\u001b[33m?\u001b[39mmodule\u001b[33m.\u001b[39mexports\u001b[33m=\u001b[39ma(require(\u001b[32m\"jquery\"\u001b[39m))\u001b[33m:\u001b[39ma(f\u001b[33m||\u001b[39mc)})(\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mh\u001b[33m,\u001b[39me){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m{invalid\u001b[33m:\u001b[39m[]\u001b[33m,\u001b[39mgetCaret\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mtry\u001b[39m{\u001b[36mvar\u001b[39m a\u001b[33m,\u001b[39mn\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mget(\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mdocument\u001b[33m.\u001b[39mselection\u001b[33m,\u001b[39mk\u001b[33m=\u001b[39mh\u001b[33m.\u001b[39mselectionStart\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(e\u001b[33m&&\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m===\u001b[39mnavigator\u001b[33m.\u001b[39mappVersion\u001b[33m.\u001b[39mindexOf(\u001b[32m\"MSIE 10\"\u001b[39m))a\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mcreateRange()\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mmoveStart(\u001b[32m\"character\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m-\u001b[39md\u001b[33m.\u001b[39mval()\u001b[33m.\u001b[39mlength)\u001b[33m,\u001b[39mn\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mtext\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(k\u001b[33m||\u001b[39m\u001b[32m\"0\"\u001b[39m\u001b[33m===\u001b[39mk)n\u001b[33m=\u001b[39mk\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m n}\u001b[36mcatch\u001b[39m(\u001b[33mA\u001b[39m){}}\u001b[33m,\u001b[39msetCaret\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mtry\u001b[39m{\u001b[36mif\u001b[39m(b\u001b[33m.\u001b[39mis(\u001b[32m\":focus\"\u001b[39m)){\u001b[36mvar\u001b[39m p\u001b[33m,\u001b[39m\u001b[0m\n    at raise (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:6325:17)\n    at checkReservedWord (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9546:12)\n    at parseObjectProperty (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9286:12)\n    at parseObjPropValue (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9306:101)\n    at parseObjectMember (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9230:10)\n    at parseObj (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9154:25)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8784:28)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:3601:20)\n    at parseExprSubscripts (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8412:23)\n    at parseMaybeUnary (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8392:21)\n    at parseExprOps (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8267:23)\n    at parseMaybeConditional (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8240:23)\n    at parseMaybeAssign (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8187:21)\n    at parseExpression (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8135:23)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9958:23)\n    at parseStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9829:17)");

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/glebsimdyankin/Documents/work/redsoft/src/scripts/libs/jquery.validate.js: Unexpected keyword 'var' (4:1445)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[90m * http://jqueryvalidation.org/\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[90m * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[33m!\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m define\u001b[33m&&\u001b[39mdefine\u001b[33m.\u001b[39mamd\u001b[33m?\u001b[39mdefine([\u001b[32m\"jquery\"\u001b[39m]\u001b[33m,\u001b[39ma)\u001b[33m:\u001b[39m\u001b[32m\"object\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m module\u001b[33m&&\u001b[39mmodule\u001b[33m.\u001b[39mexports\u001b[33m?\u001b[39mmodule\u001b[33m.\u001b[39mexports\u001b[33m=\u001b[39ma(require(\u001b[32m\"jquery\"\u001b[39m))\u001b[33m:\u001b[39ma(jQuery)}(\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39mextend(a\u001b[33m.\u001b[39mfn\u001b[33m,\u001b[39m{validate\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlength)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m(b\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mdebug\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mwarn(\u001b[32m\"Nothing selected, can't validate, returning nothing.\"\u001b[39m))\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mdata(\u001b[36mthis\u001b[39m[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"validator\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m?\u001b[39mc\u001b[33m:\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mattr(\u001b[32m\"novalidate\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"novalidate\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m a\u001b[33m.\u001b[39mvalidator(b\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m[\u001b[35m0\u001b[39m])\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mdata(\u001b[36mthis\u001b[39m[\u001b[35m0\u001b[39m]\u001b[33m,\u001b[39m\u001b[32m\"validator\"\u001b[39m\u001b[33m,\u001b[39mc)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39monsubmit\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"click.validate\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\":submit\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b){c\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39msubmitHandler\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39msubmitButton\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mtarget)\u001b[33m,\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mhasClass(\u001b[32m\"cancel\"\u001b[39m)\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39mcancelSubmit\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"formnovalidate\"\u001b[39m)\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39mcancelSubmit\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mon(\u001b[32m\"submit.validate\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mfunction\u001b[39m d(){\u001b[36mvar\u001b[39m d\u001b[33m,\u001b[39me\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39msubmitHandler\u001b[33m?\u001b[39m(c\u001b[33m.\u001b[39msubmitButton\u001b[33m&&\u001b[39m(d\u001b[33m=\u001b[39ma(\u001b[32m\"<input type='hidden'/>\"\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"name\"\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39msubmitButton\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39mval(a(c\u001b[33m.\u001b[39msubmitButton)\u001b[33m.\u001b[39mval())\u001b[33m.\u001b[39mappendTo(c\u001b[33m.\u001b[39mcurrentForm))\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39msubmitHandler\u001b[33m.\u001b[39mcall(c\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mcurrentForm\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39msubmitButton\u001b[33m&&\u001b[39md\u001b[33m.\u001b[39mremove()\u001b[33m,\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39me\u001b[33m?\u001b[39me\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mdebug\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mpreventDefault()\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mcancelSubmit\u001b[33m?\u001b[39m(c\u001b[33m.\u001b[39mcancelSubmit\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39md())\u001b[33m:\u001b[39mc\u001b[33m.\u001b[39mform()\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39mpendingRequest\u001b[33m?\u001b[39m(c\u001b[33m.\u001b[39mformSubmitted\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m:\u001b[39md()\u001b[33m:\u001b[39m(c\u001b[33m.\u001b[39mfocusInvalid()\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)}))\u001b[33m,\u001b[39mc)}\u001b[33m,\u001b[39mvalid\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m a(\u001b[36mthis\u001b[39m[\u001b[35m0\u001b[39m])\u001b[33m.\u001b[39mis(\u001b[32m\"form\"\u001b[39m)\u001b[33m?\u001b[39mb\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mvalidate()\u001b[33m.\u001b[39mform()\u001b[33m:\u001b[39m(d\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mform)\u001b[33m.\u001b[39mvalidate()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39meach(\u001b[36mfunction\u001b[39m(){b\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39melement(\u001b[36mthis\u001b[39m)\u001b[33m&&\u001b[39mb\u001b[33m,\u001b[39mb\u001b[33m||\u001b[39m(d\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mconcat(c\u001b[33m.\u001b[39merrorList))})\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39merrorList\u001b[33m=\u001b[39md)\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39mrules\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlength){\u001b[36mvar\u001b[39m d\u001b[33m,\u001b[39me\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mh\u001b[33m,\u001b[39mi\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m[\u001b[35m0\u001b[39m]\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(b)\u001b[36mswitch\u001b[39m(d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mdata(j\u001b[33m.\u001b[39mform\u001b[33m,\u001b[39m\u001b[32m\"validator\"\u001b[39m)\u001b[33m.\u001b[39msettings\u001b[33m,\u001b[39me\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mrules\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mstaticRules(j)\u001b[33m,\u001b[39mb){\u001b[36mcase\u001b[39m\u001b[32m\"add\"\u001b[39m\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mextend(f\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mnormalizeRule(c))\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m f\u001b[33m.\u001b[39mmessages\u001b[33m,\u001b[39me[j\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39mf\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mmessages\u001b[33m&&\u001b[39m(d\u001b[33m.\u001b[39mmessages[j\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(d\u001b[33m.\u001b[39mmessages[j\u001b[33m.\u001b[39mname]\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mmessages))\u001b[33m;\u001b[39m\u001b[36mbreak\u001b[39m\u001b[33m;\u001b[39m\u001b[36mcase\u001b[39m\u001b[32m\"remove\"\u001b[39m\u001b[33m:\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m?\u001b[39m(i\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach(c\u001b[33m.\u001b[39msplit(\u001b[35m/\\s/\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){i[c]\u001b[33m=\u001b[39mf[c]\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m f[c]\u001b[33m,\u001b[39m\u001b[32m\"required\"\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m&&\u001b[39ma(j)\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"aria-required\"\u001b[39m)})\u001b[33m,\u001b[39mi)\u001b[33m:\u001b[39m(\u001b[36mdelete\u001b[39m e[j\u001b[33m.\u001b[39mname]\u001b[33m,\u001b[39mf)}\u001b[36mreturn\u001b[39m g\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mnormalizeRules(a\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mclassRules(j)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mattributeRules(j)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mdataRules(j)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mstaticRules(j))\u001b[33m,\u001b[39mj)\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39mrequired\u001b[33m&&\u001b[39m(h\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39mrequired\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m g\u001b[33m.\u001b[39mrequired\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend({required\u001b[33m:\u001b[39mh}\u001b[33m,\u001b[39mg)\u001b[33m,\u001b[39ma(j)\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-required\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m))\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39mremote\u001b[33m&&\u001b[39m(h\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39mremote\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m g\u001b[33m.\u001b[39mremote\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(g\u001b[33m,\u001b[39m{remote\u001b[33m:\u001b[39mh}))\u001b[33m,\u001b[39mg}}})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mextend(a\u001b[33m.\u001b[39mexpr[\u001b[32m\":\"\u001b[39m]\u001b[33m,\u001b[39m{blank\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39ma\u001b[33m.\u001b[39mtrim(\u001b[32m\"\"\u001b[39m\u001b[33m+\u001b[39ma(b)\u001b[33m.\u001b[39mval())}\u001b[33m,\u001b[39mfilled\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ma(b)\u001b[33m.\u001b[39mval()\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m!==\u001b[39mc\u001b[33m&&\u001b[39m\u001b[33m!\u001b[39m\u001b[33m!\u001b[39ma\u001b[33m.\u001b[39mtrim(\u001b[32m\"\"\u001b[39m\u001b[33m+\u001b[39mc)}\u001b[33m,\u001b[39munchecked\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39ma(b)\u001b[33m.\u001b[39mprop(\u001b[32m\"checked\"\u001b[39m)}})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mdefaults\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minit()}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m \u001b[35m1\u001b[39m\u001b[33m===\u001b[39marguments\u001b[33m.\u001b[39mlength\u001b[33m?\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mmakeArray(arguments)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m.\u001b[39munshift(b)\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc)}\u001b[33m:\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m?\u001b[39mb\u001b[33m:\u001b[39m(arguments\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m2\u001b[39m\u001b[33m&&\u001b[39mc\u001b[33m.\u001b[39mconstructor\u001b[33m!==\u001b[39m\u001b[33mArray\u001b[39m\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mmakeArray(arguments)\u001b[33m.\u001b[39mslice(\u001b[35m1\u001b[39m))\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mconstructor\u001b[33m!==\u001b[39m\u001b[33mArray\u001b[39m\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39m[c])\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach(c\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc){b\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mreplace(\u001b[36mnew\u001b[39m \u001b[33mRegExp\u001b[39m(\u001b[32m\"\\\\{\"\u001b[39m\u001b[33m+\u001b[39ma\u001b[33m+\u001b[39m\u001b[32m\"\\\\}\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"g\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m c})})\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mextend(a\u001b[33m.\u001b[39mvalidator\u001b[33m,\u001b[39m{defaults\u001b[33m:\u001b[39m{messages\u001b[33m:\u001b[39m{}\u001b[33m,\u001b[39mgroups\u001b[33m:\u001b[39m{}\u001b[33m,\u001b[39mrules\u001b[33m:\u001b[39m{}\u001b[33m,\u001b[39merrorClass\u001b[33m:\u001b[39m\u001b[32m\"error\"\u001b[39m\u001b[33m,\u001b[39mpendingClass\u001b[33m:\u001b[39m\u001b[32m\"pending\"\u001b[39m\u001b[33m,\u001b[39mvalidClass\u001b[33m:\u001b[39m\u001b[32m\"valid\"\u001b[39m\u001b[33m,\u001b[39merrorElement\u001b[33m:\u001b[39m\u001b[32m\"label\"\u001b[39m\u001b[33m,\u001b[39mfocusCleanup\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mfocusInvalid\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39merrorContainer\u001b[33m:\u001b[39ma([])\u001b[33m,\u001b[39merrorLabelContainer\u001b[33m:\u001b[39ma([])\u001b[33m,\u001b[39monsubmit\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mignore\u001b[33m:\u001b[39m\u001b[32m\":hidden\"\u001b[39m\u001b[33m,\u001b[39mignoreTitle\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39monfocusin\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlastActive\u001b[33m=\u001b[39ma\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mfocusCleanup\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39munhighlight\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39munhighlight\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorClass\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mvalidClass)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhideThese(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorsFor(a)))}\u001b[33m,\u001b[39monfocusout\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcheckable(a)\u001b[33m||\u001b[39m\u001b[33m!\u001b[39m(a\u001b[33m.\u001b[39mname \u001b[36min\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmitted)\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(a)\u001b[33m||\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melement(a)}\u001b[33m,\u001b[39monkeyup\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m[\u001b[35m16\u001b[39m\u001b[33m,\u001b[39m\u001b[35m17\u001b[39m\u001b[33m,\u001b[39m\u001b[35m18\u001b[39m\u001b[33m,\u001b[39m\u001b[35m20\u001b[39m\u001b[33m,\u001b[39m\u001b[35m35\u001b[39m\u001b[33m,\u001b[39m\u001b[35m36\u001b[39m\u001b[33m,\u001b[39m\u001b[35m37\u001b[39m\u001b[33m,\u001b[39m\u001b[35m38\u001b[39m\u001b[33m,\u001b[39m\u001b[35m39\u001b[39m\u001b[33m,\u001b[39m\u001b[35m40\u001b[39m\u001b[33m,\u001b[39m\u001b[35m45\u001b[39m\u001b[33m,\u001b[39m\u001b[35m144\u001b[39m\u001b[33m,\u001b[39m\u001b[35m225\u001b[39m]\u001b[33m;\u001b[39m\u001b[35m9\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39mwhich\u001b[33m&&\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m===\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melementValue(b)\u001b[33m||\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m!==\u001b[39ma\u001b[33m.\u001b[39minArray(c\u001b[33m.\u001b[39mkeyCode\u001b[33m,\u001b[39md)\u001b[33m||\u001b[39m(b\u001b[33m.\u001b[39mname \u001b[36min\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmitted\u001b[33m||\u001b[39mb\u001b[33m.\u001b[39mname \u001b[36min\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalid)\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melement(b)}\u001b[33m,\u001b[39monclick\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39mname \u001b[36min\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmitted\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melement(a)\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mparentNode\u001b[33m.\u001b[39mname \u001b[36min\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmitted\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melement(a\u001b[33m.\u001b[39mparentNode)}\u001b[33m,\u001b[39mhighlight\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[32m\"radio\"\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mtype\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfindByName(b\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39maddClass(c)\u001b[33m.\u001b[39mremoveClass(d)\u001b[33m:\u001b[39ma(b)\u001b[33m.\u001b[39maddClass(c)\u001b[33m.\u001b[39mremoveClass(d)}\u001b[33m,\u001b[39munhighlight\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[32m\"radio\"\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mtype\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfindByName(b\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39mremoveClass(c)\u001b[33m.\u001b[39maddClass(d)\u001b[33m:\u001b[39ma(b)\u001b[33m.\u001b[39mremoveClass(c)\u001b[33m.\u001b[39maddClass(d)}}\u001b[33m,\u001b[39msetDefaults\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){a\u001b[33m.\u001b[39mextend(a\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mdefaults\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39mmessages\u001b[33m:\u001b[39m{required\u001b[33m:\u001b[39m\u001b[32m\"This field is required.\"\u001b[39m\u001b[33m,\u001b[39mremote\u001b[33m:\u001b[39m\u001b[32m\"Please fix this field.\"\u001b[39m\u001b[33m,\u001b[39memail\u001b[33m:\u001b[39m\u001b[32m\"Please enter a valid email address.\"\u001b[39m\u001b[33m,\u001b[39murl\u001b[33m:\u001b[39m\u001b[32m\"Please enter a valid URL.\"\u001b[39m\u001b[33m,\u001b[39mdate\u001b[33m:\u001b[39m\u001b[32m\"Please enter a valid date.\"\u001b[39m\u001b[33m,\u001b[39mdateISO\u001b[33m:\u001b[39m\u001b[32m\"Please enter a valid date ( ISO ).\"\u001b[39m\u001b[33m,\u001b[39mnumber\u001b[33m:\u001b[39m\u001b[32m\"Please enter a valid number.\"\u001b[39m\u001b[33m,\u001b[39mdigits\u001b[33m:\u001b[39m\u001b[32m\"Please enter only digits.\"\u001b[39m\u001b[33m,\u001b[39mequalTo\u001b[33m:\u001b[39m\u001b[32m\"Please enter the same value again.\"\u001b[39m\u001b[33m,\u001b[39mmaxlength\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat(\u001b[32m\"Please enter no more than {0} characters.\"\u001b[39m)\u001b[33m,\u001b[39mminlength\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat(\u001b[32m\"Please enter at least {0} characters.\"\u001b[39m)\u001b[33m,\u001b[39mrangelength\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat(\u001b[32m\"Please enter a value between {0} and {1} characters long.\"\u001b[39m)\u001b[33m,\u001b[39mrange\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat(\u001b[32m\"Please enter a value between {0} and {1}.\"\u001b[39m)\u001b[33m,\u001b[39mmax\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat(\u001b[32m\"Please enter a value less than or equal to {0}.\"\u001b[39m)\u001b[33m,\u001b[39mmin\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat(\u001b[32m\"Please enter a value greater than or equal to {0}.\"\u001b[39m)\u001b[33m,\u001b[39mstep\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat(\u001b[32m\"Please enter a multiple of {0}.\"\u001b[39m)}\u001b[33m,\u001b[39mautoCreateRanges\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mprototype\u001b[33m:\u001b[39m{init\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfunction\u001b[39m b(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mdata(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mform\u001b[33m,\u001b[39m\u001b[32m\"validator\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[32m\"on\"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m.\u001b[39mtype\u001b[33m.\u001b[39mreplace(\u001b[35m/^validate/\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39msettings\u001b[33m;\u001b[39me[d]\u001b[33m&&\u001b[39m\u001b[33m!\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mis(e\u001b[33m.\u001b[39mignore)\u001b[33m&&\u001b[39me[d]\u001b[33m.\u001b[39mcall(c\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb)}\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlabelContainer\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorLabelContainer)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorContext\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlabelContainer\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlabelContainer\u001b[33m||\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainers\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorContainer)\u001b[33m.\u001b[39madd(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorLabelContainer)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmitted\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mvalueCache\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpendingRequest\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpending\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalid\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mreset()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m c\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgroups\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39meach(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mgroups\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m c\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39msplit(\u001b[35m/\\s/\u001b[39m))\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach(c\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mc){d[c]\u001b[33m=\u001b[39mb})})\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mrules\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach(c\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39md){c[b]\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mnormalizeRule(d)})\u001b[33m,\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mon(\u001b[32m\"focusin.validate focusout.validate keyup.validate\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]\"\u001b[39m\u001b[33m,\u001b[39mb)\u001b[33m.\u001b[39mon(\u001b[32m\"click.validate\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"select, option, [type='radio'], [type='checkbox']\"\u001b[39m\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39minvalidHandler\u001b[33m&&\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mon(\u001b[32m\"invalid-form.validate\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39minvalidHandler)\u001b[33m,\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mfind(\u001b[32m\"[required], [data-rule-required], .required\"\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-required\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"true\"\u001b[39m)}\u001b[33m,\u001b[39mform\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcheckForm()\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmitted\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorMap)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalid\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mextend({}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorMap)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mvalid()\u001b[33m||\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mtriggerHandler(\u001b[32m\"invalid-form\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[36mthis\u001b[39m])\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mshowErrors()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mvalid()}\u001b[33m,\u001b[39mcheckForm\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprepareForm()\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentElements\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melements()\u001b[33m;\u001b[39mb[a]\u001b[33m;\u001b[39ma\u001b[33m++\u001b[39m)\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcheck(b[a])\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mvalid()}\u001b[33m,\u001b[39melement\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclean(b)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mvalidationTargetFor(e)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m===\u001b[39mf\u001b[33m?\u001b[39m\u001b[36mdelete\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalid[e\u001b[33m.\u001b[39mname]\u001b[33m:\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprepareElement(f)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentElements\u001b[33m=\u001b[39ma(f)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgroups[f\u001b[33m.\u001b[39mname]\u001b[33m,\u001b[39md\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39meach(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgroups\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){b\u001b[33m===\u001b[39md\u001b[33m&&\u001b[39ma\u001b[33m!==\u001b[39mf\u001b[33m.\u001b[39mname\u001b[33m&&\u001b[39m(e\u001b[33m=\u001b[39mg\u001b[33m.\u001b[39mvalidationTargetFor(g\u001b[33m.\u001b[39mclean(g\u001b[33m.\u001b[39mfindByName(a)))\u001b[33m,\u001b[39me\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39mname \u001b[36min\u001b[39m g\u001b[33m.\u001b[39minvalid\u001b[33m&&\u001b[39m(g\u001b[33m.\u001b[39mcurrentElements\u001b[33m.\u001b[39mpush(e)\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mh\u001b[33m&&\u001b[39mg\u001b[33m.\u001b[39mcheck(e)))})\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcheck(f)\u001b[33m!==\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39mh\u001b[33m&&\u001b[39mc\u001b[33m,\u001b[39mc\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalid[f\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalid[f\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mnumberOfInvalids()\u001b[33m||\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m.\u001b[39madd(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainers))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mshowErrors()\u001b[33m,\u001b[39ma(b)\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-invalid\"\u001b[39m\u001b[33m,\u001b[39m\u001b[33m!\u001b[39mc))\u001b[33m,\u001b[39mh}\u001b[33m,\u001b[39mshowErrors\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mif\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorMap\u001b[33m,\u001b[39mb)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mmap(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorMap\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m{message\u001b[33m:\u001b[39ma\u001b[33m,\u001b[39melement\u001b[33m:\u001b[39mc\u001b[33m.\u001b[39mfindByName(b)[\u001b[35m0\u001b[39m]}})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msuccessList\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mgrep(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msuccessList\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m(a\u001b[33m.\u001b[39mname \u001b[36min\u001b[39m b)})}\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mshowErrors\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mshowErrors\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorMap\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList)\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdefaultShowErrors()}\u001b[33m,\u001b[39mresetForm\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){a\u001b[33m.\u001b[39mfn\u001b[33m.\u001b[39mresetForm\u001b[33m&&\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mresetForm()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalid\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmitted\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprepareForm()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhideErrors()\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melements()\u001b[33m.\u001b[39mremoveData(\u001b[32m\"previousValue\"\u001b[39m)\u001b[33m.\u001b[39mremoveAttr(\u001b[32m\"aria-invalid\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresetElements(b)}\u001b[33m,\u001b[39mresetElements\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39munhighlight)\u001b[36mfor\u001b[39m(b\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39ma[b]\u001b[33m;\u001b[39mb\u001b[33m++\u001b[39m)\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39munhighlight\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39ma[b]\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorClass\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfindByName(a[b]\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39mremoveClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mvalidClass)\u001b[33m;\u001b[39m\u001b[36melse\u001b[39m a\u001b[33m.\u001b[39mremoveClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorClass)\u001b[33m.\u001b[39mremoveClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mvalidClass)}\u001b[33m,\u001b[39mnumberOfInvalids\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mobjectLength(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalid)}\u001b[33m,\u001b[39mobjectLength\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m b\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(b \u001b[36min\u001b[39m a)a[b]\u001b[33m&&\u001b[39mc\u001b[33m++\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c}\u001b[33m,\u001b[39mhideErrors\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhideThese(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide)}\u001b[33m,\u001b[39mhideThese\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){a\u001b[33m.\u001b[39mnot(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainers)\u001b[33m.\u001b[39mtext(\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39maddWrapper(a)\u001b[33m.\u001b[39mhide()}\u001b[33m,\u001b[39mvalid\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[35m0\u001b[39m\u001b[33m===\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msize()}\u001b[33m,\u001b[39msize\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList\u001b[33m.\u001b[39mlength}\u001b[33m,\u001b[39mfocusInvalid\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mfocusInvalid)\u001b[36mtry\u001b[39m{a(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfindLastActive()\u001b[33m||\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39melement\u001b[33m||\u001b[39m[])\u001b[33m.\u001b[39mfilter(\u001b[32m\":visible\"\u001b[39m)\u001b[33m.\u001b[39mfocus()\u001b[33m.\u001b[39mtrigger(\u001b[32m\"focusin\"\u001b[39m)}\u001b[36mcatch\u001b[39m(b){}}\u001b[33m,\u001b[39mfindLastActive\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlastActive\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m b\u001b[33m&&\u001b[39m\u001b[35m1\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mgrep(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39melement\u001b[33m.\u001b[39mname\u001b[33m===\u001b[39mb\u001b[33m.\u001b[39mname})\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39mb}\u001b[33m,\u001b[39melements\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m a(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mfind(\u001b[32m\"input, select, textarea, [contenteditable]\"\u001b[39m)\u001b[33m.\u001b[39mnot(\u001b[32m\":submit, :reset, :image, :disabled\"\u001b[39m)\u001b[33m.\u001b[39mnot(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mignore)\u001b[33m.\u001b[39mfilter(\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mname\u001b[33m||\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"name\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39md\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mdebug\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39merror(\u001b[32m\"%o has no name assigned\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhasAttribute(\u001b[32m\"contenteditable\"\u001b[39m)\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mform\u001b[33m=\u001b[39ma(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mclosest(\u001b[32m\"form\"\u001b[39m)[\u001b[35m0\u001b[39m])\u001b[33m,\u001b[39md \u001b[36min\u001b[39m c\u001b[33m||\u001b[39m\u001b[33m!\u001b[39mb\u001b[33m.\u001b[39mobjectLength(a(\u001b[36mthis\u001b[39m)\u001b[33m.\u001b[39mrules())\u001b[33m?\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m:\u001b[39m(c[d]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)})}\u001b[33m,\u001b[39mclean\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mreturn\u001b[39m a(b)[\u001b[35m0\u001b[39m]}\u001b[33m,\u001b[39merrors\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorClass\u001b[33m.\u001b[39msplit(\u001b[32m\" \"\u001b[39m)\u001b[33m.\u001b[39mjoin(\u001b[32m\".\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m a(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorElement\u001b[33m+\u001b[39m\u001b[32m\".\"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorContext)}\u001b[33m,\u001b[39mresetInternals\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msuccessList\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList\u001b[33m=\u001b[39m[]\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorMap\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoShow\u001b[33m=\u001b[39ma([])\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m=\u001b[39ma([])}\u001b[33m,\u001b[39mreset\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresetInternals()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentElements\u001b[33m=\u001b[39ma([])}\u001b[33m,\u001b[39mprepareForm\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mreset()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrors()\u001b[33m.\u001b[39madd(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainers)}\u001b[33m,\u001b[39mprepareElement\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mreset()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorsFor(a)}\u001b[33m,\u001b[39melementValue\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m=\u001b[39ma(b)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mtype\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[32m\"radio\"\u001b[39m\u001b[33m===\u001b[39mf\u001b[33m||\u001b[39m\u001b[32m\"checkbox\"\u001b[39m\u001b[33m===\u001b[39mf\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfindByName(b\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39mfilter(\u001b[32m\":checked\"\u001b[39m)\u001b[33m.\u001b[39mval()\u001b[33m:\u001b[39m\u001b[32m\"number\"\u001b[39m\u001b[33m===\u001b[39mf\u001b[33m&&\u001b[39m\u001b[32m\"undefined\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m b\u001b[33m.\u001b[39mvalidity\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mvalidity\u001b[33m.\u001b[39mbadInput\u001b[33m?\u001b[39m\u001b[32m\"NaN\"\u001b[39m\u001b[33m:\u001b[39me\u001b[33m.\u001b[39mval()\u001b[33m:\u001b[39m(c\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mhasAttribute(\u001b[32m\"contenteditable\"\u001b[39m)\u001b[33m?\u001b[39me\u001b[33m.\u001b[39mtext()\u001b[33m:\u001b[39me\u001b[33m.\u001b[39mval()\u001b[33m,\u001b[39m\u001b[32m\"file\"\u001b[39m\u001b[33m===\u001b[39mf\u001b[33m?\u001b[39m\u001b[32m\"C:\\\\fakepath\\\\\"\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39msubstr(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[35m12\u001b[39m)\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39msubstr(\u001b[35m12\u001b[39m)\u001b[33m:\u001b[39m(d\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mlastIndexOf(\u001b[32m\"/\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m>=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39msubstr(d\u001b[33m+\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m:\u001b[39m(d\u001b[33m=\u001b[39mc\u001b[33m.\u001b[39mlastIndexOf(\u001b[32m\"\\\\\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m>=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39msubstr(d\u001b[33m+\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m:\u001b[39mc))\u001b[33m:\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m c\u001b[33m?\u001b[39mc\u001b[33m.\u001b[39mreplace(\u001b[35m/\\r/g\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m:\u001b[39mc)}\u001b[33m,\u001b[39mcheck\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mvalidationTargetFor(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclean(b))\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m c\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39ma(b)\u001b[33m.\u001b[39mrules()\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mmap(f\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m b})\u001b[33m.\u001b[39mlength\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melementValue(b)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m f\u001b[33m.\u001b[39mnormalizer){\u001b[36mif\u001b[39m(i\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mnormalizer\u001b[33m.\u001b[39mcall(b\u001b[33m,\u001b[39mi)\u001b[33m,\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m!=\u001b[39m\u001b[36mtypeof\u001b[39m i)\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mTypeError\u001b[39m(\u001b[32m\"The normalizer should return a string value.\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mdelete\u001b[39m f\u001b[33m.\u001b[39mnormalizer}\u001b[36mfor\u001b[39m(d \u001b[36min\u001b[39m f){e\u001b[33m=\u001b[39m{method\u001b[33m:\u001b[39md\u001b[33m,\u001b[39mparameters\u001b[33m:\u001b[39mf[d]}\u001b[33m;\u001b[39m\u001b[36mtry\u001b[39m{\u001b[36mif\u001b[39m(c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mmethods[d]\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mi\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39me\u001b[33m.\u001b[39mparameters)\u001b[33m,\u001b[39m\u001b[32m\"dependency-mismatch\"\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m&&\u001b[39m\u001b[35m1\u001b[39m\u001b[33m===\u001b[39mg){h\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mcontinue\u001b[39m}\u001b[36mif\u001b[39m(h\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"pending\"\u001b[39m\u001b[33m===\u001b[39mc)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m.\u001b[39mnot(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorsFor(b)))\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mc)\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mformatAndAdd(b\u001b[33m,\u001b[39me)\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m}\u001b[36mcatch\u001b[39m(j){\u001b[36mthrow\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mdebug\u001b[33m&&\u001b[39mwindow\u001b[33m.\u001b[39mconsole\u001b[33m&&\u001b[39mconsole\u001b[33m.\u001b[39mlog(\u001b[32m\"Exception occurred when checking element \"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m.\u001b[39mid\u001b[33m+\u001b[39m\u001b[32m\", check the '\"\u001b[39m\u001b[33m+\u001b[39me\u001b[33m.\u001b[39mmethod\u001b[33m+\u001b[39m\u001b[32m\"' method.\"\u001b[39m\u001b[33m,\u001b[39mj)\u001b[33m,\u001b[39mj \u001b[36minstanceof\u001b[39m \u001b[33mTypeError\u001b[39m\u001b[33m&&\u001b[39m(j\u001b[33m.\u001b[39mmessage\u001b[33m+=\u001b[39m\u001b[32m\".  Exception occurred when checking element \"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m.\u001b[39mid\u001b[33m+\u001b[39m\u001b[32m\", check the '\"\u001b[39m\u001b[33m+\u001b[39me\u001b[33m.\u001b[39mmethod\u001b[33m+\u001b[39m\u001b[32m\"' method.\"\u001b[39m)\u001b[33m,\u001b[39mj}}\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mh)\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mobjectLength(f)\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msuccessList\u001b[33m.\u001b[39mpush(b)\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mcustomDataMessage\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m a(b)\u001b[33m.\u001b[39mdata(\u001b[32m\"msg\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39mcharAt(\u001b[35m0\u001b[39m)\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39msubstring(\u001b[35m1\u001b[39m)\u001b[33m.\u001b[39mtoLowerCase())\u001b[33m||\u001b[39ma(b)\u001b[33m.\u001b[39mdata(\u001b[32m\"msg\"\u001b[39m)}\u001b[33m,\u001b[39mcustomMessage\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mmessages[a]\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m c\u001b[33m&&\u001b[39m(c\u001b[33m.\u001b[39mconstructor\u001b[33m===\u001b[39m\u001b[33mString\u001b[39m\u001b[33m?\u001b[39mc\u001b[33m:\u001b[39mc[b])}\u001b[33m,\u001b[39mfindDefined\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m a\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39ma\u001b[33m<\u001b[39m\u001b[33marguments\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39ma\u001b[33m++\u001b[39m)\u001b[36mif\u001b[39m(\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39marguments[a])\u001b[36mreturn\u001b[39m arguments[a]}\u001b[33m,\u001b[39mdefaultMessage\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfindDefined(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcustomMessage(b\u001b[33m.\u001b[39mname\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mmethod)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcustomDataMessage(b\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mmethod)\u001b[33m,\u001b[39m\u001b[33m!\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mignoreTitle\u001b[33m&&\u001b[39mb\u001b[33m.\u001b[39mtitle\u001b[33m||\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mmessages[c\u001b[33m.\u001b[39mmethod]\u001b[33m,\u001b[39m\u001b[32m\"<strong>Warning: No message defined for \"\u001b[39m\u001b[33m+\u001b[39mb\u001b[33m.\u001b[39mname\u001b[33m+\u001b[39m\u001b[32m\"</strong>\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[35m/\\$?\\{(\\d+)\\}/g\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[32m\"function\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m d\u001b[33m?\u001b[39md\u001b[33m=\u001b[39md\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mparameters\u001b[33m,\u001b[39mb)\u001b[33m:\u001b[39me\u001b[33m.\u001b[39mtest(d)\u001b[33m&&\u001b[39m(d\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mformat(d\u001b[33m.\u001b[39mreplace(e\u001b[33m,\u001b[39m\u001b[32m\"{$1}\"\u001b[39m)\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mparameters))\u001b[33m,\u001b[39md}\u001b[33m,\u001b[39mformatAndAdd\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdefaultMessage(a\u001b[33m,\u001b[39mb)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList\u001b[33m.\u001b[39mpush({message\u001b[33m:\u001b[39mc\u001b[33m,\u001b[39melement\u001b[33m:\u001b[39ma\u001b[33m,\u001b[39mmethod\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mmethod})\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorMap[a\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmitted[a\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39mc}\u001b[33m,\u001b[39maddWrapper\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mwrapper\u001b[33m&&\u001b[39m(a\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39madd(a\u001b[33m.\u001b[39mparent(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mwrapper)))\u001b[33m,\u001b[39ma}\u001b[33m,\u001b[39mdefaultShowErrors\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(a\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList[a]\u001b[33m;\u001b[39ma\u001b[33m++\u001b[39m)c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList[a]\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mhighlight\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mhighlight\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39melement\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorClass\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mvalidClass)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mshowLabel(c\u001b[33m.\u001b[39melement\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mmessage)\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoShow\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoShow\u001b[33m.\u001b[39madd(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainers))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39msuccess)\u001b[36mfor\u001b[39m(a\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msuccessList[a]\u001b[33m;\u001b[39ma\u001b[33m++\u001b[39m)\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mshowLabel(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msuccessList[a])\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39munhighlight)\u001b[36mfor\u001b[39m(a\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mvalidElements()\u001b[33m;\u001b[39mb[a]\u001b[33m;\u001b[39ma\u001b[33m++\u001b[39m)\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39munhighlight\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mb[a]\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorClass\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mvalidClass)\u001b[33m;\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoHide\u001b[33m.\u001b[39mnot(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoShow)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhideErrors()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39maddWrapper(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoShow)\u001b[33m.\u001b[39mshow()}\u001b[33m,\u001b[39mvalidElements\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentElements\u001b[33m.\u001b[39mnot(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minvalidElements())}\u001b[33m,\u001b[39minvalidElements\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m a(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorList)\u001b[33m.\u001b[39mmap(\u001b[36mfunction\u001b[39m(){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melement})}\u001b[33m,\u001b[39mshowLabel\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mvar\u001b[39m d\u001b[33m,\u001b[39me\u001b[33m,\u001b[39mf\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorsFor(b)\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39midOrName(b)\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39ma(b)\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-describedby\"\u001b[39m)\u001b[33m;\u001b[39mh\u001b[33m.\u001b[39mlength\u001b[33m?\u001b[39m(h\u001b[33m.\u001b[39mremoveClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mvalidClass)\u001b[33m.\u001b[39maddClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorClass)\u001b[33m,\u001b[39mh\u001b[33m.\u001b[39mhtml(c))\u001b[33m:\u001b[39m(h\u001b[33m=\u001b[39ma(\u001b[32m\"<\"\u001b[39m\u001b[33m+\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorElement\u001b[33m+\u001b[39m\u001b[32m\">\"\u001b[39m)\u001b[33m.\u001b[39mattr(\u001b[32m\"id\"\u001b[39m\u001b[33m,\u001b[39mi\u001b[33m+\u001b[39m\u001b[32m\"-error\"\u001b[39m)\u001b[33m.\u001b[39maddClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorClass)\u001b[33m.\u001b[39mhtml(c\u001b[33m||\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39mh\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mwrapper\u001b[33m&&\u001b[39m(d\u001b[33m=\u001b[39mh\u001b[33m.\u001b[39mhide()\u001b[33m.\u001b[39mshow()\u001b[33m.\u001b[39mwrap(\u001b[32m\"<\"\u001b[39m\u001b[33m+\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mwrapper\u001b[33m+\u001b[39m\u001b[32m\"/>\"\u001b[39m)\u001b[33m.\u001b[39mparent())\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlabelContainer\u001b[33m.\u001b[39mlength\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlabelContainer\u001b[33m.\u001b[39mappend(d)\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorPlacement\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39merrorPlacement(d\u001b[33m,\u001b[39ma(b))\u001b[33m:\u001b[39md\u001b[33m.\u001b[39minsertAfter(b)\u001b[33m,\u001b[39mh\u001b[33m.\u001b[39mis(\u001b[32m\"label\"\u001b[39m)\u001b[33m?\u001b[39mh\u001b[33m.\u001b[39mattr(\u001b[32m\"for\"\u001b[39m\u001b[33m,\u001b[39mi)\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39mh\u001b[33m.\u001b[39mparents(\u001b[32m\"label[for='\"\u001b[39m\u001b[33m+\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mescapeCssMeta(i)\u001b[33m+\u001b[39m\u001b[32m\"']\"\u001b[39m)\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39m(f\u001b[33m=\u001b[39mh\u001b[33m.\u001b[39mattr(\u001b[32m\"id\"\u001b[39m)\u001b[33m,\u001b[39mj\u001b[33m?\u001b[39mj\u001b[33m.\u001b[39mmatch(\u001b[36mnew\u001b[39m \u001b[33mRegExp\u001b[39m(\u001b[32m\"\\\\b\"\u001b[39m\u001b[33m+\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mescapeCssMeta(f)\u001b[33m+\u001b[39m\u001b[32m\"\\\\b\"\u001b[39m))\u001b[33m||\u001b[39m(j\u001b[33m+=\u001b[39m\u001b[32m\" \"\u001b[39m\u001b[33m+\u001b[39mf)\u001b[33m:\u001b[39mj\u001b[33m=\u001b[39mf\u001b[33m,\u001b[39ma(b)\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-describedby\"\u001b[39m\u001b[33m,\u001b[39mj)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgroups[b\u001b[33m.\u001b[39mname]\u001b[33m,\u001b[39me\u001b[33m&&\u001b[39m(g\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach(g\u001b[33m.\u001b[39mgroups\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){c\u001b[33m===\u001b[39me\u001b[33m&&\u001b[39ma(\u001b[32m\"[name='\"\u001b[39m\u001b[33m+\u001b[39mg\u001b[33m.\u001b[39mescapeCssMeta(b)\u001b[33m+\u001b[39m\u001b[32m\"']\"\u001b[39m\u001b[33m,\u001b[39mg\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-describedby\"\u001b[39m\u001b[33m,\u001b[39mh\u001b[33m.\u001b[39mattr(\u001b[32m\"id\"\u001b[39m))}))))\u001b[33m,\u001b[39m\u001b[33m!\u001b[39mc\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39msuccess\u001b[33m&&\u001b[39m(h\u001b[33m.\u001b[39mtext(\u001b[32m\"\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39msuccess\u001b[33m?\u001b[39mh\u001b[33m.\u001b[39maddClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39msuccess)\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39msuccess(h\u001b[33m,\u001b[39mb))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoShow\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoShow\u001b[33m.\u001b[39madd(h)}\u001b[33m,\u001b[39merrorsFor\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mescapeCssMeta(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39midOrName(b))\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma(b)\u001b[33m.\u001b[39mattr(\u001b[32m\"aria-describedby\"\u001b[39m)\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m\u001b[32m\"label[for='\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m+\u001b[39m\u001b[32m\"'], label[for='\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m+\u001b[39m\u001b[32m\"'] *\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m d\u001b[33m&&\u001b[39m(e\u001b[33m=\u001b[39me\u001b[33m+\u001b[39m\u001b[32m\", #\"\u001b[39m\u001b[33m+\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mescapeCssMeta(d)\u001b[33m.\u001b[39mreplace(\u001b[35m/\\s+/g\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\", #\"\u001b[39m))\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrors()\u001b[33m.\u001b[39mfilter(e)}\u001b[33m,\u001b[39mescapeCssMeta\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mreplace(\u001b[35m/([\\\\!\"#$%&'()*+,./:;<=>?@\\[\\]^`{|}~])/g\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"\\\\$1\"\u001b[39m)}\u001b[33m,\u001b[39midOrName\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgroups[a\u001b[33m.\u001b[39mname]\u001b[33m||\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcheckable(a)\u001b[33m?\u001b[39ma\u001b[33m.\u001b[39mname\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mid\u001b[33m||\u001b[39ma\u001b[33m.\u001b[39mname)}\u001b[33m,\u001b[39mvalidationTargetFor\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcheckable(b)\u001b[33m&&\u001b[39m(b\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfindByName(b\u001b[33m.\u001b[39mname))\u001b[33m,\u001b[39ma(b)\u001b[33m.\u001b[39mnot(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mignore)[\u001b[35m0\u001b[39m]}\u001b[33m,\u001b[39mcheckable\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m\u001b[35m/radio|checkbox/i\u001b[39m\u001b[33m.\u001b[39mtest(a\u001b[33m.\u001b[39mtype)}\u001b[33m,\u001b[39mfindByName\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mreturn\u001b[39m a(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mfind(\u001b[32m\"[name='\"\u001b[39m\u001b[33m+\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mescapeCssMeta(b)\u001b[33m+\u001b[39m\u001b[32m\"']\"\u001b[39m)}\u001b[33m,\u001b[39mgetLength\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mswitch\u001b[39m(c\u001b[33m.\u001b[39mnodeName\u001b[33m.\u001b[39mtoLowerCase()){\u001b[36mcase\u001b[39m\u001b[32m\"select\"\u001b[39m\u001b[33m:\u001b[39m\u001b[36mreturn\u001b[39m a(\u001b[32m\"option:selected\"\u001b[39m\u001b[33m,\u001b[39mc)\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m\u001b[36mcase\u001b[39m\u001b[32m\"input\"\u001b[39m\u001b[33m:\u001b[39m\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcheckable(c))\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfindByName(c\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39mfilter(\u001b[32m\":checked\"\u001b[39m)\u001b[33m.\u001b[39mlength}\u001b[36mreturn\u001b[39m b\u001b[33m.\u001b[39mlength}\u001b[33m,\u001b[39mdepend\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdependTypes[\u001b[36mtypeof\u001b[39m a]\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdependTypes[\u001b[36mtypeof\u001b[39m a](a\u001b[33m,\u001b[39mb)\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mdependTypes\u001b[33m:\u001b[39m{\u001b[32m\"boolean\"\u001b[39m\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mreturn\u001b[39m a}\u001b[33m,\u001b[39mstring\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39m\u001b[33m!\u001b[39ma(b\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mform)\u001b[33m.\u001b[39mlength}\u001b[33m,\u001b[39m\u001b[32m\"function\"\u001b[39m\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m a(b)}}\u001b[33m,\u001b[39moptional\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melementValue(b)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[33m!\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mmethods\u001b[33m.\u001b[39mrequired\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39mb)\u001b[33m&&\u001b[39m\u001b[32m\"dependency-mismatch\"\u001b[39m}\u001b[33m,\u001b[39mstartRequest\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpending[b\u001b[33m.\u001b[39mname]\u001b[33m||\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpendingRequest\u001b[33m++\u001b[39m\u001b[33m,\u001b[39ma(b)\u001b[33m.\u001b[39maddClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mpendingClass)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpending[b\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)}\u001b[33m,\u001b[39mstopRequest\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpendingRequest\u001b[33m--\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpendingRequest\u001b[33m<\u001b[39m\u001b[35m0\u001b[39m\u001b[33m&&\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpendingRequest\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpending[b\u001b[33m.\u001b[39mname]\u001b[33m,\u001b[39ma(b)\u001b[33m.\u001b[39mremoveClass(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mpendingClass)\u001b[33m,\u001b[39mc\u001b[33m&&\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpendingRequest\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mformSubmitted\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mform()\u001b[33m?\u001b[39m(a(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39msubmit()\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mformSubmitted\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m:\u001b[39m\u001b[33m!\u001b[39mc\u001b[33m&&\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpendingRequest\u001b[33m&&\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mformSubmitted\u001b[33m&&\u001b[39m(a(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39mtriggerHandler(\u001b[32m\"invalid-form\"\u001b[39m\u001b[33m,\u001b[39m[\u001b[36mthis\u001b[39m])\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mformSubmitted\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)}\u001b[33m,\u001b[39mpreviousValue\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mdata(b\u001b[33m,\u001b[39m\u001b[32m\"previousValue\"\u001b[39m)\u001b[33m||\u001b[39ma\u001b[33m.\u001b[39mdata(b\u001b[33m,\u001b[39m\u001b[32m\"previousValue\"\u001b[39m\u001b[33m,\u001b[39m{old\u001b[33m:\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m,\u001b[39mvalid\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mmessage\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdefaultMessage(b\u001b[33m,\u001b[39m{method\u001b[33m:\u001b[39mc})})}\u001b[33m,\u001b[39mdestroy\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mresetForm()\u001b[33m,\u001b[39ma(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcurrentForm)\u001b[33m.\u001b[39moff(\u001b[32m\".validate\"\u001b[39m)\u001b[33m.\u001b[39mremoveData(\u001b[32m\"validator\"\u001b[39m)\u001b[33m.\u001b[39mfind(\u001b[32m\".validate-equalTo-blur\"\u001b[39m)\u001b[33m.\u001b[39moff(\u001b[32m\".validate-equalTo\"\u001b[39m)\u001b[33m.\u001b[39mremoveClass(\u001b[32m\"validate-equalTo-blur\"\u001b[39m)}}\u001b[33m,\u001b[39mclassRuleSettings\u001b[33m:\u001b[39m{required\u001b[33m:\u001b[39m{required\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39memail\u001b[33m:\u001b[39m{email\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39murl\u001b[33m:\u001b[39m{url\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mdate\u001b[33m:\u001b[39m{date\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mdateISO\u001b[33m:\u001b[39m{dateISO\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mnumber\u001b[33m:\u001b[39m{number\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mdigits\u001b[33m:\u001b[39m{digits\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mcreditcard\u001b[33m:\u001b[39m{creditcard\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m}}\u001b[33m,\u001b[39maddClassRules\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){b\u001b[33m.\u001b[39mconstructor\u001b[33m===\u001b[39m\u001b[33mString\u001b[39m\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclassRuleSettings[b]\u001b[33m=\u001b[39mc\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mextend(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mclassRuleSettings\u001b[33m,\u001b[39mb)}\u001b[33m,\u001b[39mclassRules\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma(b)\u001b[33m.\u001b[39mattr(\u001b[32m\"class\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m d\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39meach(d\u001b[33m.\u001b[39msplit(\u001b[32m\" \"\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mthis\u001b[39m \u001b[36min\u001b[39m a\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mclassRuleSettings\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mextend(c\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mclassRuleSettings[\u001b[36mthis\u001b[39m])})\u001b[33m,\u001b[39mc}\u001b[33m,\u001b[39mnormalizeAttributeRule\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[35m/min|max|step/\u001b[39m\u001b[33m.\u001b[39mtest(c)\u001b[33m&&\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m===\u001b[39mb\u001b[33m||\u001b[39m\u001b[35m/number|range|text/\u001b[39m\u001b[33m.\u001b[39mtest(b))\u001b[33m&&\u001b[39m(d\u001b[33m=\u001b[39m\u001b[33mNumber\u001b[39m(d)\u001b[33m,\u001b[39misNaN(d)\u001b[33m&&\u001b[39m(d\u001b[33m=\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m))\u001b[33m,\u001b[39md\u001b[33m||\u001b[39m\u001b[35m0\u001b[39m\u001b[33m===\u001b[39md\u001b[33m?\u001b[39ma[c]\u001b[33m=\u001b[39md\u001b[33m:\u001b[39mb\u001b[33m===\u001b[39mc\u001b[33m&&\u001b[39m\u001b[32m\"range\"\u001b[39m\u001b[33m!==\u001b[39mb\u001b[33m&&\u001b[39m(a[c]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)}\u001b[33m,\u001b[39mattributeRules\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39ma(b)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mgetAttribute(\u001b[32m\"type\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(c \u001b[36min\u001b[39m a\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mmethods)\u001b[32m\"required\"\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m?\u001b[39m(d\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mgetAttribute(c)\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m===\u001b[39md\u001b[33m&&\u001b[39m(d\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m)\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[33m!\u001b[39md)\u001b[33m:\u001b[39md\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mattr(c)\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mnormalizeAttributeRule(e\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m e\u001b[33m.\u001b[39mmaxlength\u001b[33m&&\u001b[39m\u001b[35m/-1|2147483647|524288/\u001b[39m\u001b[33m.\u001b[39mtest(e\u001b[33m.\u001b[39mmaxlength)\u001b[33m&&\u001b[39m\u001b[36mdelete\u001b[39m e\u001b[33m.\u001b[39mmaxlength\u001b[33m,\u001b[39me}\u001b[33m,\u001b[39mdataRules\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39ma(b)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mgetAttribute(\u001b[32m\"type\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mfor\u001b[39m(c \u001b[36min\u001b[39m a\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mmethods)d\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mdata(\u001b[32m\"rule\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39mcharAt(\u001b[35m0\u001b[39m)\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39msubstring(\u001b[35m1\u001b[39m)\u001b[33m.\u001b[39mtoLowerCase())\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mnormalizeAttributeRule(e\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m e}\u001b[33m,\u001b[39mstaticRules\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39md\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mdata(b\u001b[33m.\u001b[39mform\u001b[33m,\u001b[39m\u001b[32m\"validator\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m d\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mrules\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mnormalizeRule(d\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mrules[b\u001b[33m.\u001b[39mname])\u001b[33m||\u001b[39m{})\u001b[33m,\u001b[39mc}\u001b[33m,\u001b[39mnormalizeRules\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39meach(b\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(d\u001b[33m,\u001b[39me){\u001b[36mif\u001b[39m(e\u001b[33m===\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m)\u001b[36mreturn\u001b[39m \u001b[36mvoid\u001b[39m \u001b[36mdelete\u001b[39m b[d]\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(e\u001b[33m.\u001b[39mparam\u001b[33m||\u001b[39me\u001b[33m.\u001b[39mdepends){\u001b[36mvar\u001b[39m f\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[36mswitch\u001b[39m(\u001b[36mtypeof\u001b[39m e\u001b[33m.\u001b[39mdepends){\u001b[36mcase\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m:\u001b[39mf\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[33m!\u001b[39ma(e\u001b[33m.\u001b[39mdepends\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mform)\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m\u001b[36mbreak\u001b[39m\u001b[33m;\u001b[39m\u001b[36mcase\u001b[39m\u001b[32m\"function\"\u001b[39m\u001b[33m:\u001b[39mf\u001b[33m=\u001b[39me\u001b[33m.\u001b[39mdepends\u001b[33m.\u001b[39mcall(c\u001b[33m,\u001b[39mc)}f\u001b[33m?\u001b[39mb[d]\u001b[33m=\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39me\u001b[33m.\u001b[39mparam\u001b[33m?\u001b[39me\u001b[33m.\u001b[39mparam\u001b[33m:\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m:\u001b[39m(a\u001b[33m.\u001b[39mdata(c\u001b[33m.\u001b[39mform\u001b[33m,\u001b[39m\u001b[32m\"validator\"\u001b[39m)\u001b[33m.\u001b[39mresetElements(a(c))\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m b[d])}})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach(b\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(d\u001b[33m,\u001b[39me){b[d]\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39misFunction(e)\u001b[33m&&\u001b[39m\u001b[32m\"normalizer\"\u001b[39m\u001b[33m!==\u001b[39md\u001b[33m?\u001b[39me(c)\u001b[33m:\u001b[39me})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach([\u001b[32m\"minlength\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"maxlength\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){b[\u001b[36mthis\u001b[39m]\u001b[33m&&\u001b[39m(b[\u001b[36mthis\u001b[39m]\u001b[33m=\u001b[39m\u001b[33mNumber\u001b[39m(b[\u001b[36mthis\u001b[39m]))})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39meach([\u001b[32m\"rangelength\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"range\"\u001b[39m]\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[36mvar\u001b[39m c\u001b[33m;\u001b[39mb[\u001b[36mthis\u001b[39m]\u001b[33m&&\u001b[39m(a\u001b[33m.\u001b[39misArray(b[\u001b[36mthis\u001b[39m])\u001b[33m?\u001b[39mb[\u001b[36mthis\u001b[39m]\u001b[33m=\u001b[39m[\u001b[33mNumber\u001b[39m(b[\u001b[36mthis\u001b[39m][\u001b[35m0\u001b[39m])\u001b[33m,\u001b[39m\u001b[33mNumber\u001b[39m(b[\u001b[36mthis\u001b[39m][\u001b[35m1\u001b[39m])]\u001b[33m:\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m b[\u001b[36mthis\u001b[39m]\u001b[33m&&\u001b[39m(c\u001b[33m=\u001b[39mb[\u001b[36mthis\u001b[39m]\u001b[33m.\u001b[39mreplace(\u001b[35m/[\\[\\]]/g\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"\"\u001b[39m)\u001b[33m.\u001b[39msplit(\u001b[35m/[\\s,]+/\u001b[39m)\u001b[33m,\u001b[39mb[\u001b[36mthis\u001b[39m]\u001b[33m=\u001b[39m[\u001b[33mNumber\u001b[39m(c[\u001b[35m0\u001b[39m])\u001b[33m,\u001b[39m\u001b[33mNumber\u001b[39m(c[\u001b[35m1\u001b[39m])]))})\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mautoCreateRanges\u001b[33m&&\u001b[39m(\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mb\u001b[33m.\u001b[39mmin\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mb\u001b[33m.\u001b[39mmax\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39mrange\u001b[33m=\u001b[39m[b\u001b[33m.\u001b[39mmin\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mmax]\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m b\u001b[33m.\u001b[39mmin\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m b\u001b[33m.\u001b[39mmax)\u001b[33m,\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mb\u001b[33m.\u001b[39mminlength\u001b[33m&&\u001b[39m\u001b[36mnull\u001b[39m\u001b[33m!=\u001b[39mb\u001b[33m.\u001b[39mmaxlength\u001b[33m&&\u001b[39m(b\u001b[33m.\u001b[39mrangelength\u001b[33m=\u001b[39m[b\u001b[33m.\u001b[39mminlength\u001b[33m,\u001b[39mb\u001b[33m.\u001b[39mmaxlength]\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m b\u001b[33m.\u001b[39mminlength\u001b[33m,\u001b[39m\u001b[36mdelete\u001b[39m b\u001b[33m.\u001b[39mmaxlength))\u001b[33m,\u001b[39mb}\u001b[33m,\u001b[39mnormalizeRule\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b){\u001b[36mif\u001b[39m(\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m b){\u001b[36mvar\u001b[39m c\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39meach(b\u001b[33m.\u001b[39msplit(\u001b[35m/\\s/\u001b[39m)\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){c[\u001b[36mthis\u001b[39m]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m})\u001b[33m,\u001b[39mb\u001b[33m=\u001b[39mc}\u001b[36mreturn\u001b[39m b}\u001b[33m,\u001b[39maddMethod\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){a\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mmethods[b]\u001b[33m=\u001b[39mc\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mmessages[b]\u001b[33m=\u001b[39m\u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m!==\u001b[39md\u001b[33m?\u001b[39md\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mmessages[b]\u001b[33m,\u001b[39mc\u001b[33m.\u001b[39mlength\u001b[33m<\u001b[39m\u001b[35m3\u001b[39m\u001b[33m&&\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39maddClassRules(b\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39mvalidator\u001b[33m.\u001b[39mnormalizeRule(b))}\u001b[33m,\u001b[39mmethods\u001b[33m:\u001b[39m{required\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdepend(d\u001b[33m,\u001b[39mc))\u001b[36mreturn\u001b[39m\u001b[32m\"dependency-mismatch\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(\u001b[32m\"select\"\u001b[39m\u001b[33m===\u001b[39mc\u001b[33m.\u001b[39mnodeName\u001b[33m.\u001b[39mtoLowerCase()){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma(c)\u001b[33m.\u001b[39mval()\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m e\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m}\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcheckable(c)\u001b[33m?\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetLength(b\u001b[33m,\u001b[39mc)\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m>\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39memail\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39m\u001b[35m/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/\u001b[39m\u001b[33m.\u001b[39mtest(a)}\u001b[33m,\u001b[39murl\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39m\u001b[35m/^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})).?)(?::\\d{2,5})?(?:[/?#]\\S*)?$/i\u001b[39m\u001b[33m.\u001b[39mtest(a)}\u001b[33m,\u001b[39mdate\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39m\u001b[33m!\u001b[39m\u001b[35m/Invalid|NaN/\u001b[39m\u001b[33m.\u001b[39mtest(\u001b[36mnew\u001b[39m \u001b[33mDate\u001b[39m(a)\u001b[33m.\u001b[39mtoString())}\u001b[33m,\u001b[39mdateISO\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39m\u001b[35m/^\\d{4}[\\/\\-](0?[1-9]|1[012])[\\/\\-](0?[1-9]|[12][0-9]|3[01])$/\u001b[39m\u001b[33m.\u001b[39mtest(a)}\u001b[33m,\u001b[39mnumber\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39m\u001b[35m/^(?:-?\\d+|-?\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$/\u001b[39m\u001b[33m.\u001b[39mtest(a)}\u001b[33m,\u001b[39mdigits\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39m\u001b[35m/^\\d+$/\u001b[39m\u001b[33m.\u001b[39mtest(a)}\u001b[33m,\u001b[39mminlength\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39misArray(b)\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetLength(b\u001b[33m,\u001b[39mc)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(c)\u001b[33m||\u001b[39me\u001b[33m>=\u001b[39md}\u001b[33m,\u001b[39mmaxlength\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39misArray(b)\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetLength(b\u001b[33m,\u001b[39mc)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(c)\u001b[33m||\u001b[39md\u001b[33m>=\u001b[39me}\u001b[33m,\u001b[39mrangelength\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39misArray(b)\u001b[33m?\u001b[39mb\u001b[33m.\u001b[39mlength\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetLength(b\u001b[33m,\u001b[39mc)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(c)\u001b[33m||\u001b[39me\u001b[33m>=\u001b[39md[\u001b[35m0\u001b[39m]\u001b[33m&&\u001b[39me\u001b[33m<=\u001b[39md[\u001b[35m1\u001b[39m]}\u001b[33m,\u001b[39mmin\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39ma\u001b[33m>=\u001b[39mc}\u001b[33m,\u001b[39mmax\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39mc\u001b[33m>=\u001b[39ma}\u001b[33m,\u001b[39mrange\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39mc){\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(b)\u001b[33m||\u001b[39ma\u001b[33m>=\u001b[39mc[\u001b[35m0\u001b[39m]\u001b[33m&&\u001b[39ma\u001b[33m<=\u001b[39mc[\u001b[35m1\u001b[39m]}\u001b[33m,\u001b[39mstep\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma(c)\u001b[33m.\u001b[39mattr(\u001b[32m\"type\"\u001b[39m)\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[32m\"Step attribute on input type \"\u001b[39m\u001b[33m+\u001b[39me\u001b[33m+\u001b[39m\u001b[32m\" is not supported.\"\u001b[39m\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m[\u001b[32m\"text\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"number\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"range\"\u001b[39m]\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39m\u001b[36mnew\u001b[39m \u001b[33mRegExp\u001b[39m(\u001b[32m\"\\\\b\"\u001b[39m\u001b[33m+\u001b[39me\u001b[33m+\u001b[39m\u001b[32m\"\\\\b\"\u001b[39m)\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39me\u001b[33m&&\u001b[39m\u001b[33m!\u001b[39mh\u001b[33m.\u001b[39mtest(g\u001b[33m.\u001b[39mjoin())\u001b[33m;\u001b[39m\u001b[36mif\u001b[39m(i)\u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(f)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(c)\u001b[33m||\u001b[39mb\u001b[33m%\u001b[39md\u001b[33m===\u001b[39m\u001b[35m0\u001b[39m}\u001b[33m,\u001b[39mequalTo\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma(d)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39monfocusout\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39mnot(\u001b[32m\".validate-equalTo-blur\"\u001b[39m)\u001b[33m.\u001b[39mlength\u001b[33m&&\u001b[39me\u001b[33m.\u001b[39maddClass(\u001b[32m\"validate-equalTo-blur\"\u001b[39m)\u001b[33m.\u001b[39mon(\u001b[32m\"blur.validate-equalTo\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){a(c)\u001b[33m.\u001b[39mvalid()})\u001b[33m,\u001b[39mb\u001b[33m===\u001b[39me\u001b[33m.\u001b[39mval()}\u001b[33m,\u001b[39mremote\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(b\u001b[33m,\u001b[39mc\u001b[33m,\u001b[39md\u001b[33m,\u001b[39me){\u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptional(c))\u001b[36mreturn\u001b[39m\u001b[32m\"dependency-mismatch\"\u001b[39m\u001b[33m;\u001b[39me\u001b[33m=\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m e\u001b[33m&&\u001b[39me\u001b[33m||\u001b[39m\u001b[32m\"remote\"\u001b[39m\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m f\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mh\u001b[33m,\u001b[39mi\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpreviousValue(c\u001b[33m,\u001b[39me)\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mmessages[c\u001b[33m.\u001b[39mname]\u001b[33m||\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mmessages[c\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39m{})\u001b[33m,\u001b[39mi\u001b[33m.\u001b[39moriginalMessage\u001b[33m=\u001b[39mi\u001b[33m.\u001b[39moriginalMessage\u001b[33m||\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mmessages[c\u001b[33m.\u001b[39mname][e]\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mmessages[c\u001b[33m.\u001b[39mname][e]\u001b[33m=\u001b[39mi\u001b[33m.\u001b[39mmessage\u001b[33m,\u001b[39md\u001b[33m=\u001b[39m\u001b[32m\"string\"\u001b[39m\u001b[33m==\u001b[39m\u001b[36mtypeof\u001b[39m d\u001b[33m&&\u001b[39m{url\u001b[33m:\u001b[39md}\u001b[33m||\u001b[39md\u001b[33m,\u001b[39mh\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mparam(a\u001b[33m.\u001b[39mextend({data\u001b[33m:\u001b[39mb}\u001b[33m,\u001b[39md\u001b[33m.\u001b[39mdata))\u001b[33m,\u001b[39mi\u001b[33m.\u001b[39mold\u001b[33m===\u001b[39mh\u001b[33m?\u001b[39mi\u001b[33m.\u001b[39mvalid\u001b[33m:\u001b[39m(i\u001b[33m.\u001b[39mold\u001b[33m=\u001b[39mh\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstartRequest(c)\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mg[c\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39mb\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39majax(a\u001b[33m.\u001b[39mextend(\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m{mode\u001b[33m:\u001b[39m\u001b[32m\"abort\"\u001b[39m\u001b[33m,\u001b[39mport\u001b[33m:\u001b[39m\u001b[32m\"validate\"\u001b[39m\u001b[33m+\u001b[39mc\u001b[33m.\u001b[39mname\u001b[33m,\u001b[39mdataType\u001b[33m:\u001b[39m\u001b[32m\"json\"\u001b[39m\u001b[33m,\u001b[39mdata\u001b[33m:\u001b[39mg\u001b[33m,\u001b[39mcontext\u001b[33m:\u001b[39mf\u001b[33m.\u001b[39mcurrentForm\u001b[33m,\u001b[39msuccess\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(a){\u001b[36mvar\u001b[39m d\u001b[33m,\u001b[39mg\u001b[33m,\u001b[39mh\u001b[33m,\u001b[39mj\u001b[33m=\u001b[39ma\u001b[33m===\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m||\u001b[39m\u001b[32m\"true\"\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m;\u001b[39mf\u001b[33m.\u001b[39msettings\u001b[33m.\u001b[39mmessages[c\u001b[33m.\u001b[39mname][e]\u001b[33m=\u001b[39mi\u001b[33m.\u001b[39moriginalMessage\u001b[33m,\u001b[39mj\u001b[33m?\u001b[39m(h\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39mformSubmitted\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mresetInternals()\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mtoHide\u001b[33m=\u001b[39mf\u001b[33m.\u001b[39merrorsFor(c)\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mformSubmitted\u001b[33m=\u001b[39mh\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39msuccessList\u001b[33m.\u001b[39mpush(c)\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39minvalid[c\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mshowErrors())\u001b[33m:\u001b[39m(d\u001b[33m=\u001b[39m{}\u001b[33m,\u001b[39mg\u001b[33m=\u001b[39ma\u001b[33m||\u001b[39mf\u001b[33m.\u001b[39mdefaultMessage(c\u001b[33m,\u001b[39m{method\u001b[33m:\u001b[39me\u001b[33m,\u001b[39mparameters\u001b[33m:\u001b[39mb})\u001b[33m,\u001b[39md[c\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39mi\u001b[33m.\u001b[39mmessage\u001b[33m=\u001b[39mg\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39minvalid[c\u001b[33m.\u001b[39mname]\u001b[33m=\u001b[39m\u001b[33m!\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mshowErrors(d))\u001b[33m,\u001b[39mi\u001b[33m.\u001b[39mvalid\u001b[33m=\u001b[39mj\u001b[33m,\u001b[39mf\u001b[33m.\u001b[39mstopRequest(c\u001b[33m,\u001b[39mj)}}\u001b[33m,\u001b[39md))\u001b[33m,\u001b[39m\u001b[32m\"pending\"\u001b[39m)}}})\u001b[33m;\u001b[39m\u001b[36mvar\u001b[39m b\u001b[33m,\u001b[39mc\u001b[33m=\u001b[39m{}\u001b[33m;\u001b[39ma\u001b[33m.\u001b[39majaxPrefilter\u001b[33m?\u001b[39ma\u001b[33m.\u001b[39majaxPrefilter(\u001b[36mfunction\u001b[39m(a\u001b[33m,\u001b[39mb\u001b[33m,\u001b[39md){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39mport\u001b[33m;\u001b[39m\u001b[32m\"abort\"\u001b[39m\u001b[33m===\u001b[39ma\u001b[33m.\u001b[39mmode\u001b[33m&&\u001b[39m(c[e]\u001b[33m&&\u001b[39mc[e]\u001b[33m.\u001b[39mabort()\u001b[33m,\u001b[39mc[e]\u001b[33m=\u001b[39md)})\u001b[33m:\u001b[39m(b\u001b[33m=\u001b[39ma\u001b[33m.\u001b[39majax\u001b[33m,\u001b[39ma\u001b[33m.\u001b[39majax\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(d){\u001b[36mvar\u001b[39m e\u001b[33m=\u001b[39m(\u001b[32m\"mode\"\u001b[39m\u001b[36min\u001b[39m d\u001b[33m?\u001b[39md\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39majaxSettings)\u001b[33m.\u001b[39mmode\u001b[33m,\u001b[39mf\u001b[33m=\u001b[39m(\u001b[32m\"port\"\u001b[39m\u001b[36min\u001b[39m d\u001b[33m?\u001b[39md\u001b[33m:\u001b[39ma\u001b[33m.\u001b[39majaxSettings)\u001b[33m.\u001b[39mport\u001b[33m;\u001b[39m\u001b[36mreturn\u001b[39m\u001b[32m\"abort\"\u001b[39m\u001b[33m===\u001b[39me\u001b[33m?\u001b[39m(c[f]\u001b[33m&&\u001b[39mc[f]\u001b[33m.\u001b[39mabort()\u001b[33m,\u001b[39mc[f]\u001b[33m=\u001b[39mb\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39marguments)\u001b[33m,\u001b[39mc[f])\u001b[33m:\u001b[39mb\u001b[33m.\u001b[39mapply(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39marguments)})})\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[0m\n    at raise (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:6325:17)\n    at checkReservedWord (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9546:12)\n    at parseObjectProperty (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9286:12)\n    at parseObjPropValue (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9306:101)\n    at parseObjectMember (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9230:10)\n    at parseObj (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9154:25)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8784:28)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:3601:20)\n    at parseExprSubscripts (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8412:23)\n    at parseMaybeUnary (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8392:21)\n    at parseExprOps (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8267:23)\n    at parseMaybeConditional (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8240:23)\n    at parseMaybeAssign (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8187:21)\n    at parseExpression (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8135:23)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9958:23)\n    at parseStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9829:17)");

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI - v1.12.1 - 2019-08-22
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js, widgets/tabs.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(jQuery);
})(function (t) {
  t.ui = t.ui || {}, t.ui.version = "1.12.1";
  var e = 0,
      i = Array.prototype.slice;
  t.cleanData = function (e) {
    return function (i) {
      var s, n, o;

      for (o = 0; null != (n = i[o]); o++) {
        try {
          s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      }

      e(i);
    };
  }(t.cleanData), t.widget = function (e, i, s) {
    var n,
        o,
        a,
        r = {},
        l = e.split(".")[0];
    e = e.split(".")[1];
    var h = l + "-" + e;
    return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
      return !!t.data(e, h);
    }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
      return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
    }, t.extend(o, n, {
      version: s.version,
      _proto: t.extend({}, s),
      _childConstructors: []
    }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
      return t.isFunction(s) ? (r[e] = function () {
        function t() {
          return i.prototype[e].apply(this, arguments);
        }

        function n(t) {
          return i.prototype[e].apply(this, t);
        }

        return function () {
          var e,
              i = this._super,
              o = this._superApply;
          return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
        };
      }(), void 0) : (r[e] = s, void 0);
    }), o.prototype = t.widget.extend(a, {
      widgetEventPrefix: n ? a.widgetEventPrefix || e : e
    }, r, {
      constructor: o,
      namespace: l,
      widgetName: e,
      widgetFullName: h
    }), n ? (t.each(n._childConstructors, function (e, i) {
      var s = i.prototype;
      t.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
  }, t.widget.extend = function (e) {
    for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++) {
      for (s in o[a]) {
        n = o[a][s], o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
      }
    }

    return e;
  }, t.widget.bridge = function (e, s) {
    var n = s.prototype.widgetFullName || e;

    t.fn[e] = function (o) {
      var a = "string" == typeof o,
          r = i.call(arguments, 1),
          l = this;
      return a ? this.length || "instance" !== o ? this.each(function () {
        var i,
            s = t.data(this, n);
        return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'");
      }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function () {
        var e = t.data(this, n);
        e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new s(o, this));
      })), l;
    };
  }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(i, s) {
      s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(t) {
          t.target === s && this.destroy();
        }
      }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return {};
    },
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy: function destroy() {
      var e = this;
      this._destroy(), t.each(this.classesElementLookup, function (t, i) {
        e._removeClass(i, t);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: t.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(e, i) {
      var s,
          n,
          o,
          a = e;
      if (0 === arguments.length) return t.widget.extend({}, this.options);
      if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
          n[s[o]] = n[s[o]] || {}, n = n[s[o]];
        }

        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
        n[e] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        a[e] = i;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function _setOptions(t) {
      var e;

      for (e in t) {
        this._setOption(e, t[e]);
      }

      return this;
    },
    _setOption: function _setOption(t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
    },
    _setOptionClasses: function _setOptionClasses(e) {
      var i, s, n;

      for (i in e) {
        n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
          element: s,
          keys: i,
          classes: e,
          add: !0
        })));
      }
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function _classes(e) {
      function i(i, o) {
        var a, r;

        for (r = 0; i.length > r; r++) {
          a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
      }

      var s = [],
          n = this;
      return e = t.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, e), this._on(e.element, {
        remove: "_untrackClassesElement"
      }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
    },
    _untrackClassesElement: function _untrackClassesElement(e) {
      var i = this;
      t.each(i.classesElementLookup, function (s, n) {
        -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
      });
    },
    _removeClass: function _removeClass(t, e, i) {
      return this._toggleClass(t, e, i, !1);
    },
    _addClass: function _addClass(t, e, i) {
      return this._toggleClass(t, e, i, !0);
    },
    _toggleClass: function _toggleClass(t, e, i, s) {
      s = "boolean" == typeof s ? s : i;
      var n = "string" == typeof t || null === t,
          o = {
        extra: n ? e : i,
        keys: n ? t : e,
        element: n ? this.element : t,
        add: s
      };
      return o.element.toggleClass(this._classes(o), s), this;
    },
    _on: function _on(e, i, s) {
      var n,
          o = this;
      "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
        function r() {
          return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
        }

        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
        var l = s.match(/^([\w:-]*)\s*(.*)$/),
            h = l[1] + o.eventNamespace,
            c = l[2];
        c ? n.on(h, c, r) : i.on(h, r);
      });
    },
    _off: function _off(e, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
    },
    _delay: function _delay(t, e) {
      function i() {
        return ("string" == typeof t ? s[t] : t).apply(s, arguments);
      }

      var s = this;
      return setTimeout(i, e || 0);
    },
    _hoverable: function _hoverable(e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function mouseenter(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function mouseleave(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function focusin(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-focus");
        },
        focusout: function focusout(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(e, i, s) {
      var n,
          o,
          a = this.options[e];
      if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
        n in i || (i[n] = o[n]);
      }
      return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    }
  }, t.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (e, i) {
    t.Widget.prototype["_" + e] = function (s, n, o) {
      "string" == typeof n && (n = {
        effect: n
      });
      var a,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
        t(this)[e](), o && o.call(s[0]), i();
      });
    };
  }), t.widget, function () {
    function e(t, e, i) {
      return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
    }

    function i(e, i) {
      return parseInt(t.css(e, i), 10) || 0;
    }

    function s(e) {
      var i = e[0];
      return 9 === i.nodeType ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : t.isWindow(i) ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: e.scrollTop(),
          left: e.scrollLeft()
        }
      } : i.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: i.pageY,
          left: i.pageX
        }
      } : {
        width: e.outerWidth(),
        height: e.outerHeight(),
        offset: e.offset()
      };
    }

    var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        l = /top|center|bottom/,
        h = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
    t.position = {
      scrollbarWidth: function scrollbarWidth() {
        if (void 0 !== n) return n;
        var e,
            i,
            s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = s.children()[0];
        return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
      },
      getScrollInfo: function getScrollInfo(e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
        return {
          width: o ? t.position.scrollbarWidth() : 0,
          height: n ? t.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function getWithinInfo(e) {
        var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
        return {
          element: i,
          isWindow: s,
          isDocument: n,
          offset: o ? t(e).offset() : {
            left: 0,
            top: 0
          },
          scrollLeft: i.scrollLeft(),
          scrollTop: i.scrollTop(),
          width: i.outerWidth(),
          height: i.outerHeight()
        };
      }
    }, t.fn.position = function (n) {
      if (!n || !n.of) return d.apply(this, arguments);
      n = t.extend({}, n);

      var u,
          p,
          f,
          g,
          m,
          _,
          v = t(n.of),
          b = t.position.getWithinInfo(n.within),
          y = t.position.getScrollInfo(b),
          w = (n.collision || "flip").split(" "),
          k = {};

      return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
        var t,
            e,
            i = (n[this] || "").split(" ");
        1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
      }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () {
        var s,
            r,
            l = t(this),
            h = l.outerWidth(),
            c = l.outerHeight(),
            d = i(this, "marginLeft"),
            _ = i(this, "marginTop"),
            x = h + d + i(this, "marginRight") + y.width,
            C = c + _ + i(this, "marginBottom") + y.height,
            D = t.extend({}, m),
            T = e(k.my, l.outerWidth(), l.outerHeight());

        "right" === n.my[0] ? D.left -= h : "center" === n.my[0] && (D.left -= h / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += T[0], D.top += T[1], s = {
          marginLeft: d,
          marginTop: _
        }, t.each(["left", "top"], function (e, i) {
          t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
            targetWidth: p,
            targetHeight: f,
            elemWidth: h,
            elemHeight: c,
            collisionPosition: s,
            collisionWidth: x,
            collisionHeight: C,
            offset: [u[0] + T[0], u[1] + T[1]],
            my: n.my,
            at: n.at,
            within: b,
            elem: l
          });
        }), n.using && (r = function r(t) {
          var e = g.left - D.left,
              i = e + p - h,
              s = g.top - D.top,
              r = s + f - c,
              u = {
            target: {
              element: v,
              left: g.left,
              top: g.top,
              width: p,
              height: f
            },
            element: {
              element: l,
              left: D.left,
              top: D.top,
              width: h,
              height: c
            },
            horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
            vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
          };
          h > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u);
        }), l.offset(t.extend(D, {
          using: r
        }));
      });
    }, t.ui.position = {
      fit: {
        left: function left(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              l = n - r,
              h = r + e.collisionWidth - a - n;
          e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left);
        },
        top: function top(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              l = n - r,
              h = r + e.collisionHeight - a - n;
          e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top);
        }
      },
      flip: {
        left: function left(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.left + n.scrollLeft,
              r = n.width,
              l = n.isWindow ? n.scrollLeft : n.offset.left,
              h = t.left - e.collisionPosition.marginLeft,
              c = h - l,
              u = h + e.collisionWidth - r - l,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
              f = -2 * e.offset[0];
          0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > a(s)) && (t.left += d + p + f));
        },
        top: function top(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.top + n.scrollTop,
              r = n.height,
              l = n.isWindow ? n.scrollTop : n.offset.top,
              h = t.top - e.collisionPosition.marginTop,
              c = h - l,
              u = h + e.collisionHeight - r - l,
              d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
              g = -2 * e.offset[1];
          0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, (i > 0 || u > a(i)) && (t.top += p + f + g));
        }
      },
      flipfit: {
        left: function left() {
          t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
        },
        top: function top() {
          t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
        }
      }
    };
  }(), t.ui.position, t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.fn.extend({
    uniqueId: function () {
      var t = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++t);
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
      });
    }
  }), t.ui.safeActiveElement = function (t) {
    var e;

    try {
      e = t.activeElement;
    } catch (i) {
      e = t.body;
    }

    return e || (e = t.body), e.nodeName || (e = t.body), e;
  }, t.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function _create() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
        "mousedown .ui-menu-item": function mousedownUiMenuItem(t) {
          t.preventDefault();
        },
        "click .ui-menu-item": function clickUiMenuItem(e) {
          var i = t(e.target),
              s = t(t.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": function mouseenterUiMenuItem(e) {
          if (!this.previousFilter) {
            var i = t(e.target).closest(".ui-menu-item"),
                s = t(e.currentTarget);
            i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s));
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function focus(t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          e || this.focus(t, i);
        },
        blur: function blur(e) {
          this._delay(function () {
            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
            i && this.collapseAll(e);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function click(t) {
          this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
        }
      });
    },
    _destroy: function _destroy() {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
          i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
        var e = t(this);
        e.data("ui-menu-submenu-caret") && e.remove();
      });
    },
    _keydown: function _keydown(e) {
      var i,
          s,
          n,
          o,
          a = !0;

      switch (e.keyCode) {
        case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;

        case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;

        case t.ui.keyCode.HOME:
          this._move("first", "first", e);

          break;

        case t.ui.keyCode.END:
          this._move("last", "last", e);

          break;

        case t.ui.keyCode.UP:
          this.previous(e);
          break;

        case t.ui.keyCode.DOWN:
          this.next(e);
          break;

        case t.ui.keyCode.LEFT:
          this.collapse(e);
          break;

        case t.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
          break;

        case t.ui.keyCode.ENTER:
        case t.ui.keyCode.SPACE:
          this._activate(e);

          break;

        case t.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;

        default:
          a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }

      a && e.preventDefault();
    },
    _activate: function _activate(t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
    },
    refresh: function refresh() {
      var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          l = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = l.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var e = t(this),
            i = e.prev(),
            s = t("<span>").data("ui-menu-submenu-caret", !0);
        a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"));
      }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
        var e = t(this);
        a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
      }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function _itemRole() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function _setOption(t, e) {
      if ("icons" === t) {
        var i = this.element.find(".ui-menu-icon");

        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
      }

      this._super(t, e);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    focus: function focus(t, e) {
      var i, s, n;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
        item: e
      });
    },
    _scrollIntoView: function _scrollIntoView(e) {
      var i, s, n, o, a, r;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
    },
    blur: function blur(t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
        item: this.active
      }), this.active = null);
    },
    _startOpening: function _startOpening(t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(t);
      }, this.delay));
    },
    _open: function _open(e) {
      var i = t.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    },
    collapseAll: function collapseAll(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
        s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s;
      }, this.delay);
    },
    _close: function _close(t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    },
    _closeOnDocumentClick: function _closeOnDocumentClick(e) {
      return !t(e.target).closest(".ui-menu").length;
    },
    _isDivider: function _isDivider(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text());
    },
    collapse: function collapse(t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e));
    },
    expand: function expand(t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function () {
        this.focus(t, e);
      }));
    },
    next: function next(t) {
      this._move("next", "first", t);
    },
    previous: function previous(t) {
      this._move("prev", "last", t);
    },
    isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function _move(t, e, i) {
      var s;
      this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
    },
    nextPage: function nextPage(e) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return i = t(this), 0 > i.offset().top - s - n;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0);
    },
    previousPage: function previousPage(e) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return i = t(this), i.offset().top - s + n > 0;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0);
    },
    _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function select(e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");
      var i = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
    },
    _filterMenuItems: function _filterMenuItems(e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
      });
    }
  }), t.widget("ui.autocomplete", {
    version: "1.12.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function _create() {
      var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === n,
          a = "input" === n;
      this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
        keydown: function keydown(n) {
          if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
          e = !1, s = !1, i = !1;
          var o = t.ui.keyCode;

          switch (n.keyCode) {
            case o.PAGE_UP:
              e = !0, this._move("previousPage", n);
              break;

            case o.PAGE_DOWN:
              e = !0, this._move("nextPage", n);
              break;

            case o.UP:
              e = !0, this._keyEvent("previous", n);
              break;

            case o.DOWN:
              e = !0, this._keyEvent("next", n);
              break;

            case o.ENTER:
              this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
              break;

            case o.TAB:
              this.menu.active && this.menu.select(n);
              break;

            case o.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
              break;

            default:
              i = !0, this._searchTimeout(n);
          }
        },
        keypress: function keypress(s) {
          if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;

          if (!i) {
            var n = t.ui.keyCode;

            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);

                break;

              case n.PAGE_DOWN:
                this._move("nextPage", s);

                break;

              case n.UP:
                this._keyEvent("previous", s);

                break;

              case n.DOWN:
                this._keyEvent("next", s);

            }
          }
        },
        input: function input(t) {
          return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
        },
        focus: function focus() {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function blur(t) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
        }
      }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
        mousedown: function mousedown(e) {
          e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
          });
        },
        menufocus: function menufocus(e, i) {
          var s, n;
          return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
            t(e.target).trigger(e.originalEvent);
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
            item: n
          }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0);
        },
        menuselect: function menuselect(e, i) {
          var s = i.item.data("ui-autocomplete-item"),
              n = this.previous;
          this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
            this.previous = n, this.selectedItem = s;
          })), !1 !== this._trigger("select", e, {
            item: s
          }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
        }
      }), this.liveRegion = t("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function _destroy() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function _isEventTargetInWidget(e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
    },
    _closeOnClickOutside: function _closeOnClickOutside(t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function _appendTo() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    },
    _initSource: function _initSource() {
      var e,
          i,
          s = this;
      t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
        s(t.ui.autocomplete.filter(e, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
        s.xhr && s.xhr.abort(), s.xhr = t.ajax({
          url: i,
          data: e,
          dataType: "json",
          success: function success(t) {
            n(t);
          },
          error: function error() {
            n([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function _searchTimeout(t) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var e = this.term === this._value(),
            i = this.menu.element.is(":visible"),
            s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;

        (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
      }, this.options.delay);
    },
    search: function search(t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
    },
    _search: function _search(t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: t
      }, this._response());
    },
    _response: function _response() {
      var e = ++this.requestIndex;
      return t.proxy(function (t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response: function __response(t) {
      t && (t = this._normalize(t)), this._trigger("response", null, {
        content: t
      }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
    },
    close: function close(t) {
      this.cancelSearch = !0, this._close(t);
    },
    _close: function _close(t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
    },
    _change: function _change(t) {
      this.previous !== this._value() && this._trigger("change", t, {
        item: this.selectedItem
      });
    },
    _normalize: function _normalize(e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
        return "string" == typeof e ? {
          label: e,
          value: e
        } : t.extend({}, e, {
          label: e.label || e.value,
          value: e.value || e.label
        });
      });
    },
    _suggest: function _suggest(e) {
      var i = this.menu.element.empty();
      this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      });
    },
    _resizeMenu: function _resizeMenu() {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function _renderMenu(e, i) {
      var s = this;
      t.each(i, function (t, i) {
        s._renderItemData(e, i);
      });
    },
    _renderItemData: function _renderItemData(t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    },
    _renderItem: function _renderItem(e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
    },
    _move: function _move(t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
    },
    widget: function widget() {
      return this.menu.element;
    },
    _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function _keyEvent(t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function _isContentEditable(t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
    }
  }), t.extend(t.ui.autocomplete, {
    escapeRegex: function escapeRegex(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function filter(e, i) {
      var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
      return t.grep(e, function (t) {
        return s.test(t.label || t.value || t);
      });
    }
  }), t.widget("ui.autocomplete", t.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function results(t) {
          return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function __response(e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
    }
  }), t.ui.autocomplete, t.ui.escapeSelector = function () {
    var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
    return function (e) {
      return e.replace(t, "\\$1");
    };
  }(), t.widget("ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: function () {
      var t = /#.*$/;
      return function (e) {
        var i, s;
        i = e.href.replace(t, ""), s = location.href.replace(t, "");

        try {
          i = decodeURIComponent(i);
        } catch (n) {}

        try {
          s = decodeURIComponent(s);
        } catch (n) {}

        return e.hash.length > 1 && i === s;
      };
    }(),
    _create: function _create() {
      var e = this,
          i = this.options;
      this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
        return e.tabs.index(t);
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active);
    },
    _initialActive: function _initialActive() {
      var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);
      return null === e && (s && this.tabs.each(function (i, n) {
        return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0;
      }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e;
    },
    _getCreateEventData: function _getCreateEventData() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : t()
      };
    },
    _tabKeydown: function _tabKeydown(e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
          s = this.tabs.index(i),
          n = !0;

      if (!this._handlePageNav(e)) {
        switch (e.keyCode) {
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
            s++;
            break;

          case t.ui.keyCode.UP:
          case t.ui.keyCode.LEFT:
            n = !1, s--;
            break;

          case t.ui.keyCode.END:
            s = this.anchors.length - 1;
            break;

          case t.ui.keyCode.HOME:
            s = 0;
            break;

          case t.ui.keyCode.SPACE:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;

          case t.ui.keyCode.ENTER:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;

          default:
            return;
        }

        e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
          this.option("active", s);
        }, this.delay));
      }
    },
    _panelKeydown: function _panelKeydown(e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"));
    },
    _handlePageNav: function _handlePageNav(e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    },
    _findNextTab: function _findNextTab(e, i) {
      function s() {
        return e > n && (e = 0), 0 > e && (e = n), e;
      }

      for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);) {
        e = i ? e + 1 : e - 1;
      }

      return e;
    },
    _focusNextTab: function _focusNextTab(t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
    },
    _setOption: function _setOption(t, e) {
      return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0);
    },
    _sanitizeSelector: function _sanitizeSelector(t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function refresh() {
      var e = this.options,
          i = this.tablist.children(":has(a[href])");
      e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
        return i.index(t);
      }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh();
    },
    _refresh: function _refresh() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }), this.active.length ? (this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
        "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function _processTabs() {
      var e = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
        t(this).is(".ui-state-disabled") && e.preventDefault();
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
        t(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
        role: "tab",
        tabIndex: -1
      }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
        return t("a", this)[0];
      }).attr({
        role: "presentation",
        tabIndex: -1
      }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
        var n,
            o,
            a,
            r = t(s).uniqueId().attr("id"),
            l = t(s).closest("li"),
            h = l.attr("aria-controls");
        e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
          "aria-controls": a,
          "aria-labelledby": r
        }), o.attr("aria-labelledby", r);
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
    },
    _getList: function _getList() {
      return this.tablist || this.element.find("ol, ul").eq(0);
    },
    _createPanel: function _createPanel(e) {
      return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
    },
    _setOptionDisabled: function _setOptionDisabled(e) {
      var i, s, n;

      for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) {
        i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
      }

      this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
    },
    _setupEvents: function _setupEvents(e) {
      var i = {};
      e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
        click: function click(t) {
          t.preventDefault();
        }
      }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, {
        keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs);
    },
    _setupHeightStyle: function _setupHeightStyle(e) {
      var i,
          s = this.element.parent();
      "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var e = t(this),
            s = e.css("position");
        "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
      }), this.element.children().not(this.panels).each(function () {
        i -= t(this).outerHeight(!0);
      }), this.panels.each(function () {
        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
        i = Math.max(i, t(this).height("").height());
      }).height(i));
    },
    _eventHandler: function _eventHandler(e) {
      var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          o = n.closest("li"),
          a = o[0] === s[0],
          r = a && i.collapsible,
          l = r ? t() : this._getPanelForTab(o),
          h = s.length ? this._getPanelForTab(s) : t(),
          c = {
        oldTab: s,
        oldPanel: h,
        newTab: r ? t() : o,
        newPanel: l
      };
      e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c));
    },
    _toggle: function _toggle(e, i) {
      function s() {
        o.running = !1, o._trigger("activate", e, i);
      }

      function n() {
        o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s());
      }

      var o = this,
          a = i.newPanel,
          r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
        o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
      }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
        return 0 === t(this).attr("tabIndex");
      }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _activate: function _activate(e) {
      var i,
          s = this._findActive(e);

      s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }));
    },
    _findActive: function _findActive(e) {
      return e === !1 ? t() : this.tabs.eq(e);
    },
    _getIndex: function _getIndex(e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e;
    },
    _destroy: function _destroy() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
      }), this.tabs.each(function () {
        var e = t(this),
            i = e.data("ui-tabs-aria-controls");
        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function enable(e) {
      var i = this.options.disabled;
      i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
        return t !== e ? t : null;
      }) : t.map(this.tabs, function (t, i) {
        return i !== e ? i : null;
      })), this._setOptionDisabled(i));
    },
    disable: function disable(e) {
      var i = this.options.disabled;

      if (i !== !0) {
        if (void 0 === e) i = !0;else {
          if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
          i = t.isArray(i) ? t.merge([e], i).sort() : [e];
        }

        this._setOptionDisabled(i);
      }
    },
    load: function load(e, i) {
      e = this._getIndex(e);

      var s = this,
          n = this.tabs.eq(e),
          o = n.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(n),
          r = {
        tab: n,
        panel: a
      },
          l = function l(t, e) {
        "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr;
      };

      this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
        setTimeout(function () {
          a.html(t), s._trigger("load", i, r), l(n, e);
        }, 1);
      }).fail(function (t, e) {
        setTimeout(function () {
          l(t, e);
        }, 1);
      })));
    },
    _ajaxSettings: function _ajaxSettings(e, i, s) {
      var n = this;
      return {
        url: e.attr("href").replace(/#.*$/, ""),
        beforeSend: function beforeSend(e, o) {
          return n._trigger("beforeLoad", i, t.extend({
            jqXHR: e,
            ajaxSettings: o
          }, s));
        }
      };
    },
    _getPanelForTab: function _getPanelForTab(e) {
      var i = t(e).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i));
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
    _processTabs: function _processTabs() {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
    }
  }), t.ui.tabs;
});

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/glebsimdyankin/Documents/work/redsoft/src/scripts/libs/swiper.js: Unexpected token, expected \",\" (34:9)\n\n\u001b[0m \u001b[90m 32 | \u001b[39m            \u001b[33mImage\u001b[39m\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mImage\u001b[39m() {}\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m            \u001b[33mDate\u001b[39m\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mDate\u001b[39m() {}\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 34 | \u001b[39m        }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 | \u001b[39m    } \u001b[36melse\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 36 | \u001b[39m        w \u001b[33m=\u001b[39m window\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 | \u001b[39m    }\u001b[0m\n    at raise (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:6325:17)\n    at unexpected (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:7642:16)\n    at expect (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:7628:28)\n    at parseObj (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9150:14)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8784:28)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:3601:20)\n    at parseExprSubscripts (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8412:23)\n    at parseMaybeUnary (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8392:21)\n    at parseExprOps (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8267:23)\n    at parseMaybeConditional (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8240:23)\n    at parseMaybeAssign (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8187:21)\n    at parseExpression (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8135:23)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9958:23)\n    at parseStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9829:17)\n    at parseIfStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:10183:28)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9874:21)");

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/glebsimdyankin/Documents/work/redsoft/src/scripts/libs/jquery.customSelect.js: Unexpected keyword 'return' (18:16)\n\n\u001b[0m \u001b[90m 16 | \u001b[39m            \u001b[90m// filter out <= IE6\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m            \u001b[36mif\u001b[39m (\u001b[36mtypeof\u001b[39m document\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39mmaxHeight \u001b[33m===\u001b[39m \u001b[32m'undefined'\u001b[39m) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 18 | \u001b[39m                \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m            }\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m            \u001b[36mvar\u001b[39m defaults \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 21 | \u001b[39m                    customClass\u001b[33m:\u001b[39m \u001b[32m'customSelect'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at raise (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:6325:17)\n    at checkReservedWord (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9546:12)\n    at parseObjectProperty (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9286:12)\n    at parseObjPropValue (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9306:101)\n    at parseObjectMember (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9230:10)\n    at parseObj (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9154:25)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8784:28)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:3601:20)\n    at parseExprSubscripts (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8412:23)\n    at parseMaybeUnary (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8392:21)\n    at parseExprOps (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8267:23)\n    at parseMaybeConditional (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8240:23)\n    at parseMaybeAssign (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8187:21)\n    at parseExpression (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8135:23)\n    at parseStatementContent (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9958:23)\n    at parseStatement (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9829:17)");

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/glebsimdyankin/Documents/work/redsoft/src/scripts/libs/jquery.nselect.js: Unexpected token, expected \"{\" (46:48)\n\n\u001b[0m \u001b[90m 44 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 45 | \u001b[39m                \u001b[36mif\u001b[39m ($nSelect\u001b[33m.\u001b[39mhasClass(\u001b[32m'_active'\u001b[39m)) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 46 | \u001b[39m                    closeSelect($that\u001b[33m,\u001b[39m $nSelect)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 | \u001b[39m                } \u001b[36melse\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 48 | \u001b[39m                    openSelect($that\u001b[33m,\u001b[39m $nSelect)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 | \u001b[39m                }\u001b[0m\n    at raise (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:6325:17)\n    at unexpected (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:7642:16)\n    at expect (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:7628:28)\n    at parseBlock (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:10370:10)\n    at parseFunctionBody (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9424:24)\n    at parseFunctionBodyAndFinish (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9394:10)\n    at parseMethod (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9348:10)\n    at parseObjectMethod (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9264:19)\n    at parseObjPropValue (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9306:23)\n    at parseObjectMember (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9230:10)\n    at parseObj (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:9154:25)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8784:28)\n    at parseExprAtom (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:3601:20)\n    at parseExprSubscripts (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8412:23)\n    at parseMaybeUnary (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8392:21)\n    at parseExprOps (/Users/glebsimdyankin/Documents/work/redsoft/node_modules/@babel/parser/lib/index.js:8267:23)");

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(352);

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modernizr__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modernizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_modernizr__);

var isWin = /windows/gi.test(navigator.userAgent);
var isIe = /trident.+rv:\d+/gi.test(navigator.userAgent);
var isIe10 = /trident.+rv:10/gi.test(navigator.userAgent);
var isIe11 = /trident.+rv:11/gi.test(navigator.userAgent);
var isEdge = /windows.+edge\/\d+/gi.test(navigator.userAgent);
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('ipad', function () {
  return !!navigator.userAgent.match(/iPad/i);
});
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('iphone', function () {
  return !!navigator.userAgent.match(/iPhone/i);
});
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('ipod', function () {
  return !!navigator.userAgent.match(/iPod/i);
});
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('appleios', function () {
  return __WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.ipad || __WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.ipod || __WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.iphone;
});
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('ie', isIe);
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('ie-10', isIe10);
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('ie-11', isIe11);
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('edge', isEdge);
__WEBPACK_IMPORTED_MODULE_0_modernizr___default.a.addTest('windows', isWin);

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

;(function(window){
var hadGlobal = 'Modernizr' in window;
var oldGlobal = window.Modernizr;
/*! modernizr 3.7.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-addtest-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(e){var n=p.className,t=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(n+=" "+t+e.join(" "+t)),h?p.className.baseVal=n:p.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)c(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2===o.length&&(r=r[o[1]]),void 0!==r)return Modernizr;n="function"==typeof n?n():n,1===o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),i([(n&&!1!==n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=r(h?"svg":"body"),e.fake=!0),e}function l(e,t,o,i){var s,l,f,u,c="modernizr",d=r("div"),h=a();if(parseInt(o,10))for(;o--;)f=r("div"),f.id=i?i[o]:c+(o+1),d.appendChild(f);return s=r("style"),s.type="text/css",s.id="s"+c,(h.fake?h:d).appendChild(s),h.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,h.fake&&(h.style.background="",h.style.overflow="hidden",u=p.style.overflow,p.style.overflow="hidden",p.appendChild(h)),l=t(d,e),h.fake?(h.parentNode.removeChild(h),p.style.overflow=u,p.offsetHeight):d.parentNode.removeChild(d),!!l}var f=[],u={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){f.push({name:e,fn:n,options:t})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c,d=[],p=n.documentElement,h="svg"===p.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;c=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),u._l={},u.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},u._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e;for(e=0;e<t.length;e++)(0,t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){u.addTest=s});var v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=v;var m=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"===(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();u.mq=m,Modernizr.addTest("touchevents",function(){if("ontouchstart"in e||e.TouchEvent||e.DocumentTouch&&n instanceof DocumentTouch)return!0;var t=["(",v.join("touch-enabled),("),"heartz",")"].join("");return m(t)}),function(){var e,n,t,i,s,r,a;for(var l in f)if(f.hasOwnProperty(l)){if(e=[],n=f[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)r=e[s],a=r.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),d.push((i?"":"no-")+a.join("-"))}}(),i(d),delete u.addTest,delete u.addAsyncTest;for(var g=0;g<Modernizr._q.length;g++)Modernizr._q[g]();e.Modernizr=Modernizr}(window,document);
module.exports = window.Modernizr;
if (hadGlobal) { window.Modernizr = oldGlobal; }
else { delete window.Modernizr; }
})(window);

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var main = {
  init: function init() {
    var btn = $('.js-card__btn');
    var card = $('.card');
    var url = 'https://reqres.in/api/products/3';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (commits) {
      card.each(function () {
        var id = $(this).data('id');
        var localValue = localStorage.getItem(id);

        if (localValue == commits.data.id) {
          $(this).addClass('card__btn-block--true');
        }
      });
    });
    btn.on('click', function (e) {
      e.preventDefault();
      var cardBlock = $(this).closest('.card__btn-block');
      cardBlock.addClass('card__btn-block--load');
      $.ajax({
        type: 'get',
        url: url,
        dataType: "json",
        data: '',
        success: function success(data) {
          cardBlock.removeClass('card__btn-block--load').addClass('card__btn-block--true');
          localStorage.setItem(cardBlock.closest('.card').data('id'), data.data.id);
        }
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (main);

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        var $selector = $(document).find(selector);
        return $selector.length > 0 ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error("".concat(componentName.toUpperCase(), ": ") + "Option \"".concat(property, "\" provided type \"").concat(valueType, "\" ") + "but expected type \"".concat(expectedTypes, "\"."));
          }
        }
      }
    }
  };
  setTransitionEndSupport();
  return Util;
}(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

/* harmony default export */ __webpack_exports__["a"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map