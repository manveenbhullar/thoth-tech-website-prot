import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "OnTrack",
    url: "https://github.com/thoth-tech/doubtfire-web.git",
    description:
      "The OnTrack group is to focus on the maintenance and development of Doubtfire",
  },
  {
    text: "DreamBig",
    url: "https://github.com/thoth-tech/DreamBig-Project",
    description:
      "Develop your professional identity across this course - helping better prepare them at graduation to smoothly enter the IT profession.",
  },
  {
    text: "SplashKit",
    url: "https://github.com/thoth-tech/splashkit-core.git",
    description:
       "SplashKit is an open-source Software Development Kit (SDK) created with the purpose of reducing the overhead required for truly technical coding.",
  },
  {
    text: "Documentation and Infrastructure",
    url: "https://github.com/thoth-tech/documentation.git",
    description:
      "Find all the collated information regarding the Thoth Tech Products!",
  },
  {
    text: "Handbook",
    url: "https://github.com/thoth-tech/handbook.git",
    description:
      "Find the Handbook of the Thoth Tech Company!",
  },
  {
    text: "Documentation",
    url: "https://github.com/thoth-tech/documentation.git",
    description:
      "Click here for more Documentation",
  },
  {
    text: "Contributing",
    url: "https://github.com/thoth-tech/documentation/blob/main/CONTRIBUTING.md",
    description:
      "Help to improve the Thoth Tech documentation by sending pull requests to this repository",
  },
  
  {
    text: "Fearless Feedback",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/communication/fearless-feedback.md",
  },

  {
    text: "Communication",
    url: "https://github.com/thoth-tech/handbook/blob/21f022b7ba4581b8f17372445ebde5f60ad41f9d/docs/communication/index.md",
  },

  {
    text:"Mentoring Guide",
    url: "https://github.com/thoth-tech/handbook/blob/21f022b7ba4581b8f17372445ebde5f60ad41f9d/docs/communication/mentoring-guide.md",
  },

  {
    text:"Professional Communication",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/communication/professional-communication.md",
  },

  {
    text:"Company Charter",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/company/charter.md",
  },

  {
    text:"Getting Started",
    url: "https://github.com/thoth-tech/handbook/blob/a2f709af6bc851c124020409d3ec1f5a98a8cd5f/docs/company/getting-started.md",
  },

  {
    text:"Company Roles",
    url: "https://github.com/thoth-tech/handbook/blob/4e7fd5f4f963adbcbf8fca4fbd407e697c30abd2/docs/company/reports/t2-2022/company-structure-obj-report.md",
  },

  {
    text:"Data",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/data/index.md",
  },

  {
    text:"Data Strategy",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/data/data-strategy.md",
  },

  {
    text:"Project Metrics",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/data/project-metrics-template.md",
  },

  {
    text:"Epic FSVA-54",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/leadership/epic-example.md",
  },

  {
    text:"Epic Template",
    url: "https://github.com/thoth-tech/handbook/blob/b4d48de28e8b8a9e80b8f61c6529da1dd366ecb4/docs/leadership/epic-template.md",
  },

  {
    text:"Meeting Minutes Template",
    url: "https://github.com/thoth-tech/handbook/blob/53548ba22d8fa4645680548414bd34b6a233d7dd/docs/leadership/meeting-template.md",
  },

  {
    text:"Meetings",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/leadership/meetings.md",
  },

  {
    text:"Company Operations Guide",
    url: "https://github.com/thoth-tech/handbook/blob/42f103d02ebe9a562d184e2cf3cb22be0997d49c/docs/processes/company-operations-guide.md",
  },

  {
    text:"Offboarding Process",
    url: "https://github.com/thoth-tech/handbook/blob/6a757b522a87dc92dae849c39431b5917807bb80/docs/peopleops/offboarding/offboarding-process.md",
  },

  {
    text:"Recruiting",
    url: "https://github.com/thoth-tech/handbook/blob/75b2f0fc589cad837c7fe975ccb7b6b8311835c5/docs/peopleops/recruiting/index.md",
  },

  {
    text:"Recruitment Advertisement",
    url: "https://github.com/thoth-tech/handbook/blob/75b2f0fc589cad837c7fe975ccb7b6b8311835c5/docs/peopleops/recruiting/recruitment-ad.md",
  },

  {
    text:"Onboarding Process",
    url: "https://github.com/thoth-tech/handbook/blob/6a757b522a87dc92dae849c39431b5917807bb80/docs/peopleops/onboarding/onboarding-process.md",
  },
  
  {
    text:"Changing-git-fork-location",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/learning/training/changing-git-fork-location.md",
  },
  {
    text:"How to download and install Jenkins?",
    url: "https://github.com/thoth-tech/handbook/blob/e569376951d3c6cb5ea6c7223dd493983669913e/docs/learning/training/configuring-jenkins.md",
  },
  
  {
    text:"",
    url: "",
  },
  
  {
    text:"",
    url: "",
  },
  
  {
    text:"",
    url: "",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Check our Handbook", url: "https://github.com/thoth-tech/handbook.git" },
  {
    text: "Documentation",
    url: "https://github.com/thoth-tech/documentation.git",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://github.com/thoth-tech/documentation/blob/main/CONTRIBUTING.md",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Thoth Tech</b>
      </h1>
      
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
