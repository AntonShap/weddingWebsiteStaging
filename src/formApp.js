
formFields();


function formFields() {

    document.body.addEventListener('click', (ev) => {

        if (ev.target.className == 'plusOneBtn') {
         
            document.querySelector('.plussOneFields').style.display = 'block';
            document.querySelector('.plusOneBtn').style.display = 'none';
            document.querySelector('.submitBtnplusOne').style.display = 'none';
        
        }

        if (ev.target.className == 'plusChildBtn') {

            document.querySelector('.plusOneChieldFields').style.display = 'block';
            document.querySelector('.plusChildBtn').style.display = 'none';
            document.querySelector('.submitBtnChild').style.display = 'none';

        }

        if (ev.target.className == 'secondCildBtn') {

            document.querySelector('.secondChildFields').style.display = 'block';
            document.querySelector('.secondCildBtn').style.display = 'none';
            document.querySelector('.submitBtnSecondChild').style.display = 'none';

        }
    })
}