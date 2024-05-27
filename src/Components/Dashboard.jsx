import { memo } from "react";
import LeaderBoard from "./card1.jsx";

const Dashboard = memo(() => {
  return (
    <div className="w-full h-[960px] relative bg-lavender overflow-hidden leading-[normal] tracking-[normal]">
      <div className="absolute top-[75px] left-[232px] rounded-[32px] w-[1136px] h-[810px] flex items-center justify-center">
        <LeaderBoard />
      </div>
    </div>
  );
});

export default Dashboard;
