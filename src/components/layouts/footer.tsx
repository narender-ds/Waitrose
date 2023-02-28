import * as React from "react";
type DataOfProps = {
  c_footerLogo: any;
  c_waitroseHelpAndSupportSection: any;
  c_usefulInformationSection: any;
  c_moreFromUsSection: any;
  c_aboutWaitroseSection: any;
  c_socialIcon: any;
  c_visitOurMobileSiteTitle:any;
  c_footerImage:any;
  c_footerLogoText:any;
  c_copyrightTag:any;
};
const Footer = (props: DataOfProps) => {
  const {
    c_footerLogo,
    c_waitroseHelpAndSupportSection,
    c_usefulInformationSection,
    c_moreFromUsSection,
    c_aboutWaitroseSection,
    c_socialIcon,
    c_visitOurMobileSiteTitle,
    c_footerImage,
    c_footerLogoText,
    c_copyrightTag
  } = props;
  console.log("c_visitOurMobileSiteTitle.followTitle", c_visitOurMobileSiteTitle);
  return (
    // <footer classNameName="">
    //   <div classNameName="flex flex-col flex-wrap justify-center p-5 md:flex-row">
    //     <span classNameName="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0 space-x-3">
    //       <a classNameName="text-black hover:text-blue-500">
    //         <svg
    //           fill="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           classNameName="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //         </svg>
    //       </a>
    //       <a classNameName="text-black hover:text-blue-500">
    //         <svg
    //           fill="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           classNameName="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //         </svg>
    //       </a>
    //       <a classNameName="text-black hover:text-blue-500">
    //         <svg
    //           fill="none"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           classNameName="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //           <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //         </svg>
    //       </a>
    //       <a classNameName="text-black hover:text-blue-500">
    //         <svg
    //           fill="currentColor"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="0"
    //           classNameName="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             stroke="none"
    //             d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    //           ></path>
    //           <circle cx="4" cy="4" r="2" stroke="none"></circle>
    //         </svg>
    //       </a>
    //     </span>
    //   </div>
    //   <div classNameName="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
    //     <div classNameName="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
    //       <p classNameName="mx-auto text-sm text-center text-black sm:text-left ">
    //         {" "}
    //         © 2021{" "}
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer
      className="inline-block w-full
    bg-[#F9F9F9]  text-white"
    >
             <h2 className="footerLogoText">{c_footerLogoText}</h2>
      <div className="container px-6 pt-6 flex">
        {/* <img src={c_footerLogo.url} alt="" /> */}
 
        <div className="flex">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2">
            <div className="Footer-navList">
              <h4 style={{ fontWeight: "bold", color: "black" }}>
                {c_waitroseHelpAndSupportSection.title}
              </h4>
              {c_waitroseHelpAndSupportSection?.labelsIcons?.map(
                (item: any) => {
                  return (
                    <>
                      <ul>
                        <li>
                          <div>
                            <a className="" href="#">
                              {item.navigationLinks.label}
                              <img src={item.navigationIcon.url} className="inline"/>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }
              )}
            </div>
            <div className="Footer-navList">
              <h4 style={{ fontWeight: "bold", color: "black" }}>
                {" "}
                {c_usefulInformationSection.title}
              </h4>
              {c_usefulInformationSection?.labelsIcons?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.navigationLinks.label}
                            <img src={item.navigationIcon.url} className="inline"/>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="Footer-navList">
              <h4 style={{ fontWeight: "bold", color: "black" }}>
                {c_moreFromUsSection.title}
              </h4>
              {c_moreFromUsSection?.labelsIcons?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.navigationLinks.label}
                            <img src={item.navigationIcon.url} className="inline"/>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="Footer-navList">
              <h4 style={{ fontWeight: "bold", color: "black" }}>
                {c_aboutWaitroseSection.title}
              </h4>
              {c_aboutWaitroseSection?.labelsIcons?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.navigationLinks.label}
                            <img src={item.navigationIcon.url} className="inline"/>
                           
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            {/* <div className="">
              <h3><span>Want more pizza offers?</span></h3>
              <h3><span>Of course you do!</span></h3>
              <script src="//r1.dotdigital-pages.com/resources/sharing/embed.js?sharing=lp-embed&amp;domain=r1.dotdigital-pages.com&amp;id=6KXL-8A5%2F%22" data-iframe-loaded="true"></script><iframe src="//r1.dotdigital-pages.com/p/6KXL-8A5#https://www.papajohns.com.mx/en-US" id="6KXL-8A5" className="_lpSurveyEmbed" name="6KXL-8A5" scrolling="no" allow="geolocation" sandbox="allow-modals allow-downloads allow-top-navigation allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation border: 0px none !important; margin: 0px !important; padding: 0px !important; display: block;" max-height="120" width="100%" height="120" ></iframe><script src="//r1.dotdigital-pages.com/resources/sharing/embed.js?sharing=lp-embed&amp;domain=r1.dotdigital-pages.com&amp;id=6KXL-8A5%2F%22" >
              </script>
              <p><span>By signing up, I agree to receive marketing communication from Papa Johns via email and/or SMS/Text.</span></p>
            </div> */}
          </div>
          {/* <div className="grid grid-cols-3 ">
            <div>
              <strong>
                <span>{FooterData.footerSlogan} </span>
              </strong>
            </div>

            <div className="grid grid-cols-3 align-right">
              <a href="/" aria-label="Go back to homepage">
                <img alt="" src={FooterData?.footerLogo?.url} />
              </a>
            </div>
          </div> */}
          {/* <hr />
          {c_aboutWaitroseSection.title}
          <div className="display-flex ">
            {c_aboutWaitroseSection?.labelsIcons?.map((item: any) => {
              return (
                <>
                  <ul>
                    <li>
                      <div>
                        <a className="" href="#">
                        {item.navigationLinks.label}
                        </a>
                      </div>
                    </li>
                  </ul>
                </>
              );
            })} */}
          <div className="socialIcondiv">
            <p className="socialIconp"> {c_socialIcon.followTitle}</p>
            <ul className="socialiconUl ">
              <li >
                <a
                  data-cy="social-links"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.twitter.com/papajohnsmx"
                  aria-label="Visit our Twitter page"
                >
                  <span aria-hidden="true">
                    {c_socialIcon.iconImage.map((item: any) => {
                      return (
                        <>
                          <img className="socialIcons" src={item.url} />
                        </>
                      );
                    })}{" "}
                  </span>
                </a>
              </li>
            </ul>
            <p className="socialIconp">{c_visitOurMobileSiteTitle}</p>
          </div>
        </div>
        <div>
        <img src={c_footerImage.url} alt="" />
        </div>
      </div>
   <p className="copyright">{c_copyrightTag}</p> 
      {/* </div > */}
    </footer>
  );
};

export default Footer;
