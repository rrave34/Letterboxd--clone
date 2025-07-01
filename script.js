document.addEventListener('DOMContentLoaded', function() {
    
    // Gerekli HTML elemanlarını seçip değişkenlere atıyoruz.
    const openSigninBtn = document.getElementById('open-signin-btn');
    const signinModal = document.getElementById('signin-modal');
    
    // Bu elemanlar sayfada varsa devam et (hata almayı engeller)
    if (openSigninBtn && signinModal) {
        
        // Modal içindeki elemanları seçiyoruz
        const closeModalBtn = signinModal.querySelector('.js-close-signin'); 
        const signinForm = document.getElementById('signin-form');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const hataMesaji = document.getElementById('hata-mesaji');

        // Header'daki "SIGN IN" butonuna tıklandığında modalı göster.
        openSigninBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Linkin normal davranışını engelle
            signinModal.classList.add('goster');
        });

        // Modalı kapatmak için ortak bir fonksiyon
        const closeTheModal = () => {
            signinModal.classList.remove('goster');
            // Hata mesajı varsa, onu da gizle
            if (hataMesaji) {
                hataMesaji.classList.remove('goster');
            }
        };

        // Modal'daki 'X' butonuna tıklandığında modalı gizle.
        closeModalBtn.addEventListener('click', closeTheModal);

        // Modal'ın dışındaki arkaplana tıklandığında modalı gizle.
        signinModal.addEventListener('click', function(e) {
            // Sadece arkaplanın kendisine tıklandıysa kapat
            if (e.target === signinModal) {
                closeTheModal();
            }
        });

        // Formdaki "SIGN IN" butonuna basıldığında (form gönderildiğinde) çalışacak kod.
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Formun sayfayı yenilemesini engelle.

            if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
                // Alanlar boşsa hata mesajını göster
                hataMesaji.classList.add('goster');
            } else {
                // Alanlar doluysa hata mesajını gizle ve başarı mesajı ver
                hataMesaji.classList.remove('goster');
                alert('Giriş denemesi başarılı!');
                
                // İsteğe bağlı: Başarılı giriş sonrası modalı kapatmak için bu satırı aktif et
                // closeTheModal();
            }
        });
    }

});