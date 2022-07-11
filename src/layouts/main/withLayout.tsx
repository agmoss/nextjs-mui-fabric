import React, { ComponentType } from 'react';

interface IWithLayout {
  Layout(_: any): JSX.Element;
}

export const withLayout =
  ({ Layout }: IWithLayout) =>
  <T extends Record<string, unknown>>(
    WrappedComponent: ComponentType<T>,
  ): React.FC<T> =>
  ({ ...props }) => {
    return (
      <Layout>
        <WrappedComponent {...(props as T)} />
      </Layout>
    );
  };
