document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    if (amount > 0) {
        document.getElementById('thankYouMessage').innerText = `Thank you for your donation of NGN${amount}!..
        The celebrant has been notified, please do keep your promise...
        Once you've complete the donation, please click the
         "NOTIFY ME" button to notify me of the transfer via WHATSAPP`;
        document.getElementById('amount').value = '';
    } else {
        document.getElementById('thankYouMessage').innerText = 'Please enter a valid amount.';
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const accountNumber = document.getElementById('accountNumber').innerText;
    navigator.clipboard.writeText(accountNumber).then(() => {
        alert('Account number copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
