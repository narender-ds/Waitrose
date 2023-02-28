import * as React from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "@yext/pages/components";
type Data = {
  name:any;
  storeHighlights: any;
  title: any;
  c_localProducts:any;
};
export default function StoreHighlight(props: Data) {
  const { name,storeHighlights, title ,c_localProducts} = props;
  /*for small mobile screens */
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return (
    <>
      <div className="container-custom mx-auto ">
       {storeHighlights ? <div className="sec-title">
          <h2>{name} {storeHighlights.productTitle} </h2>
          <h4>{storeHighlights.productDesciption}</h4>
        </div> : ""}

        <div className="services-inner">
          {c_localProducts.map((res: any, i: Number) => {
            console.log('res', res)
            return (
              <>
                {res.productImage ? (
                  <div className="item">
                    <div className="service-item">
                      <div className="service-img">
                        {res.productImage ? (
                          <img
                            src={res.productImage.url}
                            className="w-full"
                            height="250"
                          />
                        ) : (
                          <img
                            className="w-full"
                            src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
                            height="250"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="service-desc-main">
                        {/* <h3>{res.productName.label}</h3> */}
                        <div className="service-desc">
                          {res.productName.label}
                        </div>
                        {/* {res.orderNowCTA.link && res.orderNowCTA.label ? (
                          <div
                            className="bg-[#0f9675] hover:bg-[#ab131b] text-white rounded w-[calc(50%_-_5px)] xl:w-[170px] transition-all duration-300"
                            style={{
                              alignItems: "center",
                              marginLeft: "22%",
                              marginTop: "10px",
                            }}
                          >
                            {res.orderNowCTA.link ? (
                              <Link
                                style={{
                                  alignItems: "center",
                                  marginLeft: "40px",
                                  textAlign: "center",
                                }}
                                className=""
                                href={res.orderNowCTA.link}
                                data-ya-track={`storehighlight`}
                                eventName={`storehighlight`}
                                rel="noopener noreferrer"
                              >
                                {res.orderNowCTA.label}
                              </Link>
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          ""
                        )} */}
                      </div>
                    </div>{" "}
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
