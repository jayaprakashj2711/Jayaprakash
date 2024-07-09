document.getElementById('payButton').addEventListener('click', function() {
    var handler = StripeCheckout.configure({
        key: 'your-publishable-key-here',
        locale: 'auto',
        token: function(token) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token.id);
        }
    });

    handler.open({
        name: 'Demo Site',
        description: '2 widgets',
        amount: 2000
    });
});

// Close Checkout on page navigation
window.addEventListener('popstate', function() {
    handler.close();
});
