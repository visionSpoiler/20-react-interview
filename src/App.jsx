import Accordian from "./components/accordian";
import FeatureFlags from "./components/feature-flag";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-button";
import ModalTest from "./components/modal-popup/ModalTest";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColorGenerator from "./components/random-color-generator";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import Tabs from "./components/tabs";
import { tabs } from "./components/tabs/data";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import TestUseFetch from "./components/use-fetch/test";
import TestUseOutSideClick from "./components/use-outside-click/test";

function App() {
  return (
    <div className="App">
      {/* 아코디언 컴퍼넌트 */}
      {/*<Accordian />*}
      {/* 랜덤 컬러 생성기 */}
      {/*<RandomColorGenerator />*/}
      {/* 별점 */}
      {/*<StarRating numOfStar={5} />*/}
      {/* 이미지 슬라이더 */}
      {/*<ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"10"} />*}
      {/* 더 많은 상품 보기 버튼 */}
      {/*<LoadMoreData /> */}
      {/* 트리 형태의 메뉴 */}
      {/*<TreeView menus={menus} />*/}
      {/* QR코드 생성기 */}
      {/*<QRCodeGenerator />*/}
      {/* 다크 모드 */}
      {/*<LightDarkMode />*/}
      {/* 스크롤 표시기 */}
      {/*<ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />*/}
      {/* 탭 */}
      {/*<Tabs tabsContent={tabs}/>*/}
      {/* 모달 */}
      {/*<ModalTest />*/}
      {/* 깃허브 프로파일 탐색기0 */}
      {/*<GithubProfileFinder />*/}
      {/* 자동완성 */}
      {/*<SearchAutocomplete />*/}
      {/* 틱택토 게임 */}
      {/*<TicTacToe />*/}
      {/* 배포와 노출 분리 */}
      {/*<FeatureFlagGlobalState>
        <FeatureFlags />
        </FeatureFlagGlobalState>*/}
      {/* 커스텀 훅 useFetch */}
      {/*<TestUseFetch />*/}
      {/* 커스텀 훅 useOutsideClick */}
      {<TestUseOutSideClick />}
    </div>
  );
}

export default App;
