    const text = ["Data Analysis", "SQL & Power BI Expert", "Qality Assurance"];
    let i = 0, j = 0, isDeleting = false;

    function type() {
        const el = document.getElementById("typing");
        if(!el) return;
        const current = text[i];
        if (!isDeleting) {
            el.textContent = current.substring(0, j++);
            if (j > current.length) { isDeleting = true; setTimeout(type, 1500); return; }
        } else {
            el.textContent = current.substring(0, j--);
            if (j === 0) { isDeleting = false; i = (i + 1) % text.length; }
        }
        setTimeout(type, isDeleting ? 40 : 80);
    }
    type();

    // Анимация появления при скролле
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

