ocument.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', () => {
        alert('Thank you for clicking the button!');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const navbar = document.getElementById('navbar');
    
    ctaButton.addEventListener('click', () => {
        alert('Thank you for clicking the button!');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // เปลี่ยนตัวเลขนี้ตามระยะที่ต้องการ
            navbar.style.backgroundColor = //#endregion '; // เปลี่ยนสีพื้นหลังของเมนูนำทาง
            navbar.style.transition = 'background-color 0.3s'; // ทำให้การเปลี่ยนแปลงราบรื่น
        } else {
            navbar.style.backgroundColor = 'transparent'; // กลับไปที่พื้นหลังเดิม
        }
    });
});