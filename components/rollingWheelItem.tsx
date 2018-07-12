import * as React from "react";
import classNames from "classnames";
import { IRollingWheelItemProps } from "../abstractions/IRollingWheelItemPropsdd";


export class RollingWheelItem extends React.Component<IRollingWheelItemProps> {
    getClassNames(): string {
        return classNames("rollingWheel-item", {
            "rollingWheel-selected-item": this.props.isSelected,
            "rollingWheel-winner-item": this.props.isWinner
        });
    }

    render(): JSX.Element {
        return (<li className={this.getClassNames()}>
            {this.props.title}
        </li>);
    }
}