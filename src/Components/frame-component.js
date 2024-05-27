import PropTypes from "prop-types";
import NavigationDashboard from "./Navigation";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start gap-[83px] text-left text-5xl text-common-black font-abeezee ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-3.5">
        <div className="flex flex-row items-start justify-start relative">
          <div className="h-[33px] w-[33px] absolute !m-[0] top-[19.58px] left-[-13px] rounded-[50%] bg-mediumslateblue [transform:_rotate(-60deg)] [transform-origin:0_0]" />
          <a className="[text-decoration:none] relative font-bold inline-block min-w-[123px] z-[1] text-[inherit] mq450:text-lgi">
            <span>Crypto</span>
            <span className="text-mediumslateblue">Bro</span>
          </a>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px] text-base text-lightsteelblue font-abel">
        <button className="cursor-pointer [border:none] py-4 px-6 bg-[transparent] self-stretch flex flex-row items-end justify-start relative gap-[16px]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl bg-mediumslateblue" />
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/home.svg"
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
            <b className="relative text-base font-bold font-abel text-common-white text-left inline-block min-w-[87px] z-[1]">
              Dashboard
            </b>
          </div>
        </button>
        <NavigationDashboard swap="/swap.svg" dashboard="Exchange" />
        <NavigationDashboard
          swap="/iconlyboldwallet.svg"
          dashboard="Wallet  "
          propOverflow="unset"
          propMinWidth="53px"
          propColor="#b8bed9"
        />
        <NavigationDashboard
          swap="/activity.svg"
          dashboard="Statistics"
          propOverflow="hidden"
          propMinWidth="72px"
          propColor="#b8bed9"
        />
        <NavigationDashboard
          swap="/profile.svg"
          dashboard="Profile"
          propOverflow="hidden"
          propMinWidth="51px"
          propColor="#b8bed9"
        />
        <NavigationDashboard
          swap="/setting.svg"
          dashboard="Profile"
          propOverflow="hidden"
          propMinWidth="51px"
          propColor="#b8bed9"
        />
      </div>
      <NavigationDashboard
        swap="/logout.svg"
        dashboard="Logout"
        propOverflow="hidden"
        propMinWidth="55px"
        propColor="#ff4842"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
