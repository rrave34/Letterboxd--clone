document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTLERİ SEÇ ---
    const createAccountLink = document.querySelector('a[data-modal-target="#create-account-modal"]');
    const createAccountModal = document.querySelector('#create-account-modal');

    const otherModalLinks = document.querySelectorAll('a[data-modal-target]:not([data-modal-target="#create-account-modal"])');

    const nav = document.querySelector('nav');
    const search = document.querySelector('.search-container');

    // --- FONKSİYONLAR ---
    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('goster');

        // Menü ve arama gizle
        if(nav) nav.style.display = 'none';
        if(search) search.style.display = 'none';
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('goster');

        // Menü ve arama göster
        if(nav) nav.style.display = '';
        if(search) search.style.display = '';
    }

    // --- OLAY DİNLEYİCİLERİ ---

    // "CREATE ACCOUNT" tıklanınca toggle
    if (createAccountLink) {
        createAccountLink.addEventListener('click', (e) => {
            e.preventDefault();
            createAccountModal.classList.toggle('goster');

            // Menü ve arama görünürlüğünü toggle yap
            if(createAccountModal.classList.contains('goster')) {
                if(nav) nav.style.display = 'none';
                if(search) search.style.display = 'none';
            } else {
                if(nav) nav.style.display = '';
                if(search) search.style.display = '';
            }
        });
    }

    // Diğer modal açan bağlantılar için (örneğin SIGN IN)
    otherModalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.querySelector(link.dataset.modalTarget);
            openModal(modal);
        });
    });

    // Modal kapatma (X) butonları
    document.querySelectorAll('.js-close-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal-arkaplan');
            closeModal(modal);
        });
    });

    // Modal dışına tıklanınca kapat
    document.addEventListener('click', (e) => {
        // CREATE ACCOUNT modal kontrolü
        if (createAccountModal && createAccountModal.classList.contains('goster')) {
            const isClickInsideModal = createAccountModal.contains(e.target);
            const isClickOnLink = createAccountLink.contains(e.target);

            if (!isClickInsideModal && !isClickOnLink) {
                closeModal(createAccountModal);
            }
        }

        // Diğer modal'lar (Sign In vb.) için dışarı tıklama
        document.querySelectorAll('.modal-arkaplan:not(#create-account-modal)').forEach(modal => {
            if (modal.classList.contains('goster') && e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // --- FORM OLAYLARI ---
document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = this.username.value.trim();
  const password = this.password.value.trim();

  if (!username || !password) {
    alert('Lütfen kullanıcı adı ve şifrenizi giriniz.');
    return;
  }

  // Girilen bilgiler doluysa burası çalışır
  alert('Giriş denemesi başarılı!');
  // Modal kapatma
  const modal = this.closest('.modal-arkaplan');
  if (modal) modal.classList.remove('goster');
});
    const createAccountForm = document.getElementById('create-account-form');
    if (createAccountForm) {
        createAccountForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Hesap oluşturma denemesi!');
            closeModal(this.closest('.modal-arkaplan'));
        });
    }

});
