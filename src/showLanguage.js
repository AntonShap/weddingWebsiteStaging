function showLanguges() {
    const languageBtn = document.querySelector('.dropBTN');
    console.log(languageBtn);
    languageBtn.addEventListener('click', onClick);

    function onClick() {

        const div = document.querySelector('.dropdown-content');
        let isVisible = div.style.display == 'block';
        div.style.display = isVisible ? 'none' : 'block';
    }
}

showLanguges();