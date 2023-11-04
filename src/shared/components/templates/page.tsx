import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Spinner } from '../ui';

type Path = {
  path: string;
  element: React.ReactNode;
};

interface Data {
  mainpage: Path;
  routes: Path[];
}

interface Props {
  data: Data;
}

const PageTemplate = ({ data }: Props) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={data.mainpage.path} element={data.mainpage.element} />
        {data.routes.map(({ element, path }, idx) => (
          <Route path={path} element={element} key={`${path}-${idx}`} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default PageTemplate;
