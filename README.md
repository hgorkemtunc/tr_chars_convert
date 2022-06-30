# tr_chars_convert

<div align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" height="100"> </div>
<br>

<p>Türkçe karakterleri uppercase ve lowercase olarak convert edilebilmesini sağlar.</p>

------------

```js
function tr_convert(text, type) {

	if( type == 'lowercase'){

		var character_map = {
			'çÇ':'ç',
			'ğĞ':'ğ',
			'şŞ':'ş',
			'üÜ':'ü',
			'iİ':'i',
			'öÖ':'ö',
			'ıI':'ı'
    	};

	} else if ( type == 'uppercase'){
		var character_map = {
			'çÇ':'Ç',
			'ğĞ':'Ğ',
			'şŞ':'Ş',
			'üÜ':'Ü',
			'ıI':'I',
			'öÖ':'Ö',
			'iİ':'İ'
		};
	}
	
    for(var key in character_map) {
		console.log('['+key+']');
        text = text.replace(new RegExp('['+key+']','g'), character_map[key]);
    }

    return ( type == 'uppercase' ) ? text.toUpperCase() : text.toLowerCase();

}

# SAMPLE USAGES

# Tüm harfleri uppercase dönüştürmek için
tr_convert(text, 'uppercase');

# Tüm harfleri lowercase dönüştürmek için
tr_convert(text, 'lowercase');

# İlk harfi uppercase kalan harfleri lowercase dönüştürmek için
tr_convert(first_letter, 'uppercase') + tr_convert(last_letters, 'lowercase');

```
