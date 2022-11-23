/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//<![CDATA[ 
    $(document).on('click','.send_form', function(){ 
        var input_blanter = document.getElementById('wa_email'); 
         
        /* Whatsapp Settings */ 
        var walink = 'https://web.whatsapp.com/send', 
            phone = '6281326221616', 
            walink2 = 'Halo Admin... saya ', 
            text_yes = 'Terkirim.', 
            text_no = 'Isi semua Formulir lalu klik Send.'; 
         
        /* Smartphone Support */ 
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
        var walink = 'whatsapp://send'; 
        } 
         
        if("" != input_blanter.value){ 
         
         /* Call Input Form */ 
        var input_select1 = $("#wa_select :selected").text(), 
            input_name1 = $("#wa_name").val(), 
            input_email1 = $("#wa_email").val(), 
            input_number1 = $("#wa_number").val(), 
            input_item1 = $("#wa_item").val(), 
            input_keterangan1 = $("#wa_keterangan").val(), 
            input_textarea1 = $("#wa_textarea").val(); 
         
        /* Final Whatsapp URL */ 
        var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' + 
            '*Nama* : ' + input_name1 + '%0A' + 
            '*Alamat Email* : ' + input_email1 + '%0A' + 
            '*No. HP* : ' + input_number1 + '%0A' + 
            '*Pesan* : ' + input_item1 + '%0A' +
            '*Metode Pembayaran* : ' + input_select1 + '%0A' +
            '*Pesan Khusus* : ' + input_keterangan1 + '%0A'; 
         
        /* Whatsapp Window Open */ 
        window.open(blanter_whatsapp,'_blank'); 
        document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>'; 
        } else { 
        document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>'; 
        } 
        }); 
        //]]> 