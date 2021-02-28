function getCookie(cookieNameParameter) {
    const name = cookieNameParameter + "=";
    const cookieSplitted = document.cookie.split(';');
    for(var i = 0; i < cookieSplitted.length; i++) {
        var cookieParameter = cookieSplitted[i];
        while (cookieParameter.charAt(0) === ' ') {
            cookieParameter = cookieParameter.substring(1);
        }
        if (cookieParameter.indexOf(name) == 0) {
            return cookieParameter.substring(name.length, cookieParameter.length);
        }
    }
    return "";
}

export default getCookie