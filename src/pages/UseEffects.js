import HeaderCard from "../components/HeaderCard";
import ApiCall from "../components/hooks/useEffect/ApiCall";
import CountTimer from "../components/hooks/useEffect/CountTimer";
import SearchTerm from "../components/hooks/useEffect/SearchTerms";
import ResizeWindow from "../components/hooks/useEffect/ResizeWindow";
import PullApiCall from "../components/hooks/useEffect/PullApiCall";
import ApiCallWithProps from "../components/hooks/useEffect/ApiCallWithProps";
import LocalStorageName from "../components/hooks/useEffect/LocalStorageName";
import MessageByCondition from "../components/hooks/useEffect/MessageByCondition";
import UserProfile from "../components/hooks/useEffect/UserProfile";
import CountDownTimer from "../components/hooks/useEffect/CountDownTimer";
import PaginatedData from "../components/hooks/useEffect/PaginatedData";
import {
  apiCallCode,
  apiCallWithPropsCode,
  searchTermCode,
  countTimerCode,
  resizeWindowCode,
  pullApiCallCode,
  localStorageNameCode,
  messageByConditionCode,
  userProfileCode,
  countDownTimerCode,
  paginatedDataCode,
} from "../components/hooks/useEffect/codes";

function UseEffects() {
  return (
    <section>
      <h1>useEffect hook</h1>
      <HeaderCard text={"Fetch data - API call"} code={apiCallCode}>
        <ApiCall />
      </HeaderCard>

      <HeaderCard
        text={"Fetch data with props - API call"}
        code={apiCallWithPropsCode}
      >
        <ApiCallWithProps postId={1} />
      </HeaderCard>

      <HeaderCard text={"Search term - API call"} code={searchTermCode}>
        <SearchTerm query={3} />
      </HeaderCard>

      <HeaderCard
        text={"Count with timer - Interval/Timeout"}
        code={countTimerCode}
      >
        <CountTimer />
      </HeaderCard>

      <HeaderCard text={"Resize Window - Event listener"} code={resizeWindowCode}>
        <ResizeWindow />
      </HeaderCard>
      <HeaderCard
        text={"Pull data every 5 minutes - Interval/call API"}
        code={pullApiCallCode}
      >
        <PullApiCall />
      </HeaderCard>

      <HeaderCard text={"LocalStorage"} code={localStorageNameCode}>
        <LocalStorageName />
      </HeaderCard>

      <HeaderCard
        text={"Display Message by Condition"}
        code={messageByConditionCode}
      >
        <MessageByCondition />
      </HeaderCard>

      <HeaderCard text={"User Profile"} code={userProfileCode}>
        <UserProfile userId={1} />
      </HeaderCard>

      <HeaderCard text={"Count down timer"} code={countDownTimerCode}>
        <CountDownTimer initialCount={10} />
      </HeaderCard>
      <HeaderCard text={"Pagination - API call"} code={paginatedDataCode}>
        <PaginatedData />
      </HeaderCard>
    </section>
  );
}

export default UseEffects;
