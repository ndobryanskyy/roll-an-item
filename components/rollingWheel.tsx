import * as React from "react";

import { IRollingWheelProps } from "../abstractions/IRollingWheelProps";
import { RollingWheelItem } from "./rollingWheelItem";

export class RollingWheelComponent extends React.Component<IRollingWheelProps> {
    render(): JSX.Element {
        return (
            <ul className="rollingWheel-container">
                { this.props.options.map((x, i) =>
                    <RollingWheelItem key={x}
                                      title={x}
                                      isSelected={i === this.props.selectedIndex}
                                      isWinner={i === this.props.winnerIndex}/>)
                }
            </ul>
        );
    }
}