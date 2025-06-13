import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-button'
import RandomColorGenerator from './components/random-color-generator'
import StarRating from './components/star-rating'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'

function App() {
  return (
    <div className='App'>
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
      {<TreeView menus={menus} />}
    </div>
  )
}

export default App
