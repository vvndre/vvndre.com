import { DisplayDotsProvider, DisplayDotsAnime } from "display-dots-anime";
import Link from "next/link";

function HomeLogo() {
  return (
    <Link href="/">
      <DisplayDotsProvider>
        <div className="w-250 h-75 ml-2 hover:cursor-cell">
          <DisplayDotsAnime text="vvndre" />
        </div>
      </DisplayDotsProvider>
    </Link>
  );
}

export default HomeLogo;
