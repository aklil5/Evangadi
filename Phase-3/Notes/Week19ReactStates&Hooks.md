P I
React States

1. Defn of state: whats the difference between state and props?
2. Steps to add and use states in your class based component
3. Updating state values in your class based component: handling events in react
4. Updating state values in your class based component: setState() method
5. React component's lifecycle methods (class based)

---
# 1. Defn of state: whats the difference between state and props?
## Whats state?

- state is a JS Object that holds info that influences the output of render.

- the main difference between props and States is that:
    - Props get passed to the component
        - just like parameters in a funciton
    - Props is used to pass data from parent component to a child component.
        - props cant be changed by the component receiving the props
            - it can be done technically. But its prone to error

    - State is managed within the component itself
        - Just like VARIABLE in a function
        - States can be changed by the component
        - when the state CHANGES, React RE-RENDERS the component to reflect those changes. 

- By default a COMPONENT HAS NO STATE

- State is used when we want to keep track of info during multiple renderings of a component
    - The component itself can create, update and use state


---
# 2. Steps to add and use states in your class based component

## How to use States
- 





---

3. Updating state values in your class based component: handling events in react
4. Updating state values in your class based component: setState() method
5. React component's lifecycle methods (class based)

===
P2

React Hooks

1. What are React hooks, why do we use them and what rules should we follow when using them?
2. Basic React hooks: steps to implement useState() hook
3. Basic React hooks: using useState() to change a state's value based on previous state value
4. Basic React hooks: steps to implement useEffect() hook
5. Basic React hooks: steps to implement context API and useContext() hook