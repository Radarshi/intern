const GroupComponent1 = ({ className = "" }) => {
    return (
      <div
        className={`self-stretch h-80 relative max-w-full z-[1] text-left text-lg text-common-black font-abhaya-libre mq450:h-auto mq450:min-h-[320] ${className}`}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_0px_40px_rgba(48,_73,_191,_0.04)] rounded-3xl bg-common-white" />
        <img
          className="absolute h-[44.38%] w-[86.09%] top-[32.81%] right-[3.34%] bottom-[22.81%] left-[10.57%] max-w-full overflow-hidden max-h-full z-[2]"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
        <div className="absolute top-[37px] left-[69px] w-[626px] flex flex-col items-start justify-start gap-[46px] max-w-full">
          <b className="w-[124px] relative flex items-center z-[1]">
            Total Portfolio
          </b>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[27px] pr-0 pl-[7px] box-border max-w-full">
            <img
              className="h-[102px] flex-1 relative max-w-full overflow-hidden z-[1]"
              alt=""
              src="/data-points.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-[25px] box-border max-w-full text-right text-sm text-grey-500 font-abel">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq450:flex-wrap">
              <b className="relative font-bold inline-block min-w-[30px]">Mon</b>
              <b className="relative font-bold inline-block min-w-[24px]">Tue</b>
              <b className="relative font-bold inline-block min-w-[32px]">Wed</b>
              <b className="relative font-bold inline-block min-w-[32px]">Thur</b>
              <b className="relative font-bold inline-block min-w-[19px]">Fri</b>
              <b className="relative font-bold inline-block min-w-[24px]">Sat</b>
              <b className="relative font-bold inline-block min-w-[27px]">Sun</b>
            </div>
          </div>
        </div>
        <div className="absolute top-[22px] left-[24px] flex flex-col items-start justify-start gap-[66px] text-right text-sm text-grey-500 font-abel">
          <img
            className="w-10 h-10 relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/activity-1.svg"
          />
          <div className="w-[30px] flex flex-col items-end justify-start gap-[24px] z-[1]">
            <b className="w-[29px] relative font-bold flex items-center">400</b>
            <b className="self-stretch relative font-bold">300</b>
            <b className="self-stretch relative font-bold">200</b>
            <b className="w-[26px] relative font-bold flex items-center min-w-[26px]">
              100
            </b>
            <b className="w-2.5 relative font-bold flex items-center min-w-[10px]">
              0
            </b>
          </div>
        </div>
      </div>
    );
  };
  
  GroupComponent1.propTypes = {
    className: PropTypes.string,
  };
  
  export default GroupComponent1;
  