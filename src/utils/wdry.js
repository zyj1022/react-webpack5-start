import React from 'react';

// import whyDidYouRender from "@welldone-software/why-did-you-render";
// whyDidYouRender(React, {
//   onlyLogs: true,
//   titleColor: "green",
//   diffNameColor: "blue",
//   trackAllPureComponents: true
// });

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    // onlyLogs: true,
    // titleColor: "green",
    // diffNameColor: "blue",
    trackAllPureComponents: true,
  });
}

// function component
// Hello.whyDidYouRender = true

// class component
// static whyDidYouRender = true;