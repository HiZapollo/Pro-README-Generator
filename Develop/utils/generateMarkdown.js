// Renders the badge for the license
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU AGPLv3':
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
    case 'GNU GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'GNU LPGLv3':
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
    case 'Mozilla Public License 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    case 'Apache License 2.0':
      return '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'Boost Software License 1.0':
      return '![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    default:
      return 'N/A';
  }
}

// Renders the link for the license
function renderLicenseLink(license) {
  switch(license){
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';
    case 'GNU AGPLv3':
      return '(https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU GPLv3':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU LPGLv3':
      return '(https://www.gnu.org/licenses/lgpl-3.0)';
    case 'Mozilla Public License 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'Apache License 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0':
      return '(https://www.boost.org/LICENSE_1_0.txt)';
    case 'The Unlicense':
      return '(http://unlicense.org/)';
    default:
      return '';
  }
}

// Renders the link and badge for the license
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
}

// Generates the Markdown
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributions

${data.contribution}

## Tests

${data.tests}

## Questions

Any questions can be directed to:\\
Github: [${data.github}](https://github.com/${data.github})\\
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
