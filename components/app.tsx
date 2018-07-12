import * as React from "react";
import { Roller } from "../components/roller";

export interface IApplicationProperties {
    name: string;
    version: string;
}

export class Application extends React.Component<IApplicationProperties> {
    private options: string[];

    constructor(props: Readonly<IApplicationProperties>) {
        super(props);

        this.options = ["Dubai", "Italy", "Spain", "Norway", "Berlin"];
    }

    render(): JSX.Element {
        return (
            <main>
                <h1>Application {this.props.name}</h1>
                <footer>Version: {this.props.version}</footer>

                <Roller items={this.options} />
            </main>
        );
    }
}