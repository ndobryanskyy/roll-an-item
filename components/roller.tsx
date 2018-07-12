import * as React from "react";
import { IRollerProps } from "../abstractions/IRollerProps";
import { easeInOutQuad, randInt } from "../helpers/mathHelpers";
import { delay } from "../helpers/promiseHelpers";
import { IRollerState } from "../abstractions/IRollerState";
import { RollingWheelComponent } from "./rollingWheel";


export class Roller extends React.Component<IRollerProps, IRollerState> {
    constructor(props: Readonly<IRollerProps>) {
        super(props);

        this.state = {
            isRolling: false
        };
    }

    render(): JSX.Element {
        return (
        <div className="roller-container">
            <RollingWheelComponent
                options={this.props.items}
                selectedIndex={this.state.selectedIndex}
                winnerIndex={this.state.winnerIndex}/>

                <button
                    className="roller-button"
                    onClick={this.rollAsync}
                    disabled={this.state.isRolling}>
                    Roll
                </button>

        </div>);
    }

    rollAsync = async () => {
        this.setState(
            {
                isRolling: true,
                winnerIndex: undefined
            }
        );

        const { minRoundsCount = 4, varyingRoundsCount = 10, moveDelayMs = 150 } = this.props;

        const itemsCount: number = this.props.items.length;
        const blankRuns: number = itemsCount * (randInt(varyingRoundsCount) + minRoundsCount);
        const repeatCount: number = blankRuns + randInt(itemsCount);

        for(let repeat: number = 0; repeat < repeatCount; repeat++) {
            const easing: number = easeInOutQuad(repeat / repeatCount);
            await delay(easing * moveDelayMs);
            this.moveToNextIndex();
        }

        await delay(moveDelayMs);
        this.setState(prev => {
            return ({
                isRolling: false,
                winnerIndex: this.nextIndex(prev.selectedIndex),
                selectedIndex: undefined
            });
        });
    }

    moveToNextIndex(): void {
        this.setState(prev => {
            return {selectedIndex: this.nextIndex(prev.selectedIndex)};
        });
    }

    nextIndex(currentIndex?: number): number {
        if (currentIndex == null) {
            return 0;
        }

        let computed: number = currentIndex + 1;
        if (computed > this.props.items.length - 1) {
            computed = 0;
        }

        return computed;
    }
}