
        import React from 'react';
        import docs from '/Users/jschuler/Documents/GitHub/org-patternfly-base/packages/patternfly-4/_repos/react-charts/src/components/PieChart/PieChart.docs.js';
        import ComponentDocs from '/Users/jschuler/Documents/GitHub/org-patternfly-base/packages/patternfly-4/src/components/componentDocs';

        const rawExamples = [{name: 'SimpleChart', path: '../_repos/react-charts/src/components/PieChart/examples/SimpleChart.js', file: require('!!raw-loader!../_repos/react-charts/src/components/PieChart/examples/SimpleChart.js')}];
        const images = [{name: 'img_avatar.svg', file: require('../_repos/react-core/src/demos/PageLayout/examples/img_avatar.svg')},{name: 'l_pf-reverse-164x11.png', file: require('../_repos/react-core/src/demos/PageLayout/examples/l_pf-reverse-164x11.png')},{name: 'img_avatar.svg', file: require('../_repos/react-core/src/components/Avatar/examples/img_avatar.svg')},{name: 'pf_logo.svg', file: require('../_repos/react-core/src/components/Brand/examples/pf_logo.svg')},{name: 'pf_logo.svg', file: require('../_repos/react-core/src/components/AboutModal/examples/pf_logo.svg')},{name: 'pf_mini_logo_white.svg', file: require('../_repos/react-core/src/components/AboutModal/examples/pf_mini_logo_white.svg')},{name: 'pf_logo_color.svg', file: require('../_repos/react-core/src/components/LoginPage/examples/pf_logo_color.svg')},{name: 'pfbg_992.jpg', file: require('../_repos/react-core/src/components/AboutModal/examples/pfbg_992.jpg')}];

        export const piechart_docs = docs;
        export const piechart_package = 'react-charts';

        export default () => <ComponentDocs rawExamples={rawExamples} images={images} {...docs} />;
        