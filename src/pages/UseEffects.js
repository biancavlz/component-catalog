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

function UseEffects() {
  return (
    <section>
      <h1>useEffect hook</h1>
      <HeaderCard text={"Fetch data - API call"}>
        <ApiCall />
      </HeaderCard>

      <HeaderCard text={"Fetch data with props - API call"}>
        <ApiCallWithProps postId={1} />
      </HeaderCard>

      <HeaderCard text={"Search term - API call"}>
        <SearchTerm query={3} />
      </HeaderCard>

      <HeaderCard text={"Count with timer - Interval/Timeout"}>
        <CountTimer />
      </HeaderCard>

      <HeaderCard text={"Resize Window - Event listener"}>
        <ResizeWindow />
      </HeaderCard>
      <HeaderCard text={"Pull data every 5 minutes - Interval/call API"}>
        <PullApiCall />
      </HeaderCard>

      <HeaderCard text={"LocalStorage"}>
        <LocalStorageName />
      </HeaderCard>

      <HeaderCard text={"Display Message by Condition"}>
        <MessageByCondition />
      </HeaderCard>

      <HeaderCard text={"User Profile"}>
        <UserProfile userId={1} />
      </HeaderCard>

      <HeaderCard text={"Count down timer"}>
        <CountDownTimer initialCount={10} />
      </HeaderCard>
      <HeaderCard text={"Pagination - API call"}>
        <PaginatedData />
      </HeaderCard>
    </section>
  );
}

export default UseEffects;
