import React from "react";

import styles from "./example-styles.module.css";

import { ExampleForm } from "~/components/index";

const Auth: React.FC = () => {
	return (
		<div className={styles["example-selector"]}>
			<ExampleForm />
		</div>
	);
};

export { Auth };
