# React Fibre

react ek virtualDOM banata hai taki jo chahiye wohi element update karna pade. Baki pure page ko update karne ki koi jarurat nahi legegi.

Lekin ye approach galat hai kyuki ek element mai changes karte hai toh kabhi kabhi uska effect baki chijo par bhi hota hai, jaise ki layouts, animation and gestures.

Other key features include the ability to pause, abort or reuse work and also priority to different type of updates.

## What is Reconciliation ?

1) The algorithm React uses to differentiate one tree with another to determine which parts need to be changed.
2) It is also the algorithm behind what is popularly understoodas the virtual DOM.

# Is React Fiber used nowadays?
Yes, React Fiber is the current core architecture of React.

It powers:

Concurrent features (Concurrent Mode)

Suspense for data fetching

React Server Components (RSC)

React 18 automatic batching

Transitions and priorities
