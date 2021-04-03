$(document).ready(function () {
    let Url = `https://cat-fact.herokuapp.com/facts`;
    $(`.btn`).click(function () {
        $.ajax({
            url: Url,
            type: "GET",

            success: function (array) {


                for (let i = 0; i < array.length; i++) {
                    let text = array[i].text;

                    $(`body`).append(`<div>${text}</div>`);

                }
            },
            error: function (error) {
                console.log(`Error ${error}`)
            }

        })
    })
})