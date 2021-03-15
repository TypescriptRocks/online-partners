
// i made this in like 15 minutes so dont judge me for coding bad
// btw if you see this you should prob be doing something else with ur life

const encoded = "U2FsdGVkX18rYh0KDnMtWQGc0xwafbvyFeoqvdEzXsoeWn1RnIiuvt+GNDybWHbbFHsdHCIZeikpwHzHgiwypw8YGyBYG13Sl2nDHuM22RCzRNup2uyB13E+up3QEWKnDevmlM4NlBkcyvKsUNeF6lZze5myBN8tQDwfC9Vdx04tUPhk3los+gesN7xdkme1";
var malformed = true;

document.getElementById("pwd").addEventListener("change", () => {
    const decoded = CryptoJS.AES.decrypt(encoded, document.getElementById("pwd").value);
    var text;

    try {
        text = decoded.toString(CryptoJS.enc.Utf8);
    } catch (error) { malformed = true }

    if (text) {
        malformed = /(discord.com\/api)/.test(text);
    }

    if (!malformed) {
        document.getElementById("form").setAttribute("action", text);
    }
});

document.getElementById("form").addEventListener("submit", e => {
    if (malformed) {
        e.preventDefault();
        alert("The decryption code is incorrect.");
    }
});