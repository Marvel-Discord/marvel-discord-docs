import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Everything useful to know",
    description: (
      <>
        The goal of these docs is to provide a comprehensive guide to everything
        in the Marvel Discord server.
      </>
    ),
  },
  {
    title: "Made for staff",
    description: (
      <>
        This documentation is geared towards information for managers and
        moderators of the server. The whole site is publicly-accessible, but it
        isn't made to be a public resource.
      </>
    ),
  },
  {
    title: "Please contribute!",
    description: (
      <>
        If there's information missing, incorrect, outdated, or could be more
        detailed: please contribute! Instructions on how to contribute can be
        found in the <a href="/docs/contributing">Contributing</a> section.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md padding-vert--lg">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
