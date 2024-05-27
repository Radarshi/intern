import { useMemo } from "react";

const Components = ({
  className = "",
  bicurrencyBitcoin,
  uSDT,
  email,
  bitcoin,
  arrowDown2,
  prop,
  propPadding,
  propBackgroundColor,
  propMinWidth,
  propPadding1,
  propGap,
  propAlignSelf,
  propFlex,
  propWidth,
  propDisplay,
  propMinWidth1,
  propFlex1,
  propAlignSelf1,
  propFontFamily,
  propColor,
  propLineBreak,
  propColor1,
  propAlignSelf2,
  propWidth1,
  propPosition,
  propFontSize,
  propColor2,
  propTextAlign,
  propDisplay1,
  propFlex2,
  propFlexDirection,
  propGap1,
  propWidth2,
  propPosition1,
  propFontSize1,
  propFontFamily1,
  propColor3,
  propTextAlign1,
  propMinWidth2,
  propDisplay2,
  propWidth3,
  propPosition2,
  propFontSize2,
  propFontFamily2,
  propColor4,
  propTextAlign2,
  propFlex3,
  propFlexDirection1,
  propGap2,
  propWidth4,
  propFlexDirection2,
  propGap3,
  propHeight,
  propPosition3,
  propFontSize3,
  propFontFamily3,
  propColor5,
  propTextAlign3,
  propHeight1,
  propWidth5,
  propPosition4,
  propOverflow,
  propMinHeight,
  propDisplay3,
  propFlexDirection3,
  propGap4,
  propColor6,
  propDisplay4,
  propMinWidth3,
  propHeight2,
  propFlex4,
  propFontSize4,
  propFontFamily4,
  propTextAlign4,
  propWidth6,
  propOverflow1,
  propMinHeight1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const groupDiv1Style = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
      flex: propFlex,
      width: propWidth,
    };
  }, [propGap, propAlignSelf, propFlex, propWidth]);

  const bTCUSDTStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      flex: propFlex1,
      alignSelf: propAlignSelf1,
    };
  }, [propDisplay, propMinWidth1, propFlex1, propAlignSelf1]);

  const bTCStyle = useMemo(() => {
    return {
      fontFamily: propFontFamily,
      color: propColor,
      lineBreak: propLineBreak,
    };
  }, [propFontFamily, propColor, propLineBreak]);

  const uSDTStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const emailStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth1,
      position: propPosition,
      fontSize: propFontSize,
      color: propColor2,
      textAlign: propTextAlign,
      display: propDisplay1,
    };
  }, [
    propAlignSelf2,
    propWidth1,
    propPosition,
    propFontSize,
    propColor2,
    propTextAlign,
    propDisplay1,
  ]);

  const coinInfoStyle = useMemo(() => {
    return {
      flex: propFlex2,
      flexDirection: propFlexDirection,
      gap: propGap1,
      width: propWidth2,
      position: propPosition1,
      fontSize: propFontSize1,
      fontFamily: propFontFamily1,
      color: propColor3,
      textAlign: propTextAlign1,
    };
  }, [
    propFlex2,
    propFlexDirection,
    propGap1,
    propWidth2,
    propPosition1,
    propFontSize1,
    propFontFamily1,
    propColor3,
    propTextAlign1,
  ]);

  const bitcoinStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      display: propDisplay2,
      width: propWidth3,
      position: propPosition2,
      fontSize: propFontSize2,
      fontFamily: propFontFamily2,
      color: propColor4,
      textAlign: propTextAlign2,
      flex: propFlex3,
      flexDirection: propFlexDirection1,
      gap: propGap2,
    };
  }, [
    propMinWidth2,
    propDisplay2,
    propWidth3,
    propPosition2,
    propFontSize2,
    propFontFamily2,
    propColor4,
    propTextAlign2,
    propFlex3,
    propFlexDirection1,
    propGap2,
  ]);

  const priceChangeStyle = useMemo(() => {
    return {
      width: propWidth4,
      flexDirection: propFlexDirection2,
      gap: propGap3,
      height: propHeight,
      position: propPosition3,
      fontSize: propFontSize3,
      fontFamily: propFontFamily3,
      color: propColor5,
      textAlign: propTextAlign3,
    };
  }, [
    propWidth4,
    propFlexDirection2,
    propGap3,
    propHeight,
    propPosition3,
    propFontSize3,
    propFontFamily3,
    propColor5,
    propTextAlign3,
  ]);

  const arrowDown2Style = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth5,
      position: propPosition4,
      overflow: propOverflow,
      minHeight: propMinHeight,
      display: propDisplay3,
      flexDirection: propFlexDirection3,
      gap: propGap4,
    };
  }, [
    propHeight1,
    propWidth5,
    propPosition4,
    propOverflow,
    propMinHeight,
    propDisplay3,
    propFlexDirection3,
    propGap4,
  ]);

  const divStyle = useMemo(() => {
    return {
      color: propColor6,
      display: propDisplay4,
      minWidth: propMinWidth3,
      height: propHeight2,
      flex: propFlex4,
      fontSize: propFontSize4,
      fontFamily: propFontFamily4,
      textAlign: propTextAlign4,
      width: propWidth6,
      overflow: propOverflow1,
      minHeight: propMinHeight1,
    };
  }, [
    propColor6,
    propDisplay4,
    propMinWidth3,
    propHeight2,
    propFlex4,
    propFontSize4,
    propFontFamily4,
    propTextAlign4,
    propWidth6,
    propOverflow1,
    propMinHeight1,
  ]);

  return (
    <div
      className={`w-[282px] shrink-0 flex flex-row items-start justify-start p-4 box-border relative text-left text-lg text-common-black font-abhaya-libre ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_0px_25px_rgba(48,_73,_191,_0.07)] rounded-2xl bg-common-white" />
      <div
        className="flex-1 flex flex-row items-end justify-start gap-[9px] z-[1] mq450:flex-wrap"
        style={groupDivStyle}
      >
        <div className="h-12 w-12 relative">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_0px_20px_rgba(143,_143,_145,_0.04)] rounded-2xl bg-darkorange"
            style={rectangleDivStyle}
          />
          <img
            className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src={bicurrencyBitcoin}
          />
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[125px]"
          style={frameDivStyle}
        >
          <div
            className="self-stretch h-[41px] flex flex-col items-start justify-start gap-[2.5px]"
            style={frameDiv1Style}
          >
            <div
              className="flex flex-row items-start justify-start gap-[27px]"
              style={groupDiv1Style}
            >
              <div
                className="relative inline-block min-w-[94px]"
                style={bTCUSDTStyle}
              >
                <span style={bTCStyle}>BTC</span>
                <span className="text-grey-500" style={uSDTStyle}>
                  {uSDT}
                </span>
              </div>
              <div
                className="w-[72px] relative text-right flex items-center whitespace-nowrap"
                style={emailStyle}
              >
                {email}
              </div>
            </div>
            <div
              className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px] text-smi text-grey-500"
              style={coinInfoStyle}
            >
              <div
                className="relative inline-block min-w-[43px]"
                style={bitcoinStyle}
              >
                {bitcoin}
              </div>
              <div
                className="w-[71px] flex flex-row items-end justify-start gap-[2px] text-right text-xs text-error-main"
                style={priceChangeStyle}
              >
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src={arrowDown2}
                  style={arrowDown2Style}
                />
                <div
                  className="flex-1 relative inline-block min-w-[53px]"
                  style={divStyle}
                >
                  {prop}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Components.propTypes = {
  className: PropTypes.string,
  bicurrencyBitcoin: PropTypes.string,
  uSDT: PropTypes.string,
  email: PropTypes.string,
  bitcoin: PropTypes.string,
  arrowDown2: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propFontFamily: PropTypes.any,
  propColor: PropTypes.any,
  propLineBreak: PropTypes.any,
  propColor1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propWidth1: PropTypes.any,
  propPosition: PropTypes.any,
  propFontSize: PropTypes.any,
  propColor2: PropTypes.any,
  propTextAlign: PropTypes.any,
  propDisplay1: PropTypes.any,
  propFlex2: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propGap1: PropTypes.any,
  propWidth2: PropTypes.any,
  propPosition1: PropTypes.any,
  propFontSize1: PropTypes.any,
  propFontFamily1: PropTypes.any,
  propColor3: PropTypes.any,
  propTextAlign1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propDisplay2: PropTypes.any,
  propWidth3: PropTypes.any,
  propPosition2: PropTypes.any,
  propFontSize2: PropTypes.any,
  propFontFamily2: PropTypes.any,
  propColor4: PropTypes.any,
  propTextAlign2: PropTypes.any,
  propFlex3: PropTypes.any,
  propFlexDirection1: PropTypes.any,
  propGap2: PropTypes.any,
  propWidth4: PropTypes.any,
  propFlexDirection2: PropTypes.any,
  propGap3: PropTypes.any,
  propHeight: PropTypes.any,
  propPosition3: PropTypes.any,
  propFontSize3: PropTypes.any,
  propFontFamily3: PropTypes.any,
  propColor5: PropTypes.any,
  propTextAlign3: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth5: PropTypes.any,
  propPosition4: PropTypes.any,
  propOverflow: PropTypes.any,
  propMinHeight: PropTypes.any,
  propDisplay3: PropTypes.any,
  propFlexDirection3: PropTypes.any,
  propGap4: PropTypes.any,
  propColor6: PropTypes.any,
  propDisplay4: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propHeight2: PropTypes.any,
  propFlex4: PropTypes.any,
  propFontSize4: PropTypes.any,
  propFontFamily4: PropTypes.any,
  propTextAlign4: PropTypes.any,
  propWidth6: PropTypes.any,
  propOverflow1: PropTypes.any,
  propMinHeight1: PropTypes.any,
};

export default Components;
