import React, { ComponentType } from 'react';

interface IWithLayout {
  Layout(_: any): JSX.Element;
}

const withLayout =
  ({ Layout }: IWithLayout) =>
  <T extends Record<string, unknown>>(
      WrappedComponent: ComponentType<T>,
    ): React.FC<T> =>
    // eslint-disable-next-line react/display-name
      ({ ...props }) =>
        (
          <Layout>
            <WrappedComponent {...(props as T)} />
          </Layout>
        );

export default withLayout;
