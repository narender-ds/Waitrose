import * as React from "react";
/**
 * Component for About section
 * @param props
 * @returns HTML element
 */
var array: any = ["Promotions", "Pizza", "Starters", "Beverages", "Desserts"];

type services = {
  c_menuitems: any;
  title: any;
  Name:any;
};

export default function Storefacility(props: services) {
  const { c_menuitems, title,Name } = props;
  return (
    <>
    
    { c_menuitems ? <div className="sec-title">
        <h2>{title}</h2>
        </div> : ""}
      {c_menuitems ? (
        

        <div className="store-faci">
          <div className="boxes-row justify-center">
            {c_menuitems?.map((i: any, index: any) => {
              return (
                <>
                  <div className="boxes-fac">
                    {/* <div className="img-item"> */}
                    <img className="bg-[#FFFFFF] " style={{width:"100%"}} src={i.url}></img>
                      {/* {i.menuIcon.map((n: any) => {
                        return <img className="bg-[#FFFFFF]" src={n.url}></img>;
                      })} */}
                    {/* </div> */}
                    <h6>{i.menuTitle ? i.menuTitle : Name[index]}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
