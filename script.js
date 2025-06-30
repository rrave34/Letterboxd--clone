// document.addEventListener('DOMContentLoaded', ...);
// Bu bir güvenlik önlemidir. Tarayıcıya der ki: "Bu kodları çalıştırmadan önce,
// HTML sayfasının tamamen yüklenip hazır olmasını bekle."
// Bu sayede, kodumuz henüz var olmayan HTML elemanlarını bulmaya çalışmaz.
document.addEventListener('DOMContentLoaded', function() {

    // const tabNavigasyon = document.querySelector('.tab-navigasyon');
    // HTML içindeki .tab-navigasyon class'ına sahip ilk elemanı (yani <ul> etiketimizi) bulur
    // ve onu 'tabNavigasyon' adında bir değişkende saklar. Artık bu değişken üzerinden sekmelere erişebiliriz.
    const tabNavigasyon = document.querySelector('.tab-navigasyon');

    // const tabPanelleri = document.querySelectorAll('.tab-panel');
    // HTML içindeki .tab-panel class'ına sahip BÜTÜN elemanları bulur
    // ve onları 'tabPanelleri' adında bir listede saklar.
    const tabPanelleri = document.querySelectorAll('.tab-panel');


    // tabNavigasyon.addEventListener('click', ...);
    // 'tabNavigasyon' değişkenine (yani sekmelerin bulunduğu <ul> etiketine) bir tıklama dinleyicisi ekler.
    // Artık bu navigasyon çubuğunun içindeki herhangi bir yere tıklandığında, aşağıdaki fonksiyon çalışacaktır.
    tabNavigasyon.addEventListener('click', function(e) {

        // if (e.target.matches('.tab-link'))
        // Tıklama olayı gerçekleştiğinde, bu komut "Tıklanan eleman .tab-link class'ına sahip mi?" diye kontrol eder.
        // Bu, sadece sekmelere tıklandığında kodun çalışmasını sağlar, aradaki boşluklara tıklandığında değil.
        if (e.target.matches('.tab-link')) {
            
            // e.preventDefault();
            // Linklerin normal davranışını (href="#" olduğu için sayfanın başına zıplamasını) engeller.
            e.preventDefault();

            // const hedefPanelID = e.target.getAttribute('data-tab');
            // Tıkladığımız linkin (e.target) 'data-tab' özelliğinin değerini alır.
            // Örneğin "Crew" sekmesine tıklarsak, bu değişkenin değeri "crew" olur.
            const hedefPanelID = e.target.getAttribute('data-tab');
            
            // --- RESETLEME ADIMI BAŞLIYOR ---
            // Bu adım, yeni bir sekmeyi aktif etmeden önce her şeyi sıfırlar.

            // 1. Tüm sekmelerin aktif durumunu kaldır.
            // Navigasyon çubuğundaki bütün .tab-link'leri bulur, her birini tek tek gezer
            // ve üzerlerindeki 'aktif' class'ını kaldırır. Böylece hepsi normal rengine döner.
            tabNavigasyon.querySelectorAll('.tab-link').forEach(link => {
                link.classList.remove('aktif');
            });

            // 2. Tüm panelleri gizle.
            // Bütün .tab-panel'leri gezer ve hepsinden 'aktif' class'ını kaldırır.
            // CSS'te .aktif olmayan paneller 'display: none;' olduğu için hepsi gizlenir.
            tabPanelleri.forEach(panel => {
                panel.classList.remove('aktif');
            });
            
            // --- AKTİF ETME ADIMI BAŞLIYOR ---
            // Bu adım, doğru sekmeyi ve paneli görünür yapar.

            // 1. Tıklanan sekmeyi aktif yap.
            // SADECE az önce tıkladığımız sekmeye (e.target) 'aktif' class'ını ekler.
            // CSS sayesinde bu sekme yeşil renge döner.
            e.target.classList.add('aktif');
            
            // 2. İlgili paneli göster.
            // ID'si, tıkladığımız sekmenin data-tab değeriyle eşleşen paneli bulur (örneğin id="crew" olan paneli)
            // ve ona 'aktif' class'ını ekler. CSS sayesinde bu panel görünür hale gelir.
            document.getElementById(hedefPanelID).classList.add('aktif');
        }
    });
});