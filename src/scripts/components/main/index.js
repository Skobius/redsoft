const main = {
    init() {
        let btn = $('.js-card__btn');
        let card = $('.card');
        let url = 'https://reqres.in/api/products/3';

        fetch(url)
            .then(response => response.json())
            .then(commits => {
                card.each(function () {
                    let id = $(this).data('id');
                    let localValue = localStorage.getItem(id);

                    if (localValue == commits.data.id) {
                        $(this).addClass('card__btn-block--true');
                    }
                });
            });


        btn.on('click', function (e) {
            e.preventDefault();

            let cardBlock = $(this).closest('.card__btn-block');

            cardBlock.addClass('card__btn-block--load');

            $.ajax({
                type: 'get',
                url: url,
                dataType:"json",
                data: '',
                success: function(data){
                    cardBlock.removeClass('card__btn-block--load').addClass('card__btn-block--true');
                    localStorage.setItem(cardBlock.closest('.card').data('id'), data.data.id);
                }
            });
        });
    }
};

export default main;
