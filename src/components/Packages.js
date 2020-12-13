import React, { useRef, useEffect } from 'react';
import PackageCard from './PackageCard';
import './Packages.css';
import essential from "../images/hv_essential.svg";
import enterprise from "../images/hv_enterprise.svg";
import venturer from "../images/hv_venturer.svg";
import cms1 from "../images/cms1.svg";
import cms2 from "../images/cms2.svg";



function Packages() {

    return (
      <>
        <div className='packageBackground'>
          <div className='packageWrapper'>

              <div>
                <PackageCard 
                    image={essential}
                    title='THE ESSENTIAL'
                    titleBack='THE ESSENTIAL'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rem numqulabore, id iusto, nam tempora a 
                            ducimus blanditiis dolorem officia.
                            Lorem ipsum dolor sit amet consectetur adipisicing e'
                    essential1='Custom Domain & Hosting Services'
                    essential2='Infographics & Branding Showcase'
                    essential3='Google Maps & API Integration'
                    essential4='Media & Proofreading Services'
                    essential5='CTA & Notification Services'
                    essential6='Responsive Web Design'
                    essential7='5 Pages'
                />
              </div>

              <div>
                <PackageCard 
                    image={enterprise}
                    title="THE ENTERPRISE"
                    titleBack="THE ENTERPRISE"
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rem numqulabore, id iusto, nam tempora a 
                            ducimus blanditiis dolorem officia.
                            Lorem ipsum dolor sit amet consectetur adipisicing e'
                    essential1='Everything In The Essential'
                    essential2='Basic Search Engine Optimization'
                    essential3='Social Media Backlinking'
                    essential4='Virtual Storefront & Shopping Cart'
                    essential5='Web Security & Anti Spam'
                    essential6='Secure Payment Gateway'
                    essential7='15 Pages'
                />
              </div>
              
              <div>
                <PackageCard 
                    image={venturer}
                    title="THE VENTURER"
                    titleBack='THE VENTURER'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rem numqulabore, id iusto, nam tempora a 
                            ducimus blanditiis dolorem officia.
                            Lorem ipsum dolor sit amet consectetur adipisicing e'
                    essential1='Everything In The Enterprise'
                    essential2='Advanced Search Engine Optimazation'
                    essential3='Live Chat Integration'
                    essential4='Customer Sign In & Data Logging'
                    essential5='Inventory Management System'
                    essential6='Engaging Fully Customizable Multi-Platform Design'
                    essential7='25 Pages'
                />
              </div>
          </div>
        </div>

        <div className="lastTwoCardBg">
          <div className="lastTwoCardWrapper">
            <div className='thirdCard'>
              <PackageCard 
                  image={cms1}
                  title='CMS-PERSONAL'
                  titleBack='CMS-PERSONAL'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Rem numqulabore, id iusto, nam tempora a 
                          ducimus blanditiis dolorem officia.
                          Lorem ipsum dolor sit amet consectetur adipisicing e'
                  essential1='Custom Domain & Hosting Services'
                  essential2='Infographics & Branding Showcase'
                  essential3='Google Maps & API Integration'
                  essential4='Media & Proofreading Services'
                  essential5='CTA & Notification Services'
                  essential6='Responsive Web Design'
                  essential7='5 Pages'
              />
            </div>

            <div className='fourthCard'>
              <PackageCard
                  image={cms2}
                  title="CMS-BUSINESS"
                  titleBack='CMS-BUSINESS'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Rem numqulabore, id iusto, nam tempora a 
                          ducimus blanditiis dolorem officia.
                          Lorem ipsum dolor sit amet consectetur adipisicing e'
                  essential1='Everything In The Enterprise'
                  essential2='Advanced Search Engine Optimazation'
                  essential3='Live Chat Integration'
                  essential4='Customer Sign In & Data Logging'
                  essential5='Inventory Management System'
                  essential6='Engaging Fully Customizable Multi-Platform Design'
                  essential7='25 Pages'
              />
            </div>
          </div>
        </div>
      </>
    )
}

export default Packages


