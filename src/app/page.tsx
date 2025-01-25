import Blog from "@/components/Blog";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <section>
      <div>
        <Showcase/>
      </div>
      <div>
        <Blog />
      </div>
    </section>
  );
}
