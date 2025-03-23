# Next auth app

## Resources:

- [Server Component Stories](https://storybook.js.org/blog/storybook-react-server-components/): This link details how to make stories for server side components.

## UI Library

We will be relying on `shadcn` components to **avoid rewriting component logic**. Please go through the instruction of adding a `shadcn` component.

## Add new components

Please use this convention to add new shadcn components:

```
npm run add-comp --name=$component_name
```

Replace the `$component_name` with the component name you want to add.

So to add the `accordion`. Instead of using

```
npx shadcn-ui@latest add accordion
```

you will use

```
npm run add-comp --name=accordion
```

This custom script will run `prettier:fix` after it adds the component.

### Shadcn Component Modifications

We should avoid modifying shad-cn components directly. We can create our own `custom` components using shad-cn component and apply restyling as needed. We don't want to lose the functionality that shad-cn has already implemented.

**This should be done carefully. We should not alter `shad-cn`'s logic implementation.**
