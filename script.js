document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const screenId = item.getAttribute('data-screen');

            // Update Active Nav Item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update Active Screen
            screens.forEach(screen => {
                screen.classList.remove('active');
                if (screen.id === screenId) {
                    screen.classList.add('active');
                }
            });
        });
    });

    // Time Update Logic
    const timeDisplay = document.getElementById('current-time');

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}`;
    }

    setInterval(updateTime, 1000);
    updateTime();

    // Pull to Refresh Simulation (Visual)
    let touchStartY = 0;
    const mainContent = document.querySelector('main');

    mainContent.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    mainContent.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        if (touchEndY - touchStartY > 100 && mainContent.scrollTop === 0) {
            console.log('Refreshing content...');
            // In a real app, this would trigger a data fetch
            simulateRefresh();
        }
    });

    function simulateRefresh() {
        const homeScreen = document.getElementById('home-screen');
        homeScreen.style.opacity = '0.5';
        setTimeout(() => {
            homeScreen.style.opacity = '1';
        }, 1000);
    }
});
