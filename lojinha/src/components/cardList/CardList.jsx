import Card from "../card/Card";

export default function CardList() {
  return (
    <>
      <Card
        name="Roma"
        img1="https://i.pinimg.com/736x/45/31/3f/45313f190a1c52789b998e4c3b4a01ee.jpg"
        description="A cidade eterna, cheia de história e cultura."
      ></Card>
      <Card
        name="Madri"
        img1="https://i.pinimg.com/736x/9e/07/7d/9e077db4f5cce1fbc443b1d9f5c29cb7.jpg"
        description="A capital espanhola vibrante e cheia de vida."
      ></Card>
      <Card
        name="Paris"
        img1="https://i.pinimg.com/736x/32/c1/ca/32c1ca57a56fc2c92e331770cebeba86.jpg"
        description="A cidade do amor e da Torre Eiffel."
      ></Card>
      <Card
        name="Londres"
        img1="https://i.pinimg.com/736x/69/57/ce/6957ce75bb73d3f32ca74f5178499f73.jpg"
        description="A terra do Big Ben e da Rainha."
      ></Card>
      <Card
        name="Nova Iorque"
        img1="https://i.pinimg.com/736x/88/72/25/887225e3d0746c533181616a400b97ea.jpg"
        description="A cidade que nunca dorme."
      ></Card>
    </>
  );
}
