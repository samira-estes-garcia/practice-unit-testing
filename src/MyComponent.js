import React from 'react' 

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: true,
        }
    }

    toggleIsShwon = () => this.setState(({ isShown }) => ({ isShown: !isShown }));

    render() {
        const { isShown } = this.state;
        return (
            <div>
                <button onClick={this.toggleIsShwon}>Toggle</button>
                <div>Text goes here</div>
            </div>
        )
    }
}