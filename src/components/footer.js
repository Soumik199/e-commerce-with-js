const Footer = () => {
  const div = document.createElement("DIV");
  div.innerHTML = `<div class="cont">
      <div class="leftside box">
        <h3>bigbasket</h3>
        <div class="drop">
          <li><a href="#">In News</a></li>
          <li><a href="#">Green Basket</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Careers At bigbasket</a></li>
          <li><a href="#">bb Instant</a></li>
          <li><a href="#">bb Daily</a></li>
        </div>
      </div>
      <div class="centerside box">
        <h4>Help</h4>
        <div class="menu">
          <a href=""><li>FAQs</li></a>
          <a href=""><li>bb Wallet FAQs</li></a>
          <a href=""><li>bb Wallet T&Cs</li></a>
          <a href=""><li>Vendor Connect</li></a>
          <a href=""><li>E-Invoice Compliance for bigbasket</li></a>
          <a href=""><li>Vendors</li></a>
        </div>
      </div>
      <div class="rightside box">
        <h2>Get Social With Us</h2>
        <div class="social">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    <div class="cat">
      <span> POPULAR CATEGORIES:</span>
      <p>
        Fruits & Vegetables, Basmati Rice, Green Tea, OTC, Cheese, Dry Fruits,
        Chocolates & Sweets, Soft Drinks, Energy Drinks, Bakery, Cakes &
        Dairy, Olive Oils, Foodgrains, Oil & Masala, Sunflower Oils, Liquid
        Soaps & Bars,
      </p>
      <span>POPULAR BRANDS:</span>
      <p>
        Amul, Haldirams , Tropicana, Kelloggs, Dettol, MTR, Bru , McCain,
        Ariel , Britannia, Nescafe , Colgate, Horlicks, Galaxy, Complan,
      </p>
      <span>CITIES WE SERVE:</span>
      <p>
        Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore,
        Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Nashik,
        Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur,
        Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad,
        Kochi,
      </p>
    </div>`;
  const footer = document.getElementById("footer");
  footer.append(div);
};
Footer();
