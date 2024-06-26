function toggleAddress() {
    var address = document.querySelector('.address');
    address.style.display = (address.style.display === 'block') ? 'none' : 'block';
}
function reloadIframe() {
    var iframe = document.querySelector('.iframe iframe');
    //iframe.src = "about:blank"; // Setze die Quelle des Iframe zurück
    iframe.src = iframe.src; // Neu laden der aktuellen Quelle
}