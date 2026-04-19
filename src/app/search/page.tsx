import { Suspense } from "react";

import Search from "../_component/search/search";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search />
    </Suspense>
  );
}
