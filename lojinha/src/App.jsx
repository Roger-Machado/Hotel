import Header from "./header/header";
import { CarouselCustomNavigation } from "./carousel/Carousel";
import Hotels from "./hotels/Hotels";
import Card from "./components/card/Card";

export default function App() {
  return (
    <div>
      <Header />
      <CarouselCustomNavigation />
      <Hotels />
    </div>
  );
}
