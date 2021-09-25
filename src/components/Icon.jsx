import React from "react";
import {compileClasses} from "../scripts/utilities";


const Icon = ({icon}) => {

	const iconClassList = compileClasses(["fas", icon]);

	return (
		<i className={iconClassList}></i>
	)
}

export default Icon;


