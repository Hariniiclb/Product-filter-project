const buttons = document.querySelectorAll('.btn')
const pics = document.querySelectorAll('#pic')
const searchbox = document.querySelector('#sooru')


searchbox.addEventListener('keyup', (e) => {
    searchtext = e.target.value.toLowerCase().trim();



    pics.forEach((pic) => {
        const data = pic.dataset.item;
        if (data.includes(searchtext)) {
            pic.style.display = 'block';
        } else {
            pic.style.display = 'none';

        }
        buttons.forEach((button) => {
            button.classList.remove('btn-click')
        });
        buttons[0].classList.add('btn-click')

    });

});
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter = e.target.dataset.filter;


        pics.forEach((pic => {
            if (btnfilter == 'all') {
                pic.style.display = 'block';
            } else {

                const picfilter = pic.dataset.item;
                if (btnfilter == picfilter) {
                    pic.style.display = 'block';

                } else {
                    pic.style.display = 'none';

                }



            }



        }));

    });
});


function setActiveBtn(e) {
    buttons.forEach((button) => {
        button.classList.remove('btn-click')
    });
    e.target.classList.add('btn-click')
};












