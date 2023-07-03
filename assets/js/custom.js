setTimeout(()=>{
    document.querySelectorAll('input[type="date"]').forEach(ele=>{
        ele.setAttribute("placeholder", "yyyy-mm-dd");

        ele.flatpickr({
            minDate: ele.min,
            maxDate: ele.max,
        });
    })
},2000)


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Select all number input fields on the page
        var numberInputs = document.querySelectorAll('input[type=number]');
        // console.log(numberInputs,'AHHH');
        // Attach an event listener to each input field
        numberInputs.forEach(function (input) {
            input.addEventListener('keydown', function (event) {
                if (event.ctrlKey || event.altKey || event.metaKey) {
                    return;
                }
                // Allow the following keys: backspace, delete, tab, escape, enter, decimal point, and numbers
                if (event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 ||
                    event.keyCode === 13 || event.keyCode === 190 || event.keyCode === 37 || event.keyCode === 38 ||
                    event.keyCode === 39 || event.keyCode === 40 || (event.keyCode >= 48 && event.keyCode <= 57) ||
                    (event.keyCode >= 96 && event.keyCode <= 105)) {
                    // Allow the key to be entered
                } else {
                    // Prevent the key from being entered
                    event.preventDefault();
                }
            });
        });
    }, 300);
})