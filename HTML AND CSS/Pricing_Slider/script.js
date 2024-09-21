document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('pricing-slider');
    const priceLabel = document.getElementById('price');

    // Update the price label when the slider is dragged
    slider.addEventListener('input', function() {
        priceLabel.textContent = slider.value;
    });
});
