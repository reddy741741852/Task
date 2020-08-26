import React from "react";
import { Grid, Image } from "semantic-ui-react";
import SideBarHeader from "../Header/SideBarHeader";
import GetStarted from "../Get-Started/GetStarted";
import HowAssess from "../HowAssess/HowAssess";
import Help from "../Help/Help";
import Submit from "../Submit/Submit";
import DashedChart from "../Graph/DashedChart/DashedChart";


const Layout = () => {
  return (
    <div>
      <SideBarHeader />
      <div className="main">
        {/* <HowAssess /> */}
        {/* <Help /> */}
        {/* <Submit /> */}
        {/* <DashedChart /> */}

      </div>
    </div>
  );
};

export default Layout;
