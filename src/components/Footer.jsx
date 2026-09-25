import React from 'react';

function AppleLogo({ size = 16, className = '' }) {
  const width = Math.round(size * (14 / 18));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 11 14 18"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-0.12em', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.2892 3.66 3.66 0 0 0 -2.3445 1.2084 3.2621 3.2621 0 0 0 -.8779 2.1585 1.4188 1.4188 0 0 0 .031.2892 3.869 3.869 0 0 0 2.3755-1.1469z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="apple-global-footer">
      <div className="apple-container footer-container">
        {/* Footnotes Section */}
        <section className="footer-footnotes" aria-label="Footnotes">
          <p>
            * Pricing includes a $30 connectivity discount that requires activation with AT&amp;T, T-Mobile, or Verizon.
          </p>
          <p>
            ** Apple Card Monthly Installments (ACMI) is a 0% APR payment option available only in the U.S. to select at checkout for certain Apple products purchased at Apple Store locations, <a href="#apple-store">apple.com</a>, the Apple Store app, or by calling 1-800-MY-APPLE and is subject to credit approval and credit limit. See <a href="#ht211204">support.apple.com/kb/HT211204</a> for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 15.49% to 26.49% based on creditworthiness. Rates as of March 1, 2023. If you choose the pay-in-full or one-time-payment option for an ACMI-eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the <a href="#card-agreement">Apple Card Customer Agreement</a> for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&amp;T, Verizon, or T-Mobile.
          </p>
          <p>
            To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings &gt; General &gt; Software Update. Tap Download and Install.
          </p>
          <p>
            Learn more about how Apple Card applications are evaluated at <a href="#ht209218">support.apple.com/kb/HT209218</a>.
          </p>
          <p>
            Available for qualifying applicants in the United States.
          </p>
          <p>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p>
            If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
          </p>
          <p>
            Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
          <p>
            Pricing for iPhone 14 and iPhone 14 Plus includes a $30 connectivity discount that requires activation with AT&amp;T, T-Mobile, or Verizon. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. iPhone activation required with AT&amp;T, T-Mobile, or Verizon for purchases made with ACMI at an Apple Store. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the <a href="#card-agreement">Apple Card Customer Agreement</a>. Additional iPhone Payments terms are <a href="#terms">here</a>. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
          </p>
          <p>
            The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches (iPhone 13 mini, iPhone 12 mini), 5.85 inches (iPhone 11 Pro, iPhone XS, iPhone X), 6.06 inches (iPhone 14, iPhone 13 Pro, iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR), 6.12 inches (iPhone 14 Pro), 6.46 inches (iPhone 11 Pro Max, iPhone XS Max), 6.68 inches (iPhone 14 Plus, iPhone 13 Pro Max, iPhone 12 Pro Max), or 6.69 inches (iPhone 14 Pro Max) diagonally. Actual viewable area is less.
          </p>
          <p>
            Service is included for free for two years with activation of any iPhone 14 model. Connection and response times vary based on location, site conditions, and other factors. See <a href="#iphone-14">apple.com/iphone-14</a> or <a href="#iphone-14-pro">apple.com/iphone-14-pro</a> for more information.
          </p>
          <p>
            iPhone 14 and iPhone 14 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi-Fi calling.
          </p>
          <p>
            All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See <a href="#batteries">apple.com/batteries</a> and <a href="#battery-health">apple.com/iphone/battery.html</a> for more information.
          </p>
          <p>
            Data plan required. 5G is available in select markets and through select carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see <a href="#cellular">apple.com/iphone/cellular</a>.
          </p>
          <p>
            <strong>AT&amp;T iPhone 14 Special Deal:</strong> Monthly price reflects net monthly payment, after application of AT&amp;T trade-in credit applied over 36 months with purchase of an iPhone 14 Pro, iPhone 14 Pro Max, iPhone 14, or iPhone 14 Plus and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 14, iPhone 14 Plus, iPhone 14 Pro, or iPhone 14 Pro Max of either $800, or $350 (based upon the model and condition of your trade-in smartphone), max bill credits will not exceed the cost of the device. Requires upgrade of an existing line or activation of a new line and purchase of a new iPhone 14, iPhone 14 Plus, iPhone 14 Pro, or iPhone 14 Pro Max on qualifying 36 month 0% APR installment plan, subject to carrier credit qualification. AT&amp;T Installment Plan with Next Up is not eligible for this promotion. $0 down for well qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible unlimited plan. Bill credits are applied as a monthly credit over the 36 month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one trade-in per qualifying purchase and one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 14 and iPhone 14 Plus includes $30 AT&amp;T connectivity discount. Activation required.
          </p>
          <p>
            <strong>AT&amp;T iPhone 13 Special Deal:</strong> Buy an iPhone 13 128 GB and get $370 in bill credits applied over 36 months. Buy an iPhone 13 256 GB and get $290 in bill credits applied over 36 months. Buy an iPhone 13 512 GB and get $310 in bill credits applied over 36 months. Requires upgrade of an existing line (or activation of a new line) and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Bill credits are applied as a monthly credit over the 36-month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Activation required.
          </p>
          <p>
            <strong>AT&amp;T iPhone SE Special Deal:</strong> Buy an iPhone SE 64 GB and get $250 in bill credits applied over 36 months. Buy an iPhone SE 128 GB and get $120 in bill credits applied over 36 months. Buy an iPhone SE 256 GB and get $40 in bill credits applied over 36 months. Requires upgrade of an existing line (or activation of a new line) and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Bill credits are applied as a monthly credit over the 36-month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Activation required.
          </p>
          <p>
            <strong>T-Mobile iPhone 14 Special Deal:</strong> Monthly price reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone 14 Pro, iPhone 14 Pro Max, iPhone 14, or iPhone 14 Plus and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 14, iPhone 14 Plus, iPhone 14 Pro, or iPhone 14 Pro Max of $400 or $200 (based upon the model and condition of your trade-in smartphone) for customers on any eligible rate plan. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Customer must remain in the T-Mobile Equipment Installment Program and on eligible rate plan for 24 months and remain in good standing to receive the full benefit of the bill credits; allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Price for iPhone 14 and iPhone 14 Plus includes $30 T-Mobile connectivity discount. Activation required.
          </p>
          <p>
            <strong>T-Mobile iPhone 13 Special Deal:</strong> Monthly price reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone 13 or iPhone 13 mini and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 13 or iPhone 13 mini of $400 or $200 (based upon the model and condition of your trade-in smartphone) for customers on any eligible rate plan. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple connectivity trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Customer must remain in the T-Mobile Equipment Installment Program and on eligible rate plan for 24 months and remain in good standing to receive the full benefit of the bill credits; allow 2 bill cycles from valid submission and validation of trade in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Price for iPhone 13 and iPhone 13 mini includes $30 T-Mobile connectivity discount. Activation required.
          </p>
          <p>
            <strong>T-Mobile iPhone SE 3 Special Deal:</strong> Monthly price reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone SE 3 and trade-in of eligible smartphone. Receive credit with purchase of an iPhone SE 3 of $400 or $200 (based upon the model and condition of your trade-in smartphone) for customers on any eligible rate plan. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple connectivity trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Customer must remain in the T-Mobile Equipment Installment Program and on eligible rate plan for 24 months and remain in good standing to receive the full benefit of the bill credits; allow 2 bill cycles from valid submission and validation of trade in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Price for iPhone SE 3 includes $30 T-Mobile connectivity discount. Activation required.
          </p>
          <p>
            <strong>Verizon iPhone 13 Special Deal:</strong> Monthly price reflects net monthly payment, after application of Verizon trade-in credit applied over 36 months with purchase of an iPhone 13 or iPhone 13 mini with credit of $600 or $300 for customers on a Do More, Play More, Get More, or One Unlimited plan (based upon the model and condition of your trade-in smartphone). Credit comprised of (i) Apple connectivity trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 36 months. Customer must remain in the Verizon Device Payment Program for 36 months to receive the full benefit of the Verizon bill credits. Bill credits may take 1-2 bill cycles to appear. If it takes two cycles for bill credits to appear, you’ll see the credit for the first cycle on your second bill in addition to that month’s credit. Requires purchase and activation of a new iPhone 13 mini or iPhone 13 with the Verizon Device Payment Program at 0% APR for 36 months, subject to carrier credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited service plan. Requires trade-in of eligible device in eligible condition. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer; subject to change. Additional terms from Apple, Verizon, and Apple’s trade-in partners may apply. Price for iPhone 13 and iPhone 13 mini includes $30 Verizon connectivity discount. Activation required.
          </p>
          <p>
            The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.
          </p>
          <p>
            $6.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="#terms">terms</a> apply.
          </p>
          <p>
            New subscribers only. $10.99/month after free trial. Plan automatically renews after trial until cancelled.
          </p>
          <p>
            Offer available to new subscribers who purchase an eligible device on or after September 7, 2022. $9.99/month after trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. Offer good for 3 months after eligible device activation, from December 12, 2022. Plan automatically renews until cancelled. Restrictions and other <a href="#terms">terms</a> apply.
          </p>
          <p>
            $4.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="#terms">terms</a> apply.
          </p>
          <p>
            Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. <a href="#terms">Terms</a> apply.
          </p>
        </section>

        <div className="footer-extra-logo-row">
          <a href="#" className="breadcrumb-apple-icon" aria-label="Apple">
            <AppleLogo size={16} />
          </a>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-extra-logo-row">
          <a href="#" className="breadcrumb-apple-icon" aria-label="Apple">
            <AppleLogo size={16} />
          </a>
        </div>

        {/* Breadcrumb Bar */}
        <div className="footer-breadcrumb">
          <a href="#" className="breadcrumb-apple-icon" aria-label="Apple Home">
            <AppleLogo size={16} />
          </a>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">iPhone</span>
        </div>

        <div className="footer-extra-logo-row footer-sub-breadcrumb">
          <a href="#" className="breadcrumb-apple-icon" aria-label="Apple">
            <AppleLogo size={16} />
          </a>
        </div>

        {/* 5-Column Directory Links */}
        <nav className="footer-directory-grid" aria-label="Apple Directory">
          {/* Column 1 */}
          <div className="directory-column">
            <div className="directory-section">
              <h4 className="directory-title">Shop and Learn</h4>
              <ul className="directory-links-list">
                {['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="directory-section">
              <h4 className="directory-title">Apple Wallet</h4>
              <ul className="directory-links-list">
                {['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="directory-column">
            <div className="directory-section">
              <h4 className="directory-title">Account</h4>
              <ul className="directory-links-list">
                {['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="directory-section">
              <h4 className="directory-title">Entertainment</h4>
              <ul className="directory-links-list">
                {['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="directory-column">
            <div className="directory-section">
              <h4 className="directory-title">Apple Store</h4>
              <ul className="directory-links-list">
                {['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="directory-column">
            <div className="directory-section">
              <h4 className="directory-title">For Business</h4>
              <ul className="directory-links-list">
                {['Apple and Business', 'Shop for Business'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="directory-section">
              <h4 className="directory-title">For Education</h4>
              <ul className="directory-links-list">
                {['Apple and Education', 'Shop for K-12', 'Shop for College'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="directory-section">
              <h4 className="directory-title">For Healthcare</h4>
              <ul className="directory-links-list">
                {['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="directory-section">
              <h4 className="directory-title">For Government</h4>
              <ul className="directory-links-list">
                {['Shop for Government', 'Shop for Veterans and Military'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div className="directory-column">
            <div className="directory-section">
              <h4 className="directory-title">Apple Values</h4>
              <ul className="directory-links-list">
                {['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supplier Responsibility'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="directory-section">
              <h4 className="directory-title">About Apple</h4>
              <ul className="directory-links-list">
                {['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'].map((link) => (
                  <li key={link}><a href="#" className="directory-link">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Footer Legal & Copyright */}
        <section className="footer-legal">
          <div className="footer-shop-help">
            More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>

          <div className="footer-bottom-row">
            <div className="footer-copyright">
              Copyright © 2023 Apple Inc. All rights reserved.
            </div>

            <ul className="footer-legal-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Sales and Refunds</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>

            <div className="footer-country">
              <a href="#">United States</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
