import { useMemo } from "react";

const GroupComponent = ({
  className = "",
  bicurrencyBitcoin,
  bitcoinBuy,
  today,
  bTC,
  propBackgroundColor,
  propColor,
}) => {
  const transactionBackgroundsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const bTC1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start gap-[18px] text-left text-sm text-common-black font-abhaya-libre ${className}`}
    >
      <div className="h-12 w-12 relative">
        <div
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_0px_20px_rgba(143,_143,_145,_0.04)] rounded-2xl bg-goldenrod"
          style={transactionBackgroundsStyle}
        />
        <img
          className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
          loading="lazy"
          alt=""
          src={bicurrencyBitcoin}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
        <div className="self-stretch flex flex-col items-start justify-start">
          <b className="self-stretch relative">{bitcoinBuy}</b>
          <div className="self-stretch relative text-xs text-grey-500">
            {today}
          </div>
        </div>
      </div>
      <div className="w-[72px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border text-limegreen">
        <b className="self-stretch relative" style={bTC1Style}>
          {bTC}
        </b>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  bicurrencyBitcoin: PropTypes.string,
  bitcoinBuy: PropTypes.string,
  today: PropTypes.string,
  bTC: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
};

export default GroupComponent;
