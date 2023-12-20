import { css } from 'styled-components';
// edit colors here!
const variables = css`
  :root {
    --dark-navy: #542E71;
    --old-dark-navy: #020c1b;
    
    --purple: #542E71;
    --navy: #542E71;
    --old-navy: #0a192f;

    --med-purple: #593178;
    --light-navy: #59317;
    --old-light-navy: #112240;
    
    --green: #FFCAC8;
    --pink: #FFCAC8;
    --neon-pink: #FFA9FD
    --old-green: #64ffda;
    -- old-pink: #FFCAC8;
    -- new-pink: #FFDFDF

    --light-pink: #F0D9E7;

    --slate: #A799B7;
    -- old-slate: #8892b0;
    --new-gray-purple: #A799B7;


    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;


    
    --light-slate: #A799B7;;
    --old-light-slate: #a8b2d1;

    --lightest-slate: #9F91CC;
    --grey-purple: #9F91CC;
    --old-lightest-slate: #ccd6f6;
    

    --white: #e6f1ff;

    --green-tint: rgba(100, 255, 218, 0.1);
    --blue: #57cbff;

    
    
    

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
