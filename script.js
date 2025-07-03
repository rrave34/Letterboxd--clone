document.addEventListener('DOMContentLoaded', () => {

    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('.js-close-modal');


    const signBtn = document.querySelector('.sign-btn');

    signBtn.addEventListener("click", function (e) {
      e.preventDefault();

        console.log("test")
    });


    openModalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log("test")

            e.preventDefault();
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    closeModalButtons.forEach(button => {

        button.addEventListener('click', () => {
            console.log("test4")

            const modal = button.closest('.modal-arkaplan');
            closeModal(modal);
        });
    });

    document.querySelectorAll('.modal-arkaplan').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('goster');
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('goster');
    }

    // --- FORM İŞLEMLERİ ---
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const hataMesaji = document.getElementById('hata-mesaji');

            if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
                hataMesaji.classList.add('goster');
            } else {
                hataMesaji.classList.remove('goster');
                alert('Giriş denemesi başarılı!');
            }
        });
    }

    const createAccountForm = document.getElementById('create-account-form');
    if (createAccountForm) {
        createAccountForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Hesap oluşturma denemesi!');
        });
    }
});