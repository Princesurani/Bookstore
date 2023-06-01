import Addbook from "./editbook/Addbook";
import Editbook from "./editbook/Editbook";

export default function Home() {
  return (
    <section>
      {/* <h1>welcome to e book store</h1> */}
      <Editbook/>
      <Addbook/>
    </section>
  );
}