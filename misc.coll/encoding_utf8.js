

<!--ref: http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html -->
function encode_utf8( s )
{
  return unescape( encodeURIComponent( s ) );
}

function decode_utf8( s )
{
  return decodeURIComponent( escape( s ) );
}
