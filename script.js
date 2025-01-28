document.querySelectorAll('.overlay button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.parentElement.querySelector('h2').innerText;
      alert(`You selected: ${category}`);
    });
  });
  //Main
  document.addEventListener("DOMContentLoaded"), () => {
    const dropdown = document.querySelector(".dropdown");
    const mainContent = document.querySelector(".main-content");
  
    // Categories Data
    const categories = [
      "Special Offers",
      "Latest Products",
      "Wood Engravings",
      "Leather Engravings",
      "Acrylic Engravings",
      "Sublimations",
      "Wine Boxes",
      "Ear Rings",
      "Jewellery",
      "Gift Boxes",
    ];
  
}
//Buttons
 // Select all dynamic buttons and modal elements
 const buttons = document.querySelectorAll('.dynamic-button');
 const modal = document.getElementById('modal');
 const modalText = document.getElementById('modal-text');
 const closeBtn = document.querySelector('.close-btn');
 
 // Add event listeners to each button
 buttons.forEach((button) => {
   button.addEventListener('click', () => {
     const content = button.getAttribute('data-content');
     modalText.textContent = `You clicked: ${content}`;
     modal.classList.remove('hidden');
   });
 });
 //Main contents
 document.querySelectorAll('.overlay button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.parentElement.querySelector('h2').innerText;
      alert(`You selected: ${category}`);
    });
  });
  document.querySelector(".footer-section.newsletter form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector("input[type='email']").value;
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
  });
 // Event listeners for emoji buttons
 document.querySelectorAll('.emoji-button').forEach(button => {
    button.addEventListener('click', function () {
      // Update the counter
      const countSpan = button.querySelector('span');
      countSpan.textContent = parseInt(countSpan.textContent) + 1;

      // Add animation class
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 500);
    });
  });
/* Emojies*/
 // Track cart count
 let cartCount = 0;

 // Event listener for Add to Cart buttons
 document.querySelectorAll('.add-to-cart').forEach(button => {
   button.addEventListener('click', function () {
     cartCount++;
     document.getElementById('cart-count').textContent = cartCount;

     button.textContent = 'Added!';
     setTimeout(() => button.textContent = 'Add to Cart', 1000);
   });
 });

 // Event listeners for emoji buttons
 document.querySelectorAll('.emoji-button').forEach(button => {
   button.addEventListener('click', function () {
     // Update the counter
     const countSpan = button.querySelector('span');
     countSpan.textContent = parseInt(countSpan.textContent) + 1;

     // Add animation class
     button.classList.add('clicked');
     setTimeout(() => button.classList.remove('clicked'), 500);
   });
 });