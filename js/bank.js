const deposit_button = document.getElementById('deposit_button');
deposit_button.addEventListener('click', function () {
    const deposit = document.getElementById('deposit_price');
    if (deposit.value < 0 || deposit.value == "") {
        deposit.value = "";
        alert("Give positive value");
        return;
    }
    const deposit_price = deposit.value;
    deposit.value = "";

    const deposit_price_show = document.getElementById('deposit_price_show');
    deposit_price_show.innerText = parseFloat(deposit_price) + parseFloat(deposit_price_show.innerText);
    const total_price_show = document.getElementById('total_price_show')
    total_price_show.innerText = parseFloat(total_price_show.innerText) + parseFloat(deposit_price);

})
const withdraw_button = document.getElementById('withdraw_button');
withdraw_button.addEventListener('click', function () {
    const withdraw = document.getElementById('withdraw_price');
    const total_price_show = document.getElementById('total_price_show')
    if (parseFloat(withdraw.value) > parseFloat(total_price_show.innerText) || withdraw.value == "" || parseFloat(withdraw.value) < 0) {
        withdraw.value = "";
        alert("Give positive and lower value than balance");
        return;
    }
    const withdraw_price = withdraw.value;
    withdraw.value = "";

    const withdraw_price_show = document.getElementById('withdraw_price_show');
    withdraw_price_show.innerText = parseFloat(withdraw_price) + parseFloat(withdraw_price_show.innerText);

    total_price_show.innerText = parseFloat(total_price_show.innerText) - parseFloat(withdraw_price);

})