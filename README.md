# `nextjs-mui-fabric`

> Instructional Nextjs project with a focus on composition over inheritance

```bash
nextjs-mui-fabric/
├── src/
    ├── components/ # Re-usable atomic design components (atoms,molecules,organisms, etc)
    ├── layouts/ # Common page structures
    ├── theme/ # MUI theme
    ├── util/ # Common function
    ├── views/ # Page assemblies
```

## Goals

- Combining functions(components) into new functions
- Higher order components that accept components as props (with a focus on {children})
- Function composition with JSX
- Logical breakdown of componentry into `layouts, views, and sections`

## Examples

> `withLayout`

`f: a -> a -> a`

`withLayout: JSX.Element-> JSX.Element -> JSX.Element`

`withLayout: Main -> WrappedComponent -> JSX.Element`

`withMainLayout: withLayout(Main)`

or

```typescript
<Main> // Layout
    <HomeView> // WrappedComponent
</Main>
```

> `Section`

`f: a -> a`

`Section: JSX.Element -> JSX.Element`

```typescript
<Section> // Applies page level structure (padding, breakpoints, etc.)
  <ContentBlock variant="primary" /> // Specific self closing structure (think art, image, etc)
</Section>
```

## Inspo

- [`composition vs inheritance`](https://reactjs.org/docs/composition-vs-inheritance.html)
