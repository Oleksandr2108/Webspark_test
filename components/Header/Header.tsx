import Image from "next/image";
import { Grid } from "../Grid/Grid";

import Logo from "@/assets/image/Logo.svg";

const Header = () => {
  return (
    <div className="w-full h-43 shadow-[0_4px_24px_0_rgba(0,0,0,0.12),inset_0_12px_24px_0_rgba(0,0,0,0.12)] bg-[rgba(255,255,255,0.67)]">
      <Grid>
        <div className="col-span-3 ">
          <Image
            src={Logo}
            alt="logo"
            className="ml-13.5"
          />
        </div>
        <div className="col-span-6 col-start-5">
          <div className="flex items-center ">
            <h3 className="font-sans font-medium text-2xl">monblanproject</h3>
            <div className="flex items-center justify-center border-[#3d8eda] h-7 px-3 border rounded-xs ml-4 ">
              <p className="font-serif font-normal text-[13px] text-[#3d8eda]">
                {" "}
                Start on 17-02-2016
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Header;
