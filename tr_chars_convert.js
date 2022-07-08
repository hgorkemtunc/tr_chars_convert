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
